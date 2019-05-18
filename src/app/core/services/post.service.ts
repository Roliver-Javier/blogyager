import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Post } from '../../shared/model/post';
import { MediumModel } from '../../shared/model/medium/MediumModel';
import { PostType } from '../../shared/enums/post-type.enum';
import { reaction } from '../../shared/model/reaction';
import { environment } from '../../core/environments/environment';

const MEDIUM_ENDPOINT = environment.medium;

@Injectable()
export class PostService implements OnDestroy{
  

  private mediumPostsBS = new BehaviorSubject<boolean>(false);
  private postDetailBS = new BehaviorSubject('');
  private postBlogBS = new BehaviorSubject<any[]>([]);
  private currentAuthor : object;
  private reactionsBS = new BehaviorSubject<string>('');
  private reactionReference = this.afire.collection('reactions');

  constructor(private http: HttpClient, private afire: AngularFirestore) { }

  reaction$ = this.reactionsBS.pipe(
    switchMap(()=> this.reactionReference.doc(this.reactionsBS.value).get()),
    map(value => value)
  );
  
  

  mediumPosts$ = this.mediumPostsBS.pipe( 
    switchMap(() => this.http.get<MediumModel>(MEDIUM_ENDPOINT)),
    map((mediumObject) =>  {
      this.currentAuthor = mediumObject.feed;
      return mediumObject.items;
    } 
    ),
    map((posts) => posts.filter((post) => post.categories.length > 0)),
    map((posts) => posts.map((postItem) => {

      postItem.title = this.toText(postItem.title);
      postItem.author = this.toText(postItem.author);
      postItem.description = this.shortenText(this.toText(postItem.content), 0, 300);
      const guidSplited = postItem.guid.split('/');
      postItem.guid = guidSplited[guidSplited.length - 1];
      postItem.type = PostType.MEDIUM_POST;
      return postItem;
    })
    )
    
  );

  postBlog$ = this.mediumPosts$.pipe(
    map((postList) => {
      const newPostList = postList.map((postVendor) => {
        let post: Post = null;
        switch (postVendor.type) {
          case PostType.MEDIUM_POST:
            post = {
              author: postVendor.author,
              content: postVendor.content,
              id: postVendor.guid,
              published: postVendor.pubDate,
              title: postVendor.title,
              thumbnail: postVendor.thumbnail.startsWith("https://medium.com") ? null : postVendor.thumbnail,
              description: postVendor.description,
              categories: postVendor.categories,
              reactions:[],
              feed : this.currentAuthor
            };
            this.createPostToFirebase(post);
        }
        return post;
      });
      return newPostList;
    })
  );

  postDetail$ = this.postDetailBS.pipe(
    switchMap(() => this.postBlog$),
    map((posts) => {
      const arr = posts.filter(post => {
        return post.id === this.postDetailBS.value;
      });
      return arr[0];
    })
  );


  postCache$ : Observable<Post[]>;
  
  public getMediumPostList(){
      this.mediumPostsBS.next(true);
  }

  public getCatcodePost() {
    if(!this.postCache$){
      const timer$ = timer(0, 30000);
      this.postCache$ = timer$.pipe(
        tap( _=>  this.getMediumPostList()),
        switchMap( _=> this.postBlog$),
        shareReplay(1)
      );
    }
   return this.postCache$;
  }

  public getPostDetail(id) {
    this.getCatcodePost();
    this.postDetailBS.next(id);
  }

  private toText(node) {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
  }

  private shortenText(text, startingPoint, maxLength) {
    const newText = text.length > maxLength ? text.slice(startingPoint, maxLength) : text
    return newText + " [...]";
  }

  private createPostToFirebase(post : Post){
    this.afire.doc(`/posts/${post.id}`).set({...post}, {merge : true});

    const reaction : reaction = {
       like: 0,
       love: 0,
       sad : 0,
       wow : 0
    };
    this.reactionsBS.next(post.id);
    this.reaction$.subscribe((docSnapshot)=>{
      if(!docSnapshot.exists){
        this.reactionReference.doc(post.id).set({...reaction});
      }
    })
  } 

  ngOnDestroy(): void {
    this.reactionsBS.complete();
    this.postDetailBS.complete();
    this.mediumPostsBS.complete();
  }

}




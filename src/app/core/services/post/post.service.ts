import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeAll } from 'rxjs/operators';
import { BehaviorSubject, zip, of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Post } from 'src/app/shared/model/post';
import { MediumModel } from 'src/app/shared/model/medium/MediumModel';
import { PostType } from 'src/app/shared/enums/post-type.enum';
import { reaction } from 'src/app/shared/model/reaction';
import { path } from '../../environments/environment';

@Injectable()
export class PostService {

  private mediumPostsBS = new BehaviorSubject<boolean>(false);
  private postDetailBS = new BehaviorSubject('');
  private postBlogBS = new BehaviorSubject<any[]>([]);
  private currentAuthor : object;

  constructor(private http: HttpClient, private afire: AngularFirestore) { }
  
  postBlog$ = this.postBlogBS.pipe(
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
              thumbnail: this.isImageEmpty(postVendor.thumbnail,"https://medium.com") ? null : postVendor.thumbnail,
              description: postVendor.description,
              categories: postVendor.categories,
              reactions:[],
              feed : this.currentAuthor
            };
            console.log(post);
            this.createPostToFirebase(post);
        }
        return post;
      });
      return newPostList;
    })
  );

  mediumPosts$ = this.mediumPostsBS.pipe( 
    switchMap(() => this.http.get<MediumModel>(path.baseUrl.medium)),
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
      //postItem.content = this.toText(postItem.content);
      const guidSplited = postItem.guid.split('/');
      postItem.guid = guidSplited[guidSplited.length - 1];
      postItem.type = PostType.MEDIUM_POST;
      return postItem;
    })
    )
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

  public getCatcodePost() {
    zip(this.mediumPosts$)
      .pipe(
        mergeAll()
      ).subscribe(
        (data) => {
          this.postBlogBS.next(data);
        }
      );
  }

  public getPostDetail(id) {
    this.mediumPostsBS.next(true);
    this.getCatcodePost();
    this.postDetailBS.next(id);
  }

  private toText(node) {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
  }

  private isImageEmpty(currentTxt, compareTxt){
      console.log(currentTxt);
      return(currentTxt.startsWith(compareTxt));
  }

  private toDOM(node){
    const domParser = new DOMParser();
    return domParser.parseFromString(node,'text/html');
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
    const reactionRef = this.afire.collection('reactions').doc(post.id);
    reactionRef.get().subscribe((docSnapshot)=>{
      if(!docSnapshot.exists){
          reactionRef.set({...reaction});
      }
    })
  } 

  

}




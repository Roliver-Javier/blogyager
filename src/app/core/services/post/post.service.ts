import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import { MediumPost } from 'src/app/shared/model/medium/mediumPost';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { 
  AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { Post } from 'src/app/shared/model/post';


@Injectable()
export class PostService {

  private mediumPostsBS = new BehaviorSubject<MediumPost[]>([]);
  private postDetailBS = new BehaviorSubject('');
  private postBlogBS = new BehaviorSubject<MediumPost>(null);

  constructor(private http: HttpClient, private afire : AngularFirestore) {}
  
  postBlog$ = this.postBlogBS.pipe(
    map( value => value),
    tap((postVendor)=>{
        const post : Post = {
          author : postVendor.author,
          content : postVendor.content,
          id : postVendor.guid,
          published : postVendor.pubDate,
          title : postVendor.title,
          image : postVendor.thumbnail
        }
        return post;
    })
  );
  
  mediumPosts$ = this.mediumPostsBS.pipe(
    switchMap( ()=>this.http.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roliver_javier?bypass_cache='+new Date().getTime())),
    map((mediumObject)=> mediumObject.items),
    map((posts)=> posts.map((postItem)=>{

        postItem.title = this.toText(postItem.title);
        postItem.author = this.toText(postItem.author);
        postItem.description = this.shortenText(this.toText(postItem.content), 0, 200);
        postItem.content = this.toText(postItem.content);
        const guidSplited= postItem.guid.split('/');
        postItem.guid = guidSplited[guidSplited.length-1];
        console.log(postItem);
        return postItem;
      })
     ),
    map((posts)=> posts.filter((post)=>post.categories.length > 0))
  )



  postDetail$ = this.postDetailBS.pipe(
    switchMap( () => this.mediumPosts$),
    map( (posts)=>{
      const arr = posts.filter( post =>{
        
        return post.guid === this.postDetailBS.value;
      });
      return arr[0];
    })    
  );

  

  public getPostDetail(id){
    this.postDetailBS.next(id);
  }

  private toText(node) {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
  }
  
  private shortenText(text,startingPoint ,maxLength) {
    const newText = text.length > maxLength ? text.slice(startingPoint, maxLength):text
    return newText + "...";

  }

}




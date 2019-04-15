import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { MediumModel } from 'src/app/shared/model/medium/MediumModel';
import {map, switchMap, shareReplay} from 'rxjs/operators';
import { MediumPost } from 'src/app/shared/model/medium/mediumPost';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PostService {

  // postCollection: AngularFirestoreCollection<Post>;
  // postDoc : AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore,
              private http: HttpClient) {
    console.log('original PostService initializing...');
    // this.postCollection = this.afs.collection('posts', ref =>
    //   ref.orderBy('published', 'desc'))
  }


  private mediumPostsBS = new BehaviorSubject<MediumPost[]>([]);
  private postDetailBS = new BehaviorSubject('');

  mediumPosts$ = this.mediumPostsBS.pipe(
    switchMap( ()=>this.http.get<MediumModel>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roliver_javier')),
    map((mediumObject)=> mediumObject.items),
    map((posts)=>{
      const arr = posts.map((postItem)=>{
        const post = postItem;
        post.title = this.toText(post.title);
        post.author = this.toText(post.author);
        post.description = this.shortenText(this.toText(post.content), 0, 200);
        post.content = this.toText(post.content);
        return post;
      });
      return arr;
    }),
    shareReplay()    
  );

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

  // getPosts() : Rx.Observable<any>{ 
  //   return new Rx.Observable( subscriber =>{
  //     this.postCollection.snapshotChanges()
  //     .subscribe(actions => {
  //        const data = actions.map(a => {
  //           const data = a.payload.doc.data() as Post
  //           const id = a.payload.doc.id
  //           return { id, ...data };
  //         });
  //       console.log(data);
  //       subscriber.next(data);
  //     });
  //   });
  // }

  // getPostData(id : string){
  //   this.postDoc = this.afs.doc<Post>(`posts/${id}`)
  //   return this.postDoc.valueChanges();
  // }

  // public create( data : Post){
  //   this.postCollection.add(data)
  // }

  // getPost(id : string){
  //   return this.afs.doc<Post>(`posts/${id}`);
  // }

  // delete( id: string ){
  //   return this.getPost(id).delete();
  // }

  // update(id : string, formData ){
  //   return this.getPost(id).update(formData);
  // }

}




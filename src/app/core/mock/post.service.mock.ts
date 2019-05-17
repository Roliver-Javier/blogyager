import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MediumModel } from '@app/shared/model/medium/MediumModel';
import { MediumPost } from '@app/shared/model/medium/mediumPost';
import {map, switchMap, shareReplay} from 'rxjs/operators';
import { PostType } from '@app/shared/enums/post-type.enum';

@Injectable()
export class PostServiceMock{

  private mediumPostsBS = new BehaviorSubject<MediumPost[]>([]);
  private postDetailBS = new BehaviorSubject('');

  constructor() {
    console.log('mock post service initializing....');
  }

  private httpGetSimulation(): Observable<MediumModel> {
    return new Observable((subscriber) => {
      const mediumModel: MediumModel ={
          feed: { author: '', description: '', image: '', link: '', title: '' , url:'' },
          items:[
            {
              author: "<p>Roliver Javier Rodriguez</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasd1123ggfqQhf",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            },
            {
              author: "<p>Antonia Montero</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasd1123gg123",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            },
            {
              author: "<p>Julio Sosa</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasdfffff",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            },
            {
              author: "<p>Ramon Caceres</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasd1123ggggg",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            },
            {
              author: "<p>Angela Ramirez</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasd112bbbbf",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            },
            {
              author: "<p>Miguel Santos</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasd1hkhkk",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            },
            {
              author: "<p>Rosa Mejia</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasd1123g2342gv",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            },
            {
              author: "<p>Tulio smith</p>",
              content: "<p> I've been a backend web developer for several years now. Swimming in the waters of databases, object oriented programming, and beautiful frameworks like Laravel to create some fairly robust web software for the company I work for, DieselCore.  </p>",
              enclosure: {},
              categories: [],
              description: "",
              guid: "asasd1123asdasd55",
              link: "",
              pubDate: "29/02/2019",
              thumbnail: "",
              title: "<h1><p>Learning Javascript, barcode scanning and wiggling into private grocery store APIs</p></h1>",
              type : PostType.MEDIUM_POST
            }],
          status:'ok'
        };
      subscriber.next(mediumModel);
    });
  }

  mediumPosts$ = this.mediumPostsBS.pipe(
    switchMap( ()=>this.httpGetSimulation()),
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

  getPostDetail(id){
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




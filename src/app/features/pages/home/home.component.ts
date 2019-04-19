import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']
})

export class HomeComponent implements OnInit{ 
    constructor(private post : PostService){}
   
    matVersion: string = '5.1.0';
    breakpoint: number;
 
    ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    }
  
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    }
    

    vm$ = combineLatest(
        this.post.mediumPosts$
    ).pipe(
        map( ([mediumPosts])=>({
            mediumPosts
        }))
    );
    
}
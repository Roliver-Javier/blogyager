import { Component } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']
})

export class HomeComponent{
    constructor(private post : PostService){

    }
    ngOnInit(){
    }

    vm$ = combineLatest(
        this.post.mediumPosts$
    ).pipe(
        map( ([mediumPosts])=>({
            mediumPosts
        }))
    );
    
}
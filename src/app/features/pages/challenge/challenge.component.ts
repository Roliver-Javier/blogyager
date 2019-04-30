import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post/post.service';

@Component({
    selector:'challenger-page',
    templateUrl:'./challenge.component.html',
    styleUrls:['./challenge.component.scss']
})
export class ChallengePageComponent{
    
    constructor(private post : PostService){}
    
}

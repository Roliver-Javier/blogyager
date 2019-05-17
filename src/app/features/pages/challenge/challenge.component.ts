import { Component } from '@angular/core';
import { ChallengeService } from '../../../core/services/challenge.service';
import { PostService } from '../../../core/services/post.service';

@Component({
    selector:'challenger-page',
    templateUrl:'./challenge.component.html',
    styleUrls:['./challenge.component.scss']
})
export class ChallengePageComponent{
    
    constructor(private post : PostService,
                private challenge : ChallengeService){}

    
    
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { switchMap, map } from 'rxjs/operators';
import { PostService } from './post.service';

@Injectable()
export class ChallengeService {

    private challengesBS = new BehaviorSubject<boolean>(false);
    private challengePostBS = new BehaviorSubject<string>('');

    constructor(private post: PostService, private afire: AngularFirestore) { }

    challenges$ = this.challengesBS.pipe(
        switchMap(()=>this.post.postBlog$),
        map((postArr)=> postArr.filter((post)=> post.categories.includes('Challange')))
    );

    challengePost$ = this.challengePostBS.pipe(
        switchMap(()=>this.challenges$),
        map((postArr)=> {
            const postChallenge = postArr.filter((post)=> post.id === this.challengePostBS.value)
            return postChallenge[0];
        })
    );

    public getChallengesList(){
        this.post.getCatcodePost();
        this.challengesBS.next(true);
    }

    public getChallengePost(id : string){
        this.post.getCatcodePost();
        this.challengePostBS.next(id);
    }

}




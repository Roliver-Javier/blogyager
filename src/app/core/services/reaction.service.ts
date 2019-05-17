import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()

export class ReactionService{

    userId : string;
    emojiList = ['like', 'love', 'wow', 'sad'];
    
    
    constructor(private afAuth : AngularFirestore){}

    getReactions(postId : string): Observable<any>{
        return this.afAuth.doc(`/reactions/${postId}`).valueChanges();
    }

    updateReaction(postId, newData){
        this.afAuth.doc(`/reactions/${postId}`).set({...newData}, {merge : true})
    }

    removeReaction(itemId){
        // this.db.object(`reactions/${itemId}/${this.userId}`)
    }

}

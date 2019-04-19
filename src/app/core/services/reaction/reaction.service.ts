import { Injectable } from '@angular/core';
import { 
    AngularFirestore, 
    AngularFirestoreCollection, 
    AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { map, groupBy, tap } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable()

export class ReactionService{

    // userId$ : Observable<string>;
    // db$ : Observable<User | null>;
    userId : string;


    emojiList = ['like', 'love', 'wow', 'sad'];
    
    constructor(private afAuth : AngularFirestore){}

    getReactions(itemId : string): any{
        // return this.db.object(`reactions/${itemId}`);
        console.log(itemId);
        return this.afAuth.collection('reactions').doc( itemId );
    }

    updateReaction(itemId, reaction=0){
        // const data = { ['this.userId'] : reaction };
        
        // this.db.object(`reactions/${itemId}`).update(data);
    }

    removeReaction(itemId){
        // this.db.object(`reactions/${itemId}/${this.userId}`)
    }

    countReactions(reactions : Array<any>){
       const ob$ = of(reactions);
       ob$.pipe( map(val => val));
       ob$.subscribe((data)=>console.log(data));
       return ob$;
    }
}

import { Injectable,  } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()

export class RecommendationService{
    
    constructor(private afAuth : AngularFirestore){}

    recommendations$ = this.afAuth.collection(`/recomendations`).valueChanges();
}
   
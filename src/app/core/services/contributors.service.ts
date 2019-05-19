import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()

export class ContributorsService{
    constructor(private afAuth : AngularFirestore){}

    contributors$ = this.afAuth.collection(`/contributors`).valueChanges();
}
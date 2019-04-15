import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceMock {
  authState: any = null;
  afAuth : any = null;

  constructor() {
    console.log('auth mock entry');
    this.authState={
        uid : 'PI7NHWjvpyjAMmfUYUCd',
        displayName: 'roliver'
    }
    this.afAuth = {
      authState: this.authState
    }
  }

  get authenticated() : boolean {
    return this.authState !== null;
  }

  get currentUserId() : string {
    return this.authenticated ? this.authState.uid : null;
  }

  login() {
  }

  logout() {
    
  }
}

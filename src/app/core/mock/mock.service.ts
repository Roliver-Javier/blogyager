import { Injectable } from '@angular/core';
import { AuthServiceMock } from './auth.service.mock';
import { AuthService } from '../services/auth.service';
import { PostServiceMock } from './post.service.mock';
import { PostService } from '../services/post.service';

@Injectable()
export class MockService {

  constructor() { }

  static initializeMockProviders(){
    console.log('mock initializing...');
    return [
      {
        useClass:AuthServiceMock,
        provide: AuthService, 
      },
      {
        useClass: PostServiceMock,
        provide : PostService
      }
    ]
  }
}

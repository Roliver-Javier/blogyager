import { Injectable } from '@angular/core';
import { AuthServiceMock } from '@app/core/mock/auth.service.mock';
import { AuthService } from '@app/core/services/auth.service';
import { PostServiceMock } from '@app/core/mock/post.service.mock';
import { PostService } from '@app/core/services/post.service';

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

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PostService } from '../../../../core/services/post/post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  title : string;
  image : string = null;
  content : string;

  constructor(private auth : AuthService, private post : PostService) { }

  ngOnInit() {
  }
  
  createPost(){
  }

}

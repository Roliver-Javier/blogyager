import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  
  postDetail$ = this.post.postDetail$;

  constructor( private route : ActivatedRoute, private post : PostService) { }

  ngOnInit() {
    this.getPostDetail();
  }

  getPostDetail(){
    const id = this.route.snapshot.paramMap.get('id');
    this.post.getPostDetail(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../../core/services/post/post.service';
import { Post } from 'src/app/shared/model/post';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  
  
  constructor( private route : ActivatedRoute, private post : PostService) { }

  postDetail$ = this.post.postDetail$;

  ngOnInit() {
    this.getPostDetail();
  }

  getPostDetail(){
    const id = this.route.snapshot.paramMap.get('id');
    this.post.getPostDetail(id);
  }

}

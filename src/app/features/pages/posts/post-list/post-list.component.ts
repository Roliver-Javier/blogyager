import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent{

  @Input() vm : {};

  ngOnInit(){
  }

  constructor(private post : PostService) { }


}

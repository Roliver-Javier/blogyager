import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostService } from '../../shared/services/post.service';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { ChallengesComponent } from './challenges/challenges.component';

const components = [
    HomeComponent,
    PostDetailComponent,
    PostDashboardComponent,
    PostListComponent,
    ChallengesComponent
]

@NgModule({
    imports:[ PagesRoutingModule,   SharedModule],
    exports:[components],
    declarations:[components],
    providers:[PostService]
})

export class PagesModule {}
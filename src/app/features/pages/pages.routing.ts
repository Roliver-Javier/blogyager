import { ModuleWithProviders } from "@angular/compiler/src/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { ChallengePageComponent } from './challenge/challenge.component';


const routes : Routes = [
    { path : 'home', component : HomeComponent },
    { path : 'dashboard', component : PostDashboardComponent },
    { path : 'post/:id', component : PostDetailComponent },
    { path : 'challenges/:id', component : ChallengePageComponent }
];

export const PagesRoutingModule : ModuleWithProviders = RouterModule.forChild(routes);
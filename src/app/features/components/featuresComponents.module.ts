import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ReactionComponent } from './reaction/reaction.component';
import { SharedModule } from '../../shared/shared.module';
import { MiniProfileComponent } from './mini-profile/mini-profile.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SocialsComponent } from './socials/socials.component';
import { ContributorsService } from '@app/core/services/contributors.service';

const importsAndExposts = [
    CategoriesComponent,
    ChallengesComponent,
    ReactionComponent,
    MiniProfileComponent,
    RecommendationComponent,
    SocialsComponent
];

@NgModule({
    imports: [ SharedModule ],
    declarations : [...importsAndExposts],
    exports : [...importsAndExposts],
    providers:[
        ContributorsService
    ]
})

export class FeaturesComponentsModule {}
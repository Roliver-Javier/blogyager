import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ReactionComponent } from './reaction/reaction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MiniProfileComponent } from './mini-profile/mini-profile.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SocialsComponent } from './socials/socials.component';

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
    exports : [...importsAndExposts]
})

export class FeaturesComponentsModule {}
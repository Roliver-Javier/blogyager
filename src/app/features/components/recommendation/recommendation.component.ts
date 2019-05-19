import { Component } from '@angular/core';
import { RecommendationService } from '@app/core/services/recommendation.service';

export interface Recommendation {
    title : string;
    author : string;
    link : string;
  }
@Component({
    selector:'app-recommendation',
    templateUrl:'./recommendation.component.html',
    styleUrls:['./recommendation.component.scss']
})

export class RecommendationComponent{
    constructor(public recommendation : RecommendationService){
        
    }

    recommendations$ = this.recommendation.recommendations$;
}
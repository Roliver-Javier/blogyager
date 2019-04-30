import { Component } from '@angular/core';

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
    constructor(){
        
    }

    recommendations: Recommendation[] = [
        {
          title: 'Quickstart Guide: Elastic Stack for Devs Quickstart Guide: Elastic Stack for Devs Devs Quickstart Guide: Elastic Stack for Devs',
          author: 'Joe Zack',
          link : 'https://dev.to/_codingblocks/quickstart-guide-elastic-stack-for-devs-580e'
        },
        {
          title: 'A crash course to the most important Docker concepts and their commands',
          author: 'Chris Noring',
          link: 'https://dev.to/david_j_eddy/project-release-docker-aws-selenium-terraform-get-it-up-and-running-1o53'
        },
        {
            title: 'Project Release: Docker + AWS + Selenium + Terraform. Get it up and running.',
            author: 'David J Eddy',
            link : 'https://dev.to/david_j_eddy/project-release-docker-aws-selenium-terraform-get-it-up-and-running-1o53'
        }
      ];
}
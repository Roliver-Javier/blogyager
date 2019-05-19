import { Component } from '@angular/core';
import { ContributorsService } from '@app/core/services/contributors.service';

interface Social {
    link: string;
    icon: string;
    alias: string;
}
export interface Contributors {
    name: string;
    image: string;
    defaultAlias: string,
    socials: Social[];
}

@Component({
    selector: 'app-socials',
    templateUrl: './socials.component.html',
    styleUrls: ['./socials.component.scss']
})

export class SocialsComponent {
    constructor(public contributorsServ : ContributorsService) {}

    // contributors$ = this.contributors.contributors$;

    contributors: Contributors[] =
        [
            {
                image: 'https://avatars0.githubusercontent.com/u/6831595?s=460&v=4',
                name: 'Roliver Javier',
                defaultAlias:'@RoliverJ',
                socials: [
                    {
                        icon: 'ico-github',
                        link: 'https://github.com/Roliver-Javier',
                        alias: 'Roliver-Javier'
                    },
                    {
                        icon: 'ico-tweet',
                        link: 'https://twitter.com/RoliverJ',
                        alias: '@RoliverJ'
                    },
                    {
                        icon: 'ico-medium',
                        link:'https://medium.com/@roliver_javier',
                        alias:'@roliver_javier'
                    }
                ]
            },
            {
                image: 'https://avatars2.githubusercontent.com/u/44442099?s=400&v=4',
                name: 'Jose Rosario',
                defaultAlias:'@jprrpro ',
                socials: [
                    {
                        icon : 'ico-github',
                        link: 'https://github.com/jprrpro',
                        alias: 'jprrpro'
                    },
                    {
                        icon : 'ico-tweet',
                        link: 'https://twitter.com/jprrpro',
                        alias: '@jprrpro '
                    }
                ]
            },
            {
                image: 'https://avatars2.githubusercontent.com/u/4911690?s=400&v=4',
                name: 'Raymond Coplin',
                defaultAlias:'@RaymondCoplin',
                socials: [
                    {
                        icon: 'ico-github',
                        link: 'https://github.com/RaymondCoplin',
                        alias: 'RaymondCoplin'
                    },
                    {
                        icon: 'ico-tweet',
                        link: 'https://twitter.com/RaymondCoplin',
                        alias: '@RaymondCoplin'
                    }
                ]
            }
        ];
}
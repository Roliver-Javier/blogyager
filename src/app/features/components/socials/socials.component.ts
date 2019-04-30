import { Component } from '@angular/core';

interface Social {
    link: string;
    icon: string;
    alias: string;
}
export interface Contributors {
    name: string;
    image: string;
    socials: Social[];
}

@Component({
    selector: 'app-socials',
    templateUrl: './socials.component.html',
    styleUrls: ['./socials.component.scss']
})

export class SocialsComponent {
    constructor() {

    }
    contributors: Contributors[] =
        [
            {
                image: 'https://pbs.twimg.com/profile_images/1114653707084419073/Vwbu7_ZK_400x400.png',
                name: 'Roliver Javier',
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
                    }
                ]
            },
            {
                image: 'https://avatars2.githubusercontent.com/u/44442099?s=400&v=4',
                name: 'Jose Rosario',
                socials: [
                    {
                        icon : 'ico-github',
                        link: 'https://github.com/jprrpro',
                        alias: 'jprrpro'
                    },
                    {
                        icon : 'ico-tweet',
                        link: 'https://twitter.com/jprrpro',
                        alias: '@@jprrpro '
                    }
                ]
            },
            {
                image: 'https://avatars2.githubusercontent.com/u/4911690?s=400&v=4',
                name: 'Raymond Coplin',
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
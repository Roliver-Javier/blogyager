import { Component } from '@angular/core';

@Component({
    selector:'like-button',
    template: `<button class="__card-btn" mat-button>LIKE</button>`,
    styles: [`
        .__card-btn{
            background:none;
            border:1px solid #414754;
            border-bottom: 5px solid #414754;
            border-right: 5px solid #414754;
        }
    `]
})

export class LikeButtonComponent{
    constructor(){

    }
}
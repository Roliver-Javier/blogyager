import { Component, Input } from '@angular/core';

@Component({
    selector:'post-avatar',
    template:`
    <div class="post-avatar__container">
    <span>From: </span>
    <div class="post-avatar__row">
        <img width="30" height="30" alt="Angular Logo" src="assets/img/medium.png">
        <p class="post-avatar__title">{{title}}</p>
    </div>
    `,
    styles:[`

        .post-avatar__container{
            text-align:center;
        }
        .post-avatar__row{
            display:flex;
            flex-direction: column;
            align-items:center;
            padding-top: 5px;
        }
        p.post-avatar__title{
            padding-left:5px;
            padding-top: 5px;
        }
    `]
})

export class PostAvatarComponent{ 
    @Input() title : string;

    constructor(){

    }
}
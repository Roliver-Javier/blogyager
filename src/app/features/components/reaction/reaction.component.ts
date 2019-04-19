import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ReactionService } from 'src/app/core/services/reaction/reaction.service';

@Component({
    selector:'reaction',
    templateUrl:'./reaction.component.html',
    styleUrls:['./reaction.component.scss']
})

export class ReactionComponent implements OnInit, OnDestroy{
    
    @Input() itemId : string;

    showEmojis = false;
    emojiList : string [];
    reactionCount : any;
    userReaction : any;
    subscription : any;

    constructor(private reactionSvc : ReactionService){
        
    }

    ngOnInit(){
        this.emojiList = this.reactionSvc.emojiList;

        this.subscription = this.reactionSvc.getReactions(this.itemId)
        .subscribe(( reactions )=>{
            this.reactionCount = this.reactionSvc.countReactions(reactions);
            // this.userReaction = this.reactionSvc.updateReaction(reactions);
            
        });
    }

    react( val ){
        if (this.userReaction === val){
            this.reactionSvc.removeReaction(this.itemId);
        }else{
           this.reactionSvc.updateReaction(this.itemId, val);
        }
    }

    toggleShow(){
        this.showEmojis = !this.showEmojis;
    }

    emojiPath(emoji){
        return `assets/reactions/${emoji}.svg`;
    }

    hasReactions(index){
        return true;
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
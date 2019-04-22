import { Component, OnInit, OnDestroy, Input, ViewChild, TemplateRef } from '@angular/core';
import { ReactionService } from 'src/app/core/services/reaction/reaction.service';

@Component({
    selector:'reaction',
    templateUrl:'./reaction.component.html',
    styleUrls:['./reaction.component.scss']
})

export class ReactionComponent implements OnInit{
    
    @Input() postId : string;
    showEmojis = false;
    emojiList : string [];
    userReaction : any;
    subscription$ : any;
    isReactionSelected : boolean = false;
    
    constructor(private reactionSvc : ReactionService){
        
    }

    templateToShow;

    ngOnInit(){
        this.emojiList = this.reactionSvc.emojiList;
        this.subscription$ = this.reactionSvc.getReactions(this.postId);
    }

    react(reactions, val ){
        const selectedReaction = this.emojiList[val];
        reactions[selectedReaction]++;
        this.reactionSvc.updateReaction(this.postId, reactions);
        this.isReactionSelected = this.hasReactions(reactions,selectedReaction);
        console.log(this.isReactionSelected);
    }

    toggleShow(){
        this.showEmojis = !this.showEmojis;
    }

    emojiPath(emoji){
        return `assets/reactions/${emoji}.svg`;
    }

    hasNoReactions(reactions){
        return Object.values(reactions).every(x=> (x ===0));
    }
    hasReactions(reactions, emoji?){
        return reactions[ emoji ] > 0;
    }
}
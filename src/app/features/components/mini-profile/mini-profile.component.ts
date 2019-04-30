import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'mini-profile',
    templateUrl:'./mini-profile.component.html',
    styleUrls:[ './mini-profile.component.scss']   
})

export class MiniProfileComponent implements OnInit{

    @Input() author : string; 
    @Input() feed : object;
    
    constructor(){
        
    }

    ngOnInit(){
    }
}
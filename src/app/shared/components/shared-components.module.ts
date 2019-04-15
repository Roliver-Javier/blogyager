import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { LikeButtonComponent } from './like-button/like-button.component';
import { ShareButtonComponent } from './share-button/share-button.component';


const importsAndExports = [
    HeaderComponent, 
    CardComponent,
    NavbarComponent,
    LikeButtonComponent,
    ShareButtonComponent
];

@NgModule({
    imports:[MaterialModule],
    exports: [...importsAndExports],
    declarations:[...importsAndExports]
})

export class SharedComponentsModule{}
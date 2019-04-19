import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { PostAvatarComponent } from './post-avatar/post-avatar.component';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from '../../features/pages/categories/categories.component';


const importsAndExports = [
    HeaderComponent, 
    FooterComponent,
    CardComponent,
    NavbarComponent,
    LikeButtonComponent,
    ShareButtonComponent,
    PostAvatarComponent,
    CategoriesComponent
];

@NgModule({
    imports:[MaterialModule],
    exports: [...importsAndExports],
    declarations:[...importsAndExports]
})

export class SharedComponentsModule{}
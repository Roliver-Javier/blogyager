import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { PostService } from '../shared/services/post.service';

const importsAndExports = [
  PagesModule,
  CommonModule
];

@NgModule({
  imports: [...importsAndExports],
  exports:[...importsAndExports]
})
export class FeaturesModule { }

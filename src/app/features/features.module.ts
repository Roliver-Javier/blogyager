import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { FeaturesComponentsModule } from './components/featuresComponents.module';

const importsAndExports = [
  PagesModule,
  FeaturesComponentsModule,
  CommonModule
];

@NgModule({
  imports: [...importsAndExports],
  exports:[...importsAndExports]
})
export class FeaturesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatListModule } from '@angular/material';

const importsAndExports = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatCardModule,
  MatCarouselModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [ ...importsAndExports],
  exports: [ ...importsAndExports ]
})
export class MaterialModule { }

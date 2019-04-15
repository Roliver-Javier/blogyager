import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from './components/shared-components.module';

const importsAndExports = [
  CommonModule,
  MaterialModule,
  RouterModule,
  FormsModule,
  SharedComponentsModule
];
@NgModule({
  declarations: [],
  imports: [...importsAndExports],
  exports:[ ...importsAndExports]
})
export class SharedModule { }

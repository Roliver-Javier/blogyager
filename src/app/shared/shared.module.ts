import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from './components/shared-components.module';
import { FlexLayoutModule  } from '@angular/flex-layout';
const importsAndExports = [
  CommonModule,
  MaterialModule,
  RouterModule,
  FormsModule,
  SharedComponentsModule,
  FlexLayoutModule
];
@NgModule({
  declarations: [],
  imports: [...importsAndExports],
  exports:[ ...importsAndExports]
})
export class SharedModule { }

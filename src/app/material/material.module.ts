import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

const materialComponents = [MatButtonModule];
@NgModule({
  imports: [
    materialComponents,
  ],
  exports: [
    materialComponents,
    MatToolbarModule,
  ]
})
export class MaterialModule { }

import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatGridListModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

const materialComponents = [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatSidenavModule , MatExpansionModule, MatGridListModule, MatSelectModule, MatTableModule,
MatPaginatorModule];

@NgModule({
  imports: [
    materialComponents,
  ],
  exports: [
    materialComponents,
  ]
})
export class MaterialModule {}

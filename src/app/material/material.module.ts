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
  MatPaginatorModule, MatSortModule, MatTabsModule,
  MatDatepickerModule, MatNativeDateModule,
  MatDialogModule, MatTreeModule
} from '@angular/material';

const materialComponents = [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatSidenavModule , MatExpansionModule, MatGridListModule, MatSelectModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatTreeModule];

@NgModule({
  imports: [
    materialComponents,
  ],
  exports: [
    materialComponents,
  ]
})
export class MaterialModule {}

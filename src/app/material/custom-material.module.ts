import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class CustomMaterialModule { }

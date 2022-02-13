import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Imports all of the Angular material modules used in the project.
@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }

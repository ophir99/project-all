import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}

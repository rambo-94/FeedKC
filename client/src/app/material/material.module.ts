import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule}  from "@angular/material/icon";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatIconModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatToolbarModule,MatDatepickerModule,MatNativeDateModule
  ]
})
export class MaterialModule { }

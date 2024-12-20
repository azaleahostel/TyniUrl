import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class DashboardModule { }

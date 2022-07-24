import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const ModuleAndComponents = []

@NgModule({
  declarations: ModuleAndComponents,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: ModuleAndComponents
})
export class SharedModule { }

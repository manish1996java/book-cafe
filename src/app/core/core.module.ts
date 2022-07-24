import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const ModuleAndComponents = []

@NgModule({
  declarations: ModuleAndComponents,
  imports: [
    CommonModule
  ],
  exports: ModuleAndComponents
})
export class CoreModule { }

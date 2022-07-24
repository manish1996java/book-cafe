import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { MainHeaderComponent } from './component/main-header/main-header.component';
import { AvatarModule } from 'ngx-avatar';


const ModuleAndComponents = [
  MainHeaderComponent,
]

@NgModule({
  declarations: ModuleAndComponents,
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AvatarModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    AvatarModule,
    ...ModuleAndComponents,
  ]
})
export class SharedModule { }

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


const materials = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatRippleModule,
  MatGridListModule,
  MatSidenavModule,
  MatDividerModule,
  MatToolbarModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSlideToggleModule,
  MatListModule,
  MatExpansionModule,
  MatMenuModule,
  MatSelectModule,
  MatDialogModule,
  DragDropModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatChipsModule,
  MatPseudoCheckboxModule,
  MatTabsModule,
  MatTableModule,
  CdkAccordionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatChipsModule,
  MatCheckboxModule,
  MatAutocompleteModule
  // MatMomentDateModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { FilePickerDirective } from './directives/file-picker/file-picker.directive';
import { FilePickerComponent } from './components/file-picker/file-picker/file-picker.component';

const MODULES = [
  CommonModule,
  FormsModule,
  ClarityModule
];

const COMPONENTS = [
  FilePickerDirective,
  FilePickerComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }

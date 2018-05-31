import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxTinymceComponent} from './tinymce.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxTinymceComponent],
  exports: [NgxTinymceComponent]
})

export class NgxTinymceEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxTinymceEditorModule,
      providers: [],
    };
  }
}

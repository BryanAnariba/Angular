import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CustomLabelDirective } from './directives/custom-label.directive';



@NgModule({
  declarations: [
    NotFoundPageComponent,
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomLabelDirective
  ]
})
export class SharedModule { }

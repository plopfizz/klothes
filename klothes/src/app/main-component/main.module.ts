import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component.component';
import { HeaderComponentModule } from '../header/components/header-component/header-component.module';



@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    HeaderComponentModule
  ],
  exports:[MainComponentComponent]
})
export class MainModule { }

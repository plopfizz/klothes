import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainModule } from './main-component/main.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MainModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }

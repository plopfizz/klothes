import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainModule } from './main-component/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, MainModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

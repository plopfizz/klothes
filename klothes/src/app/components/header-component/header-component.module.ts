import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponentComponent } from './header-component.component';

@NgModule({
  declarations: [HeaderComponentComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponentComponent],
})
export class HeaderComponentModule {}

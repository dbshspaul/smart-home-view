import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent]
})
export class ShareModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {Route, RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule} from '@angular/material';

const rout: Route[] = [{path: 'home', component: HomeComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(rout),
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}

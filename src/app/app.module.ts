import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatGridListModule, MatIconModule} from '@angular/material';
import {HomeModule} from './home/home.module';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './share/footer/footer.component';
import {ShareModule} from "./share/share.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    NgbModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    HomeModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

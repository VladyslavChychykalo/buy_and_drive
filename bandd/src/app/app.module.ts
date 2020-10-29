import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCarComponent } from './shared/components/post-car/post-car.component';
import { PostSpareComponent } from './shared/components/post-spare/post-spare.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostCarComponent,
    PostSpareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

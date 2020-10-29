import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CreateAdvertisementPageComponent } from './pages/create-advertisement-page/create-advertisement-page.component';
import { CreatePostCarPageComponent } from './pages/create-post-car-page/create-post-car-page.component';
import { CreatePostSparePageComponent } from './pages/create-post-spare-page/create-post-spare-page.component';
import { YourAdvdertisementPageComponent } from './pages/your-advdertisement-page/your-advdertisement-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAdvertisementPageComponent,
    CreatePostCarPageComponent,
    CreatePostSparePageComponent,
    YourAdvdertisementPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

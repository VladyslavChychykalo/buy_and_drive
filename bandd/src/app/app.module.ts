import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CreateAdvertisementPageComponent } from './pages/create-advertisement-page/create-advertisement-page.component';
import { CreatePostCarPageComponent } from './pages/create-post-car-page/create-post-car-page.component';
import { CreatePostSparePageComponent } from './pages/create-post-spare-page/create-post-spare-page.component';
import { YourAdvdertisementPageComponent } from './pages/your-advdertisement-page/your-advdertisement-page.component';
import { CarsSparesWrapperComponent } from './pages/cars-spares-wrapper/cars-spares-wrapper.component';
import { AllCarsComponent } from './pages/all-cars/all-cars.component';
import { AllSparesComponent } from './pages/all-spares/all-spares.component';
import { FilterCarsComponent } from './pages/filter-cars/filter-cars.component';
import { FilterSparesComponent } from './pages/filter-spares/filter-spares.component';
import { PostCarComponent } from './pages/post-car/post-car.component';
import { PostSpareComponent } from './pages/post-spare/post-spare.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAdvertisementPageComponent,
    CreatePostCarPageComponent,
    CreatePostSparePageComponent,
    YourAdvdertisementPageComponent,
    CarsSparesWrapperComponent,
    AllCarsComponent,
    AllSparesComponent,
    FilterCarsComponent,
    FilterSparesComponent,
    PostCarComponent,
    PostSpareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';
import { CreatePostCarPageComponent } from '../pages/create-post-car-page/create-post-car-page.component';
import { CreateAdvertisementPageComponent } from '../pages/create-advertisement-page/create-advertisement-page.component';
import { CreatePostSparePageComponent } from '../pages/create-post-spare-page/create-post-spare-page.component';
import { YourAdvdertisementPageComponent } from '../pages/your-advdertisement-page/your-advdertisement-page.component';
import { CarsSparesWrapperComponent } from '../pages/cars-spares-wrapper/cars-spares-wrapper.component';
import { AllCarsComponent } from '../pages/all-cars/all-cars.component';
import { AllSparesComponent } from '../pages/all-spares/all-spares.component';
import { PostCarComponent } from '../pages/post-car/post-car.component';
import { PostSpareComponent } from '../pages/post-spare/post-spare.component';

@NgModule({
  declarations: [UserLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent,
        children: [
          { path: '', redirectTo: '/user', pathMatch: 'full' },
          { path: 'cars-spares-search', component: CarsSparesWrapperComponent },
          {
            path: 'create-advertisement',
            component: CreateAdvertisementPageComponent,
          },
          { path: 'all-cars', component: AllCarsComponent },
          { path: 'all-spares', component: AllSparesComponent },
          { path: 'post-car/:id', component: PostCarComponent },
          { path: 'post-spare/:id', component: PostSpareComponent },
          { path: 'create-post-car', component: CreatePostCarPageComponent },
          {
            path: 'create-post-spare',
            component: CreatePostSparePageComponent,
          },
          {
            path: 'your-advertisement',
            component: YourAdvdertisementPageComponent,
          },
          { path: 'contacts', component: ContactsComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserModule {}

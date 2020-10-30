import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';
import { CarsSparesWrapperComponent } from '../pages/cars-spares-wrapper/cars-spares-wrapper.component';
import { AllSparesComponent } from '../pages/all-spares/all-spares.component';
import { PostCarComponent } from '../pages/post-car/post-car.component';
import { PostSpareComponent } from '../pages/post-spare/post-spare.component';
import { AllCarsComponent } from '../pages/all-cars/all-cars.component';

@NgModule({
  declarations: [MainLayoutComponent, UserSignInComponent, UserSignUpComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', redirectTo: '/main', pathMatch: 'full' },
          { path: 'cars-spares-search', component: CarsSparesWrapperComponent },
          { path: 'all-cars', component: AllCarsComponent },
          { path: 'all-spares', component: AllSparesComponent },
          { path: 'user-sign-in', component: UserSignInComponent },
          { path: 'user-sign-up', component: UserSignUpComponent },
          { path: 'post-car/:id', component: PostCarComponent },
          { path: 'post-spare/:id', component: PostSpareComponent },
          { path: 'contacts', component: ContactsComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MainModule {}

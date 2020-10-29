import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { AllSparesComponent } from './all-spares/all-spares.component';
import { FilterCarsComponent } from './filter-cars/filter-cars.component';
import { FilterSparesComponent } from './filter-spares/filter-spares.component';
import { PostCarComponent } from './post-car/post-car.component';
import { PostSpareComponent } from './post-spare/post-spare.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';
import { CarsSparesSearchComponent } from './cars-spares-search/cars-spares-search.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    UserSignInComponent,
    UserSignUpComponent,
    AllCarsComponent,
    AllSparesComponent,
    FilterCarsComponent,
    FilterSparesComponent,
    AuthPageComponent,
    CarsSparesSearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', redirectTo: '/main', pathMatch: 'full' },
          { path: 'all-cars', component: AllCarsComponent },
          { path: 'all-spares', component: AllSparesComponent },
          { path: 'user-sign-in', component: UserSignInComponent },
          { path: 'user-sign-up', component: UserSignUpComponent },
          { path: 'post-card/:id', component: PostCarComponent },
          { path: 'post-spare/:id', component: PostSpareComponent },
          { path: 'contacts', component: ContactsComponent },
          { path: 'auth', component: AuthPageComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MainModule {}

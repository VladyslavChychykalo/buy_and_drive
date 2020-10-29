import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { CreatePostCarComponent } from './create-post-car/create-post-car.component';
import { CreatePostSpareComponent } from './create-post-spare/create-post-spare.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    CreatePostCarComponent,
    CreatePostSpareComponent,
    AdvertisementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent,
        children: [
          { path: '', redirectTo: '/user', pathMatch: 'full' },
          { path: 'create-post-car', component: CreatePostCarComponent },
          { path: 'create-post-spare', component: CreatePostSpareComponent },
          { path: 'advertisement', component: AdvertisementComponent },
          { path: 'contacts', component: ContactsComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';
import { CreatePostCarPageComponent } from '../pages/create-post-car-page/create-post-car-page.component';
import { CreateAdvertisementPageComponent } from '../pages/create-advertisement-page/create-advertisement-page.component';
import { CreatePostSparePageComponent } from '../pages/create-post-spare-page/create-post-spare-page.component';
import { YourAdvdertisementPageComponent } from '../pages/your-advdertisement-page/your-advdertisement-page.component';

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
          {
            path: 'create-advertisement',
            component: CreateAdvertisementPageComponent,
          },
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

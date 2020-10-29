import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';

@NgModule({
  declarations: [UserLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent,
        children: [{ path: '', redirectTo: '/user', pathMatch: 'full' }],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserModule {}

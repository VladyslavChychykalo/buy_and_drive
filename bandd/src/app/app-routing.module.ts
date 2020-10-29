import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '/home',
    loadChildren: './main/main.module#MainModule',
  },
  {
    path: '/user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: '/admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

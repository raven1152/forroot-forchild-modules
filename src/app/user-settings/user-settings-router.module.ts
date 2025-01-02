import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingsComponent } from './user-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'settings',
    component: UserSettingsComponent,
    children: [
      { // lazy load one component using loadComponent and import
        path: 'profile',
        loadComponent: () =>
          import('./user-profile/user-profile.component')
          .then((c) => c.UserProfileComponent),
      },
      { // lazy load a module to a route
        path: 'user',
        loadChildren: () =>
          import('./user.module')
          .then(m => m.UserModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRouterModule {}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { PreferencesComponent } from './preferences/preferences.component';

const userFeatureRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'profile', component: PreferencesComponent },
]

@NgModule({ imports: [RouterModule.forChild(userFeatureRoutes)] })
export class UserModule {}

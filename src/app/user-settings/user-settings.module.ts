import { NgModule } from '@angular/core';
import { UserSettingsRouterModule } from './user-settings-router.module';
import { UserSettingsComponent } from './user-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    UserSettingsComponent,
    UserProfileComponent,
    UserComponent,
    PreferencesComponent,
  ],
  imports: [
    UserSettingsRouterModule,
  ],

})
export class UserSettingsModule {}

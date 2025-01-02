import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { FormsExampleModule } from './forms/forms-example.module';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    UserSettingsModule,
    FormsExampleModule,
    AppRoutingModule,
    BrowserModule,
    RouterOutlet,
    MatIcon,
    MatToolbar,
    MatIconButton,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

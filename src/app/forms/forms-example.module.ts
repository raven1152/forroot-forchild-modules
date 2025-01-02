import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PowersComponent } from './powers/powers.component';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsExampleRouterModule } from './forms-example-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatActionList } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HeroComponent,
    PowersComponent,
    HobbiesComponent,
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsExampleRouterModule,
    BrowserAnimationsModule,
    MatSlideToggle,
  ]
}) export class FormsExampleModule {}

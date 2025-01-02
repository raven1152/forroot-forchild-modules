import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: 'forms/hero', component: HeroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) export class FormsExampleRouterModule {}

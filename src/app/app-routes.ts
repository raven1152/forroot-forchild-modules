import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// this function doesn't do anything useful, however a lot of different
// things could be done here to re-route based on user, url fragment, or
// query params, etc.
const homeRedirect = (
  redirectData: Pick<
    ActivatedRouteSnapshot,
    'routeConfig' | 'url' | 'params' | 'queryParams' | 'fragment' | 'data' | 'outlet' | 'title'
  >) => {
  if (redirectData.queryParams && redirectData.queryParams['length']) {
    const keys = Object.keys(redirectData.queryParams);
    if (keys.length > 0) {
      switch (keys[0]) {
        case 'id':
          // id with a value of 5 will redirect to about, all others
          // will redirect to home.
          return redirectUrlForId(redirectData.queryParams['id']);
      }
    }
  }
  return 'home';
};

function redirectUrlForId(value: string) {
  if (value) {
    if (value === '5') {
      return 'about';
    }
  }
  return 'home';
}

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: homeRedirect
  },
  {path: '**', component: NotFoundComponent},
];

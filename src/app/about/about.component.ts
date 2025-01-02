import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  private readonly route = inject(ActivatedRoute);
  routes: any[];

  constructor(private router: Router) {
    this.routes = this.router.config;
  }

  // TODO: write recursive function to flatten a tree of routes
  //  and child routes.
  flattenRouteTree(routes: Route[]): Route[] {
    return [];
  }
}

import { Routes, RouterModule } from '@angular/router';
import { AuthenticationResolve, AuthenticationGuard, BASE_ADNOC_ROUTES, AuthorizationGuard, NotFoundErrorComponent } from 'adnoc-common';

import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewDashboardComponent } from './components/dashboards/overview-dashboard/overview-dashboard.component';
import { DirectorateDashboardComponent } from './components/dashboards/directorate-dashboard/directorate-dashboard.component';
import { FirstFormComponent } from './components/forms/first-form.component';
import { FirstReportComponent } from './components/reports/first-report.component';

export const baseRouting = RouterModule.forRoot(<any>BASE_ADNOC_ROUTES);

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    },
    resolve: {
      authenticated: AuthenticationResolve
    }
  },
  {
    path: 'my-overview-dashboard',
    component: OverviewDashboardComponent,
    data: {
      title: 'Overview',
      bodyClass: '',
      requiredPermissionsScope: []
    }
  },
  {
    path: 'my-directorate-dashboard',
    component: DirectorateDashboardComponent,
    data: {
      title: 'Directorate Dashboard',
      bodyClass: '',
      requiredPermissionsScope: []
    }
  },
  {
    path: 'my-first-form',
    component: FirstFormComponent,
    data: {
      title: 'My First Form',
      bodyClass: '',
      requiredPermissionsScope: []
    }
  },
  {
    path: 'my-first-report',
    component: FirstReportComponent,
    data: {
      title: 'My First Report',
      bodyClass: '',
      requiredPermissionsScope: []
    }
  }
];

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthorizationGuard],
    children: appRoutes
  },
  {
    path: '**',
    component: NotFoundErrorComponent,
    data: {
      title: 'Page not found',
      bodyClass: 'login',
      trackPageView: false
    }
  }
];

export const appRouting = RouterModule.forChild(routes);

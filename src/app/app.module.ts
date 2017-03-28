import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ADNOCCommonModule, ADNOCConfig } from 'adnoc-common';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewDashboardComponent } from './components/dashboards/overview-dashboard/overview-dashboard.component';
import { DirectorateDashboardComponent } from './components/dashboards/directorate-dashboard/directorate-dashboard.component';
import { FirstFormComponent } from './components/forms/first-form.component';
import { FirstReportComponent } from './components/reports/first-report.component';

import { baseRouting, appRouting } from './app.routes';
import { Config } from './shared/config/env.config';

@NgModule({
  imports: [
    BrowserModule,
    baseRouting,
    appRouting,
    HttpModule,
    ADNOCCommonModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    OverviewDashboardComponent,
    DirectorateDashboardComponent,
    FirstFormComponent,
    FirstReportComponent,
  ],
  providers: [
    {
      provide: ADNOCConfig,
      useFactory: () => {
        return new ADNOCConfig({
          apiUrl: Config.API,
          BIBaseUrl: Config.BI_BASE_URL,
          appName: 'Your app name',
          appId: 'your-app-id'
        });
      }
    },
    Title
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
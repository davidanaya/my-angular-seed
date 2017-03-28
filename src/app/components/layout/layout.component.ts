import { Component } from '@angular/core';
import { LayoutService, AnalyticsService } from 'adnoc-common';

@Component({
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  pageTitle = '';
  sidebarDesktopCollapsed = false;
  sidebarMobileCollapsed = true;

  // NOTE: Remove the AnalyticsService dependency if you don't want to track page views in this application.
  constructor(private layoutService: LayoutService, private analyticsService: AnalyticsService) {
    layoutService.layoutChanged$.subscribe((data: any) => {
      this.pageTitle = data.title;
      if (this.sidebarDesktopCollapsed) {
        $('body').addClass('reduced-menu');
      }
    });
  }

  sidebarToggle(event: string) {
    if (event == 'desktop') {
      $('body').toggleClass('reduced-menu');
      this.sidebarDesktopCollapsed = !this.sidebarDesktopCollapsed;
    } else {
      $('body').toggleClass('open-menu');
    }
  }
}

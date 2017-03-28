import { Component } from '@angular/core';
import { LayoutService } from 'adnoc-common';

@Component({
  selector: 'my-app',
  template: 'Hello!<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private layoutService: LayoutService) { }

}
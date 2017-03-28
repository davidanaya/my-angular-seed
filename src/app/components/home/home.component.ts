import { Component } from '@angular/core';
import { ADNOCAuthorizationService } from 'adnoc-common';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  private selectedSection = 'Forms';
  
  constructor(private authorization: ADNOCAuthorizationService) {
  }

}

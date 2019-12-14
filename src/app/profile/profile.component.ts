import {Component, NgModule, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

const MaterialComponents = [MatIconModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/email-24px.svg'));
  }

  ngOnInit() {
  }
}



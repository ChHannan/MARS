import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import {ActivatedRoute} from '@angular/router';
import * as interfaces from '../services/interfaces';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: interfaces.User;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private route: ActivatedRoute) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/email-24px.svg'));
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.user = JSON.parse(localStorage.getItem('selfUser'));
    });
  }
}



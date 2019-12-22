import {Component, OnInit} from '@angular/core';
import * as interfaces from '../services/interfaces';
import {ApiService} from '../services/api/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {
  visits: interfaces.Visit[];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.apiService.getVisit().subscribe(res => {
        this.visits = res;
      });
    });
  }

}

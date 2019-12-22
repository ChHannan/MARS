import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as interfaces from '../services/interfaces';
import {ApiService} from "../services/api/api.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {

  allergies: interfaces.Allergy[];
  allergiesDataSource = new MatTableDataSource(this.allergies);
  displayedColumnsAllergy: string[] = ['serialNo', 'name', 'description'];


  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.apiService.getAllergy().subscribe(res => {
        this.allergies = res;
        this.allergiesDataSource = new MatTableDataSource(this.allergies);
      });
    });
  }


}

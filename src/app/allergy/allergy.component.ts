import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {

  allergies = [
    {serialNo: 1, name: 'Acne', description: 'Allergic to medicines containing benzoyl peroxide or salicylic acid'},
    {serialNo: 2, name: 'Food Allergy', description: 'Allergic to medicines containing benzoyl peroxide or salicylic acid'},
    {serialNo: 3, name: 'Insect Sting', description: 'Allergic to medicines containing benzoyl peroxide or salicylic acid'}
  ];
  allergiesDataSource = new MatTableDataSource(this.allergies);
  displayedColumnsAllergy: string[] = ['serialNo', 'name', 'description'];

  constructor() { }

  ngOnInit() {
  }

}

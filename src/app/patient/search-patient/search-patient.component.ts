import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  displayedColumns = ['name', 'cnic', 'phone', 'dob'];
  data = [
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'}
  ];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

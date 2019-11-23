import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  displayedColumns = ['name', 'cnic', 'phone number', 'date of birth'];
  data = [
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ali Asad', cnic: '2345-78643-897', phone: '0302-212314', dob: '10-06-2000'},
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
    {name: 'Maaz', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'}
  ];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() {
  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

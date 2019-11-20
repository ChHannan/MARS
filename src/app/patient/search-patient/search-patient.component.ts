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

  displayedColumns = ['id', 'name', 'cnic', 'phone', 'dob'];
  data = [
    {id: 1, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 2, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0301-212314', dob: '10-06-2000'},
    {id: 3, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 4, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 5, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 6, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 7, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 8, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 9, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 10, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 11, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 12, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 13, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 14, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 15, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 16, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 17, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 18, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 19, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 20, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 21, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 22, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 23, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 24, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {id: 25, name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'}
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
}

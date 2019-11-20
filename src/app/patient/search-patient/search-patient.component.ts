import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  indices: number[];
  displayedColumns = ['name', 'cnic', 'phone', 'dob'];
  displayColumnName = ['name', 'cnic', 'phone number', 'date of birth'];
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
    {name: 'Maaz', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'}
  ];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() {
  }

  ngOnInit() {
    this.indices = Array(4).fill(0).map((x, i) => i);

    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = ((data, filter) => {
      const filterData = filter.split('|');
      filterData[1] = filterData[1].trim().toLowerCase();
      const re = new RegExp(filterData[1], 'g');
      return data[filterData[0]].trim().toLowerCase().match(re);
    });
  }
  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }
}

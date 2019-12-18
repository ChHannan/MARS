import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PatientsService} from '../services/patients.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css'],
})
export class SearchPatientComponent implements OnInit {
  searchMany = false;
  patientsService: PatientsService;
  router: Router;
  route: ActivatedRoute;
  indices: number[];
  displayedColumns = ['name', 'cnic', 'phone', 'dob'];
  displayColumnName = ['name', 'cnic', 'phone number', 'date of birth'];
  data = [
    {name: 'Ali Asad', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Maaz', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Abdul Hannan', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ramish Amir', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
    {name: 'Ammar Junaid', cnic: 'xxxx-xxxxx-xxx', phone: '0302-212314', dob: '10-06-2000'},
  ];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.data);
  search() {
    this.searchMany = !this.searchMany;
  }
  constructor(patientsService: PatientsService, router: Router, route: ActivatedRoute) {
    this.patientsService = patientsService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    this.indices = Array(4).fill(0).map((x, i) => i);
    this.dataSource.paginator = this.paginator;
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

  openPatient(row) {
    const indexExists = this.patientsService.patients.findIndex(element => element.name === row.name);
    if (indexExists === -1) {
      this.patientsService.patients.push(row);
    } else {
      this.router.navigate(['..', row.name], {relativeTo: this.route}).then();
    }
  }
}

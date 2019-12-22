import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PatientsService} from '../services/patients.service';
import {ActivatedRoute, Router} from '@angular/router';
import {transition, trigger, style, animate} from '@angular/animations';
import {ApiService} from '../../services/api/api.service';

export interface PatientRow {
  id: string;
  name: string;
  cnic: string;
  phone: string;
  dob: string;
}

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css'],
  animations: [
    trigger('fadein', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ])
    ])
  ]
})
export class SearchPatientComponent implements OnInit {
  searchMany = false;
  indices: number[];
  displayedColumns = ['name', 'cnic', 'phone', 'dob'];
  displayColumnName = ['name', 'cnic', 'phone number', 'date of birth'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  data: PatientRow[] = [];
  dataSource: MatTableDataSource<any>;

  search() {
    this.searchMany = !this.searchMany;
  }

  constructor(private patientsService: PatientsService, private router: Router, private route: ActivatedRoute,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.indices = Array(4).fill(0).map((x, i) => i);
    this.route.url.subscribe(url => {
      this.apiService.getPatients().subscribe(res => {
        res.forEach(row => {
          this.data.push({
            id: row.id,
            cnic: row.cnic,
            dob: row.role.date_of_birth.toString(),
            phone: row.contact,
            name: `${row.first_name} ${row.middle_name} ${row.last_name}`
          });
        });
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = ((data, filter) => {
          const filterData = filter.split('|');
          filterData[1] = filterData[1].trim().toLowerCase();
          const re = new RegExp(filterData[1], 'g');
          if (filterData[0] === 'all') {
            return  JSON.stringify(data).trim().toLowerCase().match(re);
          }
          return data[filterData[0]].trim().toLowerCase().match(re);
        });
      });
    });
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

  openPatient(row) {
    const indexExists = this.patientsService.patients.findIndex(element => element.id === row.id);
    if (indexExists === -1) {
      this.patientsService.add(row);
    } else {
      this.router.navigate(['..', row.id], {relativeTo: this.route}).then();
    }
  }
}

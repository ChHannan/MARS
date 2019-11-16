import {Routes} from '@angular/router';

import {SearchComponent} from './search/search.component';

export const patientRoutes: Routes = [
  {path: 'patient/search', component: SearchComponent},
];

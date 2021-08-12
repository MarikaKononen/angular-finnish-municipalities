import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Municipality } from './municipality';
import { MUNICIPALITIES } from './mock-municipalities';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor() { }

  getMunicipalities(): Observable<Municipality[]> {
    const municipalities = of(MUNICIPALITIES);
    return municipalities;
  }

}

import { Component, OnInit } from '@angular/core';
import { Municipality } from '../municipality';
import { MunicipalityService } from '../municipality.service';
@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.css']
})
export class MunicipalitiesComponent implements OnInit {

  municipalities: Municipality[] = [];  
  selectedMunicipality?: Municipality;
  municipality: Municipality = {

    id: 1,
    name: 'Hämeenlinna',
    nickname: 'Hämpton',
    population: 67774,
  }

  constructor(private municipalityService: MunicipalityService) { }

  ngOnInit() {
    this.getMunicipalities();
  }

  getMunicipalities(): void {
    this.municipalityService.getMunicipalities()
    .subscribe(municipalities => this.municipalities = municipalities);
  }
  onSelect(municipality: Municipality) {
    this.selectedMunicipality = municipality;
  }

}

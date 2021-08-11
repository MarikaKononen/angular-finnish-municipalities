import { Component, OnInit } from '@angular/core';
import { Municipality } from '../municipality';
import { MUNICIPALITIES } from '../mock-municipalities';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.css']
})
export class MunicipalitiesComponent implements OnInit {

  municipalities = MUNICIPALITIES;
  municipality : Municipality = {
    
    id: 1,
    name:'Hämeenlinna',
    nickname: 'Hämpton',
    population: 67774,
  }

  constructor() { }
  
  ngOnInit(): void {
  }  

}

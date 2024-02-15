import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sample_weight: any;
  sample_length: any;
  nominal_diameter: any;
  nominal_diameter_list: any = [];

  constructor() {
    this.nominal_diameter_list = ["10", "12", "16", "20", "25", "32"];
  }

  calculate() {
    
  }

  reset() {
    this.sample_weight = '';
    this.sample_length = '';
    this.nominal_diameter = null;
  }

}

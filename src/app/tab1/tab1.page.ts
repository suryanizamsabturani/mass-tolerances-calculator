import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sample_weight: any = '';
  sample_length: any = '';
  
  mass_per_metre: any;

  nominal_diameter: any;
  nominal_diameter_list: any = [];

  nominal_mass_per_metre: any;

  constructor() {
    this.nominal_diameter_list = ["10", "12", "16", "20", "25", "32"];
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  calculate() {
    this.sample_weight === '' ? this.sample_weight = '' : this.sample_weight = this.sample_weight;

    this.sample_length === '' ? this.sample_length = '' : this.sample_length = this.sample_length;

    this.mass_per_metre = (this.sample_weight * 1000) / (this.sample_length * 1000);

    let masspermetre = document.getElementsByClassName('mass-per-metre') as HTMLCollectionOf<HTMLElement>;

    !isNaN(this.mass_per_metre) ? this.mass_per_metre = this.mass_per_metre : this.mass_per_metre = '';
    this.mass_per_metre !== Infinity ? this.mass_per_metre = this.mass_per_metre : this.mass_per_metre = '';
    this.mass_per_metre !== 0 ? this.mass_per_metre = this.mass_per_metre : this.mass_per_metre = '';

    masspermetre[0].style.color = "red";

    this.mass_per_metre !== '' ? masspermetre[0].style.color = "green" : masspermetre[0].style.color = "red";
  }

  reset() {
    this.sample_weight = '';
    this.sample_length = '';
    this.nominal_diameter = null;
  }

}

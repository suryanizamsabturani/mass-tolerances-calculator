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

  mass_tolerance: any;

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

    let nommasspermetre = document.getElementsByClassName('nom-mass-per-metre') as HTMLCollectionOf<HTMLElement>;

    if( this.nominal_diameter === '10' ){
      this.nominal_mass_per_metre = '0.617';
    }else if( this.nominal_diameter === '12' ){
      this.nominal_mass_per_metre = '0.888';
    }else if( this.nominal_diameter === '16' ){
      this.nominal_mass_per_metre = '1.580';
    }else if( this.nominal_diameter === '20' ){
      this.nominal_mass_per_metre = '2.470';
    }else if( this.nominal_diameter === '25' ){
      this.nominal_mass_per_metre = '3.850';
    }else if( this.nominal_diameter === '32' ){
      this.nominal_mass_per_metre = '6.310';
    }else{
      this.nominal_mass_per_metre = '';
    }

    nommasspermetre[0].style.color = "red";

    this.nominal_mass_per_metre !== '' ? nommasspermetre[0].style.color = "green" : nommasspermetre[0].style.color = "red";

    this.mass_tolerance = ((this.mass_per_metre - this.nominal_mass_per_metre) / this.nominal_mass_per_metre) * 100;

    let masstolerance = document.getElementsByClassName('mass-tolerance') as HTMLCollectionOf<HTMLElement>;

    !isNaN(this.mass_tolerance) ? this.mass_tolerance = this.mass_tolerance : this.mass_tolerance = '';
    this.mass_tolerance !== Infinity ? this.mass_tolerance = this.mass_tolerance : this.mass_tolerance = '';
    this.mass_tolerance !== 0 ? this.mass_tolerance = this.mass_tolerance : this.mass_tolerance = '';

    masstolerance[0].style.color = "red";

    this.mass_tolerance !== '' ? masstolerance[0].style.color = "green" : masstolerance[0].style.color = "red";
  }

  reset() {
    this.sample_weight = '';
    this.sample_length = '';
    this.mass_per_metre = '';
    this.nominal_diameter = null;
    this.nominal_mass_per_metre = '';
    this.mass_tolerance = '';

    let masspermetre = document.getElementsByClassName('mass-per-metre') as HTMLCollectionOf<HTMLElement>;
    masspermetre[0].style.color = "red";

    let nommasspermetre = document.getElementsByClassName('nom-mass-per-metre') as HTMLCollectionOf<HTMLElement>;
    nommasspermetre[0].style.color = "red";

    let masstolerance = document.getElementsByClassName('mass-tolerance') as HTMLCollectionOf<HTMLElement>;
    masstolerance[0].style.color = "red";
  }

}

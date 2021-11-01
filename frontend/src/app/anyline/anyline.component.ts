import { Component, OnInit } from '@angular/core';
import {MrzItem} from "../mrzitem";

declare var theMainThing: any

@Component({
  selector: 'app-anyline',
  templateUrl: './anyline.component.html',
  styleUrls: ['./anyline.component.css']
})
export class AnylineComponent implements OnInit {

  mrzitems: MrzItem[];

  constructor() { }

  ngOnInit(): void {
  }

  startTheAnylineThing(): void {
    theMainThing();
  }

  resultReady(result: string): void {
    this.mrzitems = JSON.parse(result);

    console.log(this.getValueByReference('givenNames'));
    console.log(this.getValueByReference('surname'));
    console.log(this.getValueByReference('sex'));
    console.log(this.getValueByReference('formattedDateOfBirth'));

    console.log(this.getValueByReference('nationalityCountryCode'));
    console.log(this.getValueByReference('documentNumber'));
  }

  getValueByReference(identifier: string): string {
    let result: any = this.mrzitems.find(obj => obj.identifier === identifier);
    return result.text;
  }

}

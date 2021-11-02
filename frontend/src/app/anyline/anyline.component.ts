import { Component, OnInit } from '@angular/core';
import {MrzItem} from "../mrzitem";
import {FormControl, FormGroup, Validators} from "@angular/forms";

declare var theMainThing: any
declare var stopScanning: any

@Component({
  selector: 'app-anyline',
  templateUrl: './anyline.component.html',
  styleUrls: ['./anyline.component.css']
})
export class AnylineComponent implements OnInit {

  mrzitems: MrzItem[];

  constructor() { }

  addForm = new FormGroup({
    givenNames: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    idNumber: new FormControl('', Validators.required)
  });

  ngOnInit() {

  }

  startTheAnylineThing(): void {
    theMainThing();
  }

  cancelScan(): void {
    stopScanning();
  }

  resultReady(result: string): void {
    //todo check expiry date!?
    this.mrzitems = JSON.parse(result);
    this.addForm.setValue({
      givenNames: this.getValueByReference('givenNames'),
      surname: this.getValueByReference('surname'),
      gender: this.getValueByReference('sex'),
      dateOfBirth: this.getValueByReference('formattedDateOfBirth'),
      nationality: this.getValueByReference('nationalityCountryCode'),
      idNumber: this.getValueByReference('documentNumber'),
    });

    // @ts-ignore
    document.getElementById('instructions').innerHTML = "any errors? you can either correct them manually or scan again";
    // @ts-ignore
    document.getElementById('scanButton').innerHTML = "Re-scan";
  }

  getValueByReference(identifier: string): string {
    let result: any = this.mrzitems.find(obj => obj.identifier === identifier);
    return result.text;
  }
  onSubmit() {
    console.log('badoa zerbitzura eta hortikan atzera');
  }
}

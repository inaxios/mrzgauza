import { Component, OnInit } from '@angular/core';
import {MrzItem} from "../mrzitem";

declare var theMainThing: any

@Component({
  selector: 'app-anyline',
  templateUrl: './anyline.component.html',
  styleUrls: ['./anyline.component.css']
})
export class AnylineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startTheAnylineThing(): void {
    theMainThing();
  }

  resultReady(result: string): void {
    let resultHolder = JSON.parse(result);

    resultHolder.forEach(function(value: MrzItem) {
      console.log(value.identifier + ": " + value.text);
    });
  }

}

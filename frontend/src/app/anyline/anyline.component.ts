import { Component, OnInit } from '@angular/core';

declare var theMainThing: any
declare var stopIt: any;
declare var ein: any;

@Component({
  selector: 'app-anyline',
  templateUrl: './anyline.component.html',
  styleUrls: ['./anyline.component.css']
})
export class AnylineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hasi(): void {
    theMainThing();
  }

  gelditu(): void {
    stopIt();
    console.log(ein());
  }
}

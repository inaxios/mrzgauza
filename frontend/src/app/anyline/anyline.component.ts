import { Component, OnInit } from '@angular/core';

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

  denaPrest(balioa: string): void {
    console.log("dena prest pitxurri");
    console.log(balioa);
    let resultHolder = JSON.parse(balioa);

     console.log(resultHolder[8].identifier);
     console.log(resultHolder[8].text)
  }

}

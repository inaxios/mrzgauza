import { Component, OnInit } from '@angular/core';
import {MrzService} from "../service/mrz-service.service";

@Component({
  selector: 'app-mrz',
  templateUrl: './mrz.component.html',
  styleUrls: ['./mrz.component.css']
})
export class MrzComponent implements OnInit {

  constructor(private mrzService: MrzService) { }

  ngOnInit(): void {
  }

}

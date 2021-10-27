import { Component, OnInit } from '@angular/core';
import {MrzService} from "../service/mrz-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Mrzinfo} from "../mrzinfo";

@Component({
  selector: 'app-mrz',
  templateUrl: './mrz.component.html',
  styleUrls: ['./mrz.component.css']
})
export class MrzComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private mrzService: MrzService) { }

  mrzForm: FormGroup;
  mrz?: Mrzinfo;

  ngOnInit(): void {

    this.getMrz();

    this.mrzForm = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      countryCode: [''],
      country: [''],
      nationality: [''],
      number: [''],
      sex: [''],
      rawText: [''],
      validScore: ['']
    });
  }

  onSubmit() {
    // this.userService.addUser(this.addForm.value)
    //   .subscribe(data => {
    //     this.router.navigate(['list-users']);
    //   });
  }

  getMrz() {
    this.mrzService.getMrz().subscribe(data => {
      this.mrz = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FileuploadService} from "../service/fileupload-service.service";
import {Mrzinfo} from "../mrzinfo";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  // Variable to store shortLink from api response
  mrz?: Mrzinfo;
  loading: boolean = false; // Flag variable
  file: File; // Variable to store file

  // Inject service
  constructor(private fileUploadService: FileuploadService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      data => {
        this.mrz = data;
        this.loading = false;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';

// Service
import { UploadService } from '../upload.service';
import { ToastrService } from 'ngx-toastr';

// Forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model
import { Comic } from '../comic';
import { Panel } from '../panel';
import { Router } from '@angular/router';



@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.css']
})
export class UploadContentComponent implements OnInit {

  files;
  uploadComicMetaData: FormGroup;
  uploadComicImages: any = [];
  paneldata: FormGroup;
  imageArr: any = [];

  constructor(private uploadServ: UploadService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router) {
      this.createForm();
      this.panelCreateForm();
    }

  ngOnInit() {
  }

  createForm() {
    this.uploadComicMetaData = this.fb.group({
      title: ['', Validators],
      author: ['', Validators]
    });
  }
  panelCreateForm() {
    this.paneldata = this.fb.group({
      orderNo: ['', Validators],
      expressions: ['', Validators]
    });
  }

  handleFileUploadEvent(event: any) {

     this.files = event.target.files;

    for (let i = 0; i < this.files.length; i++) {
      const image: File = this.files[i];
      this.uploadComicImages.push(image);
    }
  } // handleFileUploadEvent ends;

  panelData(event: any) {
    const panelMetadata = new Panel();
    panelMetadata.orderNo = this.paneldata.value.orderNo;
    panelMetadata.expressions = this.paneldata.value.expressions;
    panelMetadata.date = new Date;
    this.imageArr.push(panelMetadata);
    // console.log('panelMetadata ', panelMetadata);
     console.log('this.imageArr ', this.imageArr);
  }

  submitComic(event: any) {
    const comicMetaData = new Comic();
    comicMetaData.comic_title = this.uploadComicMetaData.value.title;
    comicMetaData.comic_author = this.uploadComicMetaData.value.author;

    for (let j = 0; j < this.imageArr.length; j++) {
      const panel = this.imageArr[j];
      comicMetaData.panels.push(panel);
    }

    console.log('comicMetaData ', comicMetaData);

  }
}

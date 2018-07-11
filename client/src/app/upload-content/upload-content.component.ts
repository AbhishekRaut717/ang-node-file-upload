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
  htmlComicData: FormGroup;
  uploadComicImages: any = [];
  htmlPanelData: FormGroup;
  imageArr: any = [];
  panelImageObjectForModal: any;
  filetoupload: File = null;

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
    this.htmlComicData = this.fb.group({
      title: ['', Validators],
      author: ['', Validators]
    });
  } // CREATE_FORM COMIC CONTENT

  test(event: any) {
    const formData = new FormData();
    formData.append('file', this.filetoupload, this.filetoupload.name);
    this.uploadServ.testUpload(formData);

  }

  panelCreateForm() {
    this.htmlPanelData = this.fb.group({
      orderNo: ['', Validators],
      expressions: ['', Validators]
    });
  } // PANEL CREATE FORM CONTENT

  carryImageToModal(value) {
    this.panelImageObjectForModal = value;
  } // CURRENT IMAGE HANDLE TO ADD ORDER NO AND EXPRESSION

  handleFileUploadEvent(event: any) {

     this.files = event.target.files;

    for (let i = 0; i < this.files.length; i++) {
      const image: File = this.files[i];
      this.filetoupload = image;
      this.uploadComicImages.push(image);
    }
  } // HANDLE FILE ADD TO ANGULAR

  panelData(event: any) {

    const panelMetadata = new Panel();
    // panelMetadata.image = this.panelImageObjectForModal;
    panelMetadata.image = this.htmlPanelData.value.file;
    panelMetadata.orderNo = this.htmlPanelData.value.orderNo;
    panelMetadata.expressions = this.htmlPanelData.value.expressions;
    panelMetadata.date = new Date;
    console.log('panelMetadata ', panelMetadata);
    // this.uploadServ.uploadPanelToServer(panelMetadata);
    // setTimeout(() => {
    //   this.toastr.success('Data Added for the panel with Response ID ' + this.uploadServ.resIdOfImg.message);
    // }, 3000);
  } // ADD PANEL METADATA AND SEND TO SERVER

  submitComic(event: any) {
    const comicMetaData = new Comic();
    comicMetaData.comic_title = this.htmlComicData.value.title;
    comicMetaData.comic_author = this.htmlComicData.value.author;

    for (let j = 0; j < this.imageArr.length; j++) {
      const panel = this.imageArr[j];
      comicMetaData.panels.push(panel);
    }
  }
}

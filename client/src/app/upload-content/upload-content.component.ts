import { Component, OnInit } from '@angular/core';

// Service
import { UploadService } from '../upload.service';
import { ToastrService } from 'ngx-toastr';

// Forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model
import { Comic } from '../comic';
import { Panel } from '../panel';
import { Expression } from '../expression';



@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.css']
})
export class UploadContentComponent implements OnInit {

  constructor(private uploadServ: UploadService,
    private toastr: ToastrService,
    private fb: FormBuilder) {
      this.createForm();
    }

  ngOnInit() {
  }

  createForm() {

  }
}

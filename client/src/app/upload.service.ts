import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panel } from './panel';


@Injectable()
export class UploadService {

  baseUrl = 'http://localhost:7000';
  resIdOfImg;
  uploadPanelObj;
  downloadIng: any;

  constructor(private _http: HttpClient) { }
  testUpload(formdata: FormData) {
    return this._http.post(this.baseUrl + '/uploadPanel', formdata)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }
}

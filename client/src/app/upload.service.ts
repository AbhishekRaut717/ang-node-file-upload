import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panel } from './panel';


@Injectable()
export class UploadService {

  baseUrl = 'http://localhost:7000';
  resIdOfImg;
  uploadPanelObj;

  constructor(private _http: HttpClient) { }

  // uploadPanelToServer(panelObj) {
  //   const imgFromPanelObj: File = panelObj.image;
  //   const formdata = new FormData();
  //   formdata.append('image', imgFromPanelObj, imgFromPanelObj.name);
  //   console.log('formdata ', formdata);

  //   return this._http.post(this.baseUrl + '/uploadPanel', imgFromPanelObj)
  //   .subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.resIdOfImg = data;
  //     }
  //   );
  // }

  testUpload(formdata: FormData) {
    return this._http.post(this.baseUrl + '/uploadPanel', formdata)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }
}

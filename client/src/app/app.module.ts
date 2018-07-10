import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Http & Forms
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Service
import { UploadService } from './upload.service';

// toastr
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }

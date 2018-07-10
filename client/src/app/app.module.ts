import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Http & Forms
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Service
import { UploadService } from './upload.service';

// toastr
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { UploadContentComponent } from './upload-content/upload-content.component';
import { ViewContentComponent } from './view-content/view-content.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadContentComponent,
    ViewContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxSpinnerModule

  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }

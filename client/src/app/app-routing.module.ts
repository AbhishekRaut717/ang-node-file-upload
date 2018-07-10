import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UploadContentComponent } from './upload-content/upload-content.component';
import { ViewContentComponent } from './view-content/view-content.component';

const routes: Routes = [
  {
    path: 'uploadContent',
    component: UploadContentComponent
  },
  {
    path: 'viewContent',
    component: ViewContentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

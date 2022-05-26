import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms'; // MANUAL IMPORTATION
import { HttpClientModule } from '@angular/common/http'; // // MANUAL IMPORTATION
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // MANUAL IMPORTATION
import { ToastrModule } from 'ngx-toastr'; // MANUAL IMPORTATION

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // MANUAL IMPORTATION
    HttpClientModule, // MANUAL IMPORTATION
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

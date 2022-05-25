import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PhotoService } from 'src/app/services/photo.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  file?: File;
  photoSelected: string | ArrayBuffer | null = '0';
  photoForm = new FormGroup({
    title: new FormControl( '', [ Validators.required ] ),
    description: new FormControl( '', [ Validators.required ] )
  });

  get title () {
    return this.photoForm.get( 'title' );
  }

  get description () {
    return this.photoForm.get( 'description' );
  }

  constructor( private photoService: PhotoService, private router: Router ) { }

  ngOnInit(): void {
  }

  onPhotoSelected( event: any | HtmlInputEvent ): void {
    if ( event.target.files && event.target.files[0] ) {
      this.file = <File>event.target.files[0];

      // Previsualizacion de la imagen
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL( this.file );
    }
  }

  uploadPhoto(): void {
    this.photoService.createPhoto( this.photoForm.value, this.file )
    .subscribe(
      {
        next: ( res ) => {
          console.log(res);
          this.photoForm.reset();
          this.photoSelected = '0'
          this.router.navigate( [ '/photos' ] );
        },
        error: ( error ) => {
          console.error( error )
        }
      }
    );
  }
}


37

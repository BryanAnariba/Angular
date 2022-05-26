import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPhoto } from 'src/app/interfaces/IPhoto';
import { PhotoService } from '../../services/photo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent implements OnInit {
  photoId: string = '';
  photo: IPhoto | any;
  constructor(
    private photoService: PhotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastrService
  ) { }

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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.photoId = params['photoId'];
      this.photoService.getPhoto( this.photoId )
      .subscribe({
        next: ( res ) => {
          //console.log( res.data );
          this.photo = res.data;
          this.photoForm.patchValue({
            title: this.photo.title,
            description: this.photo.description
          });
        },
        error: ( error ) => {
          console.log( error );
        }
      });
    })
  }

  deletePhoto( photoId: string ) {
    this.photoService.deletePhoto( photoId )
    .subscribe({
      next: ( res ) => {
        console.log( res.data );
        this.router.navigate( [ '/photos' ] );
        this.toastService.info( 'Photo Deleted', 'Successfully!' );
      },
      error: ( error  => {
        console.log( error );
      })
    })
  }

  updatePhoto( photoId: string ) {
    this.photoService.editPhoto( photoId, this.photoForm.value )
    .subscribe({
      next: ( res ) => {
        console.log( res.data );
        this.toastService.info( 'Photo Updated', 'Successfully!' );
        this.router.navigate( [ '/photos' ] );
      },
      error: ( error ) => {
        console.error( error );
      }
    });
  }

}

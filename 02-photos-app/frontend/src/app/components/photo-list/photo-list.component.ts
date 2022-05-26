import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  public photos = [];
  constructor(
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
    .subscribe({
      next: ( res ) => {
        console.log( res.data );
        this.photos = res.data;
      },
      error: ( error ) => {
        console.error( error );
      }
    })
  }

  selectedCard( photoId: string ) {
    this.router.navigate( [ '/photos', photoId ] );
  }

}

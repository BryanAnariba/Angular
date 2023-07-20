import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../interfaces/Album';

@Component({
  selector: 'albumes-list',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {


  public albumId: string = '';
  public userId: string = '';
  public nombreArtista?: string = '';
  public albumes?: Album[] = [];
  constructor ( 
    private activatedRoute: ActivatedRoute, 
    private albumService: AlbumService 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      this.albumId = params['albumId'];
      this.userId = params['userId'];
      this.albuMes();
    });
  }

  public albuMes(): void {
    this.albumService.getAlbumesByArtist( this.albumId )
    .subscribe(
      (data) => {
        //console.log(data);
        this.nombreArtista = data?.nombreArtista;
        this.albumes = data?.albumes;
      }
    );
  }

}

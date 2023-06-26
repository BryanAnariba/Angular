import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'albumes-list',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  constructor ( private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(
      (param) => {
        console.log({ album: param['albumId'] });
        
      }
    );
  }


}

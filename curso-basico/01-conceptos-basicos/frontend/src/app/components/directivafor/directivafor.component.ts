import { Component, OnInit } from '@angular/core';

interface Ipost {
  id: number;
  title: string;
}

@Component({
  selector: 'app-directivafor',
  templateUrl: './directivafor.component.html',
  styleUrls: ['./directivafor.component.scss']
})
export class DirectivaforComponent implements OnInit {
  public posts: Ipost[];
  public titleDirectivaIf: string = 'Directiva ngFor'
  constructor() {
    this.posts = [
      {
        id: 1,
        title: 'Python el lenguaje mas popular del mundo'
      },
      {
        id: 2,
        title: 'Java el lenguaje mas duro del mundo'
      },
      {
        id: 3,
        title: 'Javascript i love you'
      },
      {
        id: 4,
        title: 'Golang el mejor lenguaje de concurrencia'
      },
    ]
  }

  ngOnInit(): void {
  }

}

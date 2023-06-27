import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private modalService: NgbModal
  ) {  }

  public open(modal: any): void {
    this.modalService.open( modal, { size: 'md', centered: true } );
  }

  public handleSavePlaylist(): void {

  }

  public handleSelectUser(): void {
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameLower: string = 'bryan';
  public nameUpper: string = 'BRYAN';
  public fullName: string = 'bRyAn ArIeL sANCHEz';
  public customDate: Date = new Date();
}

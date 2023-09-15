import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  private fb = inject( FormBuilder );
  public color: string = 'red';

  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(6), Validators.email ], [] ]
  });

  public onChangeColor (): void {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16)); 
  }
}

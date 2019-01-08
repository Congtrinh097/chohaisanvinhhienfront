import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private  gnservice: GeneralService) { }

  ngOnInit() {
    this.gnservice.updateHeaderTitle("Products");
  }

}

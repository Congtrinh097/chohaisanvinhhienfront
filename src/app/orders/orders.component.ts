import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private gnservice: GeneralService) { }

  ngOnInit() {
    this.gnservice.updateHeaderTitle("Orders");
  }

}

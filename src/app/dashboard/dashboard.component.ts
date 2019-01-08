import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private gnservice: GeneralService) { }

  ngOnInit(){
    this.gnservice.updateHeaderTitle("Dashboard");
  }
}

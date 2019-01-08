import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private gnservice: GeneralService) { }

  ngOnInit() {
    this.gnservice.updateHeaderTitle("Categories");
  }

}

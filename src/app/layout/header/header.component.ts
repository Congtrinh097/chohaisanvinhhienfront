import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public gnService: GeneralService) { }
  @Input() title :string;

  ngOnInit() {
  }

}

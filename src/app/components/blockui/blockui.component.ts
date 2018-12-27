import { Component, OnInit } from '@angular/core';
import { BlockUiService } from 'src/app/services/block-ui.service';

@Component({
  selector: 'app-blockui',
  templateUrl: './blockui.component.html',
  styleUrls: ['./blockui.component.scss']
})
export class BlockuiComponent implements OnInit {

  constructor(public blockUiService: BlockUiService) { }

  ngOnInit() {
  }

}

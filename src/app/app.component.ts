import { Component } from '@angular/core';
import { GeneralService} from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chợ Hải Sản Quê';
  headerTitle =  '';
  constructor(public gnService: GeneralService) {
  }

  // ngOnChanges(){
  //   console.log("ON ngOnChanges");
  // }

  // ngDoCheck(){
  //   console.log("ON ngDoCheck");

  // }

  // ngOnInit(){
  //   console.log("ON ngOnInit");
  // }

  // ngAfterContentInit(){
  //   console.log("ON ngAfterContentInit");
  // }

  // ngAfterContentChecked(){
  //   console.log("ON ngAfterContentChecked");
  // }

  // ngAfterViewInit(){
  //   console.log("ON ngOnAfterViewInit");
  // }

  // ngAfterViewChecked(){
  //   console.log("ON ngAfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("ON ngOnDestroy");
  // }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BlockUiService } from '../services/block-ui.service';
import { SweetAlertService } from '../services/sweet-alert.service';
import { ToastService } from '../services/toast.service';
import { GeneralService } from '../services/general.service';
import { CategoryService } from '../services/category.service';
import { Cate } from '../models/Cate';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  cates:Cate[];
  constructor(
    private cateService: CategoryService,  
    private router: Router, 
    private blockUiService: BlockUiService,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService,
    private gnservice: GeneralService
    ) { }

  ngOnInit() {
    this.gnservice.updateHeaderTitle("Categories");
    this.getCates();
  }

  getCates(): void {
    this.blockUiService.blockUi();
    this.cateService.getCates().subscribe(cates=>{ 
        this.cates = cates;
        this.blockUiService.unBlockUi(); 
      },err =>{
        console.log('Error Getting Cates');  
        this.blockUiService.unBlockUi(); 
      });
    
  }

  delete(cate: Cate): void {

   this.sweetAlertService.confirmPopup("Warning", `Do you want to delete cate ${cate.name}`,"warning",(result: boolean)=>{
    if(result) {
      this.cateService.deleteCate(cate).subscribe((cate)=>{
        this.toastService.showInfo(`Successful delete cate ${cate.name}`);
        this.getCates();
      });
    }
   });
  }

  detail(id: String): void {
    this.router.navigate(["/home/cates/detail/"+id]);
  }

}

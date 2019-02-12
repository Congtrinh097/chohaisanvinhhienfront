import { Component, OnInit, Input} from '@angular/core';
import { Cate } from 'src/app/models/Cate';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { BlockUiService } from 'src/app/services/block-ui.service';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  cate: Cate;
  constructor(  
    private route: ActivatedRoute,
    private blockUiService: BlockUiService,
    private cateService: CategoryService,
    private location: Location,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService
    ) {
      this.cate = {
        name:'',
        description: '',
        image: ''
      }
     }

  ngOnInit() { 
    this.getCate();
  }

  getCate() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blockUiService.blockUi();
    this.cateService.getCate(id).subscribe(cate=>{
      this.cate = cate;
      this.blockUiService.unBlockUi();
    },err =>{
      console.log('Error Getting Users');  
      this.blockUiService.unBlockUi(); 
    });
  }  


  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.sweetAlertService.confirmPopup("Confirm", `Do you want to update categories ?`,"warning",(result: boolean)=>{
      if(result) {
        this.cateService.updateCate(this.cate)
        .subscribe(() =>{
          this.toastService.showInfo(`Category's info is updated!`);
          this.goBack()
        });
      }
    });
  }

}

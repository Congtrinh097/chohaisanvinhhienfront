import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { BlockUiService } from 'src/app/services/block-ui.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  product: Product;
  constructor(  
    private route: ActivatedRoute,
    private blockUiService: BlockUiService,
    private productService: ProductService,
    private location: Location,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService
    ) {
      this.product = {
        name:'',
        code: '',
        description: '',
        cover_image: '',
        price: 0,
        old_price: 0,
        images: null
      }
     }

  ngOnInit() { 
    this.getCate();
  }

  getCate() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blockUiService.blockUi();
    this.productService.getProduct(id).subscribe(product=>{
      this.product = product;
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
    this.sweetAlertService.confirmPopup("Confirm", `Do you want to update product ?`,"warning",(result: boolean)=>{
      if(result) {
        this.productService.updateProduct(this.product)
        .subscribe(() =>{
          this.toastService.showInfo(`Product's info is updated!`);
          this.goBack()
        });
      }
    });
  }

}

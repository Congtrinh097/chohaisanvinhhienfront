import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BlockUiService } from '../services/block-ui.service';
import { SweetAlertService } from '../services/sweet-alert.service';
import { ToastService } from '../services/toast.service';
import { GeneralService } from '../services/general.service';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[];
  constructor(
    private productService: ProductService,  
    private router: Router, 
    private blockUiService: BlockUiService,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService,
    private gnservice: GeneralService
    ) { }

  ngOnInit() {
    this.gnservice.updateHeaderTitle("Products");
    this.getProducts();
  }

  getProducts(): void {
    this.blockUiService.blockUi();
    this.productService.getProducts().subscribe(products=>{ 
        this.products = products;
        this.blockUiService.unBlockUi(); 
      },err =>{
        console.log('Error Getting Cates');  
        this.blockUiService.unBlockUi(); 
      });
    
  }

  delete(product: Product): void {

   this.sweetAlertService.confirmPopup("Warning", `Do you want to delete product ${product.name}`,"warning",(result: boolean)=>{
    if(result) {
      this.productService.deleteProduct(product).subscribe((product)=>{
        this.toastService.showInfo(`Successful delete product ${product.name}`);
        this.getProducts();
      });
    }
   });
  }

  detail(id: String): void {
    this.router.navigate(["/home/products/detail/"+id]);
  }
}

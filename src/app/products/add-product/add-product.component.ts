import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  addNewProduct(product: Product){
    this.productService.addProduct(product).subscribe(()=>{this.router.navigate(['/home/products']); this.toastService.showSuccess("Added successfuly!")});
  }

}

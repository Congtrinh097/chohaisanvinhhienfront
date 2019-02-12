import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Cate } from 'src/app/models/Cate';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.scss']
})
export class AddCateComponent implements OnInit {

  constructor(private cateService: CategoryService, private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  addNewCate(cate: Cate){
    this.cateService.addCate(cate).subscribe(()=>{this.router.navigate(['/home/categories']); this.toastService.showSuccess("Added successfuly!")});
  }

}

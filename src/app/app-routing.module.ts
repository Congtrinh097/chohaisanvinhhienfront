import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { UsersComponent } from '../app/users/users.component';
import { CategoriesComponent } from '../app/categories/categories.component';
import { ProductsComponent } from '../app/products/products.component';
import { OrdersComponent } from '../app/orders/orders.component';
import { AddUserComponent } from '../app/users/add-user/add-user.component';
import { DetailUserComponent } from '../app/users/detail-user/detail-user.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddCateComponent } from './categories/add-cate/add-cate.component';
import { DetailComponent } from './categories/detail/detail.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { DetailProductComponent } from './products/detail-product/detail-product.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'home/dashboard', pathMatch: 'full' },
  { path: 'home',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '',   redirectTo: 'home/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/add', component: AddUserComponent },
      { path: 'users/detail/:id', component: DetailUserComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/add', component: AddCateComponent },
      { path: 'categories/detail/:id', component: DetailComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: AddProductComponent },
      { path: 'products/detail/:id', component: DetailProductComponent },
      { path: 'orders', component: OrdersComponent },
   
    ]
  },
  { path: '**' , component: PageNotFoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

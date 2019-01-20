import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'home/dashboard', pathMatch: 'full' },
  { path: 'home',
    component: MainComponent,
    children: [
      { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'users/add', component: AddUserComponent },
      { path: 'users/detail/:id', component: DetailUserComponent },
    ]
  },
  { path: '**' , component: PageNotFoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

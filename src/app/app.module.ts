import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { BlockuiComponent } from './components/blockui/blockui.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddCateComponent } from './categories/add-cate/add-cate.component';
import { DetailComponent } from './categories/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    DashboardComponent,
    UsersComponent,
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    AddUserComponent,
    DetailUserComponent,
    BlockuiComponent,
    LoginComponent,
    MainComponent,
    PageNotFoundComponent,
    AddCateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

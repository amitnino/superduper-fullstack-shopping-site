import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// ------ Layout ------
// ### Header
import { HeaderContainerComponent } from './components/header/header-container/header-container.component';
import { TitleComponent } from './components/header/title/title.component';
import { UserHandlerComponent } from './components/header/user-handler/user-handler.component';
import { ButtonsComponent } from './components/header/buttons/buttons.component';

// ### Body
import { BodyContainerComponent } from './components/body/body-container/body-container.component';
import { SideBarContainerComponent } from './components/body/side-bar/side-bar-container/side-bar-container.component';

// Register
import { RegisterContainerComponent } from './components/body/register/register-container/register-container.component';

// Main
import { MainContainerComponent } from './components/body/main/main-container/main-container.component';
import { OrderMainContainerComponent } from './components/body/main/order/order-main-container/order-main-container.component';
import { ShopMainContainerComponent } from './components/body/main/shop/shop-main-container/shop-main-container.component';
import { WelcomeMainContainerComponent } from './components/body/main/welcome/welcome-main-container/welcome-main-container.component';

// SideBar
import { CartSideBarContainerComponent } from './components/body/side-bar/cart/cart-side-bar-container/cart-side-bar-container.component';
import { WelcomeSideBarContainerComponent } from './components/body/side-bar/welcome/welcome-side-bar-container/welcome-side-bar-container.component';


// ------ InnerComponents ------
// Authentication
import { LoginInfoFormComponent } from './components/body/register/login-info-form/login-info-form.component';
import { PersonalInfoFormComponent } from './components/body/register/personal-info-form/personal-info-form.component';
import { StatisticsComponent } from './components/body/main/welcome/statistics/statistics.component';
import { AuthorizationComponent } from './components/body/side-bar/welcome/authorization/authorization.component';
import { DisplayUserComponent } from './components/body/side-bar/welcome/display-user/display-user.component';

// Order
import { OrderFormComponent } from './components/body/main/order/order-form/order-form.component';
import { DownloadComponent } from './components/body/main/order/download/download.component';

// Store
import { FilterBarComponent } from './components/body/main/shop/filter-bar/filter-bar.component';
import { StoreItemComponent } from './components/body/main/shop/store-item/store-item.component';
import { StoreItemsListComponent } from './components/body/main/shop/store-items-list/store-items-list.component';

// Cart
import { CartListComponent } from './components/body/side-bar/cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/body/side-bar/cart/cart-item/cart-item.component';
import { CartInfoComponent } from './components/body/side-bar/cart/cart-info/cart-info.component';
import { CartBtnsComponent } from './components/body/side-bar/cart/cart-btns/cart-btns.component';

// About Us
import { AboutUsComponent } from './components/body/main/welcome/about-us/about-us.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MaterialModule } from './meterial/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginInfoFormComponent,
    PersonalInfoFormComponent,
    OrderFormComponent,
    DownloadComponent,
    FilterBarComponent,
    StoreItemComponent,
    StoreItemsListComponent,
    AboutUsComponent,
    StatisticsComponent,
    AuthorizationComponent,
    DisplayUserComponent,
    CartListComponent,
    CartItemComponent,
    CartInfoComponent,
    CartBtnsComponent,
    TitleComponent,
    UserHandlerComponent,
    ButtonsComponent,
    BodyContainerComponent,
    HeaderContainerComponent,
    MainContainerComponent,
    OrderMainContainerComponent,
    ShopMainContainerComponent,
    WelcomeMainContainerComponent,
    RegisterContainerComponent,
    CartSideBarContainerComponent,
    WelcomeSideBarContainerComponent,
    SideBarContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

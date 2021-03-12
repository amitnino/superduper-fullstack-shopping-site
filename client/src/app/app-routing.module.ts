import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderMainContainerComponent } from './components/body/main/order/order-main-container/order-main-container.component';
import { ShopMainContainerComponent } from './components/body/main/shop/shop-main-container/shop-main-container.component';
import { WelcomeMainContainerComponent } from './components/body/main/welcome/welcome-main-container/welcome-main-container.component';
import { RegisterContainerComponent } from './components/body/register/register-container/register-container.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeMainContainerComponent },
  { path: 'shop', component: ShopMainContainerComponent },
  { path: 'order', component: OrderMainContainerComponent },
  { path: 'register', component: RegisterContainerComponent },
  { path: '**', redirectTo:'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

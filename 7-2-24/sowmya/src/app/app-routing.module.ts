import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent} from "./component/pages/cart-page/cart-page.component";
import { FoodPageComponent} from "./component/pages/food-page/food-page.component";
import { HomeComponent} from "./component/pages/home/home.component";
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { BookeventComponent } from './bookevent/bookevent.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginGuard } from "./login-guard.service";
import {PaymentPageComponent} from "./payment-page/payment-page.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent},
  {path:'bookevent',component:BookeventComponent},
  {path:'login',component:LoginComponent},
  {path: 'checkout',component:CheckoutComponent},
  {path:'payment-page',component:PaymentPageComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard] },// Use the canActivate guard
  {path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ChineseComponent } from './fast-foods/chinese/chinese.component';
import { DietingComponent } from './fast-foods/dieting/dieting.component';
import { MaharashtrianComponent } from './fast-foods/maharashtrian/maharashtrian.component';
import { SouthComponent } from './fast-foods/south/south.component';
import { HomeComponent } from './home/home.component';
import { KitchenStoryComponent } from './kitchen-story/kitchen-story.component';
import { LoginComponent } from './login/login.component';
import { DinnerComponent } from './meals/dinner/dinner.component';
import { LunchComponent } from './meals/lunch/lunch.component';
import { StartersComponent } from './meals/starters/starters.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'kitchen',
    component:HomeComponent
  },

  {
    path:'home',
    component:HomeComponent
  }, 

  {
    path: 'maharashtian',
    component:MaharashtrianComponent
  },

  {
    path:'south',
    component:SouthComponent
  },

  {
    path:'chinese',
    component:ChineseComponent  
  },

  {
    path:'diet',
    component:DietingComponent
  },

  {
    path:'starters',
    component:StartersComponent
  },

  {
    path:'lunch',
    component:LunchComponent
  },

  {
    path:'dinner',
    component:DinnerComponent
  },

  {
    path:'contact',
    component:ContactUsComponent
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },

  {
    path:'**', //For any website it will redirect to Homepage.
    component:HomeComponent
  },

  {
    path:'',
    component:SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
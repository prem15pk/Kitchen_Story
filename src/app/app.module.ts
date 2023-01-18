import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FastFoodsComponent } from './fast-foods/fast-foods.component';
import { MealsComponent } from './meals/meals.component';
import { MaharashtrianComponent } from './fast-foods/maharashtrian/maharashtrian.component';
import { SouthComponent } from './fast-foods/south/south.component';
import { ChineseComponent } from './fast-foods/chinese/chinese.component';
import { DietingComponent } from './fast-foods/dieting/dieting.component';
import { StartersComponent } from './meals/starters/starters.component';
import { LunchComponent } from './meals/lunch/lunch.component';
import { DinnerComponent } from './meals/dinner/dinner.component';
import { KitchenStoryComponent } from './kitchen-story/kitchen-story.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContactUsComponent,
    FastFoodsComponent,
    MealsComponent,
    MaharashtrianComponent,
    SouthComponent,
    ChineseComponent,
    DietingComponent,
    StartersComponent,
    LunchComponent,
    DinnerComponent,
    KitchenStoryComponent,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

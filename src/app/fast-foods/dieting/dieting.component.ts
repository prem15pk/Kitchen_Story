import { Component } from '@angular/core';

@Component({
  selector: 'app-dieting',
  templateUrl: './dieting.component.html',
  styleUrls: ['./dieting.component.css']
})
export class DietingComponent {
  company="Kitchen Story"
  a_ammount=0.0
  d_ammount=0.0
  r_ammount=0.0

   addItem1(item1:any)
   {
     this.a_ammount = item1*150
   }

   addItem2(item2:any)
   {
     this.d_ammount = item2*120
   }

   addItem3(item3:any)
   {
     this.r_ammount = item3*100
   }

   
}

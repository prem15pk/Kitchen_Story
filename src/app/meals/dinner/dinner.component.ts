import { Component } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent {
  company="Kitchen Story"
  GujratiSpecial_ammount=0.0
  MaharajaSpecial_ammount=0.0
  RajastaniSpecial_ammount=0.0

   addItem1(item1:any)
   {
     this.GujratiSpecial_ammount = item1*150
   }

   addItem2(item2:any)
   {
     this.MaharajaSpecial_ammount = item2*120
   }

   addItem3(item3:any)
   {
     this.RajastaniSpecial_ammount = item3*100
   }
}
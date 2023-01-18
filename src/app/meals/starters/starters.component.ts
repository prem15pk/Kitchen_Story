import { Component } from '@angular/core';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css']
})
export class StartersComponent {
  company="Kitchen Story"
  kabab_ammount=0.0
  cripsy_ammount=0.0
  Paneer_ammount=0.0

   addItem1(item1:any)
   {
     this.kabab_ammount = item1*150
   }

   addItem2(item2:any)
   {
     this.cripsy_ammount = item2*120
   }

   addItem3(item3:any)
   {
     this.Paneer_ammount = item3*100
   }
}

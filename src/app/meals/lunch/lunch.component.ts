import { Component } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent {
  company="Kitchen Story"
  BahubaliThali_ammount=0.0
  DaalBaati_ammount=0.0
  MaharashtraSpecial_ammount=0.0

   addItem1(item1:any)
   {
     this.BahubaliThali_ammount = item1*150
   }

   addItem2(item2:any)
   {
     this.DaalBaati_ammount = item2*120
   }

   addItem3(item3:any)
   {
     this.MaharashtraSpecial_ammount = item3*100
   }
}

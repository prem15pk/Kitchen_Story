import { Component } from '@angular/core';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent 
{
    company="Kitchen Story"

    CornNoodles_ammount=0.0
    Sizzlers_ammount=0.0
    hakka_ammount=0.0

    addItem1(item1:any)
    {
      this.CornNoodles_ammount = item1*150
    }

    addItem2(item2:any)
    {
      this.Sizzlers_ammount = item2*250
    }

    addItem3(item3:any)
    {
      this.hakka_ammount = item3*120
    }

}

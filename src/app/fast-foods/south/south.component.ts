import { Component } from '@angular/core';

@Component({
  selector: 'app-south',
  templateUrl: './south.component.html',
  styleUrls: ['./south.component.css']
})
export class SouthComponent 
{

    company="Kitchen Story"
    Idli_ammount=0.0
    IdliSambar_ammount=0.0
    combo_ammount=0.0
    WadaSambar_ammount=0.0

    addItem1(item1:any)
    {
      this.Idli_ammount = item1*150
    }

    addItem2(item2:any)
    {
      this.IdliSambar_ammount = item2*80
    }

    addItem3(item3:any)
    {
      this.combo_ammount = item3*200
    }
    addItem4(item4:any)
    {
      this.WadaSambar_ammount = item4*120
    }
}

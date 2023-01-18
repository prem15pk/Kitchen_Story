import { Component } from '@angular/core';

@Component({
  selector: 'app-maharashtrian',
  templateUrl: './maharashtrian.component.html',
  styleUrls: ['./maharashtrian.component.css']
})
export class MaharashtrianComponent {
  company="Kitchen Story"

 wammount=0.0
 sammount=0.0
  addItem1(item1:any)
  {
    this.wammount = item1*20
  }
  addItem2(item2:any)
  {
    this.sammount = item2*40

  }
  
}

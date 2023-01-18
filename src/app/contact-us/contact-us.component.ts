import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactEvent(myName:any)
  {
    alert("Hello,"+myName+"! Your response has been sent. Click on OK to continue.")
  }

}

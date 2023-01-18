import { Component } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
signupEvent(myName:any)
{
  alert(myName+" have successfully created an account. Press OK to continue!")
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   greet='hello'
   Teams=[{"name":'sunrises',"owner":'abc'},
   {"name":'Mi',"owner":'abc'},
   {"name":'punjab',"owner":'abc'},
   {"name":'banglore',"owner":'abc'},
   {"name":'Delhi',"owner":'abc'}]
   Players=[]
   flag=true
  constructor() { }

  ngOnInit(): void {
  }

}

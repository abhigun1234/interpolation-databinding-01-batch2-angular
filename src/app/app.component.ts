import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbasics';
  flag=false
  myName='abhishek'
  login(name,pass){

  console.log("user name",name)
  console.log("user pass",pass)
  if(name==="abhishek" && pass==='123456'){
    alert('hurrey')
  }
  else{

    alert('login faiure')   
  }
  }
}

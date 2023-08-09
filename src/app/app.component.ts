import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor( private router:Router){

 }
  title:string = 'sign in';
isDisable: boolean = false;
dynamicTxt:String= 'This is dynamictxt';

btnClick(){
  console.log('I was clickled');
 
}
loginClicked():void{
console.log('hi')
  this.router.navigate(['login']);
}

LogoutClickled(){
  this.router.navigate(['Logout']);
}
}



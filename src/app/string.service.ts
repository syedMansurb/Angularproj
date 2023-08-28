import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  email='abi@gmail.com';
  password = '1705';
  public GetText(){
    return 'string from service';
  }
  Anime=[
    {name:'naurto',hero:'itachi uchiah'},
    {name:'demonslayer',hero:'kamado'},
    {name:'one piece',hero:'luffy'},
    {name:'Beyblade',hero:'kai hiwatari'},
  ]

   public anime(){
    return this.Anime;
   }
}


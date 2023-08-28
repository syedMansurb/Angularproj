import { Component } from '@angular/core';
import { StringService } from '../string.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class HomepageComponent {
  constructor(public string:StringService)
{
  
}
}
  




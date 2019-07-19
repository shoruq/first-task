import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-t';


  titles:String;body:String;
  
readt(name)
{
 this.titles=name;
}

readb(name)
{
  this.body=name;
}
}

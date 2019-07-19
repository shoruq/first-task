import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  
  title:any;
  body:any;

  @Output() tit=new EventEmitter();
  @Output() b=new EventEmitter();





  send()
  {
      this.tit.emit(this.title);
      this.b.emit(this.body);
    
 
  }


  

}

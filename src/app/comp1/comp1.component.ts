import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() t :string;
  @Input() b :string;
}

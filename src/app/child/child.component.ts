import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div class="child-wrapper">
    hello from Child Component.
    <p>
      hello my first name is {{ firstname}} ,and my last name is {{lastname}} 
    </p>
    <p>
      hello my email is {{email}} 
    </p>
    <button (click)="callme1()">btn1</button>
    <button (click)="callme2()">btn2</button>
  </div> 
  `,
  styles: [`
    .child-wrapper {
      border:1px solid red;
      padding:10px;
    }
    `
  ]
})
export class ChildComponent implements OnInit {
  @Input() firstname;
  @Input() lastname;
  @Input() email;
  @Output() output1 = new EventEmitter();
  @Output() output2 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  callme1(){
    this.output1.emit('from btn 1');
  }

  callme2(){
    this.output2.emit('from btn 2');
  }

}

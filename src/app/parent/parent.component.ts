import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div class="parent-wrapper">
    hello from parent Component!!!!
    <app-child [firstname]="a" 
               [lastname]="b" 
               [email]="c"
               (output1)="onClick($event)"
               (output2)="onClick($event)"
    ></app-child>
   <p [hidden]="btndata === ''">hi this alert {{btndata}}</p>
    </div>
  `,
  styles: [
    `
    .parent-wrapper {
      border: 1px solid blue;
      padding:20px;
    }
    `
  ]
})
export class ParentComponent implements OnInit {
  a = "farid";
  b= "ghanayim"
  c = "farid@gmail.com"
  btndata="";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(data){
   this.btndata = data;
  }

}

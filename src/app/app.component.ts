import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello to angular!!!</h1>
    <app-parent></app-parent>
    <ul>
    <li *ngFor="let user of users ; index as i "> {{i+1}} : name: {{user.name}} , email : {{user.email}}</li>
    </ul>

    <div>{{users | json}}</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'test11';
  users = [
    {
    name:'Alex',
    email: 'alex@gmail.com'
   },
   {
    name:'Tom',
    email: 'Tom@gmail.com'
   },
   {
    name:'Andrei',
    email: 'Andrei@gmail.com'
   },
   {
    name:'Ron',
    email: 'Ron@gmail.com'
   }
]
}

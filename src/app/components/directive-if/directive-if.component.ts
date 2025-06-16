import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  imports: [],
  templateUrl: './directive-if.component.html',
  styleUrl: './directive-if.component.css'
})
export class DirectiveIfComponent {

  displayText: boolean = false

  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
  ];

  usersEmpty = [];



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-directice-for',
  imports: [],
  templateUrl: './directice-for.component.html',
  styleUrl: './directice-for.component.css'
})
export class DirecticeForComponent {

  myList = ["Acheter du pain", "Acheter du fromage", "Acheter du lait", "Acheter du pain", "Acheter du fromage", "Acheter du lait"]
  myListEmpty: any[] | undefined = []

}

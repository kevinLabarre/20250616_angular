import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  imports: [],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.css'
})
export class TableauComponent {

  @Input({ required: true }) produits: any = []

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-children',
  imports: [],
  templateUrl: './count-children.component.html',
  styleUrl: './count-children.component.css'
})
export class CountChildrenComponent {

  @Input({ required: true }) countChildren!: number

}

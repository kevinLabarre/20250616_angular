import { Component } from '@angular/core';
import { CountChildrenComponent } from "../count-children/count-children.component";

@Component({
  selector: 'app-count',
  imports: [CountChildrenComponent],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {

  count: number = 0;

  handleIncrement() {
    this.count++;

    // this.count = this.count + 1
    // this.count += 1
  }

  handleDecrement() {
    this.count--;
  }

  countChange(newCount: number) {
    this.count = newCount
  }

}

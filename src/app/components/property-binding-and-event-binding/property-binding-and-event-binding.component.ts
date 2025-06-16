import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-and-event-binding',
  imports: [],
  templateUrl: './property-binding-and-event-binding.component.html',
  styleUrl: './property-binding-and-event-binding.component.css'
})
export class PropertyBindingAndEventBindingComponent {

  imageSrc: string = "assets/demoAngular.png"

  buttonDesabled: boolean = false

  handleClick() {
    this.buttonDesabled = !this.buttonDesabled
    alert(`buttonDesabled:  ${this.buttonDesabled}`)
  }


}

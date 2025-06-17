import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-children',
  imports: [],
  templateUrl: './count-children.component.html',
  styleUrl: './count-children.component.css'
})
export class CountChildrenComponent {

  @Input({ required: true }) countChildren!: number

  // Pour faire passer une donnée de enfant vers parent, le parent doit faire passe une fonction
  // C'est en déclenchant cette fonction, que le composant enfant fait passé une donnée vers le parent
  @Output() countChange: EventEmitter<number> = new EventEmitter();


  increment() {
    this.countChildren++

    // Déclenche la fonction passée par le parent
    this.countChange.emit(this.countChildren)
  }

}

import { Component } from '@angular/core';
import { TableauComponent } from "../tableau/tableau.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  imports: [TableauComponent, FormsModule],
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.css'
})
export class ExerciceComponent {

  constructor() { }

  displayHorsStock: boolean = true;

  produits: any[] = [
    { id: 1, nom: 'Pomme', quantite: 0, type: 'fruit', prix: 1.2 },
    { id: 2, nom: 'Banane', quantite: 6, type: 'fruit', prix: 0.9 },
    { id: 3, nom: 'Orange', quantite: 8, type: 'fruit', prix: 1.5 },
    { id: 4, nom: 'Fraise', quantite: 20, type: 'fruit', prix: 2.5 },
    { id: 5, nom: 'Carotte', quantite: 0, type: 'legume', prix: 0.8 },
    { id: 6, nom: 'Tomate', quantite: 12, type: 'legume', prix: 1.0 },
    { id: 7, nom: 'Poivron', quantite: 5, type: 'legume', prix: 1.3 },
    { id: 8, nom: 'Brocoli', quantite: 0, type: 'legume', prix: 1.8 }
  ];


  get fruits() {
    if (this.displayHorsStock) {
      //Trie pour garder QUE les fruits
      return this.produits.filter((produit) => produit.type === "fruit")
    } else {
      return this.produits.filter((produit) => produit.type === "fruit" && produit.quantite > 0)
    }
  }

  get legumes() {
    if (this.displayHorsStock) {
      return this.produits.filter((produit) => produit.type === "legume")
    } else {
      return this.produits.filter((produit) => produit.type === "legume" && produit.quantite > 0)
    }
  }

}

import { Component } from '@angular/core';
import { User as UserModel } from './models/user.model';
import { User } from './interfaces/user.interface';
import { DirectiveIfComponent } from "./components/directive-if/directive-if.component";
import { DirecticeForComponent } from "./components/directice-for/directice-for.component";
import { PropertyBindingAndEventBindingComponent } from "./components/property-binding-and-event-binding/property-binding-and-event-binding.component";

@Component({
  selector: 'app-root',
  imports: [DirectiveIfComponent, DirecticeForComponent, PropertyBindingAndEventBindingComponent],
  // template: `
  //   <section>
  //     <h1>Bienvenue sur mon application angular !</h1>
  //   </section>
  // `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // styles: [
  //   `
  //   h1{
  //     color: red,
  //     font-size: 30px
  //   }
  //   `,
  // ]
})
export class AppComponent {

  user1: User = {
    id: 1,
    firstName: 'John',
    enabled: true
  }

  myProp: any;
  myProp2: unknown;

  test() {
    this.myProp = 1;
    this.myProp = "Toto"

    this.myProp2 = 1;
    this.myProp2 = "titi"


    console.log(this.myProp.name)

    if (this.myProp2) {
      // if (this.myProp2.name) {
      //   console.log(this.myProp2.name)
      // }
    }
  }


  // Typage avec un 'modèle'
  user2: UserModel = new UserModel(1, "John", 30, [], 1234)

  testModel() {
    this.user2.displayUser()

    console.log(this.user2.nameAndAge)
    console.log(this.user2.age)
    this.user2.accountNumber = 1234
  }

  // displayUser() {
  //   return this.user2.firstName + " " + this.user2.age
  // }

}

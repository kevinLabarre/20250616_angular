import { Book } from "../interfaces/book.interface";

export class User {
  id: number;
  firstName: string | null;

  // age: number | undefined
  _age?: number;  // équivalent à ligne au dessus -> age peut être un number ou undefined

  private _accountNumber!: number;

  enabled: boolean;
  books?: Book[];

  constructor(id: number, firstName: string, age: number, books: Book[], accountNumber: number, enabled: boolean = false) {
    this.id = id;
    this.firstName = firstName;
    this._age = age;
    this.enabled = enabled;
    this.books = books;

    // this._accountNumber = accountNumber // Sans passer par le setter

    this.accountNumber = accountNumber  // En passant par le setter
  }

  displayUser() {
    console.log("User: " + this.firstName + ", age: " + this.age);

    // Equivalent à la ligne ci-dessus
    console.log(`User: ${this.firstName}, age: ${this.age}`)
  }

  get nameAndAge() {
    return `User: ${this.firstName}, age: ${this.age}`
  }

  get age() {
    return this._age
  }

  get accountNumber() {
    return this._accountNumber
  }

  set accountNumber(accountNumber: number) {
    if (accountNumber < 0) {
      throw new Error("Le N° de compte doit être positif")
    }

    this._accountNumber = accountNumber
  }

}

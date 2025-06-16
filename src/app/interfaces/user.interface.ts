import { Book } from "./book.interface";

export interface User {
  id: number,
  firstName: string | null,

  // age: number | undefined
  age?: number,  // équivalent à ligne au dessus -> age peut être un number ou undefined

  enabled: boolean,
  books?: Book[]
}

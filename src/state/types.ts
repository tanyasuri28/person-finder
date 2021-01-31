export interface Action {
  type: string;
  payload: any;
}

export interface Person {
  id: number;
  name: string;
  email: string;
  avatar: string;
  description: string;
}

export interface Persons {
  Persons: Person[];
}

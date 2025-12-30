
export type Role = 'user' | 'assistant';

export interface Message {
  role: Role;
  content: string;
}

export interface FyFitLocation {
  name: string;
  address: string;
  city: string;
}

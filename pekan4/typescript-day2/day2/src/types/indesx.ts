// index.ts
export interface User {
  id: number;
  name: string;
  avatarUrl: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface FormData {
  username: string;
  email: string;
}

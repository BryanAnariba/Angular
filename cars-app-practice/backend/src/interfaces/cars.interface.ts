export interface Car {
  color: string;
  gas: 'Electric' | 'Gasoline',
  year: number;
  description: string;
  price: number;
  image?: string;
}
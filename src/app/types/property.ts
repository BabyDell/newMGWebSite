export type Property = {
    id: string;
    image: string;
    price: number;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  
  export interface Listing {
    PropertyType: string;
    ListPrice: number;
  }
  
  export interface ListingsResponse {
    value: Listing[];
  }
  
  
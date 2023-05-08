export interface Product {
      "id": number,
      "title": string,
      "image": string,
      "price": number,
      "rating": string,
      "reviews": string,
      "category": string,
      "tag": string
    }

export interface Category {
    params: Params
}
export interface Params{
    
        category: string,
        tag: string[],
        _sort: string,
        _order: string,
       
    
}
export interface User {
    "name": string,
    "email": string,
    "password": string,
    "cart": CartItem[],
    "order": CartItem[],

  }
export interface CartItem {
    "image": string,
    "price": number,
    "title": string,
    "quantity": number,
    "orderId": number
  }
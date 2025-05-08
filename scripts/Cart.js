export class Cart {
  constructor() {
    this.cart = new Map();
  }

  addToCart(productId) {
    if (this.cart.has(productId)) {
      this.cart[productId]++;
    } else {
      this.cart[productId] = 1;
    }
  }

  removeToCart(productId) {
    if (!this.cart.has(productId)) throw new Error(`Item not found`);
    this.cart[productId] > 0 && this.cart[productId]--;
  }

  getCart() {
    return this.cart;
  }
}

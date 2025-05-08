export class Product {
  constructor(product, prize, quantity) {
    Object.assign(this, product);
    this.prize = prize;
    this.quantity = quantity;
  }

  getProduct() {
    return this.product;
  }

  updateQuantity(id, value) {
    if (!(this.product.id == id)) return "Product not found";
    if (this.product.quantity + value < 0) return "Product not available";
  }
}

export class Store {
  constructor(name) {
    this.name = name;
    this.products = [];
    this.orders = [];
  }

  // Product Management
  addProduct(product) {
    this.products.push(product);
  }

  updateProduct(productId, updatedDetails) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      Object.assign(product, updatedDetails);
    }
  }

  removeProduct(productId) {
    this.products = this.products.filter((p) => p.id !== productId);
  }

  // Order Management
  createOrder(order) {
    this.orders.push(order);
  }

  updateOrderStatus(orderId, status) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = status;
    }
  }

  cancelOrder(orderId) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = "canceled";
    }
  }

  // Payment Integration (simplified)
  processPayment(orderId, paymentInfo) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.paymentStatus = "paid";
    }
  }

  // Reporting
  getSalesReport() {
    return this.orders.reduce((total, order) => total + order.totalPrice, 0);
  }
}

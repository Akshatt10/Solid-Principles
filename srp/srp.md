# 🧩 Single Responsibility Principle (SRP)

> A class should have only **one reason to change** — meaning it should only have **one job or responsibility**.

---

## ✅ Goal

To demonstrate how separating concerns leads to cleaner and more maintainable code.

---

## 🏗️ Example Structure

This example simulates an e-commerce flow where different classes handle different concerns:

| Class              | Responsibility                      |
|-------------------|--------------------------------------|
| `Product`          | Represents a product entity          |
| `Order`            | Manages product list in an order     |
| `PricingCalculator`| Calculates the total price           |
| `Invoice`          | Generates the invoice printout       |
| `PaymentProcessor` | Handles the payment process          |

---

## 📌 Key Concept

Even though each class may have **multiple methods**, they **serve a single, cohesive purpose**.

> 📖 For example, `Order` has `addProduct()` and `removeProduct()`, but both relate to **managing order items** — one responsibility.

---

## 🚀 How It Works

```ts
// Instantiate products
const product1 = new Product('1', 'Laptop', 500);
const product2 = new Product('2', 'Iphone', 1000);

// Manage the order
const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

// Calculate total price
const pricingCaluclator = new PricingCaluculator();
const total = pricingCaluclator.calculatePricing(order.getProducts());

// Generate invoice
const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

// Process payment
const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);

import { Invoice } from './invoice';
import { Product, Order } from './Order';
import { PaymentProcessor } from './PaymentProcessor';
import { PricingCaluculator } from './PricingCalculator';

// This code demonstrates the Single Responsibility Principle (SRP) in a simple e-commerce application.

const product1 = new Product('1', 'Laptop', 500);
const product2 = new Product('2', 'Iphone', 1000);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const pricingCaluclator = new PricingCaluculator();
const total = pricingCaluclator.calculatePricing(order.getProducts());

const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);

//This is the main fucntion callling different classes...
//Now each class has a single responsibility ( Doesnt mean that it cannot have multiple methods, it just means that each class is focused on a single task... eg.Order, Payment etc).
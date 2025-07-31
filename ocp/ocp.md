# 🧱 Open/Closed Principle (OCP)

> **"Software entities (classes, modules, functions) should be open for extension, but closed for modification."**

---

## ✅ Goal

To design your system in a way that **new functionality can be added** without changing existing code.

---

## ❌ Bad Example

```ts
class PaymentProcessor {
    processPayment(amount: number, paymentMethod: string) {
        if (paymentMethod === 'creditCard') {
            // ...
        } else if (paymentMethod === 'paypal') {
            // ...
        }
    }
}

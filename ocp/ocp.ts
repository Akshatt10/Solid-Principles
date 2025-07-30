// class PaymentProcessor {
//     processPayment(amount: number, paymentMethod: string) {

//         if (paymentMethod === 'creditCard') {
//             console.log(`Processing credit card payment of $${amount}`);
//         }
//         else if (paymentMethod === 'paypal') {
//             console.log(`Processing PayPal payment of $${amount}`);
//         } 
//         else {
//             throw new Error('Unsupported payment method');
//         }

//     }
// }

// const paymentProcessor = new PaymentProcessor();
// paymentProcessor.processPayment(100, 'creditCard');

//Above code is bad example of OCP, becauuse if we want to add a new payment method, we have to modify the existing class.

// Open-close principle

interface IPaymentProcessor {
    processPayment(amount: number): void;
}

class PaymentProcessor {
    processor: IPaymentProcessor;

    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor;
    }

    processPayment(amount: number) {
        this.processor.processPayment(amount);
    }
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PaypalProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing paypal payment of ${amount}`);
    }
}

class DebitCardProcessor implements IPaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Processing debit card payment of ${amount}`);

    }
}

const creditCardProcessor = new CreditCardProcessor();
const paypalProcessor = new PaypalProcessor();
const debitCardProcessor = new DebitCardProcessor();
const processor = new PaymentProcessor(paypalProcessor);

processor.processPayment(20);
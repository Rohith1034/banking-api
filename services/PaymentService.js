const axios = require('axios');

const processPayment = async (amount, cardDetails) => {
    try {
        // Mock payment gateway request (Replace with a real gateway in a production app)
        const paymentResponse = await axios.post('https://mockpaymentgateway.co`m/charge', {
            amount,
            card_details: cardDetails,
        });

        return {
            status: 'success',
            transactionId: paymentResponse.data.transactionId || 'mock-transaction-id',
            message: 'Payment processed successfully',
        };
    } catch (error) {
        console.error('Error processing payment:', error);
        throw new Error('Payment processing failed');
    }
};

module.exports = { processPayment };

const express = require('express');
const cors = require('cors');
const { getCurrencyData } = require('./services/ApiService');
const { processPayment } = require('./services/PaymentService');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Currency Data Route
app.get('/api/currency', async (req, res) => {
    try {
        const currencyData = await getCurrencyData();
        res.json(currencyData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch currency data' });
    }
});

// Payment Route
app.post('/api/payment', async (req, res) => {
    const { amount, cardDetails } = req.body;

    if (!amount || !cardDetails) {
        return res.status(400).json({ error: 'Amount and card details are required' });
    }

    try {
        const paymentResponse = await processPayment(amount, cardDetails);
        res.json(paymentResponse);
    } catch (error) {
        res.status(500).json({ error: 'Payment processing failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

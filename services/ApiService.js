const axios = require('axios');

const getCurrencyData = async () => {
    try {
        // This is a placeholder API. You can replace it with a real one if needed.
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        return response.data;
    } catch (error) {
        console.error('Error fetching currency data:', error);
        throw new Error('Failed to fetch currency data');
    }
};

module.exports = { getCurrencyData };

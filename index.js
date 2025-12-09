const express = require('express');
const axios = require('axios');git add index.js
const app = express();
const port = process.env.PORT || 3000;

const RENDER_API_KEY = process.env.RENDER_API_KEY; 

app.get('/services', async (req, res) => {
    
    if (!RENDER_API_KEY) {
        return res.status(500).json({ error: 'RENDER_API_KEY environment variable is not set.' });
    }

    const apiUrl = 'https://api.render.com/v1/services';

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${RENDER_API_KEY}` 
            },
            params: {
                limit: 50 
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching services:', error.message);
        
        const status = error.response ? error.response.status : 500;
        const message = error.response ? error.response.data : 'Failed to fetch services from Render API';
        res.status(status).json({ error: message });
    }
});

app.get('/', (req, res) => {
  res.send('Render API Proxy Service is Running.');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
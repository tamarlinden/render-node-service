const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config(); 
const RENDER_API_KEY = process.env.RENDER_API_KEY;

app.get('/my-services', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                Authorization: `Bearer ${RENDER_API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

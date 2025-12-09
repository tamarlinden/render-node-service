const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // דוגמה של רשימת שירותים
    const services = [
        { id: 1, name: 'Service A' },
        { id: 2, name: 'Service B' }
    ];
    res.json(services);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

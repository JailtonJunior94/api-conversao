const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/fahrenheit/:valor/celsius', (request, response) => {
    const valor = request.params.valor;
    const celsius = (valor - 32) * 5 / 9;

    response.json({ celsius })
});

app.get('/celsius/:valor/fahrenheit', (request, response) => {
    const valor = request.params.valor;
    const fahrenheit = (valor * 9 / 5) + 32;

    response.json({ fahrenheit })
});

app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('response is running');
});

app.listen(5000);
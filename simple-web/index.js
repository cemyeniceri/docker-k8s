const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bye there!!');
});

app.listen(6000, () => {
    console.log('Listening on port 6000');
});
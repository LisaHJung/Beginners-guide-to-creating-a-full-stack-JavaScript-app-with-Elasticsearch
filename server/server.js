const express = require('express');
const client = require('./elasticsearch/client');

const app = express();

const port = 3001;

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
const express = require('express');
const client = require('./elasticsearch/client');

const app = express();

const port = 3001;

const data = require('./data_management/retrieve_and_ingest_data');

app.use('/ingest_data', data);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
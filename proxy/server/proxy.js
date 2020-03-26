const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.listen(port, () => console.log(`Proxy app listening on port ${port}!`));
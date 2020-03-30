const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());

app.listen(port, () => console.log(`Proxy app listening on port ${port}!`));
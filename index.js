const http = require('http');
const hostname = '127.0.0.1';
const PORT = 3000;
var express = require('express')
var app = express()

app.use(express.json());

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

//////////////////////////////////////////////////////////////////////////
///// Programming starts here - don't touch above code //////////////////
/////////////////////////////////////////////////////////////////////////

//const router = express.Router();

const functions = require('./functions.js');
const tril = require('./trilateration.js');

app.get('/', functions.test)

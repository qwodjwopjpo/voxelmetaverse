'use strict';

const path = require('path');
const express = require('express');

const app = express();
const port = Number(process.env.PORT) || 8080;
const host = process.env.HOST || '0.0.0.0';

app.use(express.static(path.resolve(__dirname)));

app.get('/', function(_req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, host, function() {
  console.log('voxelmetaverse server listening on http://' + host + ':' + port);
});

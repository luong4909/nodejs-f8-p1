const express = require('express');
const app = express();
const port = 3000;

app.get('/tin-tuc', (req, res) => {
  let a = 1;
  let b = 1;
  let c = a + b;
  res.send('Hello World!');
});

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

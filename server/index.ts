const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req: any, res: any) => {
  res.send({ hi: 'there' });
});

const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);

app.get('/', (req, res) => {
  res.send({
    appDescription:
      'a feedback collection MERN application with Google OAuth and Stripe integration',
  });
});

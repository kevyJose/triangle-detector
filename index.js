// create express app
const express = require('express');
const app = express();

// set port value
const port = 3002;

// middleware to parse incoming JSON requests
app.use(express.json());


// route handler for GET reqeusts
app.get('/triangle', (req, res) => {
  // access the request param. values
  const a = req.query.a;
  const b = req.query.b;
  const c = req.query.c;

  // client error: handle missing inputs
  if (!a || !b || !c) {
    res.status(400).send('Error 400 Bad request: MISSING input, all three sides of triangle (a,b,c) must be inputted.');
    return;
  }

  // client error: handle non-numerical inputs
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    res.status(400).send('Error 400 Bad Request: All three sides (a, b, and c) must be NUMERICAL values.');
    return;
  }

  // return triangle-type
  if (a == b && b == c){
    res.status(200).send('EQUILATERAL');
  }
  else if (a == b || a == c || b == c) {
    res.status(200).send('ISOSCELES');
  }
  else {
    res.status(200).send('SCALENE');
  }
});


// start the server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
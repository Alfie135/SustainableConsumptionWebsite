import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

let counter = 0;

// create express app & choose port
const app = express();
const port = 3000;

// setup CORS to allow requests from any origin
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

// setup JSON & body Parser
app.use(bodyParser.json()); // parse json requests
app.use(bodyParser.urlencoded({ extended: false })); // parse url encoded requests

app.get('/counter', (req, res) => {
  res.send({ counter: counter })
})

// hello world response
app.get('/', (req, res) => {
  res.send({ message: 'Hello world' })
})

app.post('/counter', (req, res) => {
  counter = req.body.counter;
  res.send({ message: "Method not yet implemented" });
})

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
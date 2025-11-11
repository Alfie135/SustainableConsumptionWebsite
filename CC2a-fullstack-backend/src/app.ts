import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { EnglishText, SpanishText } from "./helpers/text";

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

app.use(express.static("Assets")); // serve static files from Assets folder

app.get ("/Text", (req, res) => {
  res.send(EnglishText);
})



// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

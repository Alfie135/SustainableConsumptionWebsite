import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { EnglishText, SpanishText } from "./helpers/text";

// Create express app & choose port
const app = express();
const port = 3000;

// Setup CORS to allow requests from any origin
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

// Setup JSON & body Parser
app.use(bodyParser.json()); // Parse json requests
app.use(bodyParser.urlencoded({ extended: false })); // Parse url encoded requests

app.use(express.static("Assets")); // Serve static files from Assets folder

app.get ("/Text", (req, res) => { 
  if (!req.query.language){
    res.send(EnglishText);
  }
  if (req.query.language === 'Español'){
    res.send(SpanishText);
  }
  res.send(EnglishText);
})



// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

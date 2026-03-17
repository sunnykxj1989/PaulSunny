npm init -y
npm install express body-parser twilio
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { name, mobile, message } = req.body;

  console.log(name, mobile, message);

  // Save to database (you can use MongoDB)

  res.send("Request Submitted Successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/questions");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", routes);

//console.dir(app);

app.listen(4000, () => {
  console.log("Application start on port 4000");
});

mongoose
  .connect("mongodb://mongo/scheduleNApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("connection open!");
  })
  .catch((err) => {
    console.log("oh no,error!");
    console.log(err);
  });

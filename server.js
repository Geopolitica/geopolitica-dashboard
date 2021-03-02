const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const eventsRouter = require("./backend/routes/eventRouter");
const mapRouter = require("./backend/routes/mapRouter");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful! 🎉"));

app.use("/events", eventsRouter);
app.use("/map", mapRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

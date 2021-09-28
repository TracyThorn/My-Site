const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5555;

const app = express();

app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use("/", express.static(path.resolve(__dirname, "../client/dist")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
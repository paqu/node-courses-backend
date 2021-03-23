const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 4000;

// Middleware
const logger = require("./middleware/logger");

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps/", bootcamps);

app.get("/", (req, res) => {
  res.send("Hello world");
  res.end();
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  );
});

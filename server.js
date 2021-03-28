const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 4000;

// Connect to database
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Body parser
app.use(express.json());

// Dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello world");
  res.end();
});

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

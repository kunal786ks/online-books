const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRoutes");

const connectDB = require("./config/db");

const app = express();

dotenv.config();

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 8081;

app.use('/user',userRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

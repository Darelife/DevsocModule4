const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
dotenv.config();
// connectDB();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`App is running on port ${process.env.PORT}`);
});

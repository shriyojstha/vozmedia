//core modules

//local modules
const postRouter = require("./routes/post.routes");
const authRouter = require("./routes/auth.routes");

//external modules
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const MongoDBstore = require("connect-mongodb-session")(session);
const express = require("express");
const dotenv = require("dotenv");

//const definition
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const db_PATH = process.env.DB_PATH;
//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Working");
});
app.use("/login", authRouter);
app.use("/post", postRouter);

mongoose
  .connect(db_PATH)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error Connecting Database: ", err);
  });

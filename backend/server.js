// root:root190119!!
// IP Public 111.94.185.246/32

import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // credentials is allowed cookie sent to frontend
app.use(json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3200, () => {
  console.log("Server running on port 3200");
});

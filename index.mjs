import express from "express";
import "dotenv/config";
import chalk from "chalk";
import cors from "cors";
import todoroute from "./Routes/todos.mjs";
import postroute from "./Routes/post.mjs";
const app = express();
const PORT = process.env.PORT || 2494;
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on port ${PORT}`));
});
app.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: "Helow Express Js",
    });
  } catch (error) {
    console, log(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});
app.use("/todos", todoroute);
app.use("/posts", postroute);

app.use("*", () => {
  res.status(404).send({
    message: "Page Not Found",
  });
});

const express = require("express");
const home_controller = require("./controllers/home_controller");
const rootRouter = express.Router();


const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", rootRouter);
app.use("/user", rootRouter);
app.use("/", home_controller.index);
app.use("/about", home_controller.index);

app.listen(3000, () => {
  console.log("Server Started!!!");
});

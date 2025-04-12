const express = require("express");
const connectMongo = require("./config/connectDB");

const rootRouter = require("./routes/root");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const userApiRouter = require("./routes/api/use");

connectMongo().catch((err) => console.log(err));

const app = express();

// Middleware để parse body
app.use(express.urlencoded({ extended: true }));  // Để xử lý form submission
app.use(express.json());  // Để xử lý JSON data
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/api/v1/users", userApiRouter); // Lấy danh sách người dùng từ API

// Lắng nghe port 3000
app.listen(3000, () => {
  console.log("Server Started!!!");
});

const express = require("express");
const connectMongo = require("./config/connectDB");

const rootRouter = require("./routes/root");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

connectMongo().catch((err) => console.log(err));

const app = express();

// Middleware để parse body
app.use(express.urlencoded({ extended: true }));  // Để xử lý form submission
app.use(express.json());  // Để xử lý JSON data

// Cấu hình view engine và thư mục chứa view
app.set("views", "./views");
app.set("view engine", "ejs");

// Cấu hình thư mục static
app.use(express.static("public"));

// Các route
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

// Lắng nghe port 3000
app.listen(3000, () => {
  console.log("Server Started!!!");
});

const categories = [
  {
    id: 1,
    name: "Điện thoại",
    description: "Các dòng điện thoại thông minh và phụ kiện",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Laptop các hãng khác nhau",
  },
  {
    id: 3,
    name: "Phụ kiện",
    description: "Tai nghe, sạc, cáp,...",
  },
];

const Product = require("../model/product");

class ProductController {
  static async index(req, res) {
    console.log(req.query.q);
    let q = req.query.q;
    let products;
    if (q) {
      products = await Product.find({ name: {$regex: q, $options: "i"} });
    } else {
      products = await Product.find();
    }
    res.render("product", { products });
  }
}

module.exports = ProductController;

const Product = require("../model/product");

class ProductController { 
  static async edit(req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      
      if (!product) {
        return res.redirect("/products"); // Nếu không tìm thấy sản phẩm, quay lại trang sản phẩm
      }
      
      res.render("product_edit", { product }); // Render form chỉnh sửa với thông tin sản phẩm
    } catch (error) {
      console.error(error);
      res.redirect("/products"); // Nếu có lỗi, quay lại trang sản phẩm
    }
  }
  static async update(req, res) {
    const { name, description, price, stock } = req.body;
    const id = req.params.id;
  
    try {
      // Cập nhật sản phẩm
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, price, stock },
        { new: true }
      );
      
      if (!updatedProduct) {
        console.log('Sản phẩm không tìm thấy');
        return res.redirect("/products");
      }
  
      // Redirect về trang danh sách sản phẩm sau khi cập nhật
      res.redirect("/products");
    } catch (error) {
      console.error('Error updating product:', error);
      res.redirect("/products");
    }
  }
  static async create(req, res) {
    let { name, description, price, stock } = req.body;
    try {
      let product = await Product.create({ name, description, price, stock });
      res.redirect("/products");
    } catch (error) {
      res.render("product_new");
    }
  }
  static async new(req, res) {
    console.log("new");
    res.render("product_new");
  }
  static async index(req, res) {
    let q = req.query.q;
    let page = parseInt(req.query.page);
    let skip = (page - 1) * 5;
    let products;
    if (q) {
      products = await Product.find({ name: { $regex: q, $options: "i" } });
    } else {
      products = await Product.find().skip(skip).limit(5);
    }

    res.render("product", { products });
  }

  static async delete(req, res) {
    console.log(req.params.id);
    let id = req.params.id;
    let product = await Product.deleteOne({ _id: id });
    res.redirect("/products");
  }
}

module.exports = ProductController;
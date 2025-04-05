const express = require("express");
const ProductController = require("../controllers/product_controler");

const router = express.Router();

router.get("/", ProductController.index);
router.get("/new", ProductController.new);
router.post("/create", ProductController.create);
router.get("/delete/:id", ProductController.delete);
router.get("/edit/:id", ProductController.edit);
router.post("/edit/:id", ProductController.update);

module.exports = router;
const productService = require("../services/product.service");

exports.getProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        res.json({ products, total: products.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductById = async (req, res) => {
  try {
      const product = await productService.getProductById(req.params.id);
      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
      const newProduct = await productService.createProduct(req.body);
      res.status(201).json(newProduct);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
      const updatedProduct = await productService.updateProduct(req.params.id, req.body);
      if (!updatedProduct) {
          return res.status(404).json({ message: "Product not found" });
      }
      res.json(updatedProduct);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
      const deletedProduct = await productService.deleteProduct(req.params.id);
      if (!deletedProduct) {
          return res.status(404).json({ message: "Product not found" });
      }
      res.json({ message: "Product deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
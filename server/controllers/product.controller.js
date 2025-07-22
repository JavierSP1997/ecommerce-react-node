const ProductModel = require('../models/product.model');

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo productos' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.getById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo producto' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};

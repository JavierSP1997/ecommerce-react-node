const pool = require('../config/db');

class ProductModel {
  static async getAll() {
    const [rows] = await pool.query(`
      SELECT p.*, c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
    `);
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query(`
      SELECT p.*, c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.id = ?
    `, [id]);
    return rows[0];
  }
}

module.exports = ProductModel;

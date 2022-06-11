export default {
  getAllProducts: 'SELECT * FROM Trybesmith.Products',
  getProductById: 'SELECT * FROM Trybesmith.Products WHERE id = ?',
  createProduct: 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?, ?, ?)',
  updateProduct: 'UPDATE Trybesmith.Products SET name = ?, amount = ?, orderId = ? WHERE id = ?',
  removeProduct: 'DELETE FROM Trybesmith.Products WHERE id = ?',
};

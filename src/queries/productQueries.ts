export default {
  getAll: 'SELECT * FROM Trybesmith.Products',
  getById: 'SELECT * FROM Trybesmith.Products WHERE id = ?',
  create: 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?, ?, ?, ?)',
  update: 'UPDATE Trybesmith.Products SET name = ?, amount = ?, orderId = ? WHERE id = ?',
  remove: 'DELETE FROM Trybesmith.Products WHERE id = ?',
};

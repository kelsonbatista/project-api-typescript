export default {
  getAll: 'SELECT * FROM Trybesmith.Orders',
  getById: 'SELECT * FROM Trybesmith.Orders WHERE id = ?',
  create: 'INSERT INTO Trybesmith.Orders (userId) VALUES (?, ?)',
  update: 'UPDATE Trybesmith.Orders SET name = ?, amount = ?, orderId = ? WHERE id = ?',
  remove: 'DELETE FROM Trybesmith.Orders WHERE id = ?',
};

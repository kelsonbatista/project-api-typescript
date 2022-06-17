export default {
  getAllOrders: `SELECT ord.id, ord.userId, prd.id AS productsIds
                FROM Trybesmith.Orders AS ord
                JOIN Trybesmith.Products AS prd
                ON ord.id = prd.orderId`,
  getOrderById: 'SELECT * FROM Trybesmith.Orders WHERE id = ?',
  createOrder: 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
  updateOrder: 'UPDATE Trybesmith.Orders SET userId = ? WHERE id = ?',
  updateProductOrder: 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
  deleteOrder: 'DELETE FROM Trybesmith.Orders WHERE id = ?',
};

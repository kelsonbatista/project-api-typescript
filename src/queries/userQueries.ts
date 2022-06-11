export default {
  getAll: 'SELECT * FROM Trybesmith.Users',
  getById: 'SELECT * FROM Trybesmith.Users WHERE id = ?',
  create: 'INSERT INTO Trybesmith.Users (username, classe, level) VALUES (?, ?, ?)',
  update: 'UPDATE Trybesmith.Users SET username = ?, classe = ?, level = ? WHERE id = ?',
  remove: 'DELETE FROM Trybesmith.Users WHERE id = ?',
};

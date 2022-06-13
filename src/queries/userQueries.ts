export default {
  getAllUsers: 'SELECT * FROM Trybesmith.Users',
  getUserById: 'SELECT * FROM Trybesmith.Users WHERE id = ?',
  getUserByUsername: 'SELECT * FROM Trybesmith.Users WHERE username = ?',
  createUser: 'INSERT INTO Trybesmith.Users (username,classe,level,password) VALUES (?, ?, ?, ?)',
  updateUser: 'UPDATE Trybesmith.Users SET username=?, classe=?, level=?, password=? WHERE id=?',
  deleteUser: 'DELETE FROM Trybesmith.Users WHERE id = ?',
};

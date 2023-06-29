const dbClient = require('../utils/db');
const sha1 = require('sha1');


class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    // Check if email is missing
    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    // Check if password is missing
    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    // Check if email already exists in DB
    const userExists = await dbClient.db.collection('users').findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'Already exist' });
    }

    // Hash the password using SHA1
    const hashedPassword = sha1(password);

    // Create a new user in the database
    const newUser = await dbClient.db.collection('users').insertOne({
      email,
      password: hashedPassword,
    });

    // Return the new user with only email and id
    const { _id, email: userEmail } = newUser.ops[0];
    return res.status(201).json({ id: _id, email: userEmail });
  }
  export const getMe = (req, res) => {
    const token = req.header('X-Token');
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Retrieve the user based on the token
    const userId = dbClient.get(`auth_${token}`);
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Get the user object (email and id only)
    const user = dbClient.getUserById(userId);
  
    return res.json({ email: user.email, id: user.id });
  };
}

module.exports = UsersController;

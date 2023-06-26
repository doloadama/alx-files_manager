const v4 = require(from 'uuid');
const dbClient = require('../utils/db');

const authController = {
  getConnect: (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const credentials = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8');
    const [email, password] = credentials.split(':');

    // Find the user in the database using email and password
    const user = dbClient.getUserByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Generate a random token
    const token = uuidv4();
    const key = `auth_${token}`;

    // Store the user ID in Redis with the token as the key, valid for 24 hours
    dbClient.set(key, user.id, 24 * 60 * 60);

    return res.status(200).json({ token });
  },

  getDisconnect: (req, res) => {
    const token = req.header('X-Token');
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Delete the token from Redis
    dbClient.del(`auth_${token}`);

    return res.status(204).end();
  },
};

module.exports = authController;

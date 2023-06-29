const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');

const AppController = {
  getStatus: (req, res) => {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    res.status(200).json(status);
  },

  getStats: async (req, res) => {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    };
    res.status(200).json(stats);
  },
};

module.exports = AppController;

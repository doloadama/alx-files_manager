const MongoClient = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    this.client = new MongoClient(`mongodb://${host}:${port}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.client.connect((err) => {
      if (err) {
        console.error('Database connection error:', err);
      } else {
        console.log('Database connection successful');
      }
    });

    this.db = this.client.db(database);
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }

  async getUser({ email }) {
    const user = await this.db.collection('users').findOne({ email });
    return user;
  }

  async createUser({ email, password }) {
    const newUser = { email, password };
    const result = await this.db.collection('users').insertOne(newUser);
    return result.ops[0];
  }
}

const dbClient = new DBClient();

module.exports = dbClient;

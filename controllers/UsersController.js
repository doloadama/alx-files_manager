import dbClient from '../utils/db';
import crypto from 'crypto';

const sha1 = (data) => crypto.createHash('sha1').update(data).digest('hex');


class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    const userExists = await dbClient.getUser({ email });

    if (userExists) {
      return res.status(400).json({ error: 'Already exist' });
    }

    const hashedPassword = sha1(password);
    const newUser = await dbClient.createUser({ email, password: hashedPassword });

    return res.status(201).json({ id: newUser._id, email: newUser.email });
  }
}

export default UsersController;

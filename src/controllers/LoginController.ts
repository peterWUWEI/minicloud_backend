const { Router } = require('express');
import { getRepository, getConnection } from 'typeorm';
import { User } from '../entity/User';
import config from '../config';
const bcrypt = require("bcrypt");

const router = Router();
const jwt = require('jsonwebtoken');
const accessTokenSecret = config.jwt_secret.token_sercret;

class LoginController {
    public async verifyAdmin(req: any, res: any) {
        try {
            console.log('verify if is admin..');
            const { username, password } = req.body;

            const repo = getRepository(User);
            const user = await repo.findOne({ username });

            if(!user) {
                return res.status(401).json({ error: 'User does not exist' });
            }

            if(user.role != 'admin') {
                return res.status(401).json({ error: 'User is not admin' });
            }
            const validPassword = await bcrypt.compare(password, user.password);

            if (validPassword) {
                // Generate an access token
                const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

                res.json({
                    message: 'Admin is verified successfully'
                });
            } else {
                res.status(400).json({ error: 'Invalid Password' });
            }

        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default LoginController;
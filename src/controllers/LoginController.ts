const { Router } = require('express');
import { getRepository, getConnection } from 'typeorm';
import { User } from '../entity/User';
import config from '../config';
const bcrypt = require("bcrypt");

const router = Router();
const jwt = require('jsonwebtoken');
const accessTokenSecret = config.jwt_secret.token_sercret;

router.post('/', async (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    const repo = getRepository(User);
    const user = await repo.findOne({ username });

    if(!user) res.status(401).json({ error: 'User does not exist' });

    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.status(400).send('Invalid Password');
    }
});

export default router;
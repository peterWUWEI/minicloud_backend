import config from '../config';

export const authenticate = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        // config.bearer_token.bot_secret

        if(token !== config.bearer_token.frontend_secret) {
            return res.sendStatus(403);
        }

        next();
    } else {
        res.sendStatus(401);
    }
};
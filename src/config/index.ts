import * as dotenv from "dotenv";
dotenv.config();

export default {
    jwt_secret: {
        token_sercret: process.env.TOKEN_SECRET
    }
}
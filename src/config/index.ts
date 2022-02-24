import * as dotenv from "dotenv";
dotenv.config();

export default {
  database_config: {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: (process.env.DB_PORT) ? +process.env.DB_PORT : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA,
    ssl: { rejectUnauthorized: false },
    charset: 'utf8mb4_unicode_ci',
    entities: [`${__dirname}/entities/default/*.{ts,js}`],
    // migrations: [`${__dirname}/migration/**/*.{ts,js}`],
    // cache: {
    //   type: 'database',
    //   tableName: 'query_result_cache'
    // },
    timezone: '+00:00',
    // Don't commit this when sync is true
    // DONT USE THIS ON PROD
    synchronize: false,
    // logging: true
  }
}
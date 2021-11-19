import dotenv from 'dotenv';
import promiseMysql from 'mysql2';
import { env_config } from './dotenv.config';

dotenv.config(env_config);

const pool: any = promiseMysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
  })
  .promise();

export default pool;

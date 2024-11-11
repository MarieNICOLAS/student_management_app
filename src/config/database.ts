//connexion à la bdd avec knex
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
    client: 'mysql2',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
})

export default db;
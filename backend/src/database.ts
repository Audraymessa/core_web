import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Diciamo a Node di leggere il file .env
dotenv.config();

// Creiamo il "Pool" con 10 impiegati pronti a rispondere
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3307, // ECCO LA MODIFICA CHIAVE!
  socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock', // Il tunnel diretto per XAMPP su Mac
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
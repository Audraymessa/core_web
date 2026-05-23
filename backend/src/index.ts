import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Importiamo il pool di connessioni dal file che hai appena creato
import pool from './database.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 



// === LA TUA PRIMA API DI TEST ===
app.get('/api/utenti', async (req, res) => {
  try {
    // Chiediamo al database di restituirci tutto il contenuto della tabella "utenti"
    const [righe] = await pool.query('SELECT * FROM utenti');
    
    // Il server restituisce i dati al client in formato JSON
    res.json(righe);
  } catch (error) {
    console.error('Errore durante la query:', error);
    res.status(500).json({ errore: 'Errore nel recupero dei dati dal database' });
  }
});
// 


app.listen(port, async () => {
  console.log(`Server in esecuzione sulla porta ${port}`);
  
  try {
    const connection = await pool.getConnection();
    console.log('Connessione al database  stabilita con successo!');
    connection.release(); 
  } catch (error) {
    console.error(' Errore di connessione al database:', error);
  }
});
const db = require('./db');

async function checkConnection() {
  try {
    const [rows] = await db.query('SELECT "Anslutning lyckades" AS status');
    console.log(rows[0].status);
    
    const [dbName] = await db.query('SELECT DATABASE() AS currentDb');
    console.log('Ansluten till databas:', dbName[0].currentDb);
    
    process.exit(0);
  } catch (error) {
    console.error('Anslutningsfel:', error.message);
    process.exit(1);
  }
}

checkConnection();
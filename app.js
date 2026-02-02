const db = require('./db');

async function runCRUD() {
  try {
    // INSERT - Skapa data
    const [insertResult] = await db.query(
      'INSERT INTO items (name, description) VALUES (?, ?)',
      ['Docker-test', 'Data skapad från Node.js']
    );
    console.log('Lyckad INSERT. Nytt ID:', insertResult.insertId);

    // SELECT - Läs data
    const [rows] = await db.query('SELECT * FROM items');
    console.log('Nuvarande rader i tabellen:');
    console.table(rows);

    process.exit(0);
  } catch (error) {
    console.error('Operation misslyckades:', error.message);
    process.exit(1);
  }
}

runCRUD();
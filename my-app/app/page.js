import pool from '@/lib/db';
import { addProduct, deleteProduct } from './actions';

export default async function Page() {
  const [rows] = await pool.query('SELECT * FROM items');

  return (
    <main style={{ padding: '20px' }}>
      <h1>Produkthantering</h1>
      
      <form action={addProduct} style={{ marginBottom: '20px' }}>
        <input name="name" placeholder="Produktnamn" required />
        <input name="description" placeholder="Beskrivning" required />
        <button type="submit">Lägg till</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Namn</th>
            <th>Beskrivning</th>
            <th>Åtgärd</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <form action={deleteProduct.bind(null, item.id)}>
                  <button type="submit">Ta bort</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
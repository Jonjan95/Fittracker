import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Fittracker</h1>
      <p>Välkommen. Välj ett alternativ nedan för att komma igång.</p>

      <nav style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <Link
          href="/register"
          style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}
        >
          Registrera konto
        </Link>
        <Link
          href="/login"
          style={{ padding: '10px 20px', backgroundColor: '#eaeaea', color: 'black', borderRadius: '5px', textDecoration: 'none' }}
        >
          Logga in
        </Link>
      </nav>
    </main>
  );
}
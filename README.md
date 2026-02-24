Setupguide: Fittracker

Följ dessa steg för att konfigurera och köra projektet.
1. Systemkrav
Säkerställ att följande mjukvara är installerad:

    Git for Windows: För kloning av arkivet.

    Docker Desktop: Krävs för att köra MySQL-containern. Aktivera WSL2-backend i inställningarna.

    Node.js (LTS): Version 18 eller senare rekommenderas.

    pnpm: Installeras via npm install -g pnpm.


2. Klona projektet
Öppna en terminal och kör:
Bash

git clone https://github.com/Jonjan95/Fittracker.git
cd Fittracker


3. Starta databasmiljön (Docker)
Stå kvar i rotkatalogen (där docker-compose.yaml finns) och kör:
Bash

docker compose up -d

Detta startar en MySQL-instans på port 3308.


4. Konfigurera miljövariabler (.env)
Då .env-filen är ignorerad av Git måste den skapas manuellt. Skapa en fil med namnet .env i mappen my-app/ och lägg till följande rader:
Kodavsnitt

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=ditt_valda_lösenord
DB_DATABASE=fittracker
DB_PORT=3308

Obs: Matchas mot inställningarna i din docker-compose.yaml.


5. Installera och starta frontend
Navigera till frontend-mappen:
Bash

cd my-app
pnpm install
pnpm dev

Applikationen nås på http://localhost:3000.


6. Vanliga kommandon vid felsökning
   Visa loggar för databasen: docker compose logs -f

   Stoppa databasen: docker compose down

   Rensa databasvolym (vid behov): rm -rf ../dbfiles (varning: raderar all data).

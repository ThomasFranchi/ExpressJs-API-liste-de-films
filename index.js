const http = require('http'); // import de http depuis le module Http
const app = require("./app"); // import de app depuis le fichier app.js

// Création du serveur
const server = http.createServer(app);

// Mise en écoute du port par le serveur sur le port 3000
const port = 3000;
server.listen(port);

// Evenements sur le server, message console et lien vers la page.
server.addListener("listening", () => {
    console.log(`start listening on port ${port}...`);
    console.log(`App : http://localhost:${port}`);
});

//
server.addListener("request", (req) => {
    console.log(`${req.method} ${req.url}`);
  });

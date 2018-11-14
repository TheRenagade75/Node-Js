const http = require("http");
const port = 3000;

const requestHandler = (request, response) => {
  if (request.url == "/") {
    return response.end("Bienvenue sur votre serveur !!");
  } else if (request.url == "/contact") {
    return response.end("Nous ne sommes pas joignables pour le moment !");
  } else if (request.url == "/display/Romuald") {
    return response.end("Vous tentez d’afficher le profil de Romuald");
  }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    throw new Error("Une erreur s'est produite..");
  }

  console.log(`le serveur est lancé sur le port: ${port}`);
});
const express = require('express');
const mainRouter = require('./routes/routes')

// Création de l'app (objet)
const app = express();


// Ajout du retour à l'app avec la méthode use
app.use("/", mainRouter)



module.exports = app;







// Dans cet atelier, vous allez créer une API web ou webservice (c'est à dire une application ne renvoyant que des données dans un format comme le JSON). Ce service permettra d'obtenir des informations sur des films et séries.

// Toutes les données à renvoyer sont à écrire en "dur" dans l'application, dans la mesure où vous ne pouvez pas encore créer de base de données. Vous pouvez commencer par créer des tableau

// L'API web doit proposer les fonctionnalités les routes suivantes:

// - GET /movies/categories : Renvoyer la liste des catégories de films au format JSON. Par exemple: {"categories": ["Action", "Aventure"]}

// - GET /movies : Renvoyer la liste des films au format JSON. Par exemple: {"movies": [{"title": "Inception", "date": 2010}, {"title": "Retour vers le futur", "date": 1985}]}

// - GET /movies/:category :  Récupérer la liste des films d'une categorie(nom uniquement) au format JSON. Il s'agit d'une route dynamique où ":category" peut être remplacé par le nom de la catégorie souhaitée. Pour savoir comment la créer: https://expressjs.com/fr/4x/api.html#req.params .
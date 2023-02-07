const express = require("express");
const router = express.Router();

// déclaration des variables pour l'import des données depuis les fichiers Json du répertoir DATA
let movies = require("../data/movies.json");
let categories = require("../data/categories.json");

// Get la liste des catégories

router.get("/movies/categories", (req, res) => {
  res.json({ categories });
});

// Get la liste des films
router.get("/movies", (req, res) => {
  res.json({ movies });
});

// Get la chaîne de caractères entrée dans l'adresse (autre que "categories")
router.get("/movies/:category", (req, res) => {
  nameCategory = req.params.category;

    // vérification que la catégorie existe
    if (!categories.includes(nameCategory)) {
      // Réponse avec le code 404 et un message
      return res.status(404).json({ message: "Cette catégorie n'existe pas." });
    }

  console.log(movies[0].category);
  const result = movies.filter((el) => el.category == nameCategory);
  const resultFinal = result.map((el) => el.title);
  res.json({ resultFinal });
});

// ALTERNATIVE Simplifiée :
// const result = movies.filter((el) => el.category == nameCategory ).map(({title}) => ({title}))

module.exports = router;

const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const { BeersControllers } = require("./controllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/beers", BeersControllers.getAllBeers);
router.post("/beers/:id", BeersControllers.updateBeers);
router.get("/beers/:id", BeersControllers.getByIdBeers);
router.post("/beers", BeersControllers.createNewBeer);
router.delete("/beers/:id", BeersControllers.deleteBeers);

module.exports = router;

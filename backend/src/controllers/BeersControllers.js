const models = require("../models");

class BeersController {
  static getAllBeers = (req, res) => {
    models.beers
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static updateBeers = (req, res) => {
    const item = req.body;

    item.id = parseInt(req.params.id, 10);

    models.beers
      .update(item)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send(`Can't find Beer with ${item.id}`);
        } else {
          res.status(204).send(`Update Name of Beer with ${item.id}`);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static createNewBeer = (req, res) => {
    models.beers
      .createBeer(req.body)
      .then(([results]) => {
        const newBeer = {
          id: results.insertId,
          name: req.body.name,
          tagline: req.body.tagline,
          first_brewed: req.body.first_brewed,
          description: req.body.description,
          image_url: req.body.image_url,
          ph: req.body.ph,
          brewers_tips: req.body.brewers_tips,
          contributed_by: req.body.contributed_by,
        };
        res.status(201).send(newBeer);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error creating Beer");
      });
  };

  static getByIdBeers = (req, res) => {
    const { id } = req.params;
    models.beers
      .find(id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static deleteBeers = (req, res) => {
    models.beers
      .delete(req.params.id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = BeersController;

const AbstractManager = require("./AbstractManager");

class BeersManager extends AbstractManager {
  constructor() {
    super({ table: "beers" });
  }

  update(item) {
    const { name, id } = item;
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [name, id]
    );
  }

  createBeer(body) {
    return this.connection.query(`INSERT INTO ${this.table} SET ?`, [body]);
  }
}

module.exports = BeersManager;

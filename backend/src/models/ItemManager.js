const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "beers" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [item.name]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [item.name, item.id]
    );
  }
}

module.exports = ItemManager;

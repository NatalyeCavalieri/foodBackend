const sqliteConnection = require("../../sqlite")

const createUsers = require('../../knex/migrations/20240328080708_createUsers')


async function migrationsRun(){
  const schemas = [
    createUsers,
  ].join('')
  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}


module.exports = migrationsRun
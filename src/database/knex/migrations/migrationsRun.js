const knex = require("knex")
const createUsers = require("./20240328080708_createUsers")

async function migrationsRun() {
    try {
      await createUsers.up(knex); 
      console.log('Migrations executadas com sucesso.');
    } catch (error) {
      console.error('Erro ao executar migrações:', error);
    }
  }
  
  module.exports = migrationsRun;
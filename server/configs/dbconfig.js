
const {Pool} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pcmm_assignment',
  password: 'Kefuoe@23',
  port: 5432,
})
pool.connect();


// const getUsers = (request, response) => {
//    pool.query(`Select * from mines`, (error, results) => {
//      if (error) {
//        throw error;
//      }
//      response.status(200).json(results.rows)
//      pool.end;
//    })
//  }

//  module.exports = {
//    getUsers,
//  }

 module.exports = {
  pool,
 }
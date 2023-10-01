
const {Pool} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pcmm_assignment',
  password: 'Kefuoe@23',
  port: 5432,
})
pool.connect();

 module.exports = {
  pool,
 }
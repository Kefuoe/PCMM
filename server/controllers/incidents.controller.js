const dbConfig = require('../configs/dbconfig')

  
const getMineIncidencts = (request, response) => {
    dbConfig.pool.query('Select * from incidents', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getIncidentsById = (request, response) => {
    const id = parseInt(request.params.id)
    dbConfig.pool.query('SELECT * FROM mines AS m INNER JOIN incidents AS ic ON m.id = ic.mine_id WHERE ic.mine_id = $1',[id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  module.exports = {
    getMineIncidencts,
    getIncidentsById
  }
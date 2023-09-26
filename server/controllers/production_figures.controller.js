const dbConfig = require('../configs/dbconfig')

const getProductionFigures = (request, response) => {
    dbConfig.pool.query(`Select * from production_figures`, (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
      dbConfig.pool.end;
    })
  }

  const getMineByMaterial = (request, response) => {
    const material = (request.params.material)
  
    dbConfig.pool.query('SELECT * FROM production_figures WHERE material = $1', [material], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
 
  module.exports = {
    getProductionFigures,
    getMineByMaterial
  }
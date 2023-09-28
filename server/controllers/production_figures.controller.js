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

  const getProductById = (request, response) => {
    const id = parseInt(request.params.id)
    dbConfig.pool.query('SELECT * FROM production_figures AS pf LEFT JOIN mines AS m ON pf.mine_id = m.id WHERE pf.mine_id = $1',[id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getProductionFigures,
    getMineByMaterial,
    getProductById
  }
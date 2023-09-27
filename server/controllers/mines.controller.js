const dbConfig = require('../configs/dbconfig')

const getMines = (request, response) => {
    dbConfig.pool.query(`Select * from mines`, (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
      dbConfig.pool.end;
    })
  }

  const getMineById = (request, response) => {
    const id = parseInt(request.params.id)
  
    dbConfig.pool.query('SELECT * FROM mines WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getMineContact = (request, response) => {
 
    const id = parseInt(request.params.id)
    dbConfig.pool.query('SELECT * FROM mines INNER JOIN contacts  ON contacts.id = mines.contact_person_id WHERE contacts.id = $1',[id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


 
  module.exports = {
    getMines,
    getMineById,
    getMineContact
  }
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

  const createIncident = async(req,res)=>{
    try {
      let { mine_id, latitude, longitude, description, severity } = req.body;
      console.log("Received data", mine_id, latitude, longitude, description, severity)

      const query = 'INSERT INTO incidents (mine_id,latitude,longitude,description,severity) values ($1, $2, $3, $4, $5) RETURNING *';
      const values = [mine_id, latitude, longitude, description, severity];

      const result = await dbConfig.pool.query(query,values);
      await dbConfig.pool.query('COMMIT')

      res.status(201).send({message:'Incident inserted successfully',result});
      
    } catch (error) {
      console.error('Error inserting data',error);
      res.status(500).json({error:'Internal server error'});
      
    }
  };


const deleteIncident = (request, response) => {
  const id = parseInt(request.params.id)

  dbConfig.pool.query('DELETE FROM incidents WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}
  module.exports = {
    getMineIncidencts,
    getIncidentsById,
    createIncident,
    deleteIncident 
  }

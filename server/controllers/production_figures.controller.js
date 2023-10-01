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

  const getProductionFiguresFilter = async (request, response) => {
    try {
      const {fromYear, toYear} = request.query;

      //Validate the date range-- fromYear should be less than or equal to the toYear 
      if(fromYear && toYear && fromYear > toYear){
        return response.status(400).json({ error : "Invalid date range. The From Year should be less than or equal to the To Year"})
      }

      let query = 'SELECT * FROM production_figures';
    
      const values = [];
    
      if (fromYear && toYear){
        query += ' WHERE year BETWEEN $1 AND $2';
        values.push(fromYear,toYear);
      }
    
      const results = await dbConfig.pool.query(query, values);
    
       //dbConfig.pool.query(`Select * from production_figures`,(error, results) => {
          
         
        response.json(results.rows)
        dbConfig.pool.end;
      
    } catch (error) {
      console.error("Error getting data",error);
      response.status(500).json({error:"Internal server error"});
      
    }
   };

  module.exports = {
    getProductionFigures,
    getMineByMaterial,
    getProductById,
    getProductionFiguresFilter
  }
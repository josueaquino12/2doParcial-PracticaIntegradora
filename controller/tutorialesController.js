
const {pool} = require('../config/config');

const getTutoriales = async () => {
    const tutoriales  = await pool.query('SELECT * FROM TUTORIAL');
    return tutoriales.rows;
};


const getTutorial = async (id) => {
    const query = {
        text: 'SELECT * FROM TUTORIAL WHERE ID = $1',
        values: [id]
      }
    const tutoriales = await pool.query(query);
    return tutoriales.rows[0];
};


const removeTutorial = async (id) => {
    const query = {
        text: 'DELETE FROM TUTORIAL WHERE ID = $1',
        values: [id]
      }
    const removeRow = await pool.query(query);
    return removeRow.rowCount;
};
 

const addTutorial = async (tutoriales) => {
    const query = {
        text: 'INSERT INTO TUTORIAL (titulo, descripcion, publicado) VALUES ($1, $2, $3)',
        values: [tutoriales.titulo, tutoriales.descripcion, tutoriales.publicado]
      }
    const addRow = await pool.query(query);
    return addRow.rowCount;
}


module.exports =  { getTutoriales, addTutorial, getTutorial, removeTutorial };
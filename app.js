const express = require('express');
const bodyparser = require( 'body-parser');
const cors = require('cors')
const tutorialesRouter  = require('./router/tutorialesRouter');

const PORT = process.env.PORT || 3001;

const app = express();
//middlewnpm ares
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.use(cors());
//router
app.use("/api/tutoriales", tutorialesRouter);

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
});


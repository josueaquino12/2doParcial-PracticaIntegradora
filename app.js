const express = require('express'); //importa libreria
const bodyparser = require('body-parser'); //importa libreria
const app = express();

const PORT = process.env.PORT || 3001;

let respuesta ={

    codigo: "200",
    mensaje: "Tutorial creado",
    tutorial: ''

};

let tutoriales=[  {
  id: 1,
  titulo: "Programación 1",
  descripcion: "Aprender a Programar",
  publicado: true
},
]

app.use(bodyparser.urlencoded({extend: false}));
app.use(bodyparser.json());//Formato Json

//obtener informacion
app.get('/tutorial',  (req, res)=>{
    //("[GET] Punto de usuario a la api usuario"
        res.send(tutoriales);
    
});

app.post('/tutorial', (req, res)=>{
    const id = tutoriales.map(e => e.id).reduce((o,e) => {return o > e ? o : e}) + 1
    
     
       const tutorial = {
        id: id,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        publicado: req.body.publicado
       }
       tutoriales.push(tutorial); //agrega el usuario
       respuesta.tutorial = tutorial
       res.send(respuesta)
    })


   


app.delete('/tutorial/:idTutor', (req,res) => {

    const idTutor = req.params.idTutor;
    respuesta.mensaje = `El id de tutorial a borrar es ${idTutor}`;
    const tutorial = tutoriales.find(e=>e.id===parseInt(idTutor,10))
    const pos = tutoriales.indexOf(tutorial);
    tutoriales.splice(pos,1) //elimina user
    respuesta.tutorial = tutorial
    res.send(respuesta);
   
  
  })
  
  
  app.put('/tutorial/:idTutor', (req,res) => {
  const idTutor = req.params.idTutor;
    const tutorNew = {
        id: idTutor,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        publicado: req.body.publicado
     }
   
  
    respuesta.mensaje = `El id de tutorial modificado es ${idTutor}`;
    const tutorial = tutoriales.find(e=>e.id===parseInt(idTutor,10))
    const pos = tutoriales.indexOf(tutorial);
    tutoriales.splice(pos,1) //elimina user
    tutoriales.push(tutorNew)
    respuesta.tutorial = tutorNew
    res.send(respuesta);
   
  })



app.listen(PORT, () => {

    console.log(`Servidor iniciado en el puerto ${PORT}`);
    
    })
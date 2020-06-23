CREATE TABLE TUTORIAL
(
    ID SERIAL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    publicado boolean NOT NULL DEFAULT false
)

INSERT INTO tutoriales (titulo, descripcion, publicado)
    VALUES ('P', 'hola', true),
           ('P', 'saludo', false),
           ('P', 'stop', false),
           ('P', 'genial', true);
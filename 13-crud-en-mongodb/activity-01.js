use colegio

db.estudiantes.insertMany([
  {
    nombre: 'Nicole',
    apellido: 'Manzano',
    curso: 'Matemáticas',
    edad: 15,
    correo: 'nv@escuelita.com',
    sexo: 'F'
  },
  {
    nombre: 'Pere',
    apellido: 'Saiz',
    curso: 'Naturaleza',
    edad: 12,
    correo: 'pg@escuelita.com',
    sexo: 'M'
  },
  {
    nombre: 'Pelayo',
    apellido: 'Balaguer',
    curso: 'Arte',
    edad: 13,
    correo: 'pm@escuelita.com',
    sexo: 'M'
  },
  {
    nombre: 'Trinidad',
    apellido: 'Balaguer',
    curso: 'Naturaleza',
    edad: 10,
    correo: 'ts@escuelita.com',
    sexo: 'F'
  },
  {
    nombre: 'Maria',
    apellido: 'García',
    curso: 'Física',
    edad: 14,
    correo: 'mb@escuelita.com',
    sexo: 'F'
  },
  {
    nombre: 'Patricio',
    apellido: 'Verdugo',
    curso: 'Física'
  },
  {
    nombre: 'Ernesto'
  },
])

db.estudiantes.find({})

db.estudiantes.find({sexo:'M'})

db.estudiantes.countDocuments({})

db.estudiantes.countDocuments({sexo:'F'})

// -----------------------------------------

use ecommerce

// 1
db.clients.insertMany([
  {
    "nombre": "Pablo",
    "edad": 25,
  },
  {
    "nombre": "Juan",
    "edad": 22,
  },
  {
    "nombre": "Lucia",
    "edad": 25,
  },
  {
    "nombre": "Juan",
    "edad": 29,
  },
  {
    "nombre": "Fede",
    "edad": 35,
  },
])

// 2 Listar todos los documentos de la colección clientes ordenados por edad descendente.
db.clients.find({}).sort({ edad: -1 }).pretty()
// 3 Listar el cliente más joven.
db.clients.find({}).sort({ edad: 1 }).limit(1).pretty()
// 4 Listar el segundo cliente más joven.
db.clients.find({}).sort({ edad: 1 }).skip(1).limit(1).pretty()
// 5 Listar los clientes llamados 'Juan'
db.clients.find({nombre: 'Juan'}).pretty()
// 6 Listar los clientes llamados 'Juan' que tengan 29 años.
db.clients.find({nombre: 'Juan', edad: 29}).pretty()
db.clients.find({$and: [{nombre: 'Juan'}, {edad: 29}]}).pretty()
// 7 Listar los clientes llamados 'Juan' ó 'Lucia'.
db.clients.find({$or: [{nombre: 'Juan'}, {nombre: 'Lucia'}]}).pretty()
// 8 Listar los clientes que tengan más de 25 años.
db.clients.find({edad: {$gt: 25}}).pretty()
// 9 Listar los clientes que tengan 25 años ó menos.
db.clients.find({edad: {$lte: 25}}).pretty()
// 10 Listar los clientes que NO tengan 25 años.
db.clients.find({edad: {$ne: 25}}).pretty()
// 11 Listar los clientes que estén entre los 26 y 35 años.
db.clients.find({$and: [{edad: {$gte: 26}}, {edad: {$lte: 35}}]}).pretty()
// 12 Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.
db.clients.updateOne({nombre: 'Fede'}, {$set: {edad: 36}})
db.clients.find({$and: [{edad: {$gte: 26}}, {edad: {$lte: 35}}]}).pretty()
// 13 Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.
db.clients.updateMany({edad: 25}, { $inc: { edad: 1 } })
db.clients.find({$and: [{edad: {$gte: 26}}, {edad: {$lte: 35}}]}).pretty()
// 14 Borrar los clientes que se llamen 'Juan' y listar verificando el resultado.
db.clients.deleteMany({nombre: 'Juan'})
db.clients.find({}).pretty()
// 15 Eliminar además todos los documentos de clientes que hayan quedado con algún valor.
db.clients.deleteMany({})
db.clients.find({}).pretty()
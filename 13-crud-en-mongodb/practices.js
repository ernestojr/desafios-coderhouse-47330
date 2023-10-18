use baseCRUD

db.createCollection('mascotas')

db.mascotas.insertMany([
  {
    "nombre": "Firulay",
    "especie": "gato",
    "edad": 3
  },
  {
    "nombre": "Pancho",
    "especie": "perro",
    "edad": 10
  },
  {
    "nombre": "Lucia",
    "especie": "ave",
    "edad": 1
  },
  {
    "nombre": "Pintitas",
    "especie": "gato",
    "edad": 4
  },
]);

db.mascotas.findOne({especie:'gato'})
db.mascotas.findOne({especie:'ave'})
db.mascotas.findOne({especie:'perro'})

db.mascotas.countDocuments({especie:'gato'})

db.mascotas.find({especie:'gato'})

// ---------------------------------------------

use ecommerce

db.createCollection('users')

db.users.insertMany([
  {
    nombre: 'Henar',
    apellido: 'Climent',
    email: 'hc@email.com',
    telefono: '+56900000000',
    address: {
      ciudad: 'San Juan Alba',
      calle: 'Dr Valentin Leiva',
      numero: 28,
      depto: '706 A',
    },
  },
  {
    nombre: 'Elias',
    apellido: 'Belmonte',
    email: 'eb@email.com',
    telefono: '+56900000000',
    address: {
      ciudad: 'Gala Ojeda',
      calle: 'Doña Naima Martin',
      numero: 284,
      depto: '516',
    },
  },
  {
    nombre: 'Jon',
    apellido: 'Singh',
    email: 'js@email.com',
    telefono: '+56900000000',
    address: {
      ciudad: 'Víctor Alcazar',
      calle: 'Generala Julieta Pallares',
      numero: 1002,
    },
  },
  {
    nombre: 'Celestina',
    apellido: 'Andrade',
    email: 'ca@email.com',
    telefono: '+56900000000',
    address: {
      ciudad: 'Diego Mosquera',
      calle: 'Profesora Ana Castellano',
      numero: 498,
      depto: '345 B',
    },
  },
  {
    nombre: 'Gregoria',
    apellido: 'Granados',
    email: 'gg@email.com',
    telefono: '+56900000000',
    address: {
      ciudad: 'Víctor Alcazar',
      calle: 'Dr Abdelkader Pozo',
      numero: 324,
      depto: '444 C',
    },
  },
  {
    nombre: 'Yassin',
    apellido: 'Duran',
    email: 'yd@email.com',
    telefono: '+56900000000',
    address: {
      ciudad: 'Anais Barba',
      calle: 'Feliciana Osorio',
      numero: 2609,
    },
  },
  {
    nombre: 'Ignacio',
    apellido: 'Salinas',
    email: 'is@email.com',
    telefono: '+56900000000',
    address: {
      ciudad: 'Anais Barba',
      calle: 'Lic. Lina Millan',
      numero: 453,
      depto: '308 A',
    },
  },
])

// Para resilizar esta busqueda a profundidad deben colocar el cambio entre comillas
db.users.find({ 'address.ciudad': 'Víctor Alcazar'}).pretty()
// Nos da todas las ciudades sin repetición
db.users.distinct('address.ciudad')

db.users.find({ 'address.ciudad': /^Anais Barba$/i}).pretty()
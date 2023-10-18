mongosh

use school

db.students.insertMany([
  {
    "firstname": "Jose",
    "lastname": "Perez",
    "course": 40325,
    "email": "jp@email.com"
  },
  {
    "firstname": "Maria",
    "lastname": "Martinez",
    "course": 40325,
    "email": "mm@email.com"
  },
  {
    "firstname": "Julio",
    "lastname": "Gomez",
    "course": 40325,
    "email": "jg@email.com"
  },
  {
    "firstname": "Karla",
    "lastname": "Roa",
    "course": 40325,
    "email": "kr@email.com"
  },
  {
    "firstname": "Ana",
    "lastname": "Guerra",
    "course": 40325,
    "email": "ag@email.com"
  }
]);

db.students.find({});
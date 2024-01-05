const operations = require('../index');

console.log(operations.sum(2, 4) === 6 ? 'Operacion de suma exitosa 😍' : 'operacion de suma fallida 😱');

console.log(operations.rest(4, 3) === 1 ? 'Operacion de resta exitosa 😍' : 'operacion de resta fallida 😱');

console.log(operations.mult(2, 4) === 8 ? 'Operacion de multiplicacion exitosa 😍' : 'operacion de multiplicacion fallida 😱');

console.log(operations.divs(4, 4) === 1 ? 'Operacion de division exitosa 😍' : 'operacion de division fallida 😱');
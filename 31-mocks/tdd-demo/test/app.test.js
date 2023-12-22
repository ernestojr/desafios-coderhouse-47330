import { sum } from '../app.js';

let result;
let testOk = 0;
let testFail = 0;

// Algunos escenarios a plantear podrían ser:

// La función debe devolver null si algún parámetro no es numérico.
console.log('Test1. La función debe devolver null si algún parámetro no es numérico.');

result = sum(1, true);

if (result === null) {
  console.log('Test1 ha pasdo con exito ✅');
  testOk++;
} else {
  console.log('Test1 ha fallado 😱');
  testFail++;
}
// La función debe devolver 0 si no se pasó ningún parámetro

console.log('Test2. La función debe devolver 0 si no se pasó ningún parámetro.');

result = sum();

if (result === 0) {
  console.log('Test2 ha pasdo con exito ✅');
  testOk++;
} else {
  console.log('Test2 ha fallado 😱');
  testFail++;
}

// La función debe poder realizar la suma correctamente.

console.log('Test3. La función debe poder realizar la suma correctamente.');

result = sum(4, 3);

if (result === 7) {
  console.log('Test3 ha pasdo con exito ✅');
  testOk++;
} else {
  console.log('Test3 ha fallado 😱');
  testFail++;
}

// La función debe poder hacer la suma con cualquier cantidad de números.

console.log('Test4. La función debe poder hacer la suma con cualquier cantidad de números.');

result = sum(4, 3, 3, 5);

if (result === 15) {
  console.log('Test4 ha pasdo con exito ✅');
  testOk++;
} else {
  console.log('Test4 ha fallado 😱');
  testFail++;
}

console.log('Resumen:');
console.log('Pruebas exitosas', testOk);
console.log('Pruebas fallidas', testFail);
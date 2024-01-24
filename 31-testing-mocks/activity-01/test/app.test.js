import { login } from '../app.js';

let testOk = 0;
let testFail = 0;

// user = coderUser , password = 123

//Si se pasa un password vacío, la función debe consologuear (No se ha proporcionado un password)

console.log('T1: Si se pasa un password vacío, la función debe consologuear (No se ha proporcionado un password)');
try {
  login('coderUser');
  throw new Error('No deberías estar aca 😱');
} catch (error) {
  if (error.message === 'No se ha proporcionado un password') {
    console.log('T1 paso ✅');
    testOk++
  } else {
    console.log('T1 fallo 😱:', error.message);
    testFail++
  }
}
//Si se pasa un usuario vacío, la función debe consologuear (No se ha proporcionado un usuario)

console.log('T2: Si se pasa un usuario vacío, la función debe consologuear (No se ha proporcionado un usuario)');
try {
  login(undefined, '123');
  throw new Error('No deberías estar aca 😱');
} catch (error) {
  if (error.message === 'No se ha proporcionado un usuario') {
    console.log('T2 paso ✅');
    testOk++
  } else {
    console.log('T2 fallo 😱:', error.message);
    testFail++
  }
}

//Si se pasa un password incorrecto, consologuear (Contraseña incorrecta)

console.log('T3: Si se pasa un password incorrecto, consologuear (Contraseña incorrecta)');
try {
  login('coderUser', 'qwerty');
  throw new Error('No deberías estar aca 😱');
} catch (error) {
  if (error.message === 'Contraseña incorrecta') {
    console.log('T3 paso ✅');
    testOk++
  } else {
    console.log('T3 fallo 😱:', error.message);
    testFail++
  }
}

//Si se pasa un usuario incorrecto, consologuear (Credenciales incorrectas)

console.log('T4: Si se pasa un usuario incorrecto, consologuear (Credenciales incorrectas)');
try {
  login('coderUser1', 'qwerty');
  throw new Error('No deberías estar aca 😱');
} catch (error) {
  if (error.message === 'Credenciales incorrectas') {
    console.log('T4 paso ✅');
    testOk++
  } else {
    console.log('T4 fallo 😱:', error.message);
    testFail++
  }
}

//Si el usuario y contraseña coinciden, consologuear (logueado)

console.log('T5: Si el usuario y contraseña coinciden, consologuear (logueado)');
try {
  const result = login('coderUser', '123');
  if (result.message === 'logueado') {
    console.log('T5 paso ✅');
    testOk++
  } else {
    console.log('T5 fallo 😱:', result.message);
    testFail++
  }
} catch (error) {
  console.log('error', error.message);
  testFail++
}

console.log('Resumen:');
console.log('Pruebas exitosas', testOk);
console.log('Pruebas fallidas', testFail);
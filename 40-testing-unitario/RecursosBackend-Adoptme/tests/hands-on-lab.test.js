import chai from 'chai';

import { createHash, passwordValidation } from '../src/utils/index.js';
import UserDTO from '../src/dto/User.dto.js';

const expect = chai.expect;

describe('Pruebas de utilidades (hands on lab).', function() {
  it('Deberia hashear la contraseña de forma exitosa', async function() {
    const password = 'qwerty';
    const result = await createHash(password);
    expect(result).to.be.not.equals(password);
  });

  it('Deberia validar que la contraseña sea valida', async function() {
    const password = 'qwerty';
    const passwordHashed = await createHash(password);
    const user = { password: passwordHashed };
    const result = await passwordValidation(user, password);
    expect(result).to.be.ok;
  });

  it('Deberia crear el campo name a partir de first_name y last_name', function() {
    const user = {
      first_name: 'Ernesto',
      last_name: 'Rojas',
      role: 'admin',
      email: 'demo@mail.com',
    };
    const result = UserDTO.getUserTokenFrom(user);
    expect(result.name).to.be.equals('Ernesto Rojas');
  });
});
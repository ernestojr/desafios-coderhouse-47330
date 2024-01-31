import mongoose from 'mongoose';
import Assert from 'assert';

import UserDao from '../src/dao/Users.dao.js';

const assert = Assert.strict;

describe('Pruebas al modulo user dao.', function() {
  before(async function() {
    await mongoose.connect('mongodb+srv://developer:QmSQ489uyGo2WqJk@cluster0.beaz15s.mongodb.net/adoptme-mocha');
    this.userDao = new UserDao();
  });

  beforeEach(async () => {
    await mongoose.connection.collections.users.drop();
  });
  
  after(async function() {
    await mongoose.connection.close();
  });

  it('Debe crear un usuario de forma exitosa', async function() {
    const result = await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr@mail.com',
      password: 'qwerty',
    });
    assert.ok(result._id);
    assert.strictEqual(Array.isArray(result.pets), true);
    assert.deepEqual(result.pets, []);
    assert.strictEqual(result.email, 'jr@mail.com');
  });

  it('Debe obtener por email un usuario de forma exitosa.', async function() {
    await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr@mail.com',
      password: 'qwerty',
    });

    const results = await this.userDao.get({ email: 'jr@mail.com' });
    assert.strictEqual(Array.isArray(results), true);
    assert.strictEqual(results.length, 1);
    assert.ok(results[0]._id);
  });
});
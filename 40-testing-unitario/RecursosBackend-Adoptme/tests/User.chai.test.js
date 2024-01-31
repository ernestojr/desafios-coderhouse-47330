import mongoose from 'mongoose';
import chai from 'chai';

import UserDao from '../src/dao/Users.dao.js';

const expect = chai.expect;

describe('Pruebas al modulo user dao.', function() {
  before(async function() {
    await mongoose.connect('mongodb+srv://developer:QmSQ489uyGo2WqJk@cluster0.beaz15s.mongodb.net/adoptme-mocha');
    this.userDao = new UserDao();
  });

  beforeEach(async () => {
  });
  
  after(async function() {
    await mongoose.connection.collections.users.drop();
    await mongoose.connection.close();
  });

  it('Deberia obtener la lista de usuarios vacia de forma exitosa', async function() {
    const result = await this.userDao.get({});
    expect(result).to.be.deep.equal([]);
    expect(Array.isArray(result)).to.be.ok;
    expect(Array.isArray(result)).to.be.equals(true);
  });

  it('Debe crear un usuario de forma exitosa', async function() {
    const result = await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr1@mail.com',
      password: 'qwerty',
    });
    expect(result._id).to.be.ok;
    expect(Array.isArray(result.pets)).to.be.equals(true);
    expect(result.pets).to.be.deep.equal([]);
    expect(result.email).to.be.equals('jr1@mail.com');
  });

  it('Debe actualizar un usuario de forma exitosa', async function() {
    let user = await this.userDao.save({
      first_name: 'Jose',
      last_name: 'Rojas',
      email: 'jr2@mail.com',
      password: 'qwerty',
    });
    await this.userDao.update(user._id, {
      first_name: 'Jose Luis',
    });
    user = await this.userDao.getBy({ email: 'jr2@mail.com' });
    expect(user.first_name).to.be.equals('Jose Luis');
  });

});
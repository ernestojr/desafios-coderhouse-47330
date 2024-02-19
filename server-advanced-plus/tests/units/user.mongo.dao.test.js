import { expect } from 'chai';
import mongoose from 'mongoose';
import UserDao from '../../src/dao/user.mongodb.dao.js';

describe('[Unit] User Dao', function() {
  before(async function() {
    this.currentUser = null;
    this.userDao = new UserDao();
    await mongoose.connect(process.env.MONGODB_URI_TEST);
    await mongoose.connection.collections.users.drop();
  });

  after(async function() {
    await mongoose.connection.collections.users.drop();
    await mongoose.connection.close();
  });

  it('Debe crear un usuario correctamente', async function() {
    this.currentUser = await this.userDao.create({
      first_name: 'Pedro',
      last_name: 'Pascal',
      email: 'pedropacal@4fantasticos.com',
      password: 'qwerty',
      birthdate: '2024-02-15',
    });
    expect(this.currentUser).to.be.has.property('_id');
    expect(this.currentUser).to.be.has.property('role', 'user');
  });

  it('Debe obtener un usuario por su id correctamente', async function() {
    const user = await this.userDao.getById(this.currentUser._id);
    expect(user).to.be.ok;
    expect(String(user._id)).to.be.equals(String(this.currentUser._id));
  });

  it('Debe actualizar un usuario por su id correctamente', async function() {
    await this.userDao.updateById(this.currentUser._id, { first_name: 'Pedro Fatastic' });
    const user = await this.userDao.getById(this.currentUser._id);
    expect(user).to.be.ok;
    expect(user.first_name).to.be.equals('Pedro Fatastic');
  });

  it('Debe eliminar un usuario por su id correctamente', async function() {
    await this.userDao.deleteById(this.currentUser._id);
    const user = await this.userDao.getById(this.currentUser._id);
    expect(user).to.be.not.ok;
  });
});
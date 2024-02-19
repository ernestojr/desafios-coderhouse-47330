import path from 'path';
import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest(process.env.BASE_URL);

describe('Authentication testing', function() {
  it('debe registrar un usuario correctamente', async function() {
    this.email = `rdannohl${Date.now()}@myspace.com`;
    this.password = Date.now().toString();
      const userMock = {
        first_name: 'Richmound',
        last_name: 'Dannohl',
        email: this.email,
        password: this.password,
        birthdate: '2023-03-12',
      };
      const {
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/auth/register').send(userMock);
      expect(statusCode).to.be.equals(201);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('id');
      expect(_body).to.be.has.property('role', 'user');
  });
  it('debe loguear un usuario correctamente', async function() {
    const credentialsMock = {
      email: this.email,
      password: this.password,
    };
    const {
      headers,
      statusCode,
      ok,
      _body,
    } = await requester.post('/api/auth/login').send(credentialsMock);
    expect(statusCode).to.be.equals(200);
    expect(ok).to.be.ok;
    expect(_body).to.be.has.property('message', 'Logged in successfully 🎉.');
    const [key, value] = headers['set-cookie'][0].split('=');
    this.cookie = { key, value };
  });
  it('debe obteneter el usuario actual correctamente', async function() {
    const {
      statusCode,
      ok,
      _body
    } = await requester.get('/api/auth/current')
      .set('Cookie', [`${this.cookie.key}=${this.cookie.value}`]);
    expect(statusCode).to.be.equals(200);
    expect(ok).to.be.ok;
    expect(_body).to.be.has.property('email', this.email);
  });
  it('debe subir un archivo al usuario actual correctamente', async function() {
    const {
      statusCode,
      ok,
    } = await requester
      .post('/api/auth/current/upload/avatar')
      .set('Cookie', [`${this.cookie.key}=${this.cookie.value}`])
      .attach('file', path.resolve('./public/', 'cat.gif'));
    expect(statusCode).to.be.equals(204);
    expect(ok).to.be.ok;
  });
});



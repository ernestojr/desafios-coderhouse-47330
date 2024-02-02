import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8081');

describe('Adopme testing', () => {

  describe('Test of pets', () => {

    it('debe crear un mascota correctamente', async function() {
      const petMock = {
        name: 'Patitas',
        specie: 'Pez',
        birthDate: '01-02-2024',
      };
      const {
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/pets').send(petMock);
      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('payload');
      expect(_body.payload).to.be.has.property('_id');
      expect(_body.payload).to.be.has.property('adopted', false);
    });

    it('debe responder con un error 400 cuando no se envia el nombre al crear una mascota', async function() {
      const petMock = {
        specie: 'Pez',
        birthDate: '01-02-2024',
      };
      const {
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/pets').send(petMock);
      expect(statusCode).to.be.equals(400);
      expect(ok).to.be.not.ok;
      expect(_body).to.be.has.property('status', 'error');
      expect(_body).to.be.has.property('error', 'Incomplete values');
    });

    it('debe poder obtener las mascotas correctamente', async function() {
      const {
        statusCode,
        ok,
        _body,
      } = await requester.get('/api/pets');
      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status');
      expect(_body).to.be.has.property('payload');
      expect(Array.isArray(_body.payload)).to.be.equals(true);
    });

    it('debe actualizar una mascota de forma exitosa', async function() {
      const petMock = {
        name: 'Patitas',
        specie: 'Pez',
        birthDate: '01-02-2024',
      };
      const { _body: { payload: { _id } } } = await requester.post('/api/pets').send(petMock);
      const {
        statusCode,
        ok,
        _body,
      } = await requester.put(`/api/pets/${_id}`).send({ specie: 'Canino' });
      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status', 'success');
      expect(_body).to.be.has.property('message', 'pet updated');
    });

    it('debe eliminar una mascota de forma exitosa', async function() {
      const petMock = {
        name: 'Patitas',
        specie: 'Pez',
        birthDate: '01-02-2024',
      };
      const { _body: { payload: { _id: pid } } } = await requester.post('/api/pets').send(petMock);
      const {
        statusCode,
        ok,
        _body,
      } = await requester.delete(`/api/pets/${pid}`);
      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status', 'success');
      expect(_body).to.be.has.property('message', 'pet deleted');
      const { _body: { payload : pets } } = await requester.get(`/api/pets`); 
      const pet = pets.find(p => p._id === pid);
      expect(pet).to.be.not.ok;
    });

    it('debe crear un mascota incluyendo su avatar correctamente', async function() {
      const {
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/pets/withimage')
        .field('name', 'Patitas')
        .field('specie', 'Pez')
        .field('birthDate', '01-02-2024')
        .attach('image', './tests/cat.gif');

      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('payload');
      expect(_body.payload).to.be.has.property('_id');
      expect(_body.payload).to.be.has.property('adopted', false);
    });
  });

  describe('Test of sessions', () => {
    let cookie;
    let email;
    it('debe registar un usuario de forma exitosa.', async function() {
      email = `ernesto${Date.now()}@gmail.com`;
      const userMock = {
        first_name: 'Ernesto',
        last_name: 'Rojas',
        email,
        password: 'qwerty',
      };
      const {
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/sessions/register').send(userMock);
      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('payload');
    });

    it('debe loguear un usuario de forma exitosa.', async function() {
      const credentialsMock = {
        email,
        password: 'qwerty',
      };
      const {
        headers,
        statusCode,
        ok,
        _body,
      } = await requester.post('/api/sessions/login').send(credentialsMock);
      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('status', 'success');
      expect(_body).to.be.has.property('message', 'Logged in');
      const [key, value] = headers['set-cookie'][0].split('=');
      cookie = { key, value };
      console.log('cookie', cookie);
    });

    it('debe obtener el usuario actual de forma exitosa.', async function() {
      const {
        statusCode,
        ok,
        _body
      } = await requester.get('/api/sessions/current')
        .set('Cookie', [`${cookie.key}=${cookie.value}`]);
      expect(statusCode).to.be.equals(200);
      expect(ok).to.be.ok;
      expect(_body).to.be.has.property('payload');
      expect(_body.payload).to.be.has.property('email', email);
    });
  });
});
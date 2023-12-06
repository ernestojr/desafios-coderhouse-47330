import ToyDao from '../dao/toy.dao.js';

export default class ToysService {

  static findAll(filter = {}) {
    return ToyDao.get(filter);
  }

  static async create(payload) {
    console.log('Creando un nuevo juguete 👽');
    const toy = await ToyDao.create(payload);
    console.log(`Juguete creado correctamente (${toy._id}) 👽`);
    return toy;
  }

  static findById(uid) {
    return ToyDao.getById(uid);
  }

  static updateById(uid, payload) {
    return ToyDao.updateById(uid, payload);
  }

  static deleteById(uid) {
    return ToyDao.deleteById(uid);
  }
}
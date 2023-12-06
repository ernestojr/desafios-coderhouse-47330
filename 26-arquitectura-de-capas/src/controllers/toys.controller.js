import ToysService from '../services/toys.services.js';

export default class ToysController {
  static async create(data) {
    console.log('Creando el nuevo jueguete 👽');
    const newToy = await ToysService.create(data);
    console.log('Juguete creado corretamente 👽');
    return newToy;
  }

  static async get(query = {}) {
    const toys = await ToysService.findAll(query); 
    return toys;
  }

  static async getById(tid) {
    const toy = await ToysService.findById(tid);
    if (!toy) {
      throw new Error(`Id de juguete no fue encontrado ${tid} 😨`);
    }
    return toy;
  }

  static async updateById(tid, data) {
    await ToysController.getById(tid);
    console.log('Actualizando el jueguete 👽');
    await ToysService.updateById(tid, data);
    console.log('Actualizado el jueguete corretamente 👽');
  }

  static async deleteById(tid) {
    await ToysController.getById(tid);
    console.log('Elimiando el jueguete 👽');
    await ToysService.deleteById(tid);
    console.log('Elimiado el jueguete corretamente 👽');
  }
}
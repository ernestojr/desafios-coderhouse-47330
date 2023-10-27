import StudentModel from '../models/student.model.js';
import { Exception } from '../utils.js';

export default class StudentManager {
  
  static get(query = {}) {
    const criteria = {};
    if (query.course) {
      criteria.course = query.course;
    }
    return StudentModel.find(criteria);
  }

  static async getById(sid) {
    const student = await StudentModel.findById(sid);
    if (!student) {
      throw new Exception('No existe el estudiante 😨', 404);
    }
    return student;
  }

  static async create(data) {
    const student = await StudentModel.create(data);
    console.log('Studiante creado correctamente 😁');
    return student;
  }

  static async updateById(sid, data) {
    const student = await StudentModel.findById(sid);
    if (!student) {
      throw new Exception('No existe el estudiante 😨', 404);
    }
    const criteria = { _id: sid };
    const operation = { $set: data };
    await StudentModel.updateOne(criteria, operation);
    console.log('Estudiante actualizado correctamente 😁');
  }

  static async deleteById(sid) {
    const student = await StudentModel.findById(sid);
    if (!student) {
      throw new Exception('No existe el estudiante 😨', 404);
    }
    const criteria = { _id: sid };
    await StudentModel.deleteOne(criteria);
    console.log('Estudiante eliminado correctamente 😑');
  }
}
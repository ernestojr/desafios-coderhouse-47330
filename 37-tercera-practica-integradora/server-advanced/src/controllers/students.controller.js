import StudentsService from '../services/students.service.js';
import EmailService from '../services/email.service.js';
import { InvalidDataException, NotFoundException } from '../utils.js';

export default class StudentsController {
  static getAll(query = {}) {
    const filter = {};
    const opts = {
      page: query.page || 1,
      limit: query.limit || 10,
    };
    if (query.sort) {
      opts.sort = query.sort;
    }
    if (query.dni) {
      filter.dni = query.dni;
    }
    if (query.email) {
      filter.email = query.email;
    }
    return StudentsService.get(filter, opts);
  }
  static async getById(sid) {
    const student = await StudentsService.getById(sid);
    if (!student) {
      throw new NotFoundException(`No se encontro al estudiante ${sid} 😱`);
    }
    return student;
  }
  static async create(data) {
    const {
      first_name,
      last_name,
      email,
      dni,
    } = data;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !dni
    ) {
      throw new InvalidDataException('Todos los campos son requeridos 😱');
    }
    const student = await StudentsService.create({
      first_name,
      last_name,
      email,
      dni,
    });
    const emailService = EmailService.getInstance();
    await emailService.sendWelcomeEmail(student);
    return student;
  }
  static async updateById(sid, data) {
    await StudentsController.getById(sid);
    await StudentsService.updateById(sid, data);
  }
  static async deleteById(sid) {
    await StudentsController.getById(sid);
    await StudentsService.deleteById(sid);
  }
}
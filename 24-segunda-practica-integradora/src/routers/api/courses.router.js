import { Router } from 'express';
import passport from 'passport';
import CourseModel from '../../models/course.model.js';
import UserModel from '../../models/user.model.js';
import { authPolicies } from '../../utils.js';

const router = Router();

router.get('/courses',
  passport.authenticate('jwt', { session: false }),
  authPolicies(['student', 'professor', 'admin']),
  async (req, res) => {
    const courses = await CourseModel
      .find({})
      .populate('professor')
      .populate('students.student');
    res.status(200).json(courses);
  });

router.post('/courses',
  passport.authenticate('jwt', { session: false }),
  authPolicies(['professor', 'admin']),
  async (req, res) => {
    const body = req.body;
    const course = await CourseModel.create({
      ...body,
      professor: req.user.id,
    });
    res.status(201).json(course);
  });

router.post('/courses/:cid/students/:sid',
  passport.authenticate('jwt', { session: false }),
  authPolicies(['professor', 'admin']),
  async (req, res) => {
    const { params: { cid, sid } } = req;
    const course = await CourseModel.findById(cid);
    if (!course) {
      return res.status(404).json({ message: `No se encontró el curso ${cid} 👽` });
    }
    const student = await UserModel.findById(sid);
    if (!student) {
      return res.status(404).json({ message: `No se encontró el studiante ${sid} 👽` });
    }
    const studentExist = course.students.find(item => String(item.student) === sid);
    if (!studentExist) {
      course.students.push({ student: sid });
      await CourseModel.updateOne({ _id: cid }, course); 
    }
    return res.status(200).json({ message: 'Estudiante agregado exitosamente 👽' });
  });

router.delete('/courses/:cid/students/:sid',
  passport.authenticate('jwt', { session: false }),
  authPolicies(['professor', 'admin']),
  async (req, res) => {
    const { params: { cid, sid } } = req;
    const course = await CourseModel.findById(cid);
    if (!course) {
      return res.status(404).json({ message: `No se encontró el curso ${cid} 👽` });
    }
    const student = await UserModel.findById(sid);
    if (!student) {
      return res.status(404).json({ message: `No se encontró el studiante ${sid} 👽` });
    }
    const position = course.students.findIndex((item) => String(item.student) === sid);
    if (position !== -1) {
      course.students.splice(position, 1);
      await CourseModel.updateOne({ _id: cid }, course); 
    }
    return res.status(200).json({ message: 'Estudiante eliminado exitosamente 👽' });
  });

router.get('/courses/:cid',
  passport.authenticate('jwt', { session: false }),
  authPolicies(['student', 'professor', 'admin']),
  async (req, res) => {
    const { cid } = req.params;
    const course = await CourseModel
      .findById(cid)
      .populate('professor')
      .populate('students.student');
    if (!course) {
      return res.status(404).json({ message: `No se encontró el curso ${cid} 👽` });
    }
    res.status(200).json(course);
  });

router.put('/courses/:cid',
  passport.authenticate('jwt', { session: false }),
  authPolicies(['professor', 'admin']),
  async (req, res) => {
    const { params: { cid }, body } = req;
    const { title, description, professor, students, status } = body;
    const data = { title, description, professor, students, status };
    const course = await CourseModel.findById(cid);
    if (!course) {
      return res.status(404).json({ message: `No se encontró el curso ${cid} 👽` });
    }
    await CourseModel.updateOne({ _id: cid }, { $set: data });
    res.status(204).json({ message: 'Curso actualizado con éxito 👽' });
  });

router.delete('/courses/:cid',
  passport.authenticate('jwt', { session: false }),
  authPolicies(['admin']),
  async (req, res) => {
    const { cid } = req.params;
    const course = await CourseModel.findById(cid);
    if (!course) {
      return res.status(404).json({ message: `No se encontró el curso ${cid} 👽` });
    }
    await CourseModel.deleteOne({ _id: cid });
    res.status(200).json({ message: 'Curso eliminado con éxito 👽' });
  });

export default router;
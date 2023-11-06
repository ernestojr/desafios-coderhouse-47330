import { Router } from 'express';
import StudentModel from '../models/student.model.js';

const router = Router();

router.get('/students', async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const opts = { page, limit };
  const criteria = {};
  const result = await StudentModel.paginate(criteria, opts);
  res.render('students', buildResponse(result));
});

const buildResponse = (data) => {
  return {
    status: 'success',
    payload: data.docs.map(student => student.toJSON()),
    totalPages: data.totalPages,
    prevPage: data.prevPage,
    nextPage: data.nextPage,
    page: data.page,
    hasPrevPage: data.hasPrevPage,
    hasNextPage: data.hasNextPage,
    prevLink: data.hasPrevPage ? `http://localhost:8080/students?limit=${data.limit}&page=${data.prevPage}` : '',
    nextLink: data.hasNextPage ? `http://localhost:8080/students?limit=${data.limit}&page=${data.nextPage}` : '',
  };
};

export default router;
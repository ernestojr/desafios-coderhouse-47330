import { Router } from 'express';
import StudentModel from '../models/student.model.js';

const router = Router();

router.get('/students', async (req, res) => {
  const { page = 1, limit = 5, group, sort } = req.query; // sort: asc | desc
  const opts = { page, limit, sort: { grade: sort || 'asc' } };
  const criteria = {};
  if (group) {
    criteria.group = group;
  }
  const result = await StudentModel.paginate(criteria, opts);
  res.render('students', buildResponse({ ...result, group, sort }));
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
    prevLink: data.hasPrevPage ? `http://localhost:8080/students?limit=${data.limit}&page=${data.prevPage}${data.group ? `&group=${data.group}` : ''}${data.sort ? `&sort=${data.sort}` : ''}` : '',
    nextLink: data.hasNextPage ? `http://localhost:8080/students?limit=${data.limit}&page=${data.nextPage}${data.group ? `&group=${data.group}` : ''}${data.sort ? `&sort=${data.sort}` : ''}` : '',
  };
};

export default router;
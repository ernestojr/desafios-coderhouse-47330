import { Router } from 'express';

import { CustomError } from '../utils/CustomError.js'; 
import { generatorUserError, generatorUserIdError } from '../utils/CauseMessageError.js';
import EnumsError from '../utils/EnumsError.js';

const router = Router();

const users = [];

router.get('/users', (req, res) => {
  res.status(200).json(users);
});

router.post('/users', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    age,
    password,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !phone ||
    !age ||
    !password
  ) {
    CustomError.createError({
      name: 'Error creando el usuario',
      cause: generatorUserError({
        first_name,
        last_name,
        email,
        phone,
        age,
        password,
      }),
      message: 'Ocurrio un error mientras intentamos crear un usuario.',
      code: EnumsError.BAD_REQUEST_ERROR,
    });
  }

  const newUser = {
    id: users.length + 1,
    first_name,
    last_name,
    email,
    phone,
    age,
    password,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

router.get('/users/:uid', (req, res) => {
  const { uid } = req.params;
  const uidInt = parseInt(uid, 10);
  if (!uidInt) {
    CustomError.createError({
      name: 'Error validando el id del usuario',
      cause: generatorUserIdError(uid),
      message: 'Ocurrio un error mientras obteniamos el usuario por id.',
      code: EnumsError.INVALID_PARAMS_ERROR,
    });
  }
  res.status(200).json(users[uidInt - 1]);
});

export default router;
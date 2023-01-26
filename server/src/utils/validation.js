import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Invalid Email').isEmail(),
  body('name', 'Name must contain at least 3 Characters')
    .trim()
    .isLength({ min: 3 }),
  body(
    'password',
    'Password must contain at least 8 Characters, one capital letter and one number',
  ).isStrongPassword({
    minLength: 8,
    minSymbols: 0,
  }),
];

export const loginValidation = [
  body('email', 'Invalid Email').isEmail(),
  body(
    'password',
    'Password must contain at least 8 Characters, one capital letter and one number',
  ).isStrongPassword({
    minLength: 8,
    minSymbols: 0,
  }),
];

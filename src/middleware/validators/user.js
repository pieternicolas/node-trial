import { body } from 'express-validator/check';


export default [

	body('firstName')
		.exists().withMessage('Field is required'),
	body('lastName')
		.exists().withMessage('Field is required'),
	body('username')
		.exists().withMessage('Field is required'),
	body('email')
		.exists().withMessage('Field is required')
		.isEmail().withMessage('Invalid email format'),
	body('password')
		.isLength({ min: 6 }).withMessage('Must be more than 6 characters')

];
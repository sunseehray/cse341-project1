const { body, validationResult } = require('express-validator');
const ValidationRules = () => {
  return [
    // username must be an email
    body('firstName', 'First Name is required and must be a string.').notEmpty().isString(),
    // password must be at least 5 chars long
    body('lastName', 'Last Name is required and must be a string.').notEmpty().isString(),
    body('email', 'Email is required and must be an email.').notEmpty().isEmail(),
    body('favoriteColor', 'Favorite Color is required and must be a string.').notEmpty().isString(),
    body('birthday', 'Birthday must be a string.').isString()
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  ValidationRules,
  validate,
}

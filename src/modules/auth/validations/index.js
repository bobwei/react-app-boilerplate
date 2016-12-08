import { required, validate, validateWithRules } from 'modules/forms/validations';

export const loginForm = validateWithRules([{
  key: 'username',
  validate: validate(required()),
}, {
  key: 'password',
  validate: validate(required()),
}]);

export const signupForm = validateWithRules([{
  key: 'email',
  validate: validate(required()),
}, {
  key: 'username',
  validate: validate(required()),
}, {
  key: 'password',
  validate: validate(required()),
}]);

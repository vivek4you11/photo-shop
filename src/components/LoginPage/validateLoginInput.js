import Validator from 'validator';
import isEmpty from './is-empty';

export default data => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid email ID';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isLength(data.password, { min: 4, max: 40 })) {
    errors.password = 'Password Value should be more than 4 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Pasword field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    // error.path > caminho do error (input)
    // error.message > mensagem setada para o erro
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

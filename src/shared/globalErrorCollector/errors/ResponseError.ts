import { ValidationError as YupValidationError } from 'yup';
export class ResponseError {
  constructor(response: string, url?: string) {
    const err = new ErrorEvent('error', {
      error: this,
      message: 'Response Error',
    });
    dispatchEvent(err);
  }
}

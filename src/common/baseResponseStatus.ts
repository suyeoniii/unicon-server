export interface ResponseMessageModel {
  isSuccess: boolean;
  code: number;
  message: string;
}

export const ResponseMessage = {
  JWT_EMPTY: {
    isSuccess: false,
    code: 403,
    message: 'jwt token is empty',
  },
  JWT_VERIFICATION_FAIL: {
    isSuccess: false,
    code: 403,
    message: 'jwt verification failed',
  },
  INTERNAL_ERROR: {
    isSuccess: false,
    code: 5000,
    message: 'internal server error',
  },
  NOT_FOUND: {
    isSuccess: false,
    code: 404,
    message: 'resourcenot found',
  },
};

export default { ResponseMessage };

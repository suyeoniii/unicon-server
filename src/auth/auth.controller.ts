import { Response } from 'express';
import { ResponseMessage } from '../common/baseResponseStatus';
import { response } from '../common/response';
import Logger from '../config/logger';
import { Request } from '../interface/request.interface';

/**
 * API Name : Login
 * [POST] /auth/login
 */
const login = async (req: Request, res: Response): Promise<any> => {
  try {
  } catch (e) {
    Logger.error(e);
    res.json(response(ResponseMessage.INTERNAL_ERROR));
  }
};

export default { login };

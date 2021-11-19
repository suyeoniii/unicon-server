import { Response } from 'express';
import { Request } from '../interface/request.interface';
import { ResponseMessage } from './baseResponseStatus';
import { response } from './response';

export const notFoundHandler = (req: Request, res: Response): any => {
  res.send(response(ResponseMessage.NOT_FOUND));
};

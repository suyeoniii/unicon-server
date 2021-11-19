import Express from 'express';
import { Jwt } from './jwt.interface';

export interface Request extends Express.Request {
  verifiedToken: Jwt;
}

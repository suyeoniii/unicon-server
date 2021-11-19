import express = require('express');
import AuthController from './auth.controller';

export const authRouter = express.Router();

// POST login
authRouter.post('/login', AuthController.login);

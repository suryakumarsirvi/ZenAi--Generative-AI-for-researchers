import { Router } from 'express';
import { getMe, login, register } from '../controllers/auth.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const AuthRouter = Router();

AuthRouter.post('/register', register);
AuthRouter.post('/login', login);

AuthRouter.get('/me', isAuthenticated, getMe);

export default AuthRouter;
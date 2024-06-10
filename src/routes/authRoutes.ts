import express from 'express';
import { signin, signup, signout } from '../controllers/authController';

const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/signout', signout);

export const authRoutes = router;

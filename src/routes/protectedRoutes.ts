import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { dashboard, analytics, manage, settings, support } from '../controllers/protectedController';

const router = express.Router();

router.get('/dashboard', authMiddleware, dashboard)
router.get('/analytics', authMiddleware, analytics)
router.get('/manage', authMiddleware, manage)
router.get('/settings', authMiddleware, settings)
router.get('/support', authMiddleware, support)

export const protectedRoutes = router;

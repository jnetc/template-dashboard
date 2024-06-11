import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { dashboard, chat, marketplace, fileManager, sessions, documentation, shareReferral, support } from '../controllers/protectedController';

const router = express.Router();

router.get('/dashboard', authMiddleware, dashboard)
router.get('/chat', authMiddleware, chat)
router.get('/marketplace', authMiddleware, marketplace)
router.get('/file-manager', authMiddleware, fileManager)
router.get('/sessions', authMiddleware, sessions)
router.get('/documentation', authMiddleware, documentation)
router.get('/share-referral', authMiddleware, shareReferral)
router.get('/support', authMiddleware, support)

export const protectedRoutes = router;

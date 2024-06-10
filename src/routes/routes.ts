import express from 'express';
import { root, signup, signin } from '../controllers/controller';

const router = express.Router();

router.get('/', root)
router.get('/signup', signup);
router.get('/signin', signin);

// PAGE 404
router.use((_, res) => {
  res.status(404).render('404');
})

export const routes = router;

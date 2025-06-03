import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import {
  createGroup,
  getGroups,
  joinGroup,
  postProof,
  getProof
} from '../controllers/groups.controller';

const router = Router();

router.post('/', authMiddleware, createGroup);
router.get('/', authMiddleware, getGroups);
router.post('/:groupId/join', authMiddleware, joinGroup);
router.post('/:groupId/proof', authMiddleware, postProof);
router.get('/:groupId/proof', authMiddleware, getProof);

export default router;
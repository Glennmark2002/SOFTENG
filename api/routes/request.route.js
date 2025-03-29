import express from 'express';
import { getRequest, makeRequest } from '../controllers/request.controller.js';

const router = express.Router();

router.post('/create', makeRequest);
router.post('/get', getRequest);

export default router;
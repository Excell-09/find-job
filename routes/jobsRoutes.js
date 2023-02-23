import express from 'express';
const router = express.Router();

import { createJob, deleteJob, getAllJobs, history, updateJob } from '../controllers/jobsController.js';


router.route('/').post(createJob).get(getAllJobs)
router.route('/history').get(history)
router.route('/:id').delete(deleteJob).patch(updateJob);

export default router;

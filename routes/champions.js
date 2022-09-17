import express from 'express';
const router = express.Router();
import {index,championDetails} from 'file:///Users/mefepolat/Documents/Project%20Wild/controllers/champions.js';




router.route('/')
    .get(index)


router.route('/:name')
    .get(championDetails)

export default router;
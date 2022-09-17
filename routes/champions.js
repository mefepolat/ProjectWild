import express from 'express';
const router = express.Router();
import {index} from 'file:///Users/mefepolat/Documents/Project%20Wild/controllers/champions.js';




router.route('/')
    .get(index)




export default router;
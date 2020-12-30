import { Router } from 'express';
const router = Router();

import * as categoryCtrl from '../controllers/category.controller';

router.post( '/', categoryCtrl.createCategory );
router.put( '/:id', categoryCtrl.updateCategoryById );

export default router;
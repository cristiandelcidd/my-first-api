import { Router } from 'express';
const router = Router();

import * as productCtrl from '../controllers/product.controller';

router.post( '/', productCtrl.createProduct );
router.get( '/', productCtrl.getProducts );
router.get( '/:id', productCtrl.getProductById );
router.put( '/',  );
router.delete( '/',  );

export default router;
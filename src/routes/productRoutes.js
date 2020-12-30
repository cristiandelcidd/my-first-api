import { Router } from 'express';
const router = Router();

import * as productCtrl from '../controllers/product.controller';

router.post( '/', productCtrl.createProduct );
router.get( '/',  );
router.get( '/',  );
router.put( '/',  );
router.delete( '/',  );

export default router;
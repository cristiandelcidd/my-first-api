import { Router } from 'express';

import * as userCtrl from '../controllers/user.controller'

const router = Router();

router.post( '/', userCtrl.signUp );
router.post( '/', userCtrl.signIn );

export default router;
import {Router} from 'express';
import user_routes from './v1/open/Users';

const router = Router();

router.use('/users', user_routes);

export default router;

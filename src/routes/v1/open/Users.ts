import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.json('Teste OK')
});

export default router;

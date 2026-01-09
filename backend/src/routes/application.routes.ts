import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get my applications' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Apply to internship' });
});

router.get('/received', (req, res) => {
    res.json({ message: 'Get received applications (company)' });
});

router.patch('/:id/status', (req, res) => {
    res.json({ message: `Update application ${req.params.id} status` });
});

export default router;

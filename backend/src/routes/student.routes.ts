import { Router } from 'express';

const router = Router();

router.get('/profile', (req, res) => {
    res.json({ message: 'Get student profile' });
});

router.post('/profile', (req, res) => {
    res.json({ message: 'Create student profile' });
});

router.patch('/profile', (req, res) => {
    res.json({ message: 'Update student profile' });
});

export default router;

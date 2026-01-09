import { Router } from 'express';

const router = Router();

router.get('/profile', (req, res) => {
    res.json({ message: 'Get company profile' });
});

router.post('/profile', (req, res) => {
    res.json({ message: 'Create company profile' });
});

router.patch('/profile', (req, res) => {
    res.json({ message: 'Update company profile' });
});

router.get('/', (req, res) => {
    res.json({ message: 'List all verified companies' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get company ${req.params.id}` });
});

export default router;

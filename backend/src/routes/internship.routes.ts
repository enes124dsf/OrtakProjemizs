import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'List all internship posts' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get internship ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create internship post' });
});

router.patch('/:id', (req, res) => {
    res.json({ message: `Update internship ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete internship ${req.params.id}` });
});

export default router;

import { Router } from 'express';

const router = Router();

// Placeholder routes
router.get('/', (req, res) => {
    res.json({ message: 'Get all users - admin only' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get user ${req.params.id}` });
});

router.patch('/:id', (req, res) => {
    res.json({ message: `Update user ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete user ${req.params.id}` });
});

export default router;

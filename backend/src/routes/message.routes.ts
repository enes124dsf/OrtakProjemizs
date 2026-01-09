import { Router } from 'express';

const router = Router();

router.get('/conversations', (req, res) => {
    res.json({ message: 'Get my conversations' });
});

router.get('/conversations/:id', (req, res) => {
    res.json({ message: `Get conversation ${req.params.id} messages` });
});

router.post('/conversations', (req, res) => {
    res.json({ message: 'Start new conversation' });
});

router.post('/conversations/:id/messages', (req, res) => {
    res.json({ message: `Send message to conversation ${req.params.id}` });
});

export default router;

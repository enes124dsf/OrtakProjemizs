import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get my documents' });
});

router.post('/upload', (req, res) => {
    res.json({ message: 'Upload document' });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete document ${req.params.id}` });
});

export default router;

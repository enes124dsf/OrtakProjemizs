import { Router } from 'express';

const router = Router();

// Document management
router.get('/documents/pending', (req, res) => {
    res.json({ message: 'Get pending documents' });
});

router.patch('/documents/:id/approve', (req, res) => {
    res.json({ message: `Approve document ${req.params.id}` });
});

router.patch('/documents/:id/reject', (req, res) => {
    res.json({ message: `Reject document ${req.params.id}` });
});

// User management
router.get('/users', (req, res) => {
    res.json({ message: 'Get all users' });
});

router.patch('/users/:id/role', (req, res) => {
    res.json({ message: `Update user ${req.params.id} role` });
});

router.patch('/users/:id/ban', (req, res) => {
    res.json({ message: `Ban user ${req.params.id}` });
});

router.patch('/users/:id/unban', (req, res) => {
    res.json({ message: `Unban user ${req.params.id}` });
});

// Stats
router.get('/stats', (req, res) => {
    res.json({ message: 'Get admin statistics' });
});

export default router;

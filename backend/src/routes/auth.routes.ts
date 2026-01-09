import { Router } from 'express';

const router = Router();

// Placeholder - will be implemented in Step 3
router.get('/google', (req, res) => {
    res.json({ message: 'Google OAuth endpoint - to be implemented' });
});

router.get('/google/callback', (req, res) => {
    res.json({ message: 'Google OAuth callback - to be implemented' });
});

router.post('/logout', (req, res) => {
    res.json({ message: 'Logout successful' });
});

router.get('/me', (req, res) => {
    res.json({ message: 'Get current user - to be implemented' });
});

export default router;

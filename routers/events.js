import { Router } from 'express';
import { connect, disconnect } from '../utils/status.js';

const router = Router();

// Route to connect
router.post('/connect', (req, res) => {
    const result = connect(req.ip);
    if (result.success) {
        res.send('Connected');
    } else {
        res.status(500).send(result.message);
    }
});

// Route to disconnect
router.post('/disconnect', (req, res) => {
    const result = disconnect(req.ip);
    if (result.success) {
        res.send('Disconnected');
    } else {
        res.status(500).send(result.message);
    }
});

export default router;

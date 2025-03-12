import { Router } from 'express';

const router = Router();

// For the MVP, we'll create a basic placeholder route
// Later, you can uncomment and implement the full routes
// import authRoutes from './auth.routes';
// import userRoutes from './user.routes';
// import consultationRoutes from './consultation.routes';
// import documentRoutes from './document.routes';

// Define placeholder routes for now
router.get('/status', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is working correctly'
  });
});

// Later, you can add these routes:
// router.use('/auth', authRoutes);
// router.use('/users', userRoutes);
// router.use('/consultations', consultationRoutes);
// router.use('/documents', documentRoutes);

export default router;
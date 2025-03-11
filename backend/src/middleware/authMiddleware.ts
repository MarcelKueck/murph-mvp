import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError';

// Extend the Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token;

    // Check if token exists in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new ApiError(401, 'Not authorized, no token provided'));
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // Set user in request
    req.user = decoded;

    next();
  } catch (error) {
    next(new ApiError(401, 'Not authorized, token invalid'));
  }
};

const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new ApiError(401, 'Not authorized, no user'));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(403, `User role ${req.user.role} is not authorized to access this resource`)
      );
    }

    next();
  };
};

export { protect, authorize };

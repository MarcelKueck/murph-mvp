import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import ApiError from '../utils/apiError';

const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default status code and error message
  let statusCode = 500;
  let message = 'Internal Server Error';

  // If it's a custom API error, use its status code and message
  if ('statusCode' in err) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === 'SequelizeValidationError') {
    statusCode = 400;
    message = err.message;
  } else if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
  }

  // Log the error
  logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  if (process.env.NODE_ENV === 'development') {
    logger.error(err.stack);
  }

  // Send response
  res.status(statusCode).json({
    status: 'error',
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

export default errorHandler;

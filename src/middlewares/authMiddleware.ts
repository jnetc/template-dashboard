import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.token) {
    // We need to protect routes from unauthorized users
    // Show main page with sign in form if user is not logged in
    return res.redirect('/signin');
  }
  next();
}

import { Request, Response, NextFunction } from 'express';
import fs from 'fs'

export default (req: Request, res: Response, next: NextFunction) => {

  if (!req.cookies.token) {
    // We need to protect routes from unauthorized users
    // Show main page with sign in form if user is not logged in
    return res.redirect('/signin');
  }

  // If database doesn't exist
  const isDatabaseExist = fs.existsSync('users.json')
  if (!isDatabaseExist) {
    res.clearCookie('token')
    return res.redirect('/signin');
  }

  next();
}

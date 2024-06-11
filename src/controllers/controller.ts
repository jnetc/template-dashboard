import { Request, Response } from 'express';
import fs from 'fs'

interface User {
  username: string;
  password: string;
  id: string;
}

export const root = (req: Request, res: Response) => {

  const isDatabaseExist = fs.existsSync('users.json')
  if (!isDatabaseExist) {
    res.clearCookie('token')
    res.redirect('/signin')
    return
  }
  // Get token from cookie
  const token = req.cookies.token
  // console.log('session_isLogin:',req.session.isLogin);
  // console.log('session_cookie:',req.cookies['connect.sid']);

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('index', { title: 'Main', user: user?.username, error: null });
}

export const signup = (_: Request, res: Response) => {
  res.render('signup', { title: 'Sign Up', error: null });
}

export const signin = (_: Request, res: Response) => {
  res.render('signin', { title: 'Sign In', error: null });
}

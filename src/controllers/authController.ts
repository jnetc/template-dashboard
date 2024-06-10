// src/controllers/authController.ts
import { Request, Response } from 'express';
import fs from 'fs'

interface User {
  username: string;
  password: string;
  id: string;
}

export const signin = (req: Request, res: Response) => {
  // If database doesn't exist
  const isDatabaseExist = fs.existsSync('users.json')
  if (!isDatabaseExist) {
    res.render('index', { title: 'Sign In', user: null, error: `Database doesn't exist. Create user at first!` });
    return
  }

  const { username, password } = req.body;

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db
  const user = users.find((u) => u.username === username && u.password === password ? u : null)

  if (user) {
    // Set cookie and redirect to main page
    res.cookie('token', user.id, { httpOnly: true, secure: true, sameSite: 'strict' })
    return res.redirect('/')
  } else {
    res.render('index', { title: 'Sign In', user: null, error: `Sorry! Your username or password is incorrect` });
  }
};

export const signup = (req: Request, res: Response) => {
 const { username, password } = req.body;

    // If database doesn't exist
  const isDatabaseExist = fs.existsSync('users.json')
  console.log(username, password, isDatabaseExist);
  if (!isDatabaseExist) {
    fs.writeFileSync('users.json', JSON.stringify([{ username, password, id: crypto.randomUUID() }]));
    res.redirect('/')
    return
  }
  // Get data from database and check if user already exist
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>
  const isUserExist = users.some((u) => u.username === username)

  // If user not exist in database, add to the database and redirect to login page
  if (!isUserExist) {
    users.push({ username, password, id: crypto.randomUUID() })
    fs.writeFileSync('users.json', JSON.stringify(users));
    res.redirect('/')
    return
  }
  // if user exist send warning
  res.render('signup', { title: 'Sign Up', error: 'User already exist' });
};

export const signout = (_: Request, res: Response) => {
  res.clearCookie('token')
  return res.redirect('/')
};

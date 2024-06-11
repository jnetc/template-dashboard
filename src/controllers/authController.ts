import { Request, Response } from 'express';
import fs from 'fs'
import bcrypt from 'bcrypt'
import 'express-session'

interface User {
  username: string;
  password: string;
  id: string;
}

export const signin = (req: Request, res: Response) => {
  // If database doesn't exist
  const isDatabaseExist = fs.existsSync('users.json')
  if (!isDatabaseExist) {
    res.clearCookie('token')
    res.render('signin', { title: 'Sign In', user: null, error: `Database doesn't exist. Create user at first!` });
    return
  }

  const { username, password } = req.body;

  let errorMessage = '';


  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db

  const user = users.find((user) => {
    const userExist = user.username === username ? user : null
    if (!userExist) {
      errorMessage = `Username doesn't exist`
      return
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.password)
    if (!isPasswordMatch) {
      errorMessage = `Password doesn't match`
      return
    }

    return isPasswordMatch && user
  })

  if (user) {

    // Set cookie and redirect to main page
    // req.session.cookie.signed = true
    // req.session.isLogin = true;
    // req.session.cookie = {signed: true,  ...req.session.cookie}
    res.cookie('token', user.id, { httpOnly: true, secure: true, sameSite: 'strict' })
    return res.redirect('/dashboard')
  } else {
    res.render('signin', { title: 'Sign In', user: null, error: errorMessage });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const hash =  await bcrypt.hash(password, 12)

    // If database doesn't exist
  const isDatabaseExist = fs.existsSync('users.json')

  if (!isDatabaseExist) {
    res.clearCookie('token')
    fs.writeFileSync('users.json', JSON.stringify([{ username, password: hash, id: crypto.randomUUID() }]));
    res.redirect('/signin')
    return
  }
  // Get data from database and check if user already exist
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>
  const isUserExist = users.some((u) => u.username === username)

  // If user not exist in database, add to the database and redirect to login page
  if (!isUserExist) {
    users.push({ username, password: hash, id: crypto.randomUUID() })
    fs.writeFileSync('users.json', JSON.stringify(users));
    res.redirect('/signin')
    return
  }
  // if user exist send warning
  res.render('signup', { title: 'Sign Up', error: 'User already exist' });
};

export const signout = (_: Request, res: Response) => {
  res.clearCookie('token')
  return res.redirect('/signin')
};

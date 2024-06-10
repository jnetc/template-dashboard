import { Request, Response } from 'express';
import fs from 'fs'

interface User {
  username: string;
  password: string;
  id: string;
}


export const dashboard = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('dashboard', {
    title: 'Dashboard',
    user: user?.username,
  });
}
export const analytics = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('analytics', {
    title: 'Analytics',
    user: user?.username,
  });
}
export const manage = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('manage', {
    title: 'Manage',
    user: user?.username,
  });
}
export const settings = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('settings', {
    title: 'Settings',
    user: user?.username,
  });
}
export const support = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('support', {
    title: 'Support',
    user: user?.username,
  });
}

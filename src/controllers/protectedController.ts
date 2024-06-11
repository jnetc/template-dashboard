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
export const chat = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('chat', {
    title: 'Eiffel Chat',
    user: user?.username,
  });
}
export const marketplace = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('marketplace', {
    title: 'Marketplace',
    user: user?.username,
  });
}
export const fileManager = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('file-manager', {
    title: 'File Manager',
    user: user?.username,
  });
}
export const sessions = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('sessions', {
    title: 'Sessions',
    user: user?.username,
  });
}

export const documentation = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('documentation', {
    title: 'Documentation',
    user: user?.username,
  });
}

export const shareReferral = (req: Request, res: Response) => {
  // Get token from cookie
  const token = req.cookies.token

  // Get data from somewhere
  const db = fs.readFileSync('users.json', { encoding: 'utf-8' })
  const users = JSON.parse(db) as Array<User>

  // Find user in db by id
  const user = users.find((u) => u.id === token)
  // Show main page with username
  res.render('share-referral', {
    title: 'Share referral',
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

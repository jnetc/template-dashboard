import express from 'express';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config()

const sessionSecret = process.env.SESSION_SECRET!;

// ROUTES
import { authRoutes } from './routes/authRoutes';
import { protectedRoutes } from './routes/protectedRoutes';
import { routes } from './routes/routes';

const app = express();
const port = process.env.PORT || 3000;

// Templating EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser());

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },

}))

app.use(protectedRoutes)
app.use(authRoutes)
app.use(routes)



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

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


app.use(authRoutes)
app.use(protectedRoutes)
app.use(routes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

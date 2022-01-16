import express, { urlencoded, json } from "express";
import IndexRoutes from "./routes/index.routes";
import TasksRoutes from "./routes/tasks.routes";

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(urlencoded({ extended: false}));
app.use(json());

//Routes
app.use(IndexRoutes);
app.use('/tasks', TasksRoutes);

export default app;
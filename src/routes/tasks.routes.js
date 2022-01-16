import { Router } from "express";
import { connect } from "../database";

const router = Router();

router.get('/', async (req, res) =>{
    const db = await connect();
    const collection = await db.collection('tasks').find({}).toArray(); //query task's collection, find all things and set it to an array format
    res.json(collection);
});

router.post('/', async (req, res) => {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection('tasks').insertOne(task); //insert data into task
    res.json(result);
});

export default router;
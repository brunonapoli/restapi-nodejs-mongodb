import { Router } from "express";
import { connect } from "../database";

const router = Router();

router.get('/', async (req, res) =>{
    const db = await connect();
    const collection = await db.collection('tasks').find({}).toArray(); //query task's collection, find all things and set it to an array format
    console.log(collection);
    res.send('Main page of tasks')
});

export default router;
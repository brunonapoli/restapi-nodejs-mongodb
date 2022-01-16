import { Router } from "express";
import { connect } from "../database";
import { ObjectId } from "mongodb";

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
    const result = await db.collection('tasks').insertOne(task); //insert data into task collection
    res.json(result);
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connect();
        const resultId = await db.collection('tasks').findOne({_id: ObjectId(id)});
        res.json(resultId);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connect();
        const deleteId = await db.collection('tasks').findOneAndDelete({_id: ObjectId(id)});
        res.json(deleteId);
    } catch (error) {
        console.log(error);
    }
});

export default router;
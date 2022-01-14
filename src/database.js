import { MongoClient } from 'mongodb';

export async function connect(){
    try {
        const url = 'mongodb://localhost:27017';
        const client = await new MongoClient.connect(url);
        const db = client.db('node-mongodb-restapi');
        return db;
    } catch (error) {
        console.log(error);
    }
};
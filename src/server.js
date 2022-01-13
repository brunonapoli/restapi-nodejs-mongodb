import express from "express";

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Routes
app.get('/', (req, res) => {
    res.send('Working')
});

export default app;
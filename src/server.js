"use strict";

import express from "express";
const app = express();

app.use(express.json());

const port = 3000;
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () =>
    console.log(`App is listening on port ${port}`));

export default app;
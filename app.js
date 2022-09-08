const express = require('express');
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json())


const routes = require('./src/routes')(app);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Working on http://localhost:${process.env.SERVER_PORT}`);
});

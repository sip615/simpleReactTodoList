const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

//Route
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/public/index.html"));
});

//Start
app.listen(port, (req, res) => {
	console.log(`server listening on port: ${port}`);
});

const express = require('express');
const app = express();

app.use(express.static(__dirname + "/../client/dist"));

app.get("/", (req, res) => {
    console.log("Hello");
    res.send("Hello");
});

app.listen(3000);

// In order to update site after changes, run npm run build in client folder
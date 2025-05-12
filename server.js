const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const replicaApp = process.env.APP_NAME;

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request requested by ${replicaApp}`);
})

app.listen(PORT, () => {
    console.log(`${replicaApp} is listening to port ${PORT}`);
});
// This code sets up a simple Express server that serves an HTML file when the root URL is accessed.
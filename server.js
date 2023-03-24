const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const root = `${__dirname}/build/`; // or `${__dirname}/dist/`

app.use(express.static(root));

app.get('/*', (req, res) => {
    res.sendFile("index.html", {root});
})

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});

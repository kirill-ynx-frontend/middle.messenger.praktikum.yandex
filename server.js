const express = require('express');

const app = express();
const PORT = 3000;

// app.use(express.static('./'));
//
// app.listen(PORT, function () {
//     console.log(`App listening on port ${PORT}!`);
// });


// app.use(express.static('./static/'));
// app.use(express.static('./'));
// app.use(express.static(`${__dirname}/static/`));
// app.use(express.static(`${__dirname}/dist/`));
// app.use(express.static(`${__dirname}/`));
// app.use(express.static(__dirname));

// app.use(express.static(__dirname, { index: 'index.html' }));
//
// app.get('/*', function(req, res) {
//     res.sendFile(__dirname + '/dist/index.html');
// });


// through dist
// app.use(express.static(`${__dirname}/dist/`));
//
// app.get('/*', (req, res) => {
//     res.sendFile("index.html", { root: __dirname + "/dist/"});
// })

const root = `${__dirname}/build/`;
// const root = `${__dirname}/dist/`;

app.use(express.static(root));

app.get('/*', (req, res) => {
    res.sendFile("index.html", {root});
})

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
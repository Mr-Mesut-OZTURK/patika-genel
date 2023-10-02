const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;
const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
// const exampleMiddleWare = (req, res, next) => {
//     console.log({ req });
//     next();
// };
// app.use(exampleMiddleWare);
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/add_post', (req, res) => {
    res.render('add_post');
});
app.get('/post', (req, res) => {
    res.render('post');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');

// const ejs = require('ejs');
// const path = require('path');
const Post = require('./models/Post');

const port = 3000;
const app = express();

mongoose.connect('mongodb://localhost/clean-data-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/', async (req, res) => {
    const posts = await Post.find({});
    console.log({ posts });
    res.render('index', { posts });
});
app.get('/add-post', (req, res) => {
    res.render('add_post');
});
app.post('/save-post', (req, res) => {
    console.log(req.body);
    Post.create(req.body);
    res.redirect('/');
});
app.get('/post', (req, res) => {
    console.log(req.body);
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

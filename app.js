const express = require('express');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override')

const fs = require('fs')
const mongoose = require('mongoose');
const Post = require('./models/Post');

const pageController = require('./controller/pageController')
const postController = require('./controller/postController')

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
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
);
app.use(methodOverride('_method', {
    methods: ["POST", "GET"]
}))




// routes
app.get('/', pageController.getHomePage);
app.get('/post/:id', pageController.getPostPage);
app.get('/add-post', pageController.getAddPostPage);
app.get('/about', pageController.getAboutPage);
app.get('/contact', pageController.getContactPage);
app.get('/edit-post/:id', pageController.getEditPostPage);

app.post('/add-post', postController.createPost);
app.put('/edit-post/:id', postController.updatePost);
app.delete('/post/:id', postController.deletePost);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

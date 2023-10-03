const Post = require('../models/Post')


exports.getHomePage = async (req, res) => {
    const posts = await Post.find({});
    res.render('index', { posts });
}


exports.getPostPage = async (req, res) => {
    const id = req.params.id;
    const post = await Post.findById(id);
    res.render('post', { post });
}
exports.getAddPostPage = (req, res) => {
    res.render('add_post');
}
exports.getEditPostPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    res.render('edit_post', { post });
}




exports.getAboutPage = (req, res) => {
    res.render('about');
}

exports.getContactPage = (req, res) => {
    res.render('contact');
}


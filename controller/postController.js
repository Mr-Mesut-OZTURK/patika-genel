const Post = require("../models/Post")


exports.createPost = (req, res) => {

    let sampleFile;
    let uploadPath;
    const uploadDir = "public/uploads"
    const uniqId = Date.now().toString(36)


    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
    }

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }


    sampleFile = req.files.image;
    uploadPath = __dirname + '/public/uploads/' + uniqId + '-' + sampleFile.name;

    sampleFile.mv(uploadPath, async (err) => {

        if (err) return res.status(500).send(err);
        const newPost = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: '/uploads/' + uniqId + '-' + sampleFile.name,
        };
        await Post.create(newPost);
        res.redirect('/');

    });

}



exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    post.title = req.body.title
    post.description = req.body.description
    post.save()
    res.redirect(`/post/${req.params.id}`);
}



exports.deletePost = async (req, res) => {

    const post = await Post.findOne({ _id: req.params.id })
    let deletedImage = __dirname + '/public' + post.imageUrl
    fs.unlinkSync(deletedImage, (err) => {
        console.log({ err })
    })
    await Post.findByIdAndRemove(req.params.id)
    res.redirect("/");

}


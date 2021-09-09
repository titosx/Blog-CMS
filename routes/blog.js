const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware');
const Post = require('../models/post');

router.route('/')
    .get(async(req, res) => {
        const posts = await Post.find({});
        res.render('blog/index', { posts })
    })
    .post(isLoggedIn, async(req, res) => {
        const post = new Post(req.body.post);
        await post.save();
        res.redirect('/admin');
    })

module.exports = router;

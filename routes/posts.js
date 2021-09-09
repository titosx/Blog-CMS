const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware');
const Post = require('../models/post');

router.route('/:id')
    .get(async (req,res) => {
        const { id } = req.params;
        const foundPost = await Post.findById(id);
        if (!foundPost) {
            return res.redirect('/');
        }
        res.render('blog/show', { foundPost });
    })
    .put(isLoggedIn, async (req,res) => {
        const { id } = req.params;
        const foundPost = await Post.findByIdAndUpdate(id, {...req.body.post});
        res.redirect('/admin/');
    })
    .delete(isLoggedIn, async (req,res) => {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);
        res.redirect('/admin');
    })

module.exports = router;
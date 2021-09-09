const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware');
const Post = require('../models/post');
const passport = require('passport')

router.get('/', isLoggedIn, async (req, res) => {
    const posts = await Post.find({});
	res.render('cms/index', {posts});
})

router.route('/login')
    .get(async (req, res) => {
        const posts = await Post.find({});
        res.render('cms/login', {posts});
    })
    .post(passport.authenticate('local', {failureRedirect: '/admin/login'}), (req,res) => {
        res.redirect('/admin');
    })

router.get('/logout', isLoggedIn, (req, res) => {
	req.logout();
	res.redirect('/admin/login');
})

router.get('/new', async (req, res) => {
	res.render('cms/new');
})

router.get('/edit/:id', async (req, res) => {
	const { id } = req.params;
	const foundPost = await Post.findById(id);
	if (!foundPost) {
		return res.redirect('/');
	}
	res.render('cms/edit', {foundPost});
})

module.exports = router;
const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/user');
const methodOverride = require('method-override');
const passport = require('passport')
const LocalStrategy = require('passport-local');
const session = require('express-session');
const ejsMate = require('ejs-mate');
const blogRoutes = require('./routes/blog');
const cmsRoutes = require('./routes/cms');
const postsRoutes = require('./routes/posts');

mongoose.connect('mongodb://localhost:27017/blog');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();
app.use(express.urlencoded({ extended: true }));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig = {
	secret: 'thisisasecret!',
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7 
	}
}

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(3000, () => {
	console.log("Listening on port 3000")
});

app.use('/', blogRoutes);
app.use('/posts', postsRoutes);
app.use('/admin', cmsRoutes);
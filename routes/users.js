const express = require ('express');
const router = express.Router();
const passport = require ('passport');
const jwt = require ('jsonwebtoken');
const User = require ('../models/user');
const config = require ('../config/database');

router.post ('/register', (req, res, next) => {
	let newUser = new User ({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser (newUser, (err, user) => {
		if(err) {
			res.json({success: false, msg: 'Failed to register user'});
		}
		else {
			res.json({success: true, msg: 'User registered'});
		}
	});

});

router.post ('/auth', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername (username, (err, user) => {
		if (err) throw err;
		if (!user) {
			return res.json ({success: false, msg: 'User not found'});
		}

		User.comparePassword (password, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				const token = jwt.sign(user.toJSON(), config.secret, {
					expiresIn: 604800//week
				});

				res.json ({success: true, token: 'jwt '+token, user: {
					id: user._id,
					name: user.name,
					username: user.username,
					email: user.email
				}});
			} else {
				return res.json ({success: false, msg: 'Wrong password'});
			}
		})
	})
});

router.get ('/profile', passport.authenticate ('jwt', {session:false}), (req, res, next) => {
	res.json({user: req.user});
});


router.get ('/publicProfile/:username', (req, res, next) => {
	if (!req.params.username) {
		res.json ({success: false, msg: 'no username provided'});
	} else {
		User.findOne({username: req.params.username}).select('username email').exec( (err, user) => {
			if (err) {
				res.json ({success: false, msg: err});
			} else {
				if (!user) {
					res.json ({success: false, msg: 'username not found'});
				} else {
					res.json ({success: true, user: user});
				}
			}
		});
	}
});

module.exports = router;

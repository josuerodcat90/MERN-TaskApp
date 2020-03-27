const usersCrtl = {};

const User = require('../models/User');

usersCrtl.getUsers = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

usersCrtl.createUser = async (req, res) => {
	const { username } = req.body;
	const newUser = new User({ username });
	await newUser.save();
	res.json({ message: 'User Created!' });
};

usersCrtl.getUser = async (req, res) => {
	const user = await User.findById(req.params.id);
	res.json(user);
};

usersCrtl.updateUser = async (req, res) => {
	const { username } = rq.body;
	await User.findOneAndUpdate(
		{ id: req.params.id },
		{
			username
		}
	);
	res.json({ message: 'User Updated!' });
};

usersCrtl.deleteUser = async (req, res) => {
	await User.findOneAndDelete(req.params.id);
	res.json({ message: 'User Deleted!' });
};

module.exports = usersCrtl;

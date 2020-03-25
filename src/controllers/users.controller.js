const usersCrtl = {};

usersCrtl.getUsers = (req, res) => {
	res.json({ message: 'GET - Users Routes!' });
};

usersCrtl.createUser = (req, res) => {
	res.json({ message: 'POST - Users Routes!' });
};

usersCrtl.getUser = (req, res) => {
	res.json({ message: 'GET - User Request!' });
};

usersCrtl.updateUser = (req, res) => {
	res.json({ message: 'PUT - User Updated!' });
};

usersCrtl.deleteUser = (req, res) => {
	res.json({ message: 'DELETE - User Deleted!' });
};

module.exports = usersCrtl;

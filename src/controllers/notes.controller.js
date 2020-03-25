const notesCrtl = {};

notesCrtl.getNotes = (req, res) => {
	res.json({ message: 'GET - Notes Routes!' });
};

notesCrtl.createNote = (req, res) => {
	res.json({ message: 'POST - Notes Routes!' });
};

notesCrtl.getNote = (req, res) => {
	res.json({ message: 'GET - Note Request!' });
};

notesCrtl.updateNote = (req, res) => {
	res.json({ message: 'PUT - Note Updated!' });
};

notesCrtl.deleteNote = (req, res) => {
	res.json({ message: 'DELETE - Note Deleted!' });
};

module.exports = notesCrtl;

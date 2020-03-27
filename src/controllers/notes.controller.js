const notesCrtl = {};

const Note = require('../models/Note');

notesCrtl.getNotes = async (req, res) => {
	const notes = await Note.find();
	res.json(notes);
};

notesCrtl.createNote = async (req, res) => {
	const { title, content, date, author } = req.body;

	const newNote = new Note({
		title,
		content,
		date,
		author
	});
	await newNote.save();
	res.json({ message: 'Note Created!' });
};

notesCrtl.getNote = async (req, res) => {
	const note = await Note.findById(req.params.id);
	res.json(note);
};

notesCrtl.updateNote = async (req, res) => {
	const { title, content, author } = req.body;
	await Note.findOneAndUpdate(
		{ id: req.params.id },
		{
			title,
			content,
			author
		}
	);
	res.json({ message: 'Note Updated!' });
};

notesCrtl.deleteNote = async (req, res) => {
	await Note.findOneAndDelete(req.params.id);
	res.json({ message: 'Note Deleted!' });
};

module.exports = notesCrtl;

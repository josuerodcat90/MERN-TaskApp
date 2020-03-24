const mongosse = require('mongoose');

///define URI constant
const URI = process.env.URI || 'mongodb://localhost:27017/test';

///conect to DB
mongosse.connect(URI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

const connection = mongosse.connection;

connection.once('open', () => {
	console.log('>>>Cloud DB is connected!<<<');
});

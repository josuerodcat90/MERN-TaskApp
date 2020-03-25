require('dotenv').config();

const app = require('./app');
require('./utils/database');

///set main function to launch server
const main = async () => {
	await app.listen(app.get('port'));
	console.log(`>>>Server running on port ${app.get('port')}<<<`);
};

///execute main function
main();

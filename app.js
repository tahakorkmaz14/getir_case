require('./config');

const Server = require('./init/Server');
const Mongo = require('./init/Mongo');

class App {
	static async initialize() {
		console.info('GETIR CASE STUDY APP STARTING');
		const server = new Server();
		await server.start();
		await Mongo.initialize();
	}
}
App.initialize()
    .then(() => console.log('GETIR CASE STUDY APP STARTED'))
    .catch(err => {
			console.error(err);
			process.exit();
		});
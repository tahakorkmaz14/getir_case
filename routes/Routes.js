const RecordsController = require('../Controllers/Records');

class Routes {

  constructor() {
		this.api = '/getir_test';
    this.recordsController = new RecordsController();
  }

  routes(app) {
		app.all('/', (_req, res) => res.status(200)
			.send({
				code: 0,
				msg: 'success'
			}));

		app.post(`${this.api}/records`, this.recordsController.list);
  }

}

module.exports = Routes;
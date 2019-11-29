require('../models/records');
const mongoose = require('mongoose');
const Records = mongoose.model('Records');

class RecordsController {
	list(req, res) {
		console.log("sadasfasdf")
		const payload = req.body;		

		// Check Request Body Keys' Avaliability
		if (!payload.minCount || !payload.maxCount || !payload.startDate || !payload.endDate) {
			return res.status(400).send({
				code: 1,
				msg: 'Body should contain a set of startDate, endDate, minCount and maxCount keys',
			})
		}
		// Get Request Body Key as variables
		const startDate = new Date(req.body.startDate)
		const endDate = new Date(req.body.endDate)
		const minCount = payload.minCount;
		const maxCount = payload.maxCount;
		console.log(minCount,maxCount)

		if (minCount > maxCount) {
			return res.status(400).send({
				code: 1,
				msg: 'minCount should be less than maxCount',
			})
		}

		if (typeof minCount !== 'number') {
			return res.status(400).send({
				code: 1,
				msg: 'minCount should be a number',
			})
		}

		if (typeof maxCount !== 'number') {
			return res.status(400).send({
				code: 1,
				msg: 'maxCount should be a number',
			})
		}

		Records.aggregate([
			{
				$match: {
					$and: [ { "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } } ]
				},
			},
			{
				$project: {
						key: 1, createdAt: 1, _id: 0,
						totalCount: {$sum: '$counts'},
				}
			},
			{
				$match: {
						$and: [ { "totalCount": { $gte: minCount } }, { "totalCount": { $lte: maxCount } } ]
				}
			}
		], (err, result) => {
			if (err) {
				console.error(`[RECORDS CONTROLLER] ${err}`);

				return res.status(500).send(
					{
						msg: `${err}`,
						code: 1
					}
				);
			}
			return res.status(200).send({code:0, msg:"Success", records: result })
		});
	}
}


module.exports = RecordsController;
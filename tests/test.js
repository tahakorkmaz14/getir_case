const request = require('supertest')
const app = require('../app.js')

describe('Send Post Request', () => {
    it('should create a new post request and return 63 records', async () => {
        const res = await request(app)
            .post('/get')
            .send({
                "startDate": "2016-01-26",
                "endDate": "2018-02-02",
                "minCount": 2700,
                "maxCount": 3000
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('code')
        expect(res.body).toHaveProperty('msg')
        expect(res.body).toHaveProperty('records')
        expect(res.body.records.length).toEqual(63)
    })
})

describe('Wrong Post Endpoint', () => {
    it('should return 404 as response code', async () => {
        const res = await request(app)
            .post('/notget')
            .send({
                "startDate": "2016-01-26",
                "endDate": "2018-02-02",
                "minCount": 2700,
                "maxCount": 3000
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body.code).toEqual('404')
    })
})

describe('Post Request Without Body', () => {
    it('should return 0 results without body', async () => {
        const res = await request(app)
            .post('/get')
            .send({})
        expect(res.statusCode).toEqual(200)
        expect(res.body.records.length).toEqual(0)
    })
})
const test = require('tape')
const supertest = require('supertest')
const server = require('./router')


test('Initialize', (t) => {
let num = 2
	t.equal(num, 2, 'should return 2')
	t.end()
})

test('test the home route returns a status code of 200', (t) => {
	supertest(server)
	.get('/')
	.expect(200)
	.expect('content-type', /html/)
	.end((error, result) => { 
		t.error(error)
		t.equal(result.statusCode, 200, 'it returns 200')
		t.end()
	})
})

test('test the about route and returns a status code of 200', (t) => {
	supertest(server)
	.get('/about')
	.expect(200)
	.expect('content-type', /html/)
	.end((err, res) => {
		t.error(err)
		t.equal(res.statusCode, 200, 'returns 200 and about page')
		t.end()
	})
})


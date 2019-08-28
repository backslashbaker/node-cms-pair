const test = require('tape')
const supertest = require('supertest')
const server = require('./server')


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


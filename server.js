const http = require('http')

const message = "We are a great team! boom!"

const handler = (req, res) => {
	res.writeHead(200, {"Content-Type": "text/html"})
	console.log("i'm res", res)
	res.write(message)
	console.log("i'm readable", res.statusCode)
	res.end()
}



module.exports = handler


const server = http.createServer(handler);
const port = process.env.PORT || 3000
server.listen(port,  () => {
	console.log(`The server is listening on ${port}`)})
	



const message = "We are a great team! boom!"

const router = (req, res) => {
	if (req.url === "/") {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write(message)
	res.end()
}
	if (req.url === "/about"){
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write("You're are on the about page")
	res.end()
	}
}

module.exports = router

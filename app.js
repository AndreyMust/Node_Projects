	const http = require("http");
	console.log("Hello world");
	const server = http.createServer(function(request,response){
     
    		response.end("Hello Andrew NodeJS!");
     
	});

	server.listen(3010, 
			"127.0.0.1",	
			function(){ 
					console.log("The server started listening for requests on the port: 3010");
				}
	);
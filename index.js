process.env.NODE_ENV="development";

require('mahrio').runServer(process.env, __dirname)
 .then( function(server) {

 	server.route({
		path: '/',
		method: 'GET',
		handler: function(req, rep){
        	static_response = "<iframe src=\"https://player.twitch.tv/?channel=fireplacetv\" height=\"480\" ";
      		static_response += "width=\"680\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"yes\"></iframe>";

			rep(static_response);
		}
	});

 });

module.exports = client => {
	console.log(`${client.user.username} is up and running!`);
	
	function setPresence(){
		client.user.setPresence({
			status: "idle",
			activity: {
				name: `${client.prefix}help`,
				type: "LISTENING"
			}
		});
	};
	
	setPresence();
	setInterval(setPresence, 6e4);
};

module.exports = client => {
	console.log(`${client.user.username} is up and running!`);
	
	client.user.setPresence({
		status: "idle",
		activity: {
			name: `${client.prefix}help`,
			type: "LISTENING"
		}
	});
};

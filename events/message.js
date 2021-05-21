module.exports = (client, msg) => {
	if (msg.author.bot || msg.channel.type == "dm") return;

	if (msg.content == `<@${client.user.id}>` ||
		msg.content == `<@!${client.user.id}>`){
		msg.channel.send(`Hello! My prefix is \`${client.prefix}\`.`);
	}

	let args = msg.content.slice(client.prefix.length).trim().split(/ +/);
	let cmd = args.shift().toLowerCase();

	if (!msg.content.startsWith(client.prefix)) return;

	if (!client.commands.has(cmd)) return;

	client.commands.get(cmd).execute(msg, args);
};

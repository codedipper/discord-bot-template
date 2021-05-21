const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	execute(msg){
		const commands = msg.client.commands.array();
		let cmdString = "";

		for (let i = 0; i < commands.length; i++) {
			cmdString += `\`${commands[i].name}\``;

			if (i + 1 !== commands.length){
				/* eslint-disable */
				cmdString += ", ";
			}
		}

		/* eslint-enable */

		const helpEmbed = new MessageEmbed()
			.setTitle("List of Commands")
			.setColor(msg.client.colours[
				Math.floor(Math.random() * msg.client.colours.length)
			])
			.setDescription(cmdString)
			.setFooter(
				`Make sure to add "${msg.client.prefix}" at the front of each command!`
			);

		msg.channel.send(helpEmbed);
	}
};

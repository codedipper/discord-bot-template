const { options } = require("./assets/colours.json");
const { TOKEN, PREFIX } = require("./config.json");
const { Client, Collection } = require("discord.js");
const Enmap = require("enmap");
const { readdir, readdirSync } = require("fs");
const client = new Client({
	disableMentions: "everyone"
});

client.token = TOKEN;
client.prefix = PREFIX;
client.colours = options;
client.commands = new Collection();
client.db = new Enmap({
	name: "database",
	autoFetch: true
});

const cmdFiles = readdirSync("./commands/").filter(f => f.endsWith(".js"));

for (const file of cmdFiles){
	const command = require(`./commands/${file}`);
	
	client.commands.set(command.name, command);
}

readdir("./events/", (err, files) => {
	if (err) return console.error();
	
	files.forEach(file => {
		if (!file.endsWith(".js")) return;

		const event = require(`./events/${file}`);
		let eventName = file.split(".")[0];

		if (file.toLowerCase() == "ready.js"){
			client.once(eventName, event.bind(null, client));
			return;
		}

		client.on(eventName, event.bind(null, client));
	});
});

client.login();

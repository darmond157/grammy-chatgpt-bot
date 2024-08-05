const { Bot, Api } = require("grammy");

const bot = new Bot("6879565510:AAEUZ0K-7cvb9FCBinKQa8H6gGLvd6woNzo");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", async (ctx) => {
	const message = ctx.message;
});

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();

async function sendHelloTo12345() {
	// Send a message to 12345.
	await bot.api.sendMessage(12345, "Hello!");

	// Send a message and store the response, which contains info about the sent message.
	const sentMessage = await bot.api.sendMessage(12345, "Hello again!");
	console.log(sentMessage.message_id);

	// Send a message without the `bot` object.
	const api = new Api(""); // <-- put your bot token between the ""
	await api.sendMessage(12345, "Yo!");
}

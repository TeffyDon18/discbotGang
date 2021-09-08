require("dotenv").config();

const { Client } = require("discord.js");
const client = new Client();
const token = process.env.BOT_TOKEN;

// do stuff
client.login(token);

client.on("ready", () => {
  console.log(`${client.user.username} is awake!`);
});

// commands
const pfx = "$";

client.on("message", (message) => {
  const { channel, author, content } = message;
  if (author.bot) return;

  if (content.startsWith(pfx)) {
    const [cmdName, ...args] = content
      .trim()
      .substring(pfx.length)
      .split(/\s+/);

    try {
      switch (cmdName) {
        case "greet":
          channel.send(`What's good ${author.username}?`);
          break;
        case "flame":
          channel.send("Jelleh bro sucks!");
      }
    } catch (error) {
      console.error(error);
      channel.send("EXCUSE ME?");
    }
  }
});

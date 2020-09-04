const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'd!channels') {
		// No author permissions
		if (!msg.member.hasPermission("MANAGE_CHANNELS ")) {
				return message.reply("❌ You do not have permissions to kick members. Please contact a staff member")
						.then(m => m.delete({timeout: 5000}));
		}
		msg.guild.channels.cache.forEach(channel => channel.delete()
		)
  }
});

client.login(process.env.BOT_TOKEN);

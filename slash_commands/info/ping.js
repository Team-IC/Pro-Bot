const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Client, CommandInteraction, Message } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong!'),
        run: async (client, interaction) => {
            let embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Pong!')
                .setDescription(`${interaction.message.createdTimestamp - interaction.message.createdTimestamp}ms`)
                .setFooter(`${client.user.username} | Ping`);
            interaction.message.channel.send(embed);
        }
}
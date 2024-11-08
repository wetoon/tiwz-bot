#!/usr/bin/bun

import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import env from 'config';

const body = [
	new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play a song from a YouTube URL or search for a song')
		.addStringOption( option =>
			option.setName('input')
				.setDescription('Enter a YouTube URL or search query')
				.setRequired(true)
		)
		.toJSON(),
	new SlashCommandBuilder()
		.setName('pause')
		.setDescription('Pause the currently playing song')
		.toJSON()
];

const rest = new REST({ version: '10' }).setToken( env.get('app.token') );

console.log('Started refreshing application (/) commands.');
await rest.put( Routes.applicationCommands( env.get('app.client') ), { body } );
console.log('Successfully reloaded application (/) commands.\n');

#!/usr/bin/bun

import { Client, GatewayIntentBits } from "discord.js";
import env from "config";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildVoiceStates
	]
});

client.login( env.get("app.token") )

import discord
import asyncio
import logging

#logging.basicConfig(level=logging.INFO)


client = discord.Client()

@client.event
async def on_ready():
	print('Logged in as')
	print(client.user.name)

@client.event
async def on_message(message):
	if message.content.startswith('-help'):
		await client.send_message(message.channel, '**Help**\n```Command one\nCommand two\nCommand three```')


client.close()
#client.run('')

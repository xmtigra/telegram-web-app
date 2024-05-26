import {Telegraf} from "telegraf";

const TOKEN = '7137435593:AAHgs83gYyb1oVKxZBlvik85TUkRm88utHk'

const bot = new Telegraf(TOKEN)

const web_app_link = 'https://web-bot-telegraf.vercel.app/'

bot.start((ctx) => ctx.reply('Welcome!', {reply_markup: {keyboard: [[{text: "web app", web_app: web_app_link}]]} }))

bot.launch()
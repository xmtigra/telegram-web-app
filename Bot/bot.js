import {Telegraf} from "telegraf";

const TOKEN = '7137435593:AAHgs83gYyb1oVKxZBlvik85TUkRm88utHk'

const bot = new Telegraf(TOKEN)

const web_app_link = 'https://telegram-web-4gjbhnu7k-andriys-projects-088dca2f.vercel.app/'

bot.start((ctx) => ctx.reply('Welcome!', {
  reply_markup: {
    keyboard: [
            [
                {text: 'Open Web App', web_app: {
                    url: web_app_link
                  }}
            ]
        ]
    }
}))

bot.launch()
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')



const bot = new Telegraf("token");


bot.start((ctx) => ctx.reply('Привет! Я бот! Рад познакомиться! Сейчас ты можешь узнать, что я могу. Я могу показать вам свою группу.'))
bot.help((ctx) => ctx.reply('Пришли мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Алексей', (ctx) => ctx.replyWithPhoto(''))
bot.hears('Анна', (ctx) => ctx.replyWithPhoto(''))
bot.hears('Михаил', (ctx) => ctx.replyWithPhoto(''))
bot.hears('Илья', (ctx) => ctx.replyWithPhoto('' ))
bot.hears('Даниил', (ctx) => ctx.replyWithPhoto('' ))
bot.hears('Сергей', (ctx) => ctx.replyWithPhoto(''))
bot.hears('Андрей', (ctx) => ctx.replyWithPhoto('' ))
bot.hears('Анай', (ctx) => ctx.replyWithPhoto( '' ))
bot.hears('Аман', (ctx) => ctx.replyWithPhoto( '' ))
bot.hears('Аня', (ctx) => ctx.reply( 'Ты уверен, что Аня - это полное имя?'))
bot.hears('Леша', (ctx) => ctx.reply( 'Ты уверен, что Леша - это полное имя?'))
bot.hears('Мобильная разработка', (ctx) => ctx.reply ('Они лучшие'))
bot.hears('джейк', (ctx) => ctx.replyWithAnimation('https://99px.ru/sstorage/86/2017/07/image_86100717001237906221.gif'))
bot.hears('Привет',(ctx) => ctx.reply('Привет'))
bot.hears('Покажи лучший сериал',(ctx) => ctx.replyWithAnimation('https://bumazhnydom.ru/foto#gallery-1'))
bot.hears('i want to belive', (ctx) => ctx.replyWithPhoto('https://d2h1pu99sxkfvn.cloudfront.net/b0/10474470/422884304_fMSA87eogk/P7.jpg'))
bot.hears("Покажи босса", (ctx) => ctx.replyWithPhoto(''))
bot.hears("Покажи котика", (ctx) => ctx.replyWithPhoto("https://i.pinimg.com/474x/7c/45/9e/7c459e56fd8e93ee7b22ad7e7db94a54.jpg"))
bot.hears('кот',(ctx) => ctx.replyWithPhoto('http://ipic.su/img/img7/fs/jfk.1553593436.jpg'))

bot.launch()
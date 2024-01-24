import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const BOT_TOKEN = '6900394394:AAGYXgSotzeI52_hKjTh_XWgbLnT4mcwxSI'
const bot = new Telegraf(BOT_TOKEN)
const chats: number[] = [73505963]

export function startBot () {
  bot.start((ctx) => {
    // chats.push(ctx.chat.id)
    ctx.reply("You're registered!")
    console.log(ctx.chat.id, 'registered')
  })
  // bot.help((ctx) => ctx.reply('Send me a sticker'))
  // bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
  // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch()

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

export function sendMessage (message: string) {
  console.log(chats)
  chats.forEach(chat => {
    bot.telegram.sendMessage(chat, message)
  })
}

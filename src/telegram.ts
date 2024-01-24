import { Telegraf } from 'telegraf'
import { config } from 'dotenv'; config()

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string)
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
    bot.telegram.sendMessage(chat, message, {
      disable_web_page_preview: true
    })
  })
}

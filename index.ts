import { getPrice } from './src/pptr'
import { startBot, sendMessage } from './src/telegram'

startBot()

let lastPrice = ''

setInterval(async () => {
  let price: string = ''
  try {
    price = await getPrice('https://www.ozon.ru/product/nastolnaya-igra-crowd-games-zelenyy-dom-1331099308/?_fr=1705661538&sh=0C6aK55eEw') as string
    if (lastPrice === '') {
      lastPrice = price
      sendMessage(`Цена на момент начала отслеживания: ${price}`)
    }
    if (lastPrice !== price) {
      sendMessage(`Новая цена: ${price}`)
    }
  } catch (e) {
    if (lastPrice !== 'error') {
      sendMessage('Ошибка получения цены. https://ozon.ru/t/7Gj8VBV')
      lastPrice = 'error'
    }
  }
}, 5 * 60 * 1000)

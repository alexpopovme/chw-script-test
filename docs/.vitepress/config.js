import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './public',
  lang: 'ru-RU',
  title: "НСБ Виджет",
  description: "Документация",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      { text: 'Встраивание в сайт', link: '/embedding' },
      {
        text: 'Настройки',
        items: [
          { text: 'Все настройки', link: '/settings' },
          { text: 'Настройки чата', link: '/chat-settings' },
          { text: 'Настройки формы бронирования', link: '/book-settings' },
          { text: 'Параметры формы бронирования', link: '/book-params' },
          { text: 'Настройки окон', link: '/win-settings' },
          { text: 'Настройки телефонии', link: '/backcall-settings' },
          { text: 'Настройки автоответа в чате', link: '/contacts-dialog-settings' },
          { text: 'Настройки хуков аналитики', link: '/hooks' },
          { text: 'Другие настройки', link: '/other-settings' },
          { text: 'API', link: '/public_api' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Свойства и методы', link: '/public_api' },
          { text: 'Данные сессии', link: '/session_data' }
        ]
      }
    ],
    outlineTitle: 'На странице',
    docFooter: {
      prev: 'Предыдущая',
      next: 'Следующая'
    }
  }
})

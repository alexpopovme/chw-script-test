import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Чат Виджет",
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
          { text: 'Настройки окон', link: '/win-settings' },
          { text: 'Настройки телефонии', link: '/backcall-settings' },
          { text: 'Настройки автоответа в чате', link: '/contacts-dialog-settings' },
          { text: 'Настройки хуков аналитики', link: '/hooks-settings' },
          { text: 'Другие настройки', link: '/other-settings' },
          { text: 'API', link: '/public_api' }
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

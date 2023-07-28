# Встраивание в сайт

Виджет встраивается добавлением JavaScript на страницы сайта

## Код для встраивания

В код необходимо вставить ваши идентификаторы виджета и источника размещения.
В функцию `createWidget` (строка 8 в примере) вставьте идентификаторы вместо id и source.

```js{8}
function addWidget () {
  const chw = document.createElement('div')
  chw.id = 'chat-widget'
  document.body.append(chw)
  const chws = document.createElement('script')
  chws.src = 'https://cdn.rnsb.su:1443/nsb-widget/chat-widget.js'
  // ниже id - id виджета; source - идентификатор источника размещения 
  chws.onload = () => { window.ChatWidget.createWidget(id, source) }
  chws.onerror = e => console.log('Ошибка при загрузке виджета чата')
  document.head.append(chws)
}
setTimeout(addWidget, 0)
```

## Встраивание в страницу

При встаивании в `HTML` сайта код должен быть внутри тега `script` и размещаться в теле страницы.

```html
<body>
...
  <script>
    function addWidget () {
      const chw = document.createElement('div')
      chw.id = 'chat-widget'
      document.body.append(chw)
      const chws = document.createElement('script')
      chws.src = 'https://cdn.rnsb.su:1443/nsb-widget/chat-widget.js'
      // ниже id - id виджета; source - идентификатор источника размещения 
      chws.onload = () => { window.ChatWidget.createWidget(id, source) }
      chws.onerror = e => console.log('Ошибка при загрузке виджета чата')
      document.head.append(chws)
    }
    setTimeout(addWidget, 0)
  </script>
...
</body>
```

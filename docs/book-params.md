# Параметры формы бронирования

Праметры используются для индивидульного переопределения настроек формы бронирования на конкретной странице.  

## Доступные параметры:  

 `hotel`,  
 `embed_type`,  
 `initial_align`,  
 `scroll_y_offset`,  
 `hide_images`,

## Установка параметров

Доступно два варианта установки параметров  

1. В dataset элемента в который встраивается форма бронирования. (Имеет наивысший приритет)
2. В аргуметах функции создания виджета

## Пример установки параметров в dataset элемента

```html
  <div
    data-name="booking-form"
    data-hotel="1234"
    data-initial_align='{ "content": "left", "modal": "center" }'
></div>
``` 

## Пример установки параметров в аргуметах функции создания виджета
На строке 8 установлены параметры `scroll_y_offset` и `initial_align`

```js{8}
  function addWidget () {
  const chws = document.createElement('script')
  chws.src = 'https://cdn.rnsb.su:1443/nsb-widget-staging/chat-widget.js'
  chws.onload = () => {
    const chw = document.createElement('div')
    chw.id = 'chat-widget'
    document.body.append(chw)
    window.ChatWidget.createWidget(2, 'pyatigorsk', {booking_form: {scroll_y_offset: -330, initial_align: { content: 'left', modal: 'center'} } })
  }
  chws.onerror = e => console.log('Ошибка при загрузке виджета чата')
  document.head.append(chws)
}

addEventListener("DOMContentLoaded", addWidget);
```

## Установка параметра hotel

Установка параметра `hotel` может происходить автоматически из метатега NSBID (старый id отеля)  
Если тег есть, то запрашивается новый id и устанавливается в параметр.  
Имеет самый высший приоритет.





 

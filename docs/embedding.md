# Встраивание в сайт

Виджет встраивается добавлением JavaScript на страницы сайта

## Встраивание в HTML страницу

При встраивании в `HTML` сайта код должен быть внутри тега `script` и размещаться в теле страницы.
В код необходимо вставить ваши идентификаторы виджета и источника размещения.
В функцию `createWidget` (строка 11 в примере) вставьте идентификаторы вместо id и source. Например `createWidget(1, 2285)` или `createWidget(1, 'SOURCE_2285')`

```html{11}
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

## Встраивание в Drupal сайт

* Создайте пользовательский блок `Структура > схема блоков > пользовательские блоки` нажмите создать блок.
* В разделе `Описание блока` введите название блока
* В разделе `Содержимое` выберите `Текстовый формат: code` и вставьте код из примера ниже.
* Нажмите сохранить
* Зайдите в раздел `Структура > схема блоков` найдите нужную область например `Subfooter First` и нажмите `Расположить блок`
* Найдите в списке созданный пользовательский блок и нажмите `Разместить блок`
* Снимите галочку `Отображать заголовок`
* Нажмите `Сохранить блок`

В код необходимо вставить ваши идентификаторы виджета и источника размещения.

```html{9}
<script>
  function addWidget () {
    const chws = document.createElement('script')
    chws.src = 'https://cdn.rnsb.su:1443/nsb-widget/chat-widget.js'
    chws.onload = () => {
      const chw = document.createElement('div')
      chw.id = 'chat-widget'
      document.body.append(chw)
      // ниже 'id' - id виджета; 'source' - идентификатор источника размещения  
      window.ChatWidget.createWidget('id', 'source')
    }
    chws.onerror = e => console.log('Ошибка при загрузке виджета чата')
    document.head.append(chws)
  }
    
  addEventListener("DOMContentLoaded", addWidget)
</script>
```

## Пример блока кнопки в Drupal

Кнопка по клику открывает окно обратного звонка `order_call`  
Пользовательский блок. Текстовый формат: code 

```html
 <div>
  <a href="javascript:void(0)" class="button button--hover-style-2" onclick="FMX22?.win?.orderCall?.show()">
    Перезвоните мне
  </a>
</div>
```



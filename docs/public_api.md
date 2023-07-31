# API

Публичные свойства и методы виджета  
Доступ из глобального объекта `FMX22`. Перед вызовом необходимо убедиться, что метод доступен.

## version

Версия виджета

```js
FMX22.version
```

## chat.show

Показать чат

```js
FMX22.chat.show()
```

## chat.hide

Скрыть чат

```js
FMX22.chat.hide()
```

## chat.contactsDialog

Запуск автоматического диалога получения контактов пользователя

```js
FMX22.chat.contactsDialog()
```

## chat.toggle

Переключение скрытия/показа чата

```js
FMX22.chat.toggle()
```

## win.orderCall.show

Показать основное окно заказа обратного звонка

```js
FMX22.win.orderCall.show()
```

## win.orderCall.hide

Скрыть основное окно заказа обратного звонка

```js
FMX22.win.orderCall.hide()
```

## win.orderCall.toggle

Переключение скрытия/показа основного окна заказа обратного звонка

```js
FMX22.win.orderCall.toggle()
```

## promo

Для дополнительных окон можно использовать теже методы, что и у основного окна, только доступ к дополнительному окну осуществляется через его `handle`

```js
FMX22.win.promo.demo.toggle()
```

Если у этого окна в [настройках](./win-settings.md#promo) установлен `"handle": "demo"`


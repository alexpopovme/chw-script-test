# Данные сессии

Основные параметры бронирования хранятся в session storage в ключе `FMX22-widget-{id}-book-data`.
Где `{id}` это id виджета. 

При инициализации виджет считывает `dates` и `guests`, а при изменении в интерфейсе перезаписывает их.

## Весь объект параметров бронирования
```js
const dataExample = {
    hotel: 100072,
    location: 1401,
    dates: {
        start: "2024-07-02",
        end: "2024-07-16"
    },
    guests: {
        adults: [
            {
                place: "main"
            }
        ],
        kids: [
            {
                age: 7,
                place: "main"
            }
        ]
    },
    category: 703,
    wholeRoom: false,
    comment: null,
    customer: null
}

```


## Пример получения данных
```js
function getBookData () {
  const dataStr = sessionStorage.getItem(`FMX22-widget-123-book-data`)
  return JSON.parse(dataStr)
}
```

## Пример изменения данных
В текущей реализации поддерживается изменение только `dates` и `guests`.
Данные необходимо менять до открытия страницы с виджетом или до загрузки виджета.
```js
const data = getBookData()
data.dates = {start: '2024-12-21', end: '2025-01-03'}
sessionStorage.setItem(`FMX22-widget-123-book-data`, JSON.stringify(data))
```


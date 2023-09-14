# Настройки хуков
 
```json
{
  "hooks": {
    "backcall_open": [],
    "backcall_send": [],
    "chat_open": [],
    "chat_send": [],
    "chat_send_contacts": []
  }  
}
```

Хук может содержать строки для вызова аналитики ym или ga  

## Пример

Хук добавляется в формате: "аналитика:ID:имя_цели"  
аналитика - ym или ga  
ID (необязательно для ga) - id метрики  
имя цели - название цели. Не должно включать символы `/ \ & # ? = " + :`

```json
 {
  "hooks": {
    "backcall_open": ["ym:12341234213:TARGET_NAME", "ga:TARGET_NAME"],
    "backcall_send": [],
    "chat_open": [],
    "chat_send": [],
    "chat_send_contacts": []
  } 
}
```
`backcall_open` - открыто окно заказа обратного звонка  
`backcall_send` - отправлен запрос обратного звонка  
`chat_open` - открыт чат  
`chat_send` - отправлено сообщение без контактов   
`chat_send_contacts` - отправлено сообщение c контактами   

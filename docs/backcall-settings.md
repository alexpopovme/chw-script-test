# Настройки телефонии

Настройки телефонии содержатся в разделе `telephony_backcall`

```json
"telephony_backcall": {
    "internals": [],
    "strict": true,
    "process_tel_links": true,
    "response_text": {},         
    "event_text": {},         
    "chat_button_text": {}         
  }
```

## internals
список внутренних телефонов сотрудников куда будут идти звонки. Например `"internals": [204, 209]`    

## strict
если установлено `true`, то звонок будет идти только этим номерам, даже если они не ответили.

## process_tel_links
если установлено `true`, то на все ссылки вида `<a href="tel:" ...` будет повешен обработчик события `click` чтобы оповещать сервер при клике на ссылку.

## response_text
Текст ответов, которые будут показаны в окне при запросе обратного звонка.

```json{5}
"telephony_backcall": {
    "internals": [],
    "strict": true,
    "process_tel_links": true,
    "response_text": {
       "success": "Ищем свободного менеджера, пожалуйста ожидайте",
       "no_manager": "Все менеджеры заняты на других линиях. Вам перезвонит первый освободившийся менеджер.",
       "bad_phone": "В силу технических ограничений мы не можем выполнить звонок на ваш номер. Пожалуйста напишите Ваш вопрос в чат или воспользуйтесь альтернативными способами связи.",
       "bl_phone": "Ошибка голосовой линии. Пожалуйста свяжитесь со службой технической поддержки",
       "bl_ip": "Ошибка обработки соединения. Пожалуйста свяжитесь со службой технической поддержки",
       "failed": "Ошибка телефонии. Пожалуйста свяжитесь со службой технической поддержки"
    },         
    "event_text": {},         
    "chat_button_text": {}         
  }
```

`success` - Звонок заказан успешно и ожидаются дальнейшие уведомления от системы.  
`no_manager` - Нет свободных менеджеров. Дальнейшие уведомления от системы не ожидаются. Пользователю также будет показана кнопка открытия чата чтобы задать там свой вопрос.  
`bad_phone` - Неуспешно (запрос на иностранный номер). Дальнейшие уведомления от системы не ожидаются.    
`bl_phone` - Неуспешно (черный список номеров). Дальнейшие уведомления от системы не ожидаются.    
`bl_ip` - Неуспешно (черный список IP). Дальнейшие уведомления от системы не ожидаются.    
`failed` - Неуспешно (ошибка телефонии). Дальнейшие уведомления от системы не ожидаются.  

## event_text

При успешном запросе обратного звонка будут ожидаться уведомления от системы.  
Настройки текста уведомлений, которые будут показаны в окне. 

```json{6}
"telephony_backcall": {
    "internals": [],
    "strict": true,
    "process_tel_links": true,
    "response_text": {},         
    "event_text": {
      "missed": "Все менеджеры заняты на других линиях. Вам перезвонит первый освободившийся менеджер",
      "taken": "Менеджер подключился и набирает Ваш номер",
      "no_answer": "Менеджер не может до Вас дозвониться!"
    },         
    "chat_button_text": {}         
  }
```

`missed` - нет свободных менеджеров. Пользователю также будет показана кнопка открытия чата, чтобы задать там свой вопрос.  
`taken` - заказ взят в обработку  
`no_answer` - пользователь не ответил на звонок. Пользователю также будет показана кнопка открытия чата чтобы ответить там.
 
## chat_button_text

Текст кнопки открытия чата, которая будет показана в окне.

```json
"telephony_backcall": {
    "internals": [],
    "strict": true,
    "process_tel_links": true,
    "response_text": {},         
    "event_text": {},         
    "chat_button_text": {
       "missed": "Задайте Ваш вопрос в чате",
       "no_answer": "Ответить в чате"
    }         
  }
```

`missed` - текст кнопки, когда нет свободных сотрудников.   
`no_answer` - текст кнопки, когда пользователь пропустил звонок.   

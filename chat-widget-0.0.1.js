var ChatWidget=function(){"use strict";var k=Object.defineProperty;var H=(m,w,f)=>w in m?k(m,w,{enumerable:!0,configurable:!0,writable:!0,value:f}):m[w]=f;var n=(m,w,f)=>(H(m,typeof w!="symbol"?w+"":w,f),f);const m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IFoiLz48L3N2Zz4=",w="data:image/png;base64,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",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3UlEQVR4nO2cMWgUQRhG30XhBAkWcuCBlQraCAGx8kqxESuxtbSTlJZaWmppJaS0TSW2QRsbQYUUBhshNoGAGk5MVg5m8Lrzcv/ezP7/92D62Xm3u/N27w6EEEIIIYQQQgghhPjHe+A+cFKLUoYmjR3gEXCm0DyILiCPfeA5cL70xKIKyGMMvAKul55gVAHTYwu4A/RKTzaqgDy2gXXgVOlJRxWQxy7wBDhbevJRBeRxAGwAV0ofRFQBeRwCm8DN0gcTVcD0UNgVFqCwq0RAk4bCbkEBL4BfBiLGwEvg6ryfEO/MWrgJg/Sc6JvRWbGlsJtPQKafnpx+NBKxrbCbT0Cml7acm0YidiOH3XEETLOWYuy3gYiDiGG3qIDMufQp3jMQcRgp7KwEZFbTdf2r0eXJfdhZC8ispJ3OOyMRbt/YtSVgmlF6ufPHQIS7sFuGgMzFtHg/DUS4eWO3TAEZhV1hARmFXWEBmdBhV4OA0GFXm4BwYVergDBhV7sA92HXFQFuw66LAlyF3ayJfU43sGfAQ+B22lVM9vC1MAAeA98NRBwBr4Fby/oq5iKT3Us3tckn5ynwIO00hpSh38U3dhYTnUfOBeDEEsPuqPawa0tAM+N6+wV4k751MdmN3AOuAaejhV0JAc0CZ4+7sOuSgGFlAm50VcC4o5egH2m+ly0n6P0m3Hi+CXvfhn5Ix1R0G6oQa5lZAiI9itgo8eXhLgoY6WGcj8fR6y3sutydAat6IVOGYa3h5P0MWKs9nDwK6HUpnDwJ6Kdw+tSlcPIgYKDfnJURcMlDOHVRwMhTOHVFwIrXcKpdgPtwqlVAmHCqTUC4cKpBQOhwKilA4VRIgMKpoAD9XU3LNC2PfW/hZE1bC7/jNZyssV549+FkjcWihwonaxZZ+JDhZM1xFj50OFnj/o1T7fzPwutfDlvE/Run2lE4FUbhVJi3wN0l/GhCCCGEEEIIIYQQQgg88xc8fBUjmiJ1QwAAAABJRU5ErkJggg==",_="FMX22",v="https://dev-api.rnsb.ru:843/api",T="wss://dev-api.rnsb.ru:843/ws/obj",B=(h,s={})=>{let t=h;return typeof h=="string"&&(t=new URL(h)),new URL(`${t.origin}${t.pathname}?${new URLSearchParams([...Array.from(t.searchParams.entries()),...Object.entries(s)])}`).href},b=h=>{const s=localStorage.getItem(`${_}-widget-${h}-data`);return JSON.parse(s)},C=(h,s)=>{for(const[t,e]of Object.entries(h))e===null||typeof e>"u"||(typeof e=="object"&&!Array.isArray(e)?(s[t]=s[t]||{},C(e,s[t])):s[t]=t==="mountPoint"&&typeof e=="string"?document.querySelector(e):e)},L=h=>{if(JSON.parse(window.sessionStorage.getItem(`${_}-widget-${h}-hist`))===null){const t=[document.referrer,window.location.href];window.sessionStorage.setItem(`${_}-widget-${h}-hist`,JSON.stringify(t))}if(!window[_].histTO){const t=()=>{const e=JSON.parse(window.sessionStorage.getItem(`${_}-widget-${h}-hist`)),i=e[e.length-1],a=window.location.href;i!==a&&(e.push(a),window.sessionStorage.setItem(`${_}-widget-${h}-hist`,JSON.stringify(e))),window[_].histTO=setTimeout(t,500)};t()}},I={newChat:()=>`${v}/message/newchat/`,messages:(h,s)=>B(`${v}/message/chat/${h}/messages/`,s),backCall:()=>`${v}/telephony/backcall/`,settings:h=>`${v}/core/widget/${h}/`};class S{constructor(s={}){n(this,"response_number","");n(this,"response_email","");n(this,"contact_types",[{name:"phone",text:"Телефон",on_select_text:"Введите Ваш номер телефона",on_end_text:"Вам поступит звонок с номера {{PHONE}}"},{name:"whatsapp",text:"WhatsApp",on_select_text:"Введите Ваш номер WhatsApp",on_end_text:"Вам поступит звонок с номера {{PHONE}}"},{name:"telegram",text:"Telegram",on_select_text:"Введите Ваш номер Телеграм",on_end_text:"Вам поступит звонок с номера {{PHONE}}"},{name:"viber",text:"Viber",on_select_text:"Введите Ваш номер Вайбер",on_end_text:"Вам поступит звонок с номера {{PHONE}}"},{name:"email",text:"Эл. почта",on_select_text:"Введите Вашу электронную почту",on_end_text:"Вам будет отправлено электронное письмо с адреса {{EMAIL}}"}]);n(this,"steps",[{text:"На данный момент все операторы заняты, выберите как мы можем с Вами связаться",wait_input:!0,wait_time:0,buttons:null,info:"Выберите как с Вами связаться"},{text:"{{on_select_text}}",wait_input:!0,wait_time:500,buttons:null,info:"{{on_select_text}}"},{text:"Как к Вам обращаться?",wait_input:!0,wait_time:500,buttons:null,info:"Напишите Ваше имя"},{text:"{{on_end_text}}",wait_input:!1,wait_time:500,buttons:null,info:null}]);n(this,"running",!1);n(this,"exitFn",null);n(this,"currStep",-1);n(this,"contacts",{name:null,type:null,number:null});this.response_number=s.response_number,this.response_email=s.response_email,this.contact_types=(s.contact_types||this.contact_types).map(t=>(t.on_end_text=t.on_end_text.replace(/\{\{PHONE}}/g,this.response_number).replace(/\{\{EMAIL}}/g,this.response_email),t)),s.steps&&s.steps.forEach((t,e)=>{t&&(this.steps[e]=t)}),this.steps[0].buttons=this._genContactButtons()}getNextStep(){return this.currStep+=1,this.steps[this.currStep]}stop(){this.running&&this.exitFn&&(this.running=!1,this.exitFn("stopped"),this.exitFn=null)}_genContactButtons(){return this.contact_types.map(s=>({text:s.text,name:s.name}))}}class O{constructor(s,t){n(this,"settings",{id:null,data_type:"core__widget",created_at:null,updated_at:null,title:null,site:null,type:0,data:{chat_settings:{mount_point:document.querySelector("#chat-widget"),visible:!1,buttons:[{text:"Узнать статус заказа",command:"get_order_status"}],logo:{src:"",width:"0",height:"0"},text:{header:"Всегда рады ответить на Ваши вопросы!",welcome_message:"Здравствуйте!"},toggle_button_visible:{initial:!0,show_with_chat:!1,hide_with_chat:!1},initial_show_delay:0,history_limit:20,no_answer_limit:1e4},contact_dialog:{response_number:"88888888",response_email:"email@em.ru"}},source:window.FMX22.chat.source,company:null,hotel:null,operator:null,agent:null});n(this,"extraButtons",null);n(this,"dialog",null);n(this,"_token",null);n(this,"_connecting",!1);n(this,"_chatInitialized",!1);n(this,"_chatShown",!1);n(this,"_chatId",null);n(this,"_messages",[]);n(this,"_messagesProxy",null);n(this,"_sendCB",null);n(this,"_defaultPlaceholder","Напишите что-нибудь");n(this,"_hideButtonsOnDialog",!0);n(this,"_ws",null);n(this,"_root",null);n(this,"_error",{});n(this,"_wrapper",null);n(this,"_inner",null);n(this,"_container",null);n(this,"_chatToggleButton",null);n(this,"_openImg",null);n(this,"_closeImg",null);n(this,"_chatMsgsCont",null);n(this,"_chatInput",null);n(this,"_sendButton",null);n(this,"_errCont",null);n(this,"_buttonsEl",null);n(this,"_lastMsgEl",null);n(this,"_loadingChatHistory",!1);n(this,"_addingChatHistory",!1);n(this,"_chatHistoryOffset",0);n(this,"_chatInitialTO",null);n(this,"_chatAnswerTO",null);n(this,"_chatNoAnswerCbList",[]);const e=this;L(s.id);const i=b(s.id);if(i&&i.token&&(this._token=i.token),C(s,e.settings),this.extraButtons=t,this._messagesProxy=new Proxy(this._messages,{set(a,o,d){if(o==="length")return!0;if(Array.isArray(d)){a.push(...d.reverse());const r=new DocumentFragment;d.forEach((g,x)=>{const{type:y,direction:l,text:A}=g;e._lastMsgEl=e._addMessage(y,l,A),r.append(e._lastMsgEl)}),e._chatMsgsCont.prepend(r)}else{a[o]=d;const{type:r,direction:g,text:x,childEl:y}=d;e._lastMsgEl=e._addMessage(r,g,x),y&&e._lastMsgEl.append(y),e._chatMsgsCont.append(e._lastMsgEl),e._lastMsgEl.scrollIntoView({behavior:"smooth"})}return!0}}),!this.settings.data.chat_settings.mount_point)throw new Error("ChatWidget: Элемент не найден по селектору указанному в chat_settings.mount_point");this._root=this.settings.data.chat_settings.mount_point.attachShadow({mode:"open"}),Promise.resolve().then(()=>N).then(a=>{this._root.append(a.style),this._create()}),this.settings.data.chat_settings.initial_show_delay>0&&(this._chatInitialTO=setTimeout(()=>{this.show()},this.settings.data.chat_settings.initial_show_delay)),this._chatNoAnswerCbList.push(()=>{e.contactsDialog()})}_addRow(s){const t=document.createElement("div");return t.classList.add("chat-w-msg-row"),s==="send"&&t.classList.add("chat-w-msg-row-send"),t}_addMessage(s,t,e){if(s==="text")return this._addTextMessage(t,e);if(s==="button")return this._addBtnMessage(t,e)}_addTextMessage(s,t){const e=this._addRow(s);return e.insertAdjacentHTML("afterbegin",`<p class="chat-w-msg ${s==="send"?"chat-w-msg-send":""}">${t}</p>`),e}_addBtnMessage(s,t){const e=this._addRow(s);return e.insertAdjacentHTML("afterbegin",`<span class="chat-w-btn">${t}</span>`),e}_addActionBtn(s,t,e){return s.insertAdjacentHTML("beforeend",`<span class="chat-w-btn-act" data-name="${t}">${e}</span>`),s}_createNoteEl(s){const t=document.createElement("div");return t.classList.add("chat-w-msg-note"),t.insertAdjacentHTML("afterbegin",s),t}_create(){const s=this;this._wrapper=document.createElement("div"),this._wrapper.classList.add("chat-w"),this._inner=document.createElement("div"),this._inner.classList.add("chat-w-inn"),this._inner.insertAdjacentHTML("afterbegin",`
         <div class="chat-w-toggle-btn${this.settings.data.chat_settings.toggle_button_visible.initial?"":" hidden"}">
           <img src="${w}" class="chat-w-open-img" alt="Открыть Чат">
           <img src="${m}" class="chat-w-close-img hidden" alt="Закрыть Чат">
         </div>
    `),this._container=document.createElement("div"),this._container.classList.add("chat-w-cont","chat-w-cont-close"),this._container.insertAdjacentHTML("afterbegin",`
      <div class="chat-w-cont-inn">
        <div class="chat-w-header">
          <div class="chat-w-header-ava-cont">
             ${this.settings.data.chat_settings.logo&&this.settings.data.chat_settings.logo.src?`<img src="${this.settings.data.chat_settings.logo.src}" alt="Лого" style="width:${this.settings.data.chat_settings.logo.width};height:${this.settings.data.chat_settings.logo.height}">`:""}
          </div>
          <span class="chat-w-header-title">${this.settings.data.chat_settings.text.header}</span>
        </div>
        <div class="chat-w-err hidden"><div></div></div>
        <div class="chat-w-msgs"></div>
        <div class="chat-w-btns"></div>
        <div class="chat-w-msg-cont">
           <input type="text" placeholder="${this._defaultPlaceholder}">
           <div class="chat-w-msg-send-cont">
              <img src="${f}" alt="Отправить сообщение">
           </div>
        </div>
      </div>
    `),this._inner.append(this._container),this._wrapper.append(this._inner),this._root.append(this._wrapper),this._chatToggleButton=this._wrapper.querySelector(".chat-w-toggle-btn"),this._openImg=this._wrapper.querySelector(".chat-w-open-img"),this._closeImg=this._wrapper.querySelector(".chat-w-close-img"),this._chatMsgsCont=this._wrapper.querySelector(".chat-w-msgs"),this._buttonsEl=this._wrapper.querySelector(".chat-w-btns"),this._sendButton=this._wrapper.querySelector(".chat-w-msg-send-cont"),this._chatInput=this._wrapper.querySelector(".chat-w-msg-cont>input"),this._errCont=this._wrapper.querySelector(".chat-w-err");for(const t of this.settings.data.chat_settings.buttons){const e=document.createElement("span");e.textContent=t.text,e.classList.add("chat-w-btn"),e.addEventListener("click",()=>{this._send(t.text,{command:t.command})}),this._buttonsEl.append(e)}if(this._chatToggleButton.addEventListener("click",()=>{this.toggle()}),this._sendButton.addEventListener("click",()=>{this._send()}),this._chatInput.addEventListener("keyup",t=>{t.key==="Enter"&&this._send()}),Object.defineProperty(this._error,"message",{set(t){t?(s._errCont.innerHTML=`
                  <div>
                    <p>${t.title}</p>
                    <span>${t.text}</span>
                  </div>
                  `,s._errCont.classList.remove("hidden")):s._errCont.classList.add("hidden")}}),this.settings.data.chat_settings.visible&&this.show(),this.extraButtons){const t=new DocumentFragment;this.extraButtons.forEach(e=>{const i=document.createElement("div");i.classList.add("chat-w-extra-btn"),i.style.backgroundColor=e.color||"unset",i.insertAdjacentHTML("afterbegin",`<img src="${e.imgSrc}" style="${e.imgStyle||""}" alt="${e.title||""}">`),e.action&&i.addEventListener("click",e.action),t.append(i)}),this._inner.append(t)}}_getCurrentURL(){return window.location.href}_updateChatData(s){try{const t=b(this.settings.id);this._token||(this._token=s.token),localStorage.setItem(`${_}-widget-${this.settings.id}-data`,JSON.stringify({...t,...s}))}catch(t){const e=new Error("Ошибка сохранения локальных данных виджета");throw e.origError=t,e}}async _onShowChat(){if(!this._chatShown){const s=b(this.settings.id);if(s){let t=await this._getMessages(s.chat);this._messagesProxy.push(t),setTimeout(()=>{this._lastMsgEl&&this._lastMsgEl.scrollIntoView(),this._chatMsgsCont.addEventListener("scroll",async()=>{this._chatMsgsCont.scrollTop===0&&!this._addingChatHistory?(this._addingChatHistory=!0,t.length&&(t=await this._getMessages(s.chat)),t.length&&(this._lastMsgEl.scrollIntoView(),this._messagesProxy.push(t),this._lastMsgEl.scrollIntoView()),setTimeout(()=>{this._addingChatHistory=!1},300)):this._chatMsgsCont.scrollTop===0&&this._addingChatHistory&&t.length&&this._lastMsgEl.scrollIntoView()})},100)}else setTimeout(()=>{this._messagesProxy.push({type:"text",direction:"receive",text:this.settings.data.chat_settings.text.welcome_message,data:{}})},800);this._chatShown=!0}}async _initializeChat(s){this._connecting=!0;const t=b(this.settings.id),e=!t||!t.chat;let i={},a;if(e){try{a=await this._newChat(s.text)}catch(o){throw this._connecting=!1,this._chatInitialized=!1,o}try{i=this._token?{chat:a.data.chat,lead:a.data.lead}:a.data,this._updateChatData(i)}catch(o){throw this._connecting=!1,this._chatInitialized=!1,o}}else i=t;try{this._chatId=i.chat;const o=`${T}/${this._token.key}/`;this._ws=await new WebSocket(o),this._ws.addEventListener("error",()=>{const d=new Error("Соединение не может быть установлено");this._error.message={title:d.message,text:""},console.error(d.message)}),this._ws.addEventListener("message",d=>{this._error.message=null;const r=JSON.parse(d.data);if(r.type!=="chat"||r.data.sender===this._token.identity||!r.data.content)return;const g={type:"text",direction:"receive",text:r.data.content,data:r.data};this._messagesProxy.push(g),clearTimeout(this._chatAnswerTO)}),this._ws.addEventListener("open",()=>{this._ws.send(JSON.stringify({type:"subscribe",data_type:"messaging__chat",object_id:i.chat,window_handler:`chat-${i.chat}-lead-${i.lead}`})),this._ws.send(JSON.stringify({type:"subscribe",data_type:"messaging__message",object_id:i.chat,window_handler:`chat-${i.chat}-lead-${i.lead}`})),e||(this._error.message=null,this._ws.send(JSON.stringify({type:"create_chat_message",data:{...s.data,chat:i.chat}})))}),this._messagesProxy.push(s),this._connecting=!1,this._chatInitialized=!0}catch(o){this._connecting=!1,this._chatInitialized=!1;const d=new Error("Соединение не может быть установлено");throw d.origError=o,d}}async _send(s="",{command:t}={}){const e=this;if(!this._chatInput.value&&!s)return;this._error.message=null,clearTimeout(e._chatAnswerTO);const i=s||this._chatInput.value;let a={},o="text";const d="send";this._chatInput.value="",t?(a={content:s,command:t,data_type:"messaging__message"},o="button"):(a={content:i,data_type:"messaging__message"},o="text");const r={type:o,direction:d,text:i,data:a};if(this._chatInitialized)try{if(r.data.chat=this._chatId,this._ws.send(JSON.stringify({type:"create_chat_message",data:r.data})),this._ws.readyState!==1)throw new Error("Соединение не установлено");this._messagesProxy.push(r)}catch(g){this._error.message={title:g.message,text:""},console.error(g);return}else try{await this._initializeChat(r)}catch(g){this._error.message={title:g.message,text:""},console.error(g.origError);return}this.settings.data.chat_settings.no_answer_limit>0&&(this._chatAnswerTO=setTimeout(()=>{e._chatNoAnswerCbList.forEach(g=>{setTimeout(g,0)})},this.settings.data.chat_settings.no_answer_limit)),this._sendCB&&this._sendCB(r)}async _newChat(s){let t,e,i;try{t=JSON.stringify({text:s,url:this._getCurrentURL(),widget:this.settings.id,source:this.settings.source})}catch(a){const o=new Error("Неправильный формат body для newchat");throw o.origError=a,o}try{e=await fetch(I.newChat(),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:this._token?this._token.key:window[_].webKey},body:t})}catch(a){const o=new Error("Ошибка при создании чата");throw o.origError=a,o}try{i=await e.json()}catch{const o=new Error("Ошибка при создании чата");throw o.origError=e.statusText,o}if(e.ok)return i;{const a=new Error(JSON.stringify(i));throw a.origError=e.statusText,a}}async _getMessages(s){const t={limit:this.settings.data.chat_settings.history_limit,offset:this._chatHistoryOffset};try{const e=await fetch(I.messages(s,t),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:this._token?this._token.key:window[_].webKey}}),i=await e.json();if(e.ok)return this._chatHistoryOffset=this._chatHistoryOffset+this.settings.data.chat_settings.history_limit,i.data.results.map(a=>({type:"text",direction:a.sender===this._token.identity?"send":"receive",text:a.content,data:a}));throw new Error((i==null?void 0:i.detail)||e.statusText)}catch(e){this._error.message={title:e.message,text:""},console.error(e)}}static async getSettings(s){const t=window.sessionStorage.getItem(`${_}-widget-${s}-settings`);b(s);let e,i;try{if(t)return JSON.parse(t)}catch(a){const o=new Error("Неправильный формат настроек виджета");throw o.origError=a,o}try{e=await fetch(I.settings(s),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:window[_].webKey}})}catch(a){const o=new Error("Ошибка запроса настроек виджета");throw o.origError=a,o}try{i=await e.json()}catch{const o=new Error("Ошибка запроса настроек виджета");throw o.origError=e.statusText,o}if(e.ok){const a=i?i.data:{};return window.sessionStorage.setItem(`${_}-widget-${s}-settings`,JSON.stringify(a)),a}else{const a=new Error(JSON.stringify(i));throw a.origError=e.statusText,a}}hide(){this._container.classList.remove("chat-w-cont-open"),this._openImg.classList.remove("hidden"),this._container.classList.add("chat-w-cont-close"),this._closeImg.classList.add("hidden"),this.settings.data.chat_settings.visible=!1,this.settings.data.chat_settings.toggle_button_visible.hide_with_chat&&this._chatToggleButton.classList.add("hidden")}show(){clearTimeout(this._chatInitialTO),this._container.classList.remove("chat-w-cont-close"),this._closeImg.classList.remove("hidden"),this._container.classList.add("chat-w-cont-open"),this._openImg.classList.add("hidden"),this.settings.data.chat_settings.toggle_button_visible.show_with_chat&&this._chatToggleButton.classList.remove("hidden"),this.settings.data.chat_settings.visible=!0,this._onShowChat()}toggle(){this.settings.data.chat_settings.visible?this.hide():this.show()}async contactsDialog(s){const t=this;t.settings.data.chat_settings;const e=new S(s||t.settings.data.contact_dialog);this.dialog=e;const i=e.getNextStep(),a=()=>new Promise((l,A)=>{e.exitFn=l,clearTimeout(t._chatAnswerTO),setTimeout(()=>{if(this._messagesProxy.push({type:"text",direction:"receive",text:i.text,data:{}}),i.buttons){const u=t._addRow("receive"),p=document.createElement("div");p.classList.add("chat-w-msg-row__cont"),i.buttons.forEach(c=>{t._addActionBtn(p,c.name,c.text)}),u.append(p),t._chatMsgsCont.append(u),u.scrollIntoView({behavior:"smooth"}),u.addEventListener("click",c=>{e.contacts.type=c.target.dataset.name,t._chatInput.value=c.target.textContent,t._send(),u.classList.add("inactive")})}i.wait_input?(i.info&&(t._chatInput.placeholder=i.info),t._sendCB=()=>{t._sendCB=null,l()}):l()},i.wait_time)}),o=e.getNextStep(),d=()=>new Promise((l,A)=>{e.exitFn=l,clearTimeout(t._chatAnswerTO),setTimeout(()=>{let u,p;if(o.text.includes("{{on_select_text}}")){const c=e.contact_types.find(E=>E.name===e.contacts.type);if(!c)return e.stop(),l();u=o.text.replace("{{on_select_text}}",c.on_select_text),p=o.info.replace("{{on_select_text}}",c.on_select_text)}else u=o.text,p=o.info;this._messagesProxy.push({type:"text",direction:"receive",text:u,data:{}}),o.wait_input?(o.info&&(t._chatInput.placeholder=p),t._sendCB=c=>{e.contacts.number=c.data.content,t._sendCB=null,l()}):l()},o.wait_time)}),r=e.getNextStep(),g=()=>new Promise((l,A)=>{e.exitFn=l,clearTimeout(t._chatAnswerTO),setTimeout(()=>{this._messagesProxy.push({type:"text",direction:"receive",text:r.text,data:{}}),r.wait_input?(r.info&&(t._chatInput.placeholder=r.info),t._sendCB=u=>{e.contacts.name=u.data.content,t._sendCB=null,l()}):l()},r.wait_time)}),x=e.getNextStep(),y=()=>new Promise((l,A)=>{e.exitFn=l,clearTimeout(t._chatAnswerTO),setTimeout(()=>{let u;if(x.text.includes("{{on_end_text}}")){const c=e.contact_types.find(E=>E.name===e.contacts.type);if(!c)return e.stop(),l();u=x.text.replace("{{on_end_text}}",c.on_end_text)}else u=x.text;const p=t._createNoteEl('<span class="link">Изменить контактные данные</span>');p.addEventListener("click",()=>{t.dialog&&t.dialog.stop();const c=JSON.parse(JSON.stringify(t.settings.data.contact_dialog))||{},E={text:"Выберите как мы можем с Вами связаться",wait_input:!0,wait_time:0,buttons:null,info:"Выберите как с Вами связаться"};c.steps=c.steps||[],c.steps[0]?c.steps[0].text="Выберите как мы можем с Вами связаться":c.steps.push(E),t.contactsDialog(c)}),this._messagesProxy.push({type:"text",direction:"receive",text:u,data:{},childEl:p}),l()},x.wait_time)});e.running=!0,t._hideButtonsOnDialog&&t._buttonsEl.classList.add("hidden"),e.running&&await a(),e.running&&await d(),e.running&&await g(),e.running&&await y(),t._hideButtonsOnDialog&&(t._buttonsEl.classList.remove("hidden"),t._lastMsgEl.scrollIntoView({behavior:"smooth"})),t._chatInput.placeholder=t._defaultPlaceholder,e.running=!1,this.dialog=null}}const M=document.createElement("style");M.textContent=`.chat-w{position:fixed;bottom:10px;right:10px;z-index:9999;font-family:Arial,Helvetica,sans-serif;font-size:15px}.chat-w *{box-sizing:border-box}.chat-w-inn{position:relative;display:flex;justify-content:flex-end;flex-direction:row-reverse;gap:.5rem}.chat-w-toggle-btn{width:80px;height:80px;border-radius:40px;background-color:#1e90ff;cursor:pointer;display:flex;justify-content:center;align-items:center}.chat-w-toggle-btn img{width:65%;filter:invert(1)}.chat-w-toggle-btn img.chat-w-close-img{width:55%}.chat-w-extra-btn{width:80px;height:80px;border-radius:40px;cursor:pointer;display:flex;justify-content:center;align-items:center}.chat-w-cont{width:100vw;height:100vh;max-width:400px;max-height:720px;position:absolute;bottom:100px;right:10px;transform-origin:bottom right}.chat-w-cont-open{transition:scale .3s ease-out,opacity .5s ease .1s;opacity:1;scale:1}.chat-w-cont-close{transition:scale .5s ease-in,opacity .3s ease;opacity:0;scale:0}.chat-w-cont-inn{width:100%;height:100%;display:flex;flex-direction:column;border-radius:4px;box-shadow:0 6px 6px #00000005,0 8px 24px #0000001f;background:white}.chat-w-header{width:100%;min-height:20%;flex-shrink:0;background-color:#1e90ff;border-radius:4px 4px 0 0;display:flex;flex-direction:column;justify-content:center;align-items:center}.chat-w-header-ava-cont{display:flex}.chat-w-header-title{font-weight:700;color:#fff;padding:.8rem 0}.chat-w-msgs{flex-grow:1;padding:15px;display:flex;flex-direction:column;gap:14px;overflow:auto;background-color:#fff;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%2391d0f5' fill-opacity='0.24'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.chat-w-btns{padding:15px 15px 0;display:flex;gap:8px;flex-shrink:0;flex-wrap:wrap}.chat-w-msg-send-cont{height:100%;width:40px;cursor:pointer;display:flex;justify-content:center;align-items:center}.chat-w-msg-send-cont img{width:100%;filter:invert(50%) sepia(100%) hue-rotate(180deg) saturate(300%)}.chat-w-msg{max-width:75%;margin:0;padding:10px;background-color:#e3e4e9;color:#212b36;box-shadow:1px 1px 2px #aaa;border-radius:12px}.chat-w-msg-send{background-color:#4a85dd;color:#fff}.chat-w-msg-cont{display:flex;align-items:center;flex-shrink:0;gap:7.5px;padding:7.5px;height:60px}.chat-w-msg-cont input{width:100%;height:80%;border:1px solid #d8dcde;border-radius:20px;padding-left:15px;color:#212b36}.chat-w-msg-cont input:focus{outline:unset!important;border-color:#1e90ff}.chat-w-msg-cont input:focus-visible{outline:unset!important;border-color:#1e90ff}.chat-w-msg-row{display:flex;align-items:flex-start;flex-direction:column;transition:opacity ease .2s}.chat-w-msg-row-send{align-items:flex-end}.chat-w-msg-row-send .chat-w-btn{pointer-events:none;max-width:75%}.chat-w-msg-row__cont{display:flex;flex-wrap:wrap;gap:1rem}.chat-w-msg-note{padding:0 10px;margin-top:3px;font-size:.8125rem}.chat-w-btn{color:#36c;background:rgba(255,255,255,.6);padding:9px 14px;border-radius:18px;border:1px solid #3366CC;display:inline-block;cursor:pointer;flex-shrink:0;user-select:none}.chat-w-btn:hover{color:#1e90ff;border-color:#1e90ff}.chat-w-btn-act{color:#36c;background:#e3e4e9;padding:9px 14px;border-radius:8px;display:inline-block;cursor:pointer;flex-shrink:0;user-select:none;box-shadow:0 2px 4px #33333373;transition:all .15s ease}.chat-w-btn-act:hover{color:#fff;background:dodgerblue;box-shadow:0 3px 6px #3333338c}.chat-w-err{display:flex;align-items:center;background-color:#f801261a;margin:15px;border-radius:4px}.chat-w-err:before{content:"!";display:flex;justify-content:center;align-items:center;flex-shrink:0;margin:15px;color:#fff;font-weight:700;font-size:1.2rem;width:30px;height:30px;border-radius:15px;background-color:#f80126e6}.chat-w-err div{height:100%;font-size:.8125rem;display:flex;flex-direction:column;justify-content:center}.chat-w-err p{margin:0;padding:.25rem 0;font-weight:700;color:#f80126e6;text-align:left}.chat-w-err span{display:block;line-height:.8125rem}.link{color:#36c;text-decoration:none;cursor:pointer}.link:hover{text-decoration:underline}.hidden{display:none!important}.invisible{opacity:0}.inactive{pointer-events:none}.err{color:red}
`;const N=Object.freeze(Object.defineProperty({__proto__:null,style:M},Symbol.toStringTag,{value:"Module"}));return O}();
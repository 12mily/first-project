(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[4],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1r6dt",dialogsItems:"Dialogs_dialogsItems__BJhV-",active:"Dialogs_active__XSDpt",messages:"Dialogs_messages__njFCa",message:"Dialogs_message__11grG"}},294:function(e,a,t){e.exports={form:"AddMessageForm_form__W_ecN"}},298:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(129),r=t(292),o=t.n(r),l=t(20),c=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:o.a.dialog+" "+o.a.active},s.a.createElement(l.b,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:o.a.dialog},e.message)},u=t(30),d=t(90),g=t(130),f=t(24),b=t(47),p=t(294),E=t.n(p),_=Object(b.a)(50),v=Object(g.a)({form:"dialog-add-message-form"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit,className:E.a.form},s.a.createElement("div",null,s.a.createElement(d.a,{component:f.b,validate:[b.b,_],placeholder:"Enter your message",name:"newMessageBody"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))})),h=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(m,{message:e.message,key:e.id})}));a.newMessageBody;return e.isAuth?s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",{className:o.a.messages},s.a.createElement("div",null,n)),s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):s.a.createElement(u.a,{to:"/login"})},j=t(16),O=t(35),y=t(36),N=t(37),D=t(38),M=function(e){return{isAuth:e.auth.isAuth}},k=t(8);a.default=Object(k.d)(Object(j.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),(function(e){var a=function(a){Object(D.a)(n,a);var t=Object(N.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),n}(s.a.Component);return Object(j.b)(M)(a)}))(h)}}]);
//# sourceMappingURL=4.2e419c99.chunk.js.map
(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{28:function(e,t,n){e.exports={btn:"Button_btn__2Qqn0"}},29:function(e,t,n){e.exports={btnList:"ButtonList_btnList__2G-BJ"}},3:function(e,t,n){e.exports={container:"styles_container__Pc02m",headingForm:"styles_headingForm__1xl3F",contactList:"styles_contactList__3cjel",form:"styles_form__1mRU1",labelName:"styles_labelName__3GNie",labelNumber:"styles_labelNumber__3-H1l",btnForm:"styles_btnForm__3vcxf",containerSearch:"styles_containerSearch__3wxVy",btnList:"styles_btnList__TmpSH"}},41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),o=n(12),s=n.n(o),b=n(5),u=n(2),i=n(4),l=n(30),j=n(7),h=Object(u.b)("phonebook/fetchContactRequest"),f=Object(u.b)("phonebook/fetchContactSuccess"),O=Object(u.b)("phonebook/fetchContactError"),d=Object(u.b)("phonebook/addContactRequest"),m=Object(u.b)("phonebook/addContactSuccess"),p=Object(u.b)("phonebook/addContactError"),x=Object(u.b)("phonebook/deleteContactRequest"),_=Object(u.b)("phonebook/deleteContactSuccess"),v=Object(u.b)("phonebook/deleteContactError"),N=Object(u.b)("phonebook/veluesFilter"),C=Object(u.c)([],(c={},Object(i.a)(c,f,(function(e,t){return t.payload})),Object(i.a)(c,m,(function(e,t){return[t.payload].concat(Object(l.a)(e))})),Object(i.a)(c,_,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),k=Object(u.c)("",Object(i.a)({},N,(function(e,t){return t.payload}))),y=Object(u.c)(!1,(a={},Object(i.a)(a,d,(function(){return!0})),Object(i.a)(a,m,(function(){return!1})),Object(i.a)(a,p,(function(){return!1})),Object(i.a)(a,x,(function(){return!0})),Object(i.a)(a,_,(function(){return!1})),Object(i.a)(a,v,(function(){return!1})),Object(i.a)(a,h,(function(){return!0})),Object(i.a)(a,f,(function(){return!1})),Object(i.a)(a,O,(function(){return!1})),a)),g=Object(j.b)({contacts:C,filter:k,loading:y}),S=Object(u.a)({reducer:{phonebook:g},devTools:!1}),w=(n(41),n(3)),L=n.n(w),F=n(18),q=n(10),R=n.n(q);R.a.defaults.baseURL="http://localhost:2021/";var E=function(e,t){return function(n){var c={newName:e,number:t};n(d()),R.a.post("/contacts",c).then((function(e){var t=e.data;return n(m(t))})).catch((function(e){return n(p(e))}))}},B=function(e){return function(t){t(x()),R.a.delete("/contacts/".concat(e)).then((function(){return t(_(e))})).catch((function(e){return t(v(e))}))}},J=function(){return function(e){e(h()),R.a.get("/contacts").then((function(t){var n=t.data;return e(f(n))})).catch((function(e){return O(e)}))}},T=n(9),G=n.n(T),H=n(28),U=n.n(H),D=n(1);function P(e){var t=e.children;return Object(D.jsx)("button",{className:U.a.btn,type:"submite",children:Object(D.jsxs)("span",{children:[" ",t]})})}var Q=n(13),V=function(e){return e.phonebook.contacts},$=function(e){return e.phonebook.filter},z=Object(Q.a)([V,$],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.newName.toLowerCase().includes(n)}))}));function A(){var e=Object(r.useState)(""),t=Object(F.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(F.a)(a,2),s=o[0],u=o[1],i=Object(b.c)(V),l=Object(b.b)(),j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},h=function(e,t,n){!function(e,t){return e.some((function(e){return e.newName===t}))}(n,e)?l(E(e,t)):alert('\u0426\u0435 \u0456\u043c"\u044f \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454')},f=function(){c(""),u("")},O=G.a.generate(),d=G.a.generate();return Object(D.jsxs)("form",{className:L.a.form,onSubmit:function(e){e.preventDefault();var t=n.length,c=s.length;t<2||t>10?alert('\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c"\u044f \u0431\u0456\u043b\u044c\u0448\u0435 1-\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0456 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 10'):c<7||c>10?alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0431\u0456\u043b\u044c\u0448\u0435 7-\u043c\u0438 \u0446\u0438\u0444\u0440 \u0456 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 10"):(h(n,s,i),f())},children:[Object(D.jsx)("label",{htmlFor:O,className:L.a.labelName,children:"\u0418\u043c'\u044f"}),Object(D.jsx)("input",{id:O,type:"text",name:"name",value:n,onChange:j,autoComplete:"off"}),Object(D.jsx)("label",{htmlFor:d,className:L.a.labelNumber,children:"\u041d\u043e\u043c\u0435\u0440"}),Object(D.jsx)("input",{id:d,placeholder:"(0xx) xxx-xx-xx",type:"tel",pattern:"^[ 0-9]+$",name:"number",value:s,onChange:j,autoComplete:"off"}),Object(D.jsx)(P,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}var I=n(29),K=n.n(I);function M(e){var t=e.children,n=e.id,c=Object(b.b)();return Object(D.jsx)("button",{className:K.a.btnList,onClick:function(){return c(B(n))},type:"button",children:Object(D.jsxs)("span",{children:[" ",t]})})}function W(){var e=Object(b.c)(z);return Object(D.jsx)(D.Fragment,{children:e.length>0&&Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{className:L.a.infoContact,children:"\u041d\u0430\u0431\u0440\u0430\u0442\u0438 \u043d\u043e\u043c\u0435\u0440"}),Object(D.jsx)("ul",{className:"js-list",children:e.map((function(e){var t=e.id,n=e.newName,c=e.number;return Object(D.jsxs)("li",{children:[Object(D.jsxs)("span",{className:L.a.nameContact,children:[n,": "]}),Object(D.jsxs)("span",{className:L.a.numberContact,children:["+38",Object(D.jsx)("a",{href:"tel: ".concat(c),className:L.a.numberContact,children:c})]}),Object(D.jsx)(M,{id:t,children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},t)}))})]})})}function X(){var e=Object(b.c)($),t=Object(b.b)(),n=G.a.generate();return Object(D.jsxs)("div",{className:L.a.containerSearch,children:[Object(D.jsx)("label",{className:L.a.labelSearch,htmlFor:n,children:'\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443 \u0430 \u0456\u043c"\u044f\u043c'}),Object(D.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){t(N(e.target.value))},id:n,autoComplete:"off",className:L.a.inputSearch})]})}function Y(){var e=Object(b.b)();return Object(r.useEffect)((function(){e(J())}),[e]),Object(D.jsxs)("div",{className:L.a.container,children:[Object(D.jsx)("h1",{className:L.a.headingForm,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"}),Object(D.jsx)(A,{}),Object(D.jsx)("h2",{className:L.a.contactList,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),Object(D.jsx)(X,{}),Object(D.jsx)(W,{})]})}s.a.render(Object(D.jsx)(b.a,{store:S,children:Object(D.jsx)(Y,{})}),document.querySelector("#root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.8f7dafdb.chunk.js.map
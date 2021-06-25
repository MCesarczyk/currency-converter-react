(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{20:function(e,n,t){"use strict";t.r(n);var c,i,r,a,l,o,d,s,u,b,j,x,h,p,g,f,m=t(1),O=t.n(m),k=t(9),y=t.n(k),v=t(3),w=t(2),z=t.p+"static/media/background.33e64e6f.png",T=w.c.div(c||(c=Object(v.a)(['\n    max-width: 1024px;\n    margin: 0 auto;\n    background-image: url("','");\n    background-size: cover;\n    background-position: center;\n    background-color: #ddd;\n    background-attachment: fixed;\n'])),z),D=w.c.div(i||(i=Object(v.a)(["\n    max-width: 480px;\n    min-width: 240px;\n    margin: 0 auto;\n    background-color: #eee;\n"]))),S=t(0),B=function(e){var n=e.children;return Object(S.jsx)(T,{children:Object(S.jsx)(D,{children:n})})},F=t(4),C=function(){var e=Object(m.useState)(new Date),n=Object(F.a)(e,2),t=n[0],c=n[1];return Object(m.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t.toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"})},L=w.c.div(r||(r=Object(v.a)(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n"]))),E=w.c.p(a||(a=Object(v.a)(["\n    font-family: monospace;\n    font-size: 12px;\n    margin: 0 0 24px 0;\n    text-align: center;\n"]))),R=function(){var e=C();return Object(S.jsx)(L,{children:Object(S.jsxs)(E,{children:["Dzisiaj jest"," ",e]})})},U=w.c.div(l||(l=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: 480px) {\n            flex-direction: column;\n            align-items: center;\n    }\n"]))),A=w.c.button(o||(o=Object(v.a)(["\n    min-width: 165px;\n    color: ",";\n    background-color: ",";\n    display: inline-block;\n    border-radius: 20px;\n    padding: 5px 10px;\n    margin: 10px;\n    width: 45%;\n\n    &:hover {\n        background-color: hsl(210, 40%, 30%);\n    }\n\n    &:active {\n        background-color: hsl(210, 40%, 40%);\n    }\n"])),(function(e){return e.theme.color.elementsText}),(function(e){return e.theme.color.elementsBackground})),I=function(){return Object(S.jsxs)(U,{children:[Object(S.jsx)(A,{children:"Przelicz"}),Object(S.jsx)(A,{type:"reset",children:"Wyczy\u015b\u0107 formularz"})]})},P=[{id:"EUR",rate:4.5302,label:"Euro",checked:!0},{id:"USD",rate:3.7986,label:"Dolar ameryka\u0144ski"},{id:"AUD",rate:2.8779,label:"Dolar australijski"},{id:"BGN",rate:2.3162,label:"Lew bu\u0142garski"},{id:"HRK",rate:.6041,label:"Kuna chorwacka"},{id:"BTC",rate:1299111.81,label:"Bitcoin"}],K=w.c.fieldset(d||(d=Object(v.a)(["\n    border-radius: 20px;\n    padding: 10px;\n    margin: 10px;\n"]))),q=w.c.legend(s||(s=Object(v.a)(["\n    color: ",";\n    background-color: ",";\n    padding: 8px 24px;\n    border-style: none;\n    border-radius: 20px;\n    text-align: center;\n"])),(function(e){return e.theme.color.elementsText}),(function(e){return e.theme.color.elementsBackground})),J=w.c.label(u||(u=Object(v.a)(["\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width:480px) {\n        flex-direction: column;\n    }\n"]))),N=w.c.span(b||(b=Object(v.a)(["\n    min-width: 100px;\n"]))),W=w.c.input(j||(j=Object(v.a)(["\n    width: 40%;\n    text-align: center;\n    border-radius: 5px;\n    height: 24px;\n\n    @media (max-width: 480px) {\n        width: 80%;\n    }\n"]))),G=w.c.ul(x||(x=Object(v.a)(["\n    list-style: none;\n    line-height: 1.75;\n    padding-left: 0;\n"]))),H=w.c.li(h||(h=Object(v.a)(["\n    display: flex;\n    justify-content: space-evenly;\n\n    @media (max-width: 480px) {\n            flex-direction: column;\n            align-items: center;\n    }\n"]))),M=w.c.label(p||(p=Object(v.a)(["\n    width: 150px;\n    display: inline-block;\n    margin: 0 5px;\n"]))),Q=w.c.p(g||(g=Object(v.a)(["\n    margin-left: 20px;\n"]))),V=w.c.p(f||(f=Object(v.a)(["\n    font-size: 12px;\n    text-align: right;\n"]))),X=function(e){var n=e.title,t=e.inputTitle,c=e.listTitle,i=(e.list,e.resultTitle),r=e.resultLabel,a=e.resultAnnotation,l=(e.buttons,Object(m.useState)("EUR")),o=Object(F.a)(l,2),d=o[0],s=o[1],u=Object(m.useState)(""),b=Object(F.a)(u,2),j=b[0],x=b[1],h=Object(m.useState)([]),p=Object(F.a)(h,2),g=p[0],f=p[1],O=Object(m.useRef)(null),k=function(e){var n=e.target;s(n.value)},y=function(){return P.find((function(e){return e.id===d})).rate};return Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(),f([(j/y()).toFixed(2),d]),x(""),O.current.focus()},onReset:function(e){e.preventDefault(),x(""),f(""),s("EUR"),O.current.focus()},children:[Object(S.jsxs)(K,{children:[Object(S.jsx)(q,{children:t}),Object(S.jsx)(R,{}),Object(S.jsxs)(J,{children:[Object(S.jsx)(N,{children:n}),Object(S.jsx)(W,{ref:O,value:j,placeholder:"Kwota w PLN",type:"number",min:"0.01",step:"any",required:!0,autoFocus:!0,onChange:function(e){var n=e.target;return x(n.value)}})]})]}),Object(S.jsxs)(K,{children:[Object(S.jsx)(q,{children:c}),Object(S.jsx)(G,{children:P.map((function(e){return Object(S.jsxs)(H,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"radio",name:"chosenCurrency",id:e.id,value:e.id,checked:d===e.id,onChange:k}),Object(S.jsx)(M,{htmlFor:e.id,children:e.label})]}),Object(S.jsx)(W,{value:e.rate.toFixed(4),type:"number",min:"0.0001",step:"0.0001",required:!0,readOnly:!0})]},e.id)}))})]}),Object(S.jsxs)(K,{children:[Object(S.jsx)(q,{children:i}),Object(S.jsxs)(Q,{children:[r,g]}),Object(S.jsx)(V,{children:a}),Object(S.jsx)(I,{})]})]})};var Y,Z=function(){return Object(S.jsx)(B,{children:Object(S.jsx)(X,{inputTitle:"e-kantor",title:"Wp\u0142acasz:",listTitle:"Aktualny kurs",resultTitle:"Otrzymana kwota",resultLabel:"Dostajesz:",resultAnnotation:"*wg kursu z dnia 24/06/2021"})})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))},_=Object(w.b)(Y||(Y=Object(v.a)(["\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: 'Ubuntu', sans-serif;\n  background-size: cover;\n  background-position: center;\n  background-color: #ddd;\n  background-attachment: fixed;\n}"])));y.a.render(Object(S.jsx)(O.a.StrictMode,{children:Object(S.jsxs)(w.a,{theme:{color:{elementsText:"#ebe6dc",elementsBackground:"#133246"}},children:[Object(S.jsx)(_,{}),Object(S.jsx)(Z,{})]})}),document.getElementById("root")),$()}},[[20,1,2]]]);
//# sourceMappingURL=main.c4579a8a.chunk.js.map
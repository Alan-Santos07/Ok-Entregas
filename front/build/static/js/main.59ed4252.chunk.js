(this["webpackJsonpok-entregas-front"]=this["webpackJsonpok-entregas-front"]||[]).push([[0],{13:function(e,c,s){},61:function(e,c,s){},68:function(e,c,s){},69:function(e,c,s){},70:function(e,c,s){},71:function(e,c,s){},72:function(e,c,s){},73:function(e,c,s){},74:function(e,c,s){"use strict";s.r(c);var t=s(32),a=s(1),i=s(33),n=s.n(i),l=s(21),r=s.n(l),j=s(18),o=s(34),d=s(4),x=s(5),b=s(7),m=s(6),h=s(12),O=s(35),u=s.n(O),f=function(){return null!==localStorage.getItem("usuario-login")},p=function(){var e=localStorage.getItem("usuario-login").split(".")[1];return JSON.parse(window.atob(e))},N=s.p+"static/media/logo.4ea5343b.png",v=s.p+"static/media/welcome.72c2232c.png",g=(s(13),s(61),s(0)),y=function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).efetuaLogin=function(e){e.preventDefault(),t.setState({erroMensagem:"",isLoading:!0}),u.a.post("http://localhost:5000/api/login",{email:t.state.email,senha:t.state.senha}).then((function(e){200===e.status&&(localStorage.setItem("usuario-login",e.data.token),console.log("Meu token: "+e.data.token),t.setState({isLoading:!1}),console.log(p()),console.log(p().role),"admin"===p().role?(console.log(f()),t.props.history.push("/home")):t.props.history.push("/"))})).catch((function(){t.setState({erroMensagem:"E-mail ou senha inv\xe1lidos! Tente novamente.",isLoading:!1})}))},t.atualizaStateCampo=function(){var e=Object(o.a)(r.a.mark((function e(c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setState(Object(j.a)({},c.target.name,c.target.value));case 1:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),t.state={email:"",senha:"",erroMensagem:"",isLoading:!1},t}return Object(x.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsxs)("section",{className:"glass",children:[Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsxs)("form",{onSubmit:this.efetuaLogin,className:"forms",children:[Object(g.jsxs)("div",{className:"inputs",children:[Object(g.jsx)("label",{children:"E-mail"}),Object(g.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:this.atualizaStateCampo})]}),Object(g.jsxs)("div",{className:"inputs",children:[Object(g.jsx)("label",{children:"Senha"}),Object(g.jsx)("input",{type:"password",name:"senha",value:this.state.senha,onChange:this.atualizaStateCampo})]}),Object(g.jsx)(h.b,{to:"/",className:"forgot",children:Object(g.jsx)("p",{children:"Esqueceu a sua senha ?"})}),Object(g.jsx)("p",{children:this.state.erroMensagem}),!0===this.state.isLoading&&Object(g.jsx)("button",{type:"submit",disabled:!0,children:"Loading..."}),!1===this.state.isLoading&&Object(g.jsx)("button",{type:"submit",disabled:""===this.state.email||""===this.state.senha?"none":"",className:"btn",children:"Login"})]})]}),Object(g.jsx)("div",{className:"images",children:Object(g.jsxs)("div",{className:"ilustration",children:[Object(g.jsx)("img",{src:N,className:"logo",alt:"Logo OK Entregas"}),Object(g.jsx)("img",{src:v,className:"welcome",alt:"Ilustra\xe7\xe3o com mensagem de bem-vindo"})]})})]}),Object(g.jsx)("div",{className:"bc1"}),Object(g.jsx)("div",{className:"bc2"}),Object(g.jsx)("div",{className:"circle"}),Object(g.jsx)("div",{className:"square"})]})}}]),s}(a.Component),C=(s(68),s(69),s(70),function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).abreModal=function(){var e=document.getElementById("modal");e.classList.add("mostrar"),e.addEventListener("click",(function(c){"modal"!==c.target.id&&"fechar"!==c.target.id||e.classList.remove("mostrar")}))},t.state={},t}return Object(x.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("section",{children:[Object(g.jsx)("section",{className:"side-bar flex",children:Object(g.jsx)("div",{className:"content-side-bar",children:Object(g.jsxs)("ul",{className:"side-bar-ul flex jc-space-eve flex-collumn",children:[Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/home",children:Object(g.jsx)("i",{id:"icon-home",className:"fas fa-home"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{onClick:this.abreModal,children:Object(g.jsx)("i",{id:"icon-user",className:"fas fa-user-plus"})})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/historico",children:Object(g.jsx)("i",{id:"icon-history",className:"fas fa-history"})})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/voice",children:Object(g.jsx)("i",{id:"icon-phone",className:"fas fa-phone"})})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{children:Object(g.jsx)("i",{id:"icon-office",className:"fas fa-th-large"})})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{children:Object(g.jsx)("i",{id:"icon-off",className:"fas fa-power-off"})})})]})})}),Object(g.jsx)("section",{className:"modal flex ai-center jc-center ",id:"modal",children:Object(g.jsxs)("form",{className:"modal-content flex flex-collumn ai-center jc-space-eve",children:[Object(g.jsx)("h1",{className:"titulinho",children:"Cadastrar um novo usu\xe1rio"}),Object(g.jsxs)("div",{className:"inputs-cadastro flex flex-collumn ai-center",children:[Object(g.jsx)("label",{children:"E-mail do usu\xe1rio"}),Object(g.jsx)("input",{type:"email"})]}),Object(g.jsxs)("div",{className:"inputs-cadastro flex flex-collumn ai-center",children:[Object(g.jsx)("label",{children:"Primeiro Nome"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsxs)("div",{className:"inputs-cadastro flex flex-collumn ai-center",children:[Object(g.jsx)("label",{children:"Sobrenome"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsxs)("div",{className:"inputs-cadastro flex flex-collumn ai-center",children:[Object(g.jsx)("label",{children:"Senha"}),Object(g.jsx)("input",{type:"password"})]}),Object(g.jsxs)("div",{className:"selects flex ai-center jc-space-eve",children:[Object(g.jsxs)("div",{className:"input-select flex flex-collumn ai-center",children:[Object(g.jsx)("label",{children:"Tipo de Usu\xe1rio"}),Object(g.jsxs)("select",{className:"select-cadastro",children:[Object(g.jsx)("option",{children:"Adm"}),Object(g.jsx)("option",{children:"Visitante"})]})]}),Object(g.jsx)("div",{className:"checkbox flex ai-center",children:Object(g.jsxs)("label",{className:"checkbox-container",children:[" Verificar E-mail",Object(g.jsx)("input",{type:"checkbox"}),Object(g.jsx)("span",{className:"checkmark"})]})})]}),Object(g.jsx)("p",{className:"frase",children:"Ao concluir o processo de cadastro, o e-mail informado acima vai receber um e-mail e uma senha de primeiro acesso que deve ser trocada ap\xf3s o primeiro acesso."}),Object(g.jsx)("div",{className:"flex ai-center ai-flex-end",children:Object(g.jsxs)("button",{type:"submit",className:"btn-cadastro flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"cadastrinho",className:"fas fa-user-plus"}),"Cadastrar"]})})]})})]})}}]),s}(a.Component)),w=(s(71),function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).state={},t}return Object(x.a)(s,[{key:"render",value:function(){return Object(g.jsx)("section",{className:"email-bar flex flex-collumn",children:Object(g.jsxs)("div",{className:"email-content flex flex-collumn ai-center",children:[Object(g.jsx)("h1",{children:"Enviar E-mail"}),Object(g.jsxs)("form",{className:"email-form flex flex-collumn jc-space-btw",children:[Object(g.jsxs)("div",{className:"inputs-email flex flex-collumn",children:[Object(g.jsx)("label",{children:"Destinat\xe1rio"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsxs)("div",{className:"inputs-email flex flex-collumn",children:[Object(g.jsx)("label",{children:"Assunto"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsxs)("div",{className:"inputs-email flex flex-collumn",children:[Object(g.jsx)("label",{children:"Conte\xfado"}),Object(g.jsx)("textarea",{id:"input-email",type:"text"})]}),Object(g.jsx)("div",{className:"flex ai-center ai-flex-end",children:Object(g.jsxs)("button",{className:"btn-email flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"email",className:"fas fa-envelope"}),"Enviar E-mail"]})})]})]})})}}]),s}(a.Component)),k=function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).state={},t}return Object(x.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)(C,{}),Object(g.jsx)(w,{}),Object(g.jsx)("section",{className:"content",children:Object(g.jsxs)("div",{className:"glass-home flex flex-collumn ai-flex-start jc-flex-start",children:[Object(g.jsx)("h1",{children:"Digite um CNPJ"}),Object(g.jsxs)("form",{className:"pesquisa flex",children:[Object(g.jsxs)("div",{className:"inputs-home flex flex-collumn",children:[Object(g.jsx)("label",{children:"CNPJ"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsx)("div",{className:"flex ai-center ai-flex-end",children:Object(g.jsxs)("button",{className:"btn-pesquisar flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"lupa",className:"fas fa-search"}),"Buscar"]})})]}),Object(g.jsx)("div",{className:"resultado",children:Object(g.jsxs)("div",{className:"resultado-content flex flex-collumn ai-flex-start jc-space-eve",children:[Object(g.jsxs)("div",{className:"inputs-resultado flex ai-center",children:[Object(g.jsx)("label",{children:"E-mail :"}),Object(g.jsx)("input",{type:"text"}),Object(g.jsx)("div",{className:"copy",children:Object(g.jsxs)("button",{children:["Copiar E-mail",Object(g.jsx)("i",{id:"copy",className:"fas fa-copy"})]})})]}),Object(g.jsxs)("div",{className:"inputs-resultado flex ai-center",children:[Object(g.jsx)("label",{children:"Telefone :"}),Object(g.jsx)("input",{type:"text"}),Object(g.jsx)("div",{className:"call",children:Object(g.jsxs)("button",{children:["Ligar",Object(g.jsx)("i",{id:"ligar",className:"fas fa-phone"})]})})]}),Object(g.jsxs)("div",{className:"inputs-resultado flex ai-center",children:[Object(g.jsx)("label",{children:"Raz\xe3o Social :"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsxs)("div",{className:"inputs-resultado flex ai-center",children:[Object(g.jsx)("label",{children:"Nome Fantasia :"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsx)("div",{className:"historico flex ai-center",children:Object(g.jsxs)("button",{className:"flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"hist",className:"fas fa-history"}),"Procurar no Hist\xf3rico"]})})]})})]})}),Object(g.jsx)("div",{className:"bc1"}),Object(g.jsx)("div",{className:"bc2"})]})}}]),s}(a.Component),E=function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).state={},t}return Object(x.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)(C,{}),Object(g.jsx)(w,{}),Object(g.jsx)("section",{className:"content",children:Object(g.jsx)("div",{className:"glass-home",children:Object(g.jsx)("h1",{children:"Dashboard"})})}),Object(g.jsx)("div",{className:"bc1"}),Object(g.jsx)("div",{className:"bc2"})]})}}]),s}(a.Component),L=function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).state={},t}return Object(x.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)(C,{}),Object(g.jsx)(w,{}),Object(g.jsx)("section",{className:"content",children:Object(g.jsx)("div",{className:"glass-home",children:Object(g.jsx)("h1",{children:"VOIP"})})}),Object(g.jsx)("div",{className:"bc1"}),Object(g.jsx)("div",{className:"bc2"})]})}}]),s}(a.Component),S=(s(72),function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=c.call(this,e)).state={},t}return Object(x.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)(C,{}),Object(g.jsx)(w,{}),Object(g.jsx)("section",{className:"content",children:Object(g.jsxs)("div",{className:"glass-home flex flex-collumn ai-flex-start jc-flex-start",children:[Object(g.jsx)("h1",{children:"Digite um CNPJ"}),Object(g.jsxs)("form",{className:"pesquisa flex",children:[Object(g.jsxs)("div",{className:"inputs-home flex flex-collumn",children:[Object(g.jsx)("label",{children:"CNPJ"}),Object(g.jsx)("input",{type:"text"})]}),Object(g.jsx)("div",{className:"flex ai-center ai-flex-end",children:Object(g.jsxs)("button",{className:"btn-pesquisar flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"lupa",className:"fas fa-search"}),"Buscar"]})})]}),Object(g.jsxs)("div",{className:"history flex flex-collumn ai-flex-start",children:[Object(g.jsx)("h2",{children:"Nome da Empresa"}),Object(g.jsx)("p",{children:"Ordenar por :"}),Object(g.jsxs)("div",{className:"ordenar flex ai-center jc-space-btw",children:[Object(g.jsx)("div",{className:"order flex ai-center",children:Object(g.jsxs)("button",{className:"flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"star",className:"fas fa-star"}),"Ver Favoritos"]})}),Object(g.jsx)("div",{className:"order flex ai-center",children:Object(g.jsxs)("button",{className:"flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"old",className:"fas fa-arrow-left"}),"Mais Antigo"]})}),Object(g.jsx)("div",{className:"order flex ai-center",children:Object(g.jsxs)("button",{className:"flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"new",className:"fas fa-arrow-right"}),"Mais Novo"]})})]}),Object(g.jsx)("div",{className:"card-area flex ai-flex-start",children:Object(g.jsxs)("div",{className:"card-content flex flex-row flex-wrap jc-space-btw",children:[Object(g.jsxs)("div",{className:"card flex flex-collumn ai-flex-start",children:[Object(g.jsxs)("div",{className:"text flex ai-center jc-space-btw",children:[Object(g.jsx)("p",{children:"21 / 10 / 2021"}),Object(g.jsx)("p",{children:" - "}),Object(g.jsx)("p",{children:"14 : 45"})]}),Object(g.jsxs)("div",{className:"assunto flex ai-center",children:[Object(g.jsx)("p",{id:"padrao",children:"Enviou um email com o assunto :"}),Object(g.jsx)("p",{children:"Proposta Comercial"})]}),Object(g.jsxs)("div",{className:"btns flex ai-center jc-space-btw",children:[Object(g.jsx)("div",{className:"action flex ai-center",children:Object(g.jsxs)("button",{className:"btn-card flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"lixinho",class:"fas fa-trash-alt"}),"Excluir do hist\xf3rico"]})}),Object(g.jsx)("div",{className:"action flex ai-center",children:Object(g.jsxs)("button",{className:"btn-card-star flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"star-card",className:"fas fa-star"}),"Favoritar"]})})]})]}),Object(g.jsxs)("div",{className:"card flex flex-collumn ai-flex-start",children:[Object(g.jsxs)("div",{className:"text flex ai-center jc-space-btw",children:[Object(g.jsx)("p",{children:"21 / 10 / 2021"}),Object(g.jsx)("p",{children:" - "}),Object(g.jsx)("p",{children:"14 : 45"})]}),Object(g.jsxs)("div",{className:"assunto flex ai-center",children:[Object(g.jsx)("p",{id:"padrao",children:"Enviou um email com o assunto :"}),Object(g.jsx)("p",{children:"Proposta Comercial"})]}),Object(g.jsxs)("div",{className:"btns flex ai-center jc-space-btw",children:[Object(g.jsx)("div",{className:"action flex ai-center",children:Object(g.jsxs)("button",{className:"btn-card flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"lixinho",class:"fas fa-trash-alt"}),"Excluir do hist\xf3rico"]})}),Object(g.jsx)("div",{className:"action flex ai-center",children:Object(g.jsxs)("button",{className:"btn-card-star flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"star-card",className:"fas fa-star"}),"Favoritar"]})})]})]}),Object(g.jsxs)("div",{className:"card flex flex-collumn ai-flex-start",children:[Object(g.jsxs)("div",{className:"text flex ai-center jc-space-btw",children:[Object(g.jsx)("p",{children:"21 / 10 / 2021"}),Object(g.jsx)("p",{children:" - "}),Object(g.jsx)("p",{children:"14 : 45"})]}),Object(g.jsxs)("div",{className:"assunto flex ai-center",children:[Object(g.jsx)("p",{id:"padrao",children:"Enviou um email com o assunto :"}),Object(g.jsx)("p",{children:"Proposta Comercial"})]}),Object(g.jsxs)("div",{className:"btns flex ai-center jc-space-btw",children:[Object(g.jsx)("div",{className:"action flex ai-center",children:Object(g.jsxs)("button",{className:"btn-card flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"lixinho",class:"fas fa-trash-alt"}),"Excluir do hist\xf3rico"]})}),Object(g.jsx)("div",{className:"action flex ai-center",children:Object(g.jsxs)("button",{className:"btn-card-star flex ai-center jc-center",children:[Object(g.jsx)("i",{id:"star-card",className:"fas fa-star"}),"Favoritar"]})})]})]})]})})]})]})}),Object(g.jsx)("div",{className:"bc1"}),Object(g.jsx)("div",{className:"bc2"})]})}}]),s}(a.Component)),P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,75)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,i=c.getLCP,n=c.getTTFB;s(e),t(e),a(e),i(e),n(e)}))},F=s(2),M=(s(73),function(e){var c=e.component;return Object(g.jsx)(F.b,{render:function(e){return f()&&"admin"===p().role?Object(g.jsx)(c,Object(t.a)({},e)):Object(g.jsx)(F.a,{to:"/"})}})}),I=Object(g.jsx)(h.a,{children:Object(g.jsxs)(F.d,{children:[Object(g.jsx)(F.b,{exact:!0,path:"/",component:y}),Object(g.jsx)(M,{path:"/home",component:k}),Object(g.jsx)(F.b,{path:"/dashboard",component:E}),Object(g.jsx)(F.b,{path:"/voice",component:L}),Object(g.jsx)(F.b,{path:"/historico",component:S}),Object(g.jsx)(F.a,{to:"/notfound"})]})});n.a.render(I,document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.59ed4252.chunk.js.map
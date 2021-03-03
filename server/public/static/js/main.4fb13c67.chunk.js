(this["webpackJsonpalkemy-frontend"]=this["webpackJsonpalkemy-frontend"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=a(3),s=a(13),u=a(6),i=a(15),m=a(5),p=a.n(m),d=a(7),f="[auth] Finish checking login state",b="[auth] Login",h="[auth] Logout",v="[UI] SetError",E="[UI] RemoveError",g="[UI] Start loading",y="[UI] Finish loading",j="[UI] Open Modal",O="[UI] Close Modal",N="[Transaction] Add transaction",w="[Transaction] Update transaction",k="[Transaction] Delete transaction",x="[Transaction] Transactions loaded",T="[Transaction] Set active transaction",_="[Transaction] Logout cleanup",C="[Balance] Balance loaded",I="[Balance] FinishUpdate",S="[Balance] Logout cleanup",F="http://localhost:3001",D=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(F,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},A=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(F,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"Content-type":"application/json","x-access-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-access-token":r},body:JSON.stringify(t)})},L=a(22),U=a.n(L),B=function(e){return{type:b,payload:e}},P=function(){return{type:f}},M=function(){return{type:h}},G=a(27),R=a(2),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(R.a)(Object(R.a)({},r),{},Object(G.a)({},t.name,t.value)))};return[r,l,o]},X=function(){var e=Object(l.c)((function(e){return e.ui})).loading,t=Object(l.b)(),a=J({email:"",password:""}),n=Object(i.a)(a,2),c=n[0],o=n[1],u=c.email,m=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(function(e,t){return function(){var a=Object(d.a)(p.a.mark((function a(n){var r,c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D("auth/signin",{email:e,password:t},"POST");case 2:return r=a.sent,a.next=5,r.json();case 5:(c=a.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),n(B({uid:c.id,name:c.name}))):U.a.fire("Error",c.message);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(u,m))}},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:u,onChange:o,className:"auth__input",autoComplete:"off"}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:m,onChange:o,className:"auth__input"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:e},"Login"),r.a.createElement(s.b,{to:"/auth/register",className:"link"},"Create new account")))},q=a(23),V=a.n(q),W=function(e){return{type:v,payload:e}},$=function(){return{type:E}},z=function(){return{type:j}},H=function(){return{type:O}},K=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).msgError,a=J({firstName:"",lastName:"",email:"",password:"",password2:""}),n=Object(i.a)(a,2),c=n[0],o=n[1],u=c.firstName,m=c.lastName,f=c.email,b=c.password,h=c.password2;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),(0===u.trim().length||0===m.trim().length?(e(W("Invalid name")),0):V.a.isEmail(f)?b!==h||b.trim().length<5?(e(W("Password no valido")),0):(e($()),1):(e(W("Email no valido")),0))&&e(function(e,t,a,n){return function(){var r=Object(d.a)(p.a.mark((function r(c){var o,l;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D("auth/signup",{email:e,password:t,firstName:a,lastName:n},"POST");case 2:return o=r.sent,r.next=5,o.json();case 5:(l=r.sent).ok?(localStorage.setItem("token",l.token),localStorage.setItem("token-init-date",(new Date).getTime()),c(B({uid:l.id,name:l.name}))):U.a.fire("Error",l.message);case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(f,b,u,m))}},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstName",value:u,onChange:o,className:"auth__input",autoComplete:"off"}),r.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastName",value:m,onChange:o,className:"auth__input",autoComplete:"off"}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:f,onChange:o,className:"auth__input",autoComplete:"off"}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:b,onChange:o,className:"auth__input"}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",value:h,onChange:o,className:"auth__input"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(s.b,{to:"/auth/login",className:"link"},"Already registered?")))},Q=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/auth/login",component:X}),r.a.createElement(u.b,{exact:!0,path:"/auth/register",component:K}),r.a.createElement(u.a,{to:"/auth/login"}))))},Y=a(28),Z=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Y.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(u.a,{to:"/auth/login"})}}))},ee=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Y.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(u.a,{to:"/"}):r.a.createElement(a,e)}}))},te=function(e){return{type:C,payload:e}},ae=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r,c,o,l,s,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.userId,r=e.amount,c=e.type,t.next=3,A("balance/",{userId:n,amount:r,type:c},"PUT");case 3:return o=t.sent,t.next=6,o.json();case 6:if(!t.sent.ok){t.next=16;break}return t.next=10,A("balance/","GET");case 10:return l=t.sent,t.next=13,l.json();case 13:s=t.sent,u=s.filter((function(e){return e.userId===n})),a(re(u));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r,c,o,l,s,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.userId,r=e.amount,c=e.type,t.next=4,A("balance/",{userId:n,amount:r,type:c},"DELETE");case 4:return o=t.sent,t.next=7,o.json();case 7:if(!t.sent.ok){t.next=17;break}return t.next=11,A("balance/","GET");case 11:return l=t.sent,t.next=14,l.json();case 14:s=t.sent,u=s.filter((function(e){return e.userId===n})),a(te(u));case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(e){return t.apply(this,arguments)}}()},re=function(e){return{type:I,payload:e}},ce=a(16),oe=function(e){return{type:N,payload:e}},le=function(e){return{type:x,payload:Object(ce.a)(e)}},se=function(e){return{type:T,payload:e}},ue=function(e){return{type:w,payload:e}},ie=function(e){return{type:k,payload:e}},me=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("div",{className:"navbar-brand"},"Welcome, ",t),r.a.createElement("button",{className:"btn-logout ",onClick:function(){e({type:S}),e({type:_}),e(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t(M());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null,"Logout")))},pe=function(){var e=Object(l.b)();return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-circle fab",onClick:function(){e(z())}},r.a.createElement("i",{className:"fas fa-plus"},"+")))},de=function(){var e=Object(l.c)((function(e){return e.balance})).balance,t=0;return e!==[]&&e.map((function(e){return t=e.balance})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Balance: $ ",t," "))))},fe=function(e){var t=e.type,a=e.category,n=e.date,c=e.concept,o=e.amount,s=Object(l.b)();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"col-sm"},r.a.createElement("span",null,a)),r.a.createElement("div",{className:"col-sm"},r.a.createElement("span",null,n)),r.a.createElement("div",{className:"col-sm"},r.a.createElement("span",null,c)),r.a.createElement("div",{className:"col-sm"},r.a.createElement("span",null,o)),r.a.createElement("div",{className:"col-sm"},r.a.createElement("button",{type:"button",className:"btn btn-primary ",onClick:function(){s(se(e)),s(z())}},"Edit")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){U.a.fire({title:"Do you want to delete the transaction?",showCancelButton:!0,confirmButtonText:"Delete",denyButtonText:"Cancel"}).then((function(t){t.isConfirmed&&s(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,A("transaction/",{id:n},"DELETE");case 3:return r=t.sent,t.next=6,r.json();case 6:t.sent.ok&&(a(ne(e)),a(ie(n)));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}))}},"Delete")))},be=function(){var e=Object(l.c)((function(e){return e.transaction})).transactions;return e?r.a.createElement("div",{className:"container"},e.map((function(e){return r.a.createElement(fe,Object.assign({key:e.id},e))}))):r.a.createElement("div",null,r.a.createElement("h1",null,"No hay transacciones"))},he=function(){return r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement("div",{className:"container-md container-style"},r.a.createElement(be,null),r.a.createElement(pe,null)))},ve=a(37),Ee=a.n(ve),ge=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.transaction})).activeTransaction,a=Object(l.c)((function(e){return e.ui})).msgError,n=Object(l.c)((function(e){return e.auth})).uid,c=Object(l.c)((function(e){return e.balance})).balance,o=J(t||{concept:"",amount:"",type:"ingreso",category:"",date:""}),s=Object(i.a)(o,2),u=s[0],m=s[1],f=u.concept,b=u.amount,h=u.date,v=u.type,E=u.category,g="New Transaction",y=!1;return t&&(g="Edit Transaction",y=!0),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,g),r.a.createElement("form",{onSubmit:function(a){var r,o;a.preventDefault(),(0===f.trim().length?(e(W("Invalid concept")),0):V.a.isDate(h)?V.a.isNumeric(b)?0===E.trim().length?(e(W("Invalid category")),0):0===v.trim().length?(e(W("Invalid type")),0):(e($()),1):(e(W("Invalid amount")),0):(e(W("Invalid date")),0))&&(t?(e((r=u,o=t.id,function(){var e=Object(d.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.id=o,e.next=3,A("transaction/",r,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:e.sent.ok&&t(ue(r));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(function(e,t,a,n){return function(){var r=Object(d.a)(p.a.mark((function r(c){var o,l,s;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=0,l=e.map((function(e){var r=e.balance,c=e.userId,l=e.id,s=e.createdAt,u=e.updatedAt;if(void 0!==t&&void 0!==a)switch(n){case"ingreso":o=r-Number.parseFloat(t)+Number.parseFloat(a);break;case"egreso":o=r+Number.parseFloat(t)-Number.parseFloat(a)}return{id:l,userId:c,balance:o,createdAt:s,updatedAt:u}})),r.next=5,A("balance/",{newBalance:l},"POST");case 5:return s=r.sent,r.next=8,s.json();case 8:r.sent.ok&&c(re(l)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(c,t.amount,b,v))):e(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A("transaction/",e,"POST");case 3:return n=t.sent,t.next=6,n.json();case 6:(r=t.sent).ok&&(e.id=r.newTransaction.id,a(ae(e)).then(a(oe(e)))),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(Object(R.a)({userId:n},u))),e(H()))}},a&&r.a.createElement("div",{className:"auth__alert-error"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{className:"form-label",htmlFor:"type"},"Tipo: "),r.a.createElement("select",{className:"form-control",name:"type",disabled:y,value:v,onChange:m,id:""},r.a.createElement("option",{value:"ingreso"},"Ingreso"),r.a.createElement("option",{value:"egreso"},"Egreso"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{className:"form-label",htmlFor:"category"},"Categoria: "),r.a.createElement("select",{name:"category",className:"form-control",value:E,onChange:m},r.a.createElement("option",null,"Alimentacion"),r.a.createElement("option",null,"Impuestos"),r.a.createElement("option",null,"Sueldo"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{className:"form-label",htmlFor:"date"},"Fecha: "),r.a.createElement("input",{type:"date",className:"form-control",value:h,name:"date",onChange:m,id:""}))),r.a.createElement("label",{className:"form-label",htmlFor:"concept"},"Concepto: "),r.a.createElement("input",{type:"text",className:"form-control",name:"concept",value:f,onChange:m,id:""}),r.a.createElement("label",{className:"form-label",htmlFor:"amount"},"Monto: "),r.a.createElement("input",{type:"text",className:"form-control",name:"amount",value:b,onChange:m,id:""}),r.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"Save")))},ye=function(){var e=Object(l.c)((function(e){return e.ui})).openModal,t=Object(l.b)();Ee.a.setAppElement("#root");return r.a.createElement("div",null,r.a.createElement(Ee.a,{isOpen:e,onRequestClose:function(){t(se(null)),t(H())},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},contentLabel:"Example Modal"},r.a.createElement(ge,null)))},je=function(){return r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(he,null),r.a.createElement(ye,null))},Oe=function(){return r.a.createElement("div",{className:"auth__box-container"},r.a.createElement("div",{className:"auth__main"},r.a.createElement("h1",{className:"auth__title"},"Cargando...")))},Ne=function(){var e,t=Object(l.b)(),a=Object(l.c)((function(e){return e.auth})),c=a.checking,o=a.uid;return Object(n.useEffect)((function(){t(function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(B({uid:n.id,name:n.name}))):t(P());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),void 0===o||c||t((e=o,function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A("balance/","GET");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,c=r.filter((function(t){return t.userId===e})),a(te(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}())).then(t(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A("transaction/","GET");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,c=r.filter((function(t){return t.userId===e})),a(le(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(o))),c?r.a.createElement(Oe,null):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(ee,{path:"/auth",isAuthenticated:!!o,component:Q}),r.a.createElement(Z,{path:"/",isAuthenticated:!!o,component:je}),r.a.createElement(u.a,{to:"/auth/login"}))))},we=a(17),ke={loading:!1,msgError:null,openModal:!1},xe=a(57),Te={transactions:[],activeTransaction:null},_e={balance:[]},Ce="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,Ie=Object(we.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(R.a)(Object(R.a)({},e),{},{checking:!1},t.payload);case f:return Object(R.a)(Object(R.a)({},e),{},{checking:!1});case h:return{checking:!1};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(R.a)(Object(R.a)({},e),{},{msgError:t.payload});case E:return Object(R.a)(Object(R.a)({},e),{},{msgError:null});case g:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case y:return Object(R.a)(Object(R.a)({},e),{},{loading:!1});case j:return Object(R.a)(Object(R.a)({},e),{},{openModal:!0});case O:return Object(R.a)(Object(R.a)({},e),{},{openModal:!1});default:return e}},transaction:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(R.a)(Object(R.a)({},e),{},{transactions:[].concat(Object(ce.a)(e.transactions),[t.payload]),activeTransaction:null});case x:return Object(R.a)(Object(R.a)({},e),{},{transactions:Object(ce.a)(t.payload),activeTransaction:null});case T:return Object(R.a)(Object(R.a)({},e),{},{activeTransaction:t.payload});case w:return Object(R.a)(Object(R.a)({},e),{},{transactions:e.transactions.map((function(e){return e.id===t.payload.id?t.payload:e})),activeTransaction:null});case k:return Object(R.a)(Object(R.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload})),activeTransaction:null});case _:return{};default:return e}},balance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case I:return Object(R.a)(Object(R.a)({},e),{},{balance:Object(ce.a)(t.payload)});case S:return{balance:[]};default:return e}}}),Se=Object(we.e)(Ie,Ce(Object(we.a)(xe.a))),Fe=function(){return r.a.createElement(l.a,{store:Se},r.a.createElement(Ne,null))};a(156);o.a.render(r.a.createElement(Fe,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a(157)}},[[58,1,2]]]);
//# sourceMappingURL=main.4fb13c67.chunk.js.map
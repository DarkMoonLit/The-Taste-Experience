(this["webpackJsonpthe-taste-experience"]=this["webpackJsonpthe-taste-experience"]||[]).push([[0],{139:function(e,t){},149:function(e,t){},167:function(e,t){},201:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(23),s=n.n(a),i=n(9),o=n.n(i),l=n(14),u=n(8),j=n(221),d=n(226),b=Object({NODE_ENV:"production",PUBLIC_URL:"/The-Taste-Experience",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"recipe.darkmoonlit.testnet";var x=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:b,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:b,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},p=n(39),h=n(44),O=x("testnet");function f(){return(f=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.connect)(Object.assign({deps:{keyStore:new p.keyStores.BrowserLocalStorageKeyStore}},O));case 2:t=e.sent,window.walletConnection=new p.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new p.Contract(window.walletConnection.account(),O.contractName,{viewMethods:["getRecipe","getRecipes"],changeMethods:["buyRecipe","setRecipe","transferOwnership","modifyRecipe"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){window.walletConnection.requestSignIn(O.contractName)}function g(){window.walletConnection.signOut(),window.location.reload()}var y=n(223),N=n(218),k=n(229),C=n(1),I=function(e){var t=e.address,n=e.amount,c=e.symbol,r=e.destroy;return t?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(y.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(C.jsxs)(C.Fragment,{children:[n," ",Object(C.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(C.jsx)(N.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(C.jsxs)(y.a.Menu,{className:"shadow-lg border-0",children:[Object(C.jsx)(y.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(C.jsxs)(k.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(C.jsx)("span",{className:"font-monospace",children:t})]})}),Object(C.jsx)(y.a.Divider,{}),Object(C.jsxs)(y.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){r()},children:[Object(C.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},S=n(27),F=(n(198),function(){return Object(C.jsx)(S.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),R=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},E={text:""};R.defaultProps=E,T.defaultProps=E;var P=n(2),U=n(117),B=n(224),A=n(225),_=n(120),H=function(e){var t=e.save,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),x=b[0],p=b[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),f=O[0],m=O[1],w=Object(c.useState)(0),v=Object(u.a)(w,2),g=v[0],y=v[1],N=Object(c.useState)(!1),k=Object(u.a)(N,2),I=k[0],S=k[1],F=function(){return S(!1)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(U.a,{onClick:function(){return S(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(C.jsx)("i",{className:"bi bi-plus"})}),Object(C.jsxs)(B.a,{show:I,onHide:F,centered:!0,children:[Object(C.jsx)(B.a.Header,{closeButton:!0,children:Object(C.jsx)(B.a.Title,{children:"New Recipe"})}),Object(C.jsx)(A.a,{children:Object(C.jsxs)(B.a.Body,{children:[Object(C.jsx)(_.a,{controlId:"inputName",label:"Recipe name",className:"mb-3",children:Object(C.jsx)(A.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of recipe"})}),Object(C.jsx)(_.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(C.jsx)(A.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){j(e.target.value)}})}),Object(C.jsx)(_.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(C.jsx)(A.a.Control,{type:"text",placeholder:"description",style:{height:"80px"},onChange:function(e){p(e.target.value)}})}),Object(C.jsx)(_.a,{controlId:"inputFormula",label:"Formula",className:"mb-3",children:Object(C.jsx)(A.a.Control,{as:"textarea",placeholder:"Use markdown to write formula down",onChange:function(e){m(e.target.value)},style:{height:"200px"}})}),Object(C.jsx)(_.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(C.jsx)(A.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(C.jsxs)(B.a.Footer,{children:[Object(C.jsx)(U.a,{variant:"outline-secondary",onClick:F,children:"Close"}),Object(C.jsx)(U.a,{variant:"dark",disabled:!(a&&l&&x&&f&&g),onClick:function(){t({name:a,image:l,description:x,formula:f,price:g}),F()},children:"Save recipe"})]})]})]})},L=n(119),D=n(228),M=n(219),W=n(222),K=function(e){var t=e.recipe,n=e.buy,r=e.modify,a=e.transfer,s=e.accountId,i=t.id,j=t.price,d=t.name,b=t.description,x=t.sold,h=t.formula,O=t.image,f=t.owner,m=t.buyers,w=Object(c.useState)(h),v=Object(u.a)(w,2),g=v[0],y=v[1],N=Object(c.useState)(""),I=Object(u.a)(N,2),S=I[0],F=I[1],R=Object(c.useState)(!1),T=Object(u.a)(R,2),E=T[0],P=T[1],_=Object(c.useState)(!1),H=Object(u.a)(_,2),K=H[0],z=H[1],J=function(){return P(!1)},q=function(){return z(!1)},G=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(i,j);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(i,S);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(i,g);case 2:J();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsx)(L.a,{children:Object(C.jsxs)(D.a,{className:" h-100",children:[Object(C.jsx)(D.a.Header,{children:Object(C.jsxs)(k.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:f}),Object(C.jsxs)(M.a,{bg:"secondary",className:"ms-auto",children:[x," Sold"]})]})}),Object(C.jsx)("div",{className:" ratio ratio-4x3",children:Object(C.jsx)("img",{src:O,alt:d,style:{objectFit:"cover"}})}),Object(C.jsxs)(D.a.Body,{className:"d-flex  flex-column text-center",children:[Object(C.jsx)(D.a.Title,{children:d}),Object(C.jsx)(D.a.Text,{className:"flex-grow-1 ",children:b}),null!==m&&m.indexOf(s)>-1||s===f?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(U.a,{variant:"dark",onClick:function(){return z(!0)},className:"mb-2",children:"Show formula"}),Object(C.jsxs)(B.a,{show:K,onHide:q,backdrop:"static",keyboard:!1,children:[Object(C.jsx)(B.a.Header,{closeButton:!0,children:Object(C.jsxs)(B.a.Title,{children:["Formula for ",d]})}),Object(C.jsx)(B.a.Body,{children:Object(C.jsx)(W.a,{children:h})}),Object(C.jsx)(B.a.Footer,{children:Object(C.jsx)(U.a,{variant:"secondary",onClick:q,children:"Close"})})]})]}):Object(C.jsxs)(U.a,{variant:"outline-dark",onClick:G,className:"w-100 py-3",children:["Buy for ",p.utils.format.formatNearAmount(j)," NEAR"]}),s===f?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(k.a,{children:[Object(C.jsx)(A.a.Control,{type:"text",id:"newOwner","aria-describedby":"newOwner",value:S,placeholder:"AccountId of new owner",onChange:function(e){return F(e.target.value)},className:"mb-2"}),Object(C.jsx)(U.a,{onClick:V,children:"Transfer"})]}),Object(C.jsx)(U.a,{variant:"danger",onClick:function(){return P(!0)},className:"mt-2",children:"Modify formula"}),Object(C.jsxs)(B.a,{show:E,onHide:J,backdrop:"static",keyboard:!1,children:[Object(C.jsx)(B.a.Header,{closeButton:!0,children:Object(C.jsx)(B.a.Title,{children:"Modify Formula"})}),Object(C.jsx)(B.a.Body,{children:Object(C.jsx)(A.a,{children:Object(C.jsxs)(A.a.Group,{className:"mb-3",controlId:"newFormula",children:[Object(C.jsx)(A.a.Label,{children:"Modify formula"}),Object(C.jsx)(A.a.Control,{as:"textarea",value:g,onChange:function(e){return y(e.target.value)},style:{height:"300px"}})]})})}),Object(C.jsxs)(B.a.Footer,{children:[Object(C.jsx)(U.a,{variant:"secondary",onClick:J,children:"Close"}),Object(C.jsx)(U.a,{variant:"success",onClick:Q,children:"Modify"})]})]})]}):""]}),Object(C.jsx)(D.a.Footer,{})]})},i)},z=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)(N.a,{animation:"border",role:"status",className:"opacity-25",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},J=n(220),q=n(227),G=1e14;function V(e){var t=e.id,n=e.owner;return window.contract.transferOwnership({recipeId:t,_owner:n})}function Q(e){var t=e.id,n=e.formula;return window.contract.modifyRecipe({recipeId:t,_formula:n})}function X(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyRecipe({recipeId:n},G,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(e){var t=e.accountId,n=Object(c.useState)([]),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),j=Object(u.a)(i,2),d=j[0],b=j[1],x=Object(c.useCallback)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.t0=s,e.next=5,window.contract.getRecipes();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),p=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{b(!0),(n=t,n.id=Object(q.a)(),n.price=Object(h.parseNearAmount)(n.price+""),window.contract.setRecipe({recipe:n})).then((function(e){x()})),Object(S.b)(Object(C.jsx)(R,{text:"Recipe added successfully."}))}catch(c){console.log({error:c}),Object(S.b)(Object(C.jsx)(T,{text:"Failed to create a recipe."}))}finally{b(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,X({id:t,price:n}).then((function(e){return x()}));case 4:Object(S.b)(Object(C.jsx)(R,{text:"Recipe bought successfully"})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(S.b)(Object(C.jsx)(T,{text:"Failed to purchase recipe."}));case 10:return e.prev=10,b(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,Q({id:t,formula:n}).then((function(e){return x()}));case 4:Object(S.b)(Object(C.jsx)(R,{text:"Recipe's formula modified successfully"})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(S.b)(Object(C.jsx)(T,{text:"Failed to modified recipe."}));case 10:return e.prev=10,b(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b(!0),n.includes(".testnet")){e.next=4;break}throw new Error("Enter a valid accountId for new owner");case 4:return e.next=6,V({id:t,owner:n}).then((function(e){return x()}));case 6:Object(S.b)(Object(C.jsx)(R,{text:"Recipe's ownership transferred successfully"})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Object(S.b)(Object(C.jsx)(T,{text:"Failed to transfer ownership of recipe."})),console.log(e.t0);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[]),Object(C.jsx)(C.Fragment,{children:d?Object(C.jsx)(z,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(C.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"The Taste Experience."}),Object(C.jsx)(H,{save:p})]}),Object(C.jsx)(J.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:a.map((function(e){return Object(C.jsx)(K,{recipe:Object(P.a)({},e),buy:O,modify:f,transfer:m,accountId:t},e.id)}))})]})})},$=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(C.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(C.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(C.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(C.jsx)("img",{src:c,alt:""})}),Object(C.jsx)("h1",{children:t}),Object(C.jsx)("p",{children:"Please connect your wallet to continue."}),Object(C.jsx)(U.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(C.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};$.defaultProps={name:""};var ee=$,te=n.p+"static/media/sandwich.2d312449.jpg",ne=(n(201),function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useCallback)(Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=a,t.next=4,m();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(F,{}),e.accountId?Object(C.jsxs)(j.a,{fluid:"md",children:[Object(C.jsx)(d.a,{className:"justify-content-end pt-3 pb-5",children:Object(C.jsx)(d.a.Item,{children:Object(C.jsx)(I,{address:e.accountId,amount:r,symbol:"NEAR",destroy:g})})}),Object(C.jsx)("main",{children:Object(C.jsx)(Z,{accountId:e.accountId})})]}):Object(C.jsx)(ee,{name:"The Taste Experience",login:v,coverImg:te})]})}),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(204),n(205);window.nearInitPromise=function(){return f.apply(this,arguments)}().then((function(){s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(ne,{})}),document.getElementById("root"))})).catch(console.error),ce()}},[[206,1,2]]]);
//# sourceMappingURL=main.f9b1912f.chunk.js.map
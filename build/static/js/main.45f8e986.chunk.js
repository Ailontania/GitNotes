(this["webpackJsonpnotes-viewer"]=this["webpackJsonpnotes-viewer"]||[]).push([[0],{370:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=(n(91),n(19)),o=n(50),l=n(428),d=n(427),j=n(426),b=n(435),h=n(434),u=n(430),g=n(58),p=n.n(g),f=n(429),O=n(51),x=n(432),m=n(431),v=n(425),w=n(436),y=n(12),k=(n(92),n(75)),C=n.n(k),I=n(79),N=n.n(I),L=n(78),S=n.n(L),R=n(417),G=n(420),T=n(422),U=n(423),H=n(424),M=n(76),X=n.n(M),E=n(77),P=n.n(E),A=n(421),_=n(4);function F(e){for(var t=[],n=0;n<e.length;n++)t=t.concat(e[n]);return t}function B(e){var t=Object(y.a)(),n=e.indent?e.indent:2,a=e.folder,i=c.a.useState(Array("function"===typeof a.folders?0:a.folders.length).fill(!1)),r=Object(s.a)(i,2),o=r[0],l=r[1];return"function"===typeof a.folders?(a.folders(a,(function(t,n){a.folders=t,a.files=n,l(Array(a.folders.length).fill(!1)),e.onLoad&&e.onLoad(n),e.fresh()})),Object(_.jsx)(R.a,{component:"div",disablePadding:!0,children:Object(_.jsx)(G.a,{button:!0,style:{paddingLeft:t.spacing(n)},children:Object(_.jsx)(A.a,{variant:"text",width:300,height:30})})})):Object(_.jsxs)(R.a,{component:"div",disablePadding:!0,children:[F(a.folders.map((function(c,i){return[Object(_.jsxs)(G.a,{button:!0,onClick:function(){return function(e){l(o.map((function(t,n){return e===n?!t:t})))}(i)},style:{paddingLeft:t.spacing(n)},children:[Object(_.jsx)(T.a,{children:Object(_.jsx)(C.a,{})}),Object(_.jsx)(U.a,{primary:c.name}),o[i]?Object(_.jsx)(X.a,{}):Object(_.jsx)(P.a,{})]},i),Object(_.jsx)(H.a,{in:o[i],timeout:"auto",unmountOnExit:!0,children:Object(_.jsx)(B,{indent:n+4,folder:c,fresh:e.fresh,onClick:e.onClick})},a.folders.length+i)]}))),a.files.map((function(c,i){return Object(_.jsxs)(G.a,{button:!0,onClick:function(){e.onClick(c)},style:{paddingLeft:t.spacing(n)},children:[Object(_.jsx)(T.a,{children:(r=c.name,r.length>=3&&".md"===r.slice(r.length-3,r.length)?Object(_.jsx)(S.a,{}):Object(_.jsx)(N.a,{}))}),Object(_.jsx)(U.a,{primary:c.name})]},2*a.folders.length+i);var r}))]})}var z=300,J=Object(v.a)((function(e){return Object(w.a)({root:{display:"flex"},drawer:Object(o.a)({},e.breakpoints.up("sm"),{width:z,flexShrink:0}),appBar:Object(o.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(z,"px)"),marginLeft:z}),menuButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:z},content:{flexGrow:1,padding:e.spacing(3)},github:{"& > *":{marginRight:e.spacing(2)}}})}));function $(e){return e.parent?$(e.parent)+e.name+"/":""}var D={name:"root",parent:null,folders:function e(t,n){var a=Q(),c=[],i=[],r=new XMLHttpRequest,s="";s="gitlab"===a.git?"https://".concat(a.gitlab,"/api/v4/projects/").concat(a.id,"/repository/tree?per_page=1000&ref=master&path=").concat(encodeURI($(t))):"https://api.github.com/repos/".concat(a.github,"/contents/").concat(encodeURI($(t))).concat(a.token?"?access_token=".concat(a.token):""),r.open("GET",s),r.onreadystatechange=function(){4===r.readyState&&200===r.status&&(JSON.parse(r.responseText).forEach((function(n){("gitlab"===a.git?"tree"===n.type:"dir"===n.type)?c.push({name:n.name,parent:t,folders:e,files:[]}):("gitlab"===a.git?"blob"===n.type:"file"===n.type)&&i.push({name:n.name,parent:t})})),n(c,i))},r.send(null)},files:[]},q=n(99),V=n(310)({html:!0,highlight:function(e,t){if(t&&q.getLanguage(t))try{return'<pre class="hljs"><code>'+q.highlight(t,e,!0).value+"</code></pre>"}catch(n){}return'<pre class="hljs"><code>'+V.utils.escapeHtml(e)+"</code></pre>"}}),W=n(367);function K(e,t){if(t){var n=Q(),a="",c="";"gitlab"===n.git?(a="https://".concat(n.gitlab,"/api/v4/projects/").concat(n.id,"/repository/files/"),c="/raw?ref=master"):(a="https://raw.githubusercontent.com/".concat(n.github,"/master/"),c="");for(var i,r=/!\[([\u4e00-\u9fa5a-z0-9-_/. ]*)\]\((\.\/)?([\u4e00-\u9fa5a-z0-9-_/. ]*)\)/g,s=0,o="";null!==(i=r.exec(e));)o+=e.slice(s,r.lastIndex-i[0].length),o+="![".concat(i[1],"](").concat(a).concat("gitlab"===n.git?encodeURI($(t.parent)+i[3]).replace(/\//g,"%2F"):encodeURI($(t.parent)+i[3])).concat(c,")"),s=r.lastIndex;o+=e.slice(s,e.length),e=o;var l=/<img +src="([\u4e00-\u9fa5a-z0-9-_/. ]*)"([^>]*)>/g;for(s=0,o="";null!==(i=l.exec(e));)o+=e.slice(s,l.lastIndex-i[0].length),o+='<img src="'.concat(a).concat("gitlab"===n.git?encodeURI($(t.parent)+i[1]).replace(/\//g,"%2F"):encodeURI($(t.parent)+i[1])).concat(c,'"').concat(i[2],">"),s=l.lastIndex;o+=e.slice(s,e.length),e=o}return e.replace(/\$ +/g,"$").replace(/ +\$/g,"$")}function Q(){var e={};if(window.location.search.length>1)for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var a=t[n].split("=");e[a[0]]=a[1]}return"github"!==e.git&&"gitlab"!==e.git&&void 0!==e.git&&(e.git="github"),"gitlab"===e.git?e.gitlab||(e.gitlab="git.nju.edu.cn",e.id="2047"):e.github||(e.github="OrangeX4/NJUAI-Notes"),e}function Y(){return document.location.toString().split("?")[0]}function Z(){var e=J(),t=Object(y.a)(),n=c.a.useState(!1),i=Object(s.a)(n,2),r=i[0],o=i[1];function g(){o(!r)}function v(e){var t=Q(),n="",a="";"gitlab"===t.git?(n="https://".concat(t.gitlab,"/api/v4/projects/").concat(t.id,"/repository/files/"),a="/raw?ref=master"):(n="https://raw.githubusercontent.com/".concat(t.github,"/master/"),a="");var c,i="".concat(n).concat("gitlab"===t.git?encodeURI($(e.parent)+e.name).replace(/\//g,"%2F"):encodeURI($(e.parent)+e.name)).concat(a);if(!((c=e.name).length>=3&&".md"===c.slice(c.length-3,c.length)))return console.log(window.location.search),void window.open(i,"_blank");var r=new XMLHttpRequest;r.open("GET",i),r.onreadystatechange=function(){4===r.readyState&&200===r.status&&(I(e),R(e.name),H(r.responseText))},r.send(null)}var w=Object(a.useState)(null),k=Object(s.a)(w,2),C=k[0],I=k[1],N=Object(a.useState)("OrangeX4's Notes"),L=Object(s.a)(N,2),S=L[0],R=L[1],G=Object(a.useState)(""),T=Object(s.a)(G,2),U=T[0],H=T[1],M=Object(a.useState)(0),X=Object(s.a)(M,2),E=X[0],P=X[1],A=Object(a.useState)("OrangeX4/NJUAI-Notes"),F=Object(s.a)(A,2),z=F[0],q=F[1],W=Object(a.useState)(""),Z=Object(s.a)(W,2),ee=Z[0],te=Z[1],ne=Object(a.useState)("git.nju.edu.cn"),ae=Object(s.a)(ne,2),ce=ae[0],ie=ae[1],re=Object(a.useState)("2047"),se=Object(s.a)(re,2),oe=se[0],le=se[1],de=Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:e.toolbar,style:{color:"#303030",display:"flex",alignItems:"center",paddingLeft:16},children:[Object(_.jsx)(p.a,{style:{marginRight:30}}),Object(_.jsx)(O.a,{variant:"h6",noWrap:!0,children:"\u76ee\u5f55"})]}),Object(_.jsx)(j.a,{}),Q().git?Object(_.jsx)(B,{folder:D,fresh:function(){return P(E+1)},onClick:v,onLoad:function(e){e.forEach((function(e){"README.md"===e.name&&v(e)}))}}):null]});return Object(_.jsxs)("div",{className:e.root,children:[Object(_.jsx)(d.a,{}),Object(_.jsx)(l.a,{position:"fixed",className:e.appBar,color:"default",children:Object(_.jsxs)(f.a,{children:[Object(_.jsx)(u.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:g,className:e.menuButton,children:Object(_.jsx)(p.a,{})}),Object(_.jsx)(O.a,{variant:"h6",noWrap:!0,children:S})]})}),Object(_.jsxs)("nav",{className:e.drawer,"aria-label":"mailbox folders",children:[Object(_.jsx)(h.a,{smUp:!0,implementation:"css",children:Object(_.jsx)(b.a,{variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:r,onClose:g,classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0},children:de})}),Object(_.jsx)(h.a,{xsDown:!0,implementation:"css",children:Object(_.jsx)(b.a,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0,children:de})})]}),Object(_.jsxs)("main",{className:e.content,children:[Object(_.jsx)("div",{className:e.toolbar}),Q().git?Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:V.render(K(U,C))}}):Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"\u8fd9\u662f\u4ec0\u4e48?"}),Object(_.jsxs)("p",{children:["\u8fd9\u662f\u4e00\u4e2a\u7531 ",Object(_.jsx)("b",{children:"OrangeX4"})," \u5f00\u53d1\u7684",Object(_.jsx)("b",{children:"\u7b14\u8bb0\u6d4f\u89c8\u5e94\u7528"}),", \u7528\u4e8e\u6d4f\u89c8\u4ee5 ",Object(_.jsx)("b",{children:"Markdown"})," \u4e66\u5199\u7684, \u5b58\u653e\u5728 ",Object(_.jsx)("b",{children:"GitLab \u6216 GitHub"})," \u4e0a\u7684\u7b14\u8bb0."]}),Object(_.jsxs)("p",{children:["\u4f18\u70b9: ",Object(_.jsx)("b",{children:"\u6570\u5b66\u516c\u5f0f\u652f\u6301\u548c\u79fb\u52a8\u7aef\u9002\u914d."})]}),Object(_.jsx)("a",{href:"https://github.com/OrangeX4/GitNotes",children:"GitHub \u5730\u5740"}),Object(_.jsx)("h1",{children:"OrangeX4 \u7684\u7b14\u8bb0"}),Object(_.jsx)("h2",{children:Object(_.jsx)("a",{href:"./?git=gitlab",children:"OrangeX4's Notes"})}),Object(_.jsx)("h1",{children:"\u5176\u4ed6\u7b14\u8bb0"}),Object(_.jsx)("h2",{children:Object(_.jsx)("a",{href:"./?git=github&github=typoverflow/note",children:"Typoverflow's Notes"})}),Object(_.jsx)("h2",{children:Object(_.jsx)("a",{href:"./?git=github&github=fengdu78/Coursera-ML-AndrewNg-Notes",children:"Coursera-ML-AndrewNg-Notes"})}),Object(_.jsx)("h1",{children:"GitHub"}),Object(_.jsxs)("form",{className:e.github,noValidate:!0,autoComplete:"off",children:[Object(_.jsx)(x.a,{id:"standard-basic",value:z,onChange:function(e){return q(e.target.value)},label:"Repo"}),Object(_.jsx)(x.a,{id:"standard-basic",value:ee,onChange:function(e){return te(e.target.value)},label:"Token"}),Object(_.jsx)(m.a,{variant:"outlined",color:"primary",onClick:function(){window.location.href="".concat(Y(),"?git=github&github=").concat(z).concat(""===ee?"":"&token="+ee)},style:{height:50,width:100,fontSize:16},children:"\u6d4f\u89c8"})]}),Object(_.jsx)("p",{children:"GitHub \u5bf9\u4e8e API \u8bbf\u95ee\u6709\u4e00\u5b9a\u7684\u9650\u5236, \u8d85\u8fc7\u6b21\u6570\u4fbf\u9700\u8981 Token \u624d\u80fd\u7ee7\u7eed\u6d4f\u89c8."}),Object(_.jsxs)("p",{children:["\u8be6\u89c1 ",Object(_.jsx)("a",{href:"https://docs.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token",children:"\u521b\u5efa Token"}),"."]}),Object(_.jsx)("h1",{children:"GitLab"}),Object(_.jsxs)("form",{className:e.github,noValidate:!0,autoComplete:"off",children:[Object(_.jsx)(x.a,{id:"standard-basic",value:ce,onChange:function(e){return ie(e.target.value)},label:"Host"}),Object(_.jsx)(x.a,{id:"standard-basic",value:oe,onChange:function(e){return le(e.target.value)},label:"Id"}),Object(_.jsx)(m.a,{variant:"outlined",color:"primary",onClick:function(){window.location.href="".concat(Y(),"?git=gitlab&gitlab=").concat(ce,"&id=").concat(oe)},style:{height:50,width:100,fontSize:16},children:"\u6d4f\u89c8"})]}),Object(_.jsx)("p",{children:'Host \u662f GitLab \u6240\u5728\u7684\u57df\u540d, \u5982 "gitlab.com" \u548c "git.nju.edu.cn".'}),Object(_.jsx)("p",{children:"Id \u662f\u4f60\u8981\u6d4f\u89c8\u7684 GitLab \u9879\u76ee\u7684 Id, \u53ef\u4ee5\u5728\u9879\u76ee\u9875\u9762\u4e0a\u627e\u5230."})]})]})]})}V.use(W,{throwOnError:!1,errorColor:"#cc0000"});var ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,437)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(_.jsxs)(c.a.StrictMode,{children:[Object(_.jsx)(Z,{}),Object(_.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css"}),Object(_.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"})]}),document.getElementById("root")),ee()},91:function(e,t,n){},92:function(e,t,n){}},[[370,1,2]]]);
//# sourceMappingURL=main.45f8e986.chunk.js.map
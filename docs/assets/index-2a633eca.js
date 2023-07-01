import{r as fe,j as ye,a as W,F as _e,S as Ae,d as $e}from"./index-04e27147.js";import{u as Se}from"./useUpdate-102355c8.js";import{u as Ce,a as Fe}from"./apis-158592c5.js";var ve={};function ke(p){return p}function Ee(p){return!1}function me(){}me.prototype={chain:function(p,m){var y=this[p];if(!y)throw new Error("unknown hook "+p);y===ke?this[p]=m:this[p]=function(C){var u=Array.prototype.slice.call(arguments,0);return u[0]=y.apply(null,u),m.apply(null,u)}},set:function(p,m){if(!this[p])throw new Error("unknown hook "+p);this[p]=m},addNoop:function(p){this[p]=ke},addFalse:function(p){this[p]=Ee}};ve.HookCollection=me;function he(){}he.prototype={set:function(p,m){this["s_"+p]=m},get:function(p){return this["s_"+p]}};ve.Converter=function(p){var m=this.hooks=new me;m.addNoop("plainLinkText"),m.addNoop("preConversion"),m.addNoop("postNormalization"),m.addNoop("preBlockGamut"),m.addNoop("postBlockGamut"),m.addNoop("preSpanGamut"),m.addNoop("postSpanGamut"),m.addNoop("postCodeGamut"),m.addNoop("postConversion");var y,C,u,E;p=p||{},this.makeHtml=function(e){if(y)throw new Error("Recursive call to converter.makeHtml");return y=new he,C=new he,u=[],E=0,e=m.preConversion(e),e=pe(e),e=x(e),e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,`
`),e=e.replace(/\r/g,`
`),e=`

`+e+`

`,e=N(e),e=ee(e,p),e=e.replace(/^[ \t]+$/mg,""),e=m.postNormalization(e),e=Z(e),e=Q(e),e=B(e),e=G(e),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),e=m.postConversion(e),u=C=y=null,e};function Q(e){return e=e.replace(/^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(\n+)/gm,function(w,o,i,c,A,b,k){return o=o.toLowerCase(),y.set(o,le(i)),A?c+k:(b&&C.set(o,b.replace(/"/g,"&quot;")),"")}),e}function Z(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,F),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,F),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,F),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,F),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,F),e}function U(e){return e=e.replace(/(^\n+|\n+$)/g,""),`

~K`+(u.push(e)-1)+`K

`}function F(e,w){return U(w)}var z=function(e){return B(e)};function B(e,w,o){e=m.preBlockGamut(e,z),e=s(e);var i=`<hr />
`;return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,i),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,i),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,i),e=f(e),e=T(e),e=se(e),e=m.postBlockGamut(e,z),e=Z(e),e=ce(e,w,o),e}function L(e){return e=m.preSpanGamut(e),e=M(e),e=K(e),e=ue(e),e=n(e),e=te(e),e=ge(e),e=e.replace(/~P/g,"://"),e=le(e),e=ie(e),e=e.replace(/  +\n/g,` <br />
`),e=m.postSpanGamut(e),e}function K(e){var w=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return e=e.replace(w,function(o){var i=o.replace(/(.)<\/?code>(?=.)/g,"$1`");return i=j(i,o.charAt(1)=="!"?"\\`*_/":"\\`*_"),i}),e}function te(e){return e.indexOf("[")===-1||(e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,r),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,r),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,r)),e}function r(e,w,o,i,c,A,b,k){k==null&&(k="");var _=w,v=o.replace(/:\/\//g,"~P"),l=i.toLowerCase(),g=c,S=k;if(g=="")if(l==""&&(l=v.toLowerCase().replace(/ ?\n/g," ")),g="#"+l,y.get(l)!=null)g=y.get(l),C.get(l)!=null&&(S=C.get(l));else if(_.search(/\(\s*\)$/m)>-1)g="";else return _;g=Y(g);var D='<a href="'+g+'"';return S!=""&&(S=a(S),S=j(S,"*_"),D+=' title="'+S+'"'),D+=">"+v+"</a>",D}function n(e){return e.indexOf("![")===-1||(e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,t),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,t)),e}function a(e){return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function t(e,w,o,i,c,A,b,k){var _=w,v=o,l=i.toLowerCase(),g=c,S=k;if(S||(S=""),g=="")if(l==""&&(l=v.toLowerCase().replace(/ ?\n/g," ")),g="#"+l,y.get(l)!=null)g=y.get(l),C.get(l)!=null&&(S=C.get(l));else return _;v=j(a(v),"*_[]()"),g=j(g,"*_");var D='<img src="'+g+'" alt="'+v+'"';return S=a(S),S=j(S,"*_"),D+=' title="'+S+'"',D+=" />",D}function s(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(w,o){return"<h1>"+L(o)+`</h1>

`}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(w,o){return"<h2>"+L(o)+`</h2>

`}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(w,o,i){var c=o.length;return"<h"+c+">"+L(i)+"</h"+c+`>

`}),e}function f(e){e+="~0";var w=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return E?e=e.replace(w,function(o,i,c){var A=i,b=c.search(/[*+-]/g)>-1?"ul":"ol",k;b==="ol"&&(k=parseInt(c,10));var _=h(A,b);_=_.replace(/\s+$/,"");var v="<"+b;return k&&k!==1&&(v+=' start="'+k+'"'),_=v+">"+_+"</"+b+`>
`,_}):(w=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(w,function(o,i,c,A){var b=i,k=c,_=A.search(/[*+-]/g)>-1?"ul":"ol",v;_==="ol"&&(v=parseInt(A,10));var l=h(k,_),g="<"+_;return v&&v!==1&&(g+=' start="'+v+'"'),l=b+g+`>
`+l+"</"+_+`>
`,l})),e=e.replace(/~0/,""),e}var $={ol:"\\d+[.]",ul:"[*+-]"};function h(e,w){E++,e=e.replace(/\n{2,}$/,`
`),e+="~0";var o=$[w],i=new RegExp("(^[ \\t]*)("+o+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+o+")[ \\t]+))","gm"),c=!1;return e=e.replace(i,function(A,b,k,_){var v=_,l=/\n\n$/.test(v),g=l||v.search(/\n{2,}/)>-1,S=g||c;return v=B(O(v),!0,!S),c=l,"<li>"+v+`</li>
`}),e=e.replace(/~0/g,""),E--,e}function T(e){return e+="~0",e=e.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(w,o,i){var c=o,A=i;return c=P(O(c)),c=N(c),c=c.replace(/^\n+/g,""),c=c.replace(/\n+$/g,""),c="<pre><code>"+c+`
</code></pre>`,`

`+c+`

`+A}),e=e.replace(/~0/,""),e}function M(e){return e=e.replace(/(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm,function(w,o,i,c,A){var b=c;return b=b.replace(/^([ \t]*)/g,""),b=b.replace(/[ \t]*$/g,""),b=P(b),b=b.replace(/:\/\//g,"~P"),o+"<code>"+b+"</code>"}),e}function P(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=j(e,"*_{}[]\\",!1),e}function ie(e){return e.indexOf("*")===-1&&e.indexOf("_")===-1||(e=e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g,"$1<strong>$3</strong>"),e=e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g,"$1<em>$3</em>")),e}function se(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(w,o){var i=o;return i=i.replace(/^[ \t]*>[ \t]?/gm,"~0"),i=i.replace(/~0/g,""),i=i.replace(/^[ \t]+$/gm,""),i=B(i),i=i.replace(/(^|\n)/g,"$1  "),i=i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(c,A){var b=A;return b=b.replace(/^  /mg,"~0"),b=b.replace(/~0/g,""),b}),U(`<blockquote>
`+i+`
</blockquote>`)}),e}function ce(e,w,o){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var i=e.split(/\n{2,}/g),c=[],A=/~K(\d+)K/,b=i.length,k=0;k<b;k++){var _=i[k];A.test(_)?c.push(_):/\S/.test(_)&&(_=L(_),_=_.replace(/^([ \t]*)/g,o?"":"<p>"),o||(_+="</p>"),c.push(_))}if(!w){b=c.length;for(var k=0;k<b;k++)for(var v=!0;v;)v=!1,c[k]=c[k].replace(/~K(\d+)K/g,function(g,S){return v=!0,u[S]})}return c.join(`

`)}function le(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;"),e}function ue(e){return e=e.replace(/\\(\\)/g,J),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,J),e}var I="[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]",R="[-A-Z0-9+&@#/%=~_|[\\])]",q=new RegExp('(="|<)?\\b(https?|ftp)(://'+I+"*"+R+")(?=$|\\W)","gi"),V=new RegExp(R,"i");function H(e,w,o,i){if(w)return e;if(i.charAt(i.length-1)!==")")return"<"+o+i+">";for(var c=i.match(/[()]/g),A=0,b=0;b<c.length;b++)c[b]==="("?A<=0?A=1:A++:A--;var k="";if(A<0){var _=new RegExp("\\){1,"+-A+"}$");i=i.replace(_,function(l){return k=l,""})}if(k){var v=i.charAt(i.length-1);V.test(v)||(k=v+k,i=i.substr(0,i.length-1))}return"<"+o+i+">"+k}function ge(e){e=e.replace(q,H);var w=function(o,i){var c=Y(i);return'<a href="'+c+'">'+m.plainLinkText(i)+"</a>"};return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,w),e}function G(e){return e=e.replace(/~E(\d+)E/g,function(w,o){var i=parseInt(o);return String.fromCharCode(i)}),e}function O(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,""),e}function N(e){if(!/\t/.test(e))return e;var w=["    ","   ","  "," "],o=0,i;return e.replace(/[\n\t]/g,function(c,A){return c===`
`?(o=A+1,c):(i=(A-o)%4,o=A+1,w[i])})}function Y(e){return e=a(e),e=j(e,"*_:()[]"),e}function j(e,w,o){var i="(["+w.replace(/([\[\]\\])/g,"\\$1")+"])";o&&(i="\\\\"+i);var c=new RegExp(i,"g");return e=e.replace(c,J),e}function J(e,w){var o=w.charCodeAt(0);return"~E"+o+"E"}function ee(e,w={}){var o=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function c(v){return/^:[ \t]*--*$/.test(v)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(v)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(v)?' style="text-align:center;"':""}function A(v,l){var g="";return v=v.trim(),(w.tablesHeaderId||w.tableHeaderId)&&(g=' id="'+v.replace(/ /g,"_").toLowerCase()+'"'),v=L(v),"<th"+g+l+">"+v+`</th>
`}function b(v,l){var g=L(v);return"<td"+l+">"+g+`</td>
`}function k(v,l){for(var g=`<table>
<thead>
<tr>
`,S=v.length,D=0;D<S;++D)g+=v[D];for(g+=`</tr>
</thead>
<tbody>
`,D=0;D<l.length;++D){g+=`<tr>
`;for(var X=0;X<S;++X)g+=l[D][X];g+=`</tr>
`}return g+=`</tbody>
</table>
`,g}function _(v){var l,g=v.split(`
`);for(l=0;l<g.length;++l)/^ {0,3}\|/.test(g[l])&&(g[l]=g[l].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(g[l])&&(g[l]=g[l].replace(/\|[ \t]*$/,"")),g[l]=M(g[l]);var S=g[0].split("|").map(function(re){return re.trim()}),D=g[1].split("|").map(function(re){return re.trim()}),X=[],de=[],ne=[],we=[];for(g.shift(),g.shift(),l=0;l<g.length;++l)g[l].trim()!==""&&X.push(g[l].split("|").map(function(re){return re.trim()}));if(S.length<D.length)return v;for(l=0;l<D.length;++l)ne.push(c(D[l]));for(l=0;l<S.length;++l)typeof ne[l]>"u"&&(ne[l]=""),de.push(A(S[l],ne[l]));for(l=0;l<X.length;++l){for(var be=[],oe=0;oe<de.length;++oe)be.push(b(X[l][oe],ne[oe]));we.push(be)}return k(de,we)}return e=e.replace(/\\(\|)/g,J),e=e.replace(o,_),e=e.replace(i,_),e}function x(e){function w(o,i){return"<del>"+i+"</del>"}return e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,w),e}function pe(e){return e=e.replace(/```(\w+)?([\s\S]*?)```|\`\`\`([\s\S]*?)\`\`\`/g,function(w,o,i){if(!/[\n\r]/.test(i))return`\`${i}\``;let c=m.postCodeGamut(i,o);return`<div class="code"><header></header><pre><code class="language-${o}">${c}</code></pre></div>`}),e}};const Me=ve;/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var d=function(p){var m=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,y=0,C={},u={manual:p.Prism&&p.Prism.manual,disableWorkerMessageHandler:p.Prism&&p.Prism.disableWorkerMessageHandler,util:{encode:function r(n){return n instanceof E?new E(n.type,r(n.content),n.alias):Array.isArray(n)?n.map(r):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(r){return Object.prototype.toString.call(r).slice(8,-1)},objId:function(r){return r.__id||Object.defineProperty(r,"__id",{value:++y}),r.__id},clone:function r(n,a){a=a||{};var t,s;switch(u.util.type(n)){case"Object":if(s=u.util.objId(n),a[s])return a[s];t={},a[s]=t;for(var f in n)n.hasOwnProperty(f)&&(t[f]=r(n[f],a));return t;case"Array":return s=u.util.objId(n),a[s]?a[s]:(t=[],a[s]=t,n.forEach(function($,h){t[h]=r($,a)}),t);default:return n}},getLanguage:function(r){for(;r;){var n=m.exec(r.className);if(n)return n[1].toLowerCase();r=r.parentElement}return"none"},setLanguage:function(r,n){r.className=r.className.replace(RegExp(m,"gi"),""),r.classList.add("language-"+n)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(t){var r=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(t.stack)||[])[1];if(r){var n=document.getElementsByTagName("script");for(var a in n)if(n[a].src==r)return n[a]}return null}},isActive:function(r,n,a){for(var t="no-"+n;r;){var s=r.classList;if(s.contains(n))return!0;if(s.contains(t))return!1;r=r.parentElement}return!!a}},languages:{plain:C,plaintext:C,text:C,txt:C,extend:function(r,n){var a=u.util.clone(u.languages[r]);for(var t in n)a[t]=n[t];return a},insertBefore:function(r,n,a,t){t=t||u.languages;var s=t[r],f={};for(var $ in s)if(s.hasOwnProperty($)){if($==n)for(var h in a)a.hasOwnProperty(h)&&(f[h]=a[h]);a.hasOwnProperty($)||(f[$]=s[$])}var T=t[r];return t[r]=f,u.languages.DFS(u.languages,function(M,P){P===T&&M!=r&&(this[M]=f)}),f},DFS:function r(n,a,t,s){s=s||{};var f=u.util.objId;for(var $ in n)if(n.hasOwnProperty($)){a.call(n,$,n[$],t||$);var h=n[$],T=u.util.type(h);T==="Object"&&!s[f(h)]?(s[f(h)]=!0,r(h,a,null,s)):T==="Array"&&!s[f(h)]&&(s[f(h)]=!0,r(h,a,$,s))}}},plugins:{},highlightAll:function(r,n){u.highlightAllUnder(document,r,n)},highlightAllUnder:function(r,n,a){var t={callback:a,container:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),u.hooks.run("before-all-elements-highlight",t);for(var s=0,f;f=t.elements[s++];)u.highlightElement(f,n===!0,t.callback)},highlightElement:function(r,n,a){var t=u.util.getLanguage(r),s=u.languages[t];u.util.setLanguage(r,t);var f=r.parentElement;f&&f.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(f,t);var $=r.textContent,h={element:r,language:t,grammar:s,code:$};function T(P){h.highlightedCode=P,u.hooks.run("before-insert",h),h.element.innerHTML=h.highlightedCode,u.hooks.run("after-highlight",h),u.hooks.run("complete",h),a&&a.call(h.element)}if(u.hooks.run("before-sanity-check",h),f=h.element.parentElement,f&&f.nodeName.toLowerCase()==="pre"&&!f.hasAttribute("tabindex")&&f.setAttribute("tabindex","0"),!h.code){u.hooks.run("complete",h),a&&a.call(h.element);return}if(u.hooks.run("before-highlight",h),!h.grammar){T(u.util.encode(h.code));return}if(n&&p.Worker){var M=new Worker(u.filename);M.onmessage=function(P){T(P.data)},M.postMessage(JSON.stringify({language:h.language,code:h.code,immediateClose:!0}))}else T(u.highlight(h.code,h.grammar,h.language))},highlight:function(r,n,a){var t={code:r,grammar:n,language:a};if(u.hooks.run("before-tokenize",t),!t.grammar)throw new Error('The language "'+t.language+'" has no grammar.');return t.tokens=u.tokenize(t.code,t.grammar),u.hooks.run("after-tokenize",t),E.stringify(u.util.encode(t.tokens),t.language)},tokenize:function(r,n){var a=n.rest;if(a){for(var t in a)n[t]=a[t];delete n.rest}var s=new U;return F(s,s.head,r),Z(r,s,n,s.head,0),B(s)},hooks:{all:{},add:function(r,n){var a=u.hooks.all;a[r]=a[r]||[],a[r].push(n)},run:function(r,n){var a=u.hooks.all[r];if(!(!a||!a.length))for(var t=0,s;s=a[t++];)s(n)}},Token:E};p.Prism=u;function E(r,n,a,t){this.type=r,this.content=n,this.alias=a,this.length=(t||"").length|0}E.stringify=function r(n,a){if(typeof n=="string")return n;if(Array.isArray(n)){var t="";return n.forEach(function(T){t+=r(T,a)}),t}var s={type:n.type,content:r(n.content,a),tag:"span",classes:["token",n.type],attributes:{},language:a},f=n.alias;f&&(Array.isArray(f)?Array.prototype.push.apply(s.classes,f):s.classes.push(f)),u.hooks.run("wrap",s);var $="";for(var h in s.attributes)$+=" "+h+'="'+(s.attributes[h]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+$+">"+s.content+"</"+s.tag+">"};function Q(r,n,a,t){r.lastIndex=n;var s=r.exec(a);if(s&&t&&s[1]){var f=s[1].length;s.index+=f,s[0]=s[0].slice(f)}return s}function Z(r,n,a,t,s,f){for(var $ in a)if(!(!a.hasOwnProperty($)||!a[$])){var h=a[$];h=Array.isArray(h)?h:[h];for(var T=0;T<h.length;++T){if(f&&f.cause==$+","+T)return;var M=h[T],P=M.inside,ie=!!M.lookbehind,se=!!M.greedy,ce=M.alias;if(se&&!M.pattern.global){var le=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,le+"g")}for(var ue=M.pattern||M,I=t.next,R=s;I!==n.tail&&!(f&&R>=f.reach);R+=I.value.length,I=I.next){var q=I.value;if(n.length>r.length)return;if(!(q instanceof E)){var V=1,H;if(se){if(H=Q(ue,R,r,ie),!H||H.index>=r.length)break;var N=H.index,ge=H.index+H[0].length,G=R;for(G+=I.value.length;N>=G;)I=I.next,G+=I.value.length;if(G-=I.value.length,R=G,I.value instanceof E)continue;for(var O=I;O!==n.tail&&(G<ge||typeof O.value=="string");O=O.next)V++,G+=O.value.length;V--,q=r.slice(R,G),H.index-=R}else if(H=Q(ue,0,q,ie),!H)continue;var N=H.index,Y=H[0],j=q.slice(0,N),J=q.slice(N+Y.length),ee=R+q.length;f&&ee>f.reach&&(f.reach=ee);var x=I.prev;j&&(x=F(n,x,j),R+=j.length),z(n,x,V);var pe=new E($,P?u.tokenize(Y,P):Y,ce,Y);if(I=F(n,x,pe),J&&F(n,I,J),V>1){var e={cause:$+","+T,reach:ee};Z(r,n,a,I.prev,R,e),f&&e.reach>f.reach&&(f.reach=e.reach)}}}}}}function U(){var r={value:null,prev:null,next:null},n={value:null,prev:r,next:null};r.next=n,this.head=r,this.tail=n,this.length=0}function F(r,n,a){var t=n.next,s={value:a,prev:n,next:t};return n.next=s,t.prev=s,r.length++,s}function z(r,n,a){for(var t=n.next,s=0;s<a&&t!==r.tail;s++)t=t.next;n.next=t,t.prev=n,r.length-=s}function B(r){for(var n=[],a=r.head.next;a!==r.tail;)n.push(a.value),a=a.next;return n}if(!p.document)return p.addEventListener&&(u.disableWorkerMessageHandler||p.addEventListener("message",function(r){var n=JSON.parse(r.data),a=n.language,t=n.code,s=n.immediateClose;p.postMessage(u.highlight(t,u.languages[a],a)),s&&p.close()},!1)),u;var L=u.util.currentScript();L&&(u.filename=L.src,L.hasAttribute("data-manual")&&(u.manual=!0));function K(){u.manual||u.highlightAll()}if(!u.manual){var te=document.readyState;te==="loading"||te==="interactive"&&L&&L.defer?document.addEventListener("DOMContentLoaded",K):window.requestAnimationFrame?window.requestAnimationFrame(K):window.setTimeout(K,16)}return u}({});d.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};d.languages.markup.tag.inside["attr-value"].inside.entity=d.languages.markup.entity;d.languages.markup.doctype.inside["internal-subset"].inside=d.languages.markup;d.hooks.add("wrap",function(p){p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))});Object.defineProperty(d.languages.markup.tag,"addInlined",{value:function(m,y){var C={};C["language-"+y]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:d.languages[y]},C.cdata=/^<!\[CDATA\[|\]\]>$/i;var u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:C}};u["language-"+y]={pattern:/[\s\S]+/,inside:d.languages[y]};var E={};E[m]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return m}),"i"),lookbehind:!0,greedy:!0,inside:u},d.languages.insertBefore("markup","cdata",E)}});Object.defineProperty(d.languages.markup.tag,"addAttribute",{value:function(p,m){d.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+p+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[m,"language-"+m],inside:d.languages[m]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});d.languages.html=d.languages.markup;d.languages.mathml=d.languages.markup;d.languages.svg=d.languages.markup;d.languages.xml=d.languages.extend("markup",{});d.languages.ssml=d.languages.xml;d.languages.atom=d.languages.xml;d.languages.rss=d.languages.xml;(function(p){var m=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;p.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+m.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+m.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+m.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+m.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:m,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},p.languages.css.atrule.inside.rest=p.languages.css;var y=p.languages.markup;y&&(y.tag.addInlined("style","css"),y.tag.addAttribute("style","css"))})(d);d.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};d.languages.javascript=d.languages.extend("clike",{"class-name":[d.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});d.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;d.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:d.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:d.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:d.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:d.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:d.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});d.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:d.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});d.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});d.languages.markup&&(d.languages.markup.tag.addInlined("script","javascript"),d.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));d.languages.js=d.languages.javascript;const ae=d,De="_markdown_w6i7r_2",Te={markdown:De},Re=fe.memo(p=>{var U;const[m]=Ce(),[y,C,{navigate:u,params:E}]=Se({pre:"blog",pages:{page:0,total:""}}),Q=fe.useMemo(()=>{const F=new Me.Converter;return F.hooks.set("postCodeGamut",(z,B)=>{var L;return ae.highlight(z,(L=ae==null?void 0:ae.languages)==null?void 0:L[B||"js"])||z}),F},[]);fe.useEffect(()=>{if(E.id){const F=Fe.archive.replace("$blog",E.id);C({loading:!0}),m.get(F,{type:"text"}).then(z=>{if(z.success){const B=Q.makeHtml(z.data);y.markdown=B}C({loading:!1,markdown:y.markdown}),console.log({res:z})})}else{const F=Fe.blogs.replace("$blog",y.pre);m.get(F).then(z=>{const{page:B,total:L,data:K}=z.data;C({pages:{page:0,total:L},archive:K})})}console.log({prism:ae})},[]);const Z=F=>{u("/blog/"+F.name)};return ye("div",{className:"main",children:[y.markdown&&W(_e,{children:W("div",{className:Te.markdown,dangerouslySetInnerHTML:{__html:y.markdown}})}),W(Ae,{loading:y.loading,children:W("div",{style:{display:y.markdown?"none":"block"},children:(U=y==null?void 0:y.archive)==null?void 0:U.map(F=>{var z;return ye("article",{className:"blog-item",children:[W("h2",{children:W("a",{style:{cursor:"pointer"},onClick:Z.bind(null,F),children:F==null?void 0:F.title})}),W("aside",{children:((z=F==null?void 0:F.intro)==null?void 0:z.slice(0,50))+"..."}),W("footer",{children:$e(F==null?void 0:F.updated).format("YYYY-MM-DD hh:mm:ss")})]},F==null?void 0:F.id)})})})]})});export{Re as default};
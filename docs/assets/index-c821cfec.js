import{r as fe,j as ye,a as W,F as _e,S as Ae,d as $e}from"./index-0fb68538.js";import{u as Se}from"./useUpdate-777f10f3.js";import{u as Ce,a as ke}from"./apis-61594436.js";var ve={};function Fe(f){return f}function Ee(f){return!1}function me(){}me.prototype={chain:function(f,g){var $=this[f];if(!$)throw new Error("unknown hook "+f);$===Fe?this[f]=g:this[f]=function(C){var l=Array.prototype.slice.call(arguments,0);return l[0]=$.apply(null,l),g.apply(null,l)}},set:function(f,g){if(!this[f])throw new Error("unknown hook "+f);this[f]=g},addNoop:function(f){this[f]=Fe},addFalse:function(f){this[f]=Ee}};ve.HookCollection=me;function he(){}he.prototype={set:function(f,g){this["s_"+f]=g},get:function(f){return this["s_"+f]}};ve.Converter=function(f){var g=this.hooks=new me;g.addNoop("plainLinkText"),g.addNoop("preConversion"),g.addNoop("postNormalization"),g.addNoop("preBlockGamut"),g.addNoop("postBlockGamut"),g.addNoop("preSpanGamut"),g.addNoop("postSpanGamut"),g.addNoop("postCodeGamut"),g.addNoop("postConversion");var $,C,l,L;f=f||{},this.makeHtml=function(e){if($)throw new Error("Recursive call to converter.makeHtml");return $=new he,C=new he,l=[],L=0,e=g.preConversion(e),e=pe(e),e=Q(e),e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,`
`),e=e.replace(/\r/g,`
`),e=`

`+e+`

`,e=U(e),e=x(e,f),e=e.replace(/^[ \t]+$/mg,""),e=g.postNormalization(e),e=S(e),e=Z(e),e=J(e),e=j(e),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),e=g.postConversion(e),l=C=$=null,e};function Z(e){return e=e.replace(/^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(\n+)/gm,function(b,u,i,c,y,w,k){return u=u.toLowerCase(),$.set(u,le(i)),y?c+k:(w&&C.set(u,w.replace(/"/g,"&quot;")),"")}),e}function S(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,I),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,I),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,I),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,I),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,I),e}function q(e){return e=e.replace(/(^\n+|\n+$)/g,""),`

~K`+(l.push(e)-1)+`K

`}function I(e,b){return q(b)}var ae=function(e){return J(e)};function J(e,b,u){e=g.preBlockGamut(e,ae),e=s(e);var i=`<hr />
`;return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,i),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,i),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,i),e=v(e),e=D(e),e=se(e),e=g.postBlockGamut(e,ae),e=S(e),e=ce(e,b,u),e}function B(e){return e=g.preSpanGamut(e),e=E(e),e=V(e),e=oe(e),e=n(e),e=te(e),e=ge(e),e=e.replace(/~P/g,"://"),e=le(e),e=ie(e),e=e.replace(/  +\n/g,` <br />
`),e=g.postSpanGamut(e),e}function V(e){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return e=e.replace(b,function(u){var i=u.replace(/(.)<\/?code>(?=.)/g,"$1`");return i=P(i,u.charAt(1)=="!"?"\\`*_/":"\\`*_"),i}),e}function te(e){return e.indexOf("[")===-1||(e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,r),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,r),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,r)),e}function r(e,b,u,i,c,y,w,k){k==null&&(k="");var F=b,d=u.replace(/:\/\//g,"~P"),o=i.toLowerCase(),p=c,A=k;if(p=="")if(o==""&&(o=d.toLowerCase().replace(/ ?\n/g," ")),p="#"+o,$.get(o)!=null)p=$.get(o),C.get(o)!=null&&(A=C.get(o));else if(F.search(/\(\s*\)$/m)>-1)p="";else return F;p=K(p);var M='<a href="'+p+'"';return A!=""&&(A=a(A),A=P(A,"*_"),M+=' title="'+A+'"'),M+=">"+d+"</a>",M}function n(e){return e.indexOf("![")===-1||(e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,t),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,t)),e}function a(e){return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function t(e,b,u,i,c,y,w,k){var F=b,d=u,o=i.toLowerCase(),p=c,A=k;if(A||(A=""),p=="")if(o==""&&(o=d.toLowerCase().replace(/ ?\n/g," ")),p="#"+o,$.get(o)!=null)p=$.get(o),C.get(o)!=null&&(A=C.get(o));else return F;d=P(a(d),"*_[]()"),p=P(p,"*_");var M='<img src="'+p+'" alt="'+d+'"';return A=a(A),A=P(A,"*_"),M+=' title="'+A+'"',M+=" />",M}function s(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(b,u){return"<h1>"+B(u)+`</h1>

`}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(b,u){return"<h2>"+B(u)+`</h2>

`}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(b,u,i){var c=u.length;return"<h"+c+">"+B(i)+"</h"+c+`>

`}),e}function v(e){e+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return L?e=e.replace(b,function(u,i,c){var y=i,w=c.search(/[*+-]/g)>-1?"ul":"ol",k;w==="ol"&&(k=parseInt(c,10));var F=m(y,w);F=F.replace(/\s+$/,"");var d="<"+w;return k&&k!==1&&(d+=' start="'+k+'"'),F=d+">"+F+"</"+w+`>
`,F}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(b,function(u,i,c,y){var w=i,k=c,F=y.search(/[*+-]/g)>-1?"ul":"ol",d;F==="ol"&&(d=parseInt(y,10));var o=m(k,F),p="<"+F;return d&&d!==1&&(p+=' start="'+d+'"'),o=w+p+`>
`+o+"</"+F+`>
`,o})),e=e.replace(/~0/,""),e}var _={ol:"\\d+[.]",ul:"[*+-]"};function m(e,b){L++,e=e.replace(/\n{2,}$/,`
`),e+="~0";var u=_[b],i=new RegExp("(^[ \\t]*)("+u+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+u+")[ \\t]+))","gm"),c=!1;return e=e.replace(i,function(y,w,k,F){var d=F,o=/\n\n$/.test(d),p=o||d.search(/\n{2,}/)>-1,A=p||c;return d=J(O(d),!0,!A),c=o,"<li>"+d+`</li>
`}),e=e.replace(/~0/g,""),L--,e}function D(e){return e+="~0",e=e.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(b,u,i){var c=u,y=i;return c=H(O(c)),c=U(c),c=c.replace(/^\n+/g,""),c=c.replace(/\n+$/g,""),c="<pre><code>"+c+`
</code></pre>`,`

`+c+`

`+y}),e=e.replace(/~0/,""),e}function E(e){return e=e.replace(/(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm,function(b,u,i,c,y){var w=c;return w=w.replace(/^([ \t]*)/g,""),w=w.replace(/[ \t]*$/g,""),w=H(w),w=w.replace(/:\/\//g,"~P"),u+"<code>"+w+"</code>"}),e}function H(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=P(e,"*_{}[]\\",!1),e}function ie(e){return e.indexOf("*")===-1&&e.indexOf("_")===-1||(e=e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g,"$1<strong>$3</strong>"),e=e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g,"$1<em>$3</em>")),e}function se(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(b,u){var i=u;return i=i.replace(/^[ \t]*>[ \t]?/gm,"~0"),i=i.replace(/~0/g,""),i=i.replace(/^[ \t]+$/gm,""),i=J(i),i=i.replace(/(^|\n)/g,"$1  "),i=i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(c,y){var w=y;return w=w.replace(/^  /mg,"~0"),w=w.replace(/~0/g,""),w}),q(`<blockquote>
`+i+`
</blockquote>`)}),e}function ce(e,b,u){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var i=e.split(/\n{2,}/g),c=[],y=/~K(\d+)K/,w=i.length,k=0;k<w;k++){var F=i[k];y.test(F)?c.push(F):/\S/.test(F)&&(F=B(F),F=F.replace(/^([ \t]*)/g,u?"":"<p>"),u||(F+="</p>"),c.push(F))}if(!b){w=c.length;for(var k=0;k<w;k++)for(var d=!0;d;)d=!1,c[k]=c[k].replace(/~K(\d+)K/g,function(p,A){return d=!0,l[A]})}return c.join(`

`)}function le(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;"),e}function oe(e){return e=e.replace(/\\(\\)/g,N),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,N),e}var T="[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]",z="[-A-Z0-9+&@#/%=~_|[\\])]",G=new RegExp('(="|<)?\\b(https?|ftp)(://'+T+"*"+z+")(?=$|\\W)","gi"),X=new RegExp(z,"i");function R(e,b,u,i){if(b)return e;if(i.charAt(i.length-1)!==")")return"<"+u+i+">";for(var c=i.match(/[()]/g),y=0,w=0;w<c.length;w++)c[w]==="("?y<=0?y=1:y++:y--;var k="";if(y<0){var F=new RegExp("\\){1,"+-y+"}$");i=i.replace(F,function(o){return k=o,""})}if(k){var d=i.charAt(i.length-1);X.test(d)||(k=d+k,i=i.substr(0,i.length-1))}return"<"+u+i+">"+k}function ge(e){e=e.replace(G,R);var b=function(u,i){var c=K(i);return'<a href="'+c+'">'+g.plainLinkText(i)+"</a>"};return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,b),e}function j(e){return e=e.replace(/~E(\d+)E/g,function(b,u){var i=parseInt(u);return String.fromCharCode(i)}),e}function O(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,""),e}function U(e){if(!/\t/.test(e))return e;var b=["    ","   ","  "," "],u=0,i;return e.replace(/[\n\t]/g,function(c,y){return c===`
`?(u=y+1,c):(i=(y-u)%4,u=y+1,b[i])})}function K(e){return e=a(e),e=P(e,"*_:()[]"),e}function P(e,b,u){var i="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";u&&(i="\\\\"+i);var c=new RegExp(i,"g");return e=e.replace(c,N),e}function N(e,b){var u=b.charCodeAt(0);return"~E"+u+"E"}function x(e,b={}){var u=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function c(d){return/^:[ \t]*--*$/.test(d)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(d)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(d)?' style="text-align:center;"':""}function y(d,o){var p="";return d=d.trim(),(b.tablesHeaderId||b.tableHeaderId)&&(p=' id="'+d.replace(/ /g,"_").toLowerCase()+'"'),d=B(d),"<th"+p+o+">"+d+`</th>
`}function w(d,o){var p=B(d);return"<td"+o+">"+p+`</td>
`}function k(d,o){for(var p=`<table>
<thead>
<tr>
`,A=d.length,M=0;M<A;++M)p+=d[M];for(p+=`</tr>
</thead>
<tbody>
`,M=0;M<o.length;++M){p+=`<tr>
`;for(var Y=0;Y<A;++Y)p+=o[M][Y];p+=`</tr>
`}return p+=`</tbody>
</table>
`,p}function F(d){var o,p=d.split(`
`);for(o=0;o<p.length;++o)/^ {0,3}\|/.test(p[o])&&(p[o]=p[o].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(p[o])&&(p[o]=p[o].replace(/\|[ \t]*$/,"")),p[o]=E(p[o]);var A=p[0].split("|").map(function(ne){return ne.trim()}),M=p[1].split("|").map(function(ne){return ne.trim()}),Y=[],de=[],ee=[],be=[];for(p.shift(),p.shift(),o=0;o<p.length;++o)p[o].trim()!==""&&Y.push(p[o].split("|").map(function(ne){return ne.trim()}));if(A.length<M.length)return d;for(o=0;o<M.length;++o)ee.push(c(M[o]));for(o=0;o<A.length;++o)typeof ee[o]>"u"&&(ee[o]=""),de.push(y(A[o],ee[o]));for(o=0;o<Y.length;++o){for(var we=[],ue=0;ue<de.length;++ue)we.push(w(Y[o][ue],ee[ue]));be.push(we)}return k(de,be)}return e=e.replace(/\\(\|)/g,N),e=e.replace(u,F),e=e.replace(i,F),e}function Q(e){function b(u,i){return"<del>"+i+"</del>"}return e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,b),e}function pe(e){const b=/```(\w*)\n([\s\S]*?)\n```/g,u=e.match(b),i=u?u.map(y=>({language:y.replace(/```(\w*)\n[\s\S]*/,"$1").trim(),code:y.replace(/```(\w*)\n|\n```/g,"").trim()})):[];let c=e;for(let y=0;y<i.length;y++){const{language:w,code:k}=i[y];let F=g.postCodeGamut(k,w),d=`<div class="code"><header></header><pre><code class="language-${w}">${F}</code></pre></div>`;c=c.replace(u[y],d)}return c}};const Me=ve;/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var h=function(f){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,$=0,C={},l={manual:f.Prism&&f.Prism.manual,disableWorkerMessageHandler:f.Prism&&f.Prism.disableWorkerMessageHandler,util:{encode:function r(n){return n instanceof L?new L(n.type,r(n.content),n.alias):Array.isArray(n)?n.map(r):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(r){return Object.prototype.toString.call(r).slice(8,-1)},objId:function(r){return r.__id||Object.defineProperty(r,"__id",{value:++$}),r.__id},clone:function r(n,a){a=a||{};var t,s;switch(l.util.type(n)){case"Object":if(s=l.util.objId(n),a[s])return a[s];t={},a[s]=t;for(var v in n)n.hasOwnProperty(v)&&(t[v]=r(n[v],a));return t;case"Array":return s=l.util.objId(n),a[s]?a[s]:(t=[],a[s]=t,n.forEach(function(_,m){t[m]=r(_,a)}),t);default:return n}},getLanguage:function(r){for(;r;){var n=g.exec(r.className);if(n)return n[1].toLowerCase();r=r.parentElement}return"none"},setLanguage:function(r,n){r.className=r.className.replace(RegExp(g,"gi"),""),r.classList.add("language-"+n)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(t){var r=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(t.stack)||[])[1];if(r){var n=document.getElementsByTagName("script");for(var a in n)if(n[a].src==r)return n[a]}return null}},isActive:function(r,n,a){for(var t="no-"+n;r;){var s=r.classList;if(s.contains(n))return!0;if(s.contains(t))return!1;r=r.parentElement}return!!a}},languages:{plain:C,plaintext:C,text:C,txt:C,extend:function(r,n){var a=l.util.clone(l.languages[r]);for(var t in n)a[t]=n[t];return a},insertBefore:function(r,n,a,t){t=t||l.languages;var s=t[r],v={};for(var _ in s)if(s.hasOwnProperty(_)){if(_==n)for(var m in a)a.hasOwnProperty(m)&&(v[m]=a[m]);a.hasOwnProperty(_)||(v[_]=s[_])}var D=t[r];return t[r]=v,l.languages.DFS(l.languages,function(E,H){H===D&&E!=r&&(this[E]=v)}),v},DFS:function r(n,a,t,s){s=s||{};var v=l.util.objId;for(var _ in n)if(n.hasOwnProperty(_)){a.call(n,_,n[_],t||_);var m=n[_],D=l.util.type(m);D==="Object"&&!s[v(m)]?(s[v(m)]=!0,r(m,a,null,s)):D==="Array"&&!s[v(m)]&&(s[v(m)]=!0,r(m,a,_,s))}}},plugins:{},highlightAll:function(r,n){l.highlightAllUnder(document,r,n)},highlightAllUnder:function(r,n,a){var t={callback:a,container:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),l.hooks.run("before-all-elements-highlight",t);for(var s=0,v;v=t.elements[s++];)l.highlightElement(v,n===!0,t.callback)},highlightElement:function(r,n,a){var t=l.util.getLanguage(r),s=l.languages[t];l.util.setLanguage(r,t);var v=r.parentElement;v&&v.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(v,t);var _=r.textContent,m={element:r,language:t,grammar:s,code:_};function D(H){m.highlightedCode=H,l.hooks.run("before-insert",m),m.element.innerHTML=m.highlightedCode,l.hooks.run("after-highlight",m),l.hooks.run("complete",m),a&&a.call(m.element)}if(l.hooks.run("before-sanity-check",m),v=m.element.parentElement,v&&v.nodeName.toLowerCase()==="pre"&&!v.hasAttribute("tabindex")&&v.setAttribute("tabindex","0"),!m.code){l.hooks.run("complete",m),a&&a.call(m.element);return}if(l.hooks.run("before-highlight",m),!m.grammar){D(l.util.encode(m.code));return}if(n&&f.Worker){var E=new Worker(l.filename);E.onmessage=function(H){D(H.data)},E.postMessage(JSON.stringify({language:m.language,code:m.code,immediateClose:!0}))}else D(l.highlight(m.code,m.grammar,m.language))},highlight:function(r,n,a){var t={code:r,grammar:n,language:a};if(l.hooks.run("before-tokenize",t),!t.grammar)throw new Error('The language "'+t.language+'" has no grammar.');return t.tokens=l.tokenize(t.code,t.grammar),l.hooks.run("after-tokenize",t),L.stringify(l.util.encode(t.tokens),t.language)},tokenize:function(r,n){var a=n.rest;if(a){for(var t in a)n[t]=a[t];delete n.rest}var s=new q;return I(s,s.head,r),S(r,s,n,s.head,0),J(s)},hooks:{all:{},add:function(r,n){var a=l.hooks.all;a[r]=a[r]||[],a[r].push(n)},run:function(r,n){var a=l.hooks.all[r];if(!(!a||!a.length))for(var t=0,s;s=a[t++];)s(n)}},Token:L};f.Prism=l;function L(r,n,a,t){this.type=r,this.content=n,this.alias=a,this.length=(t||"").length|0}L.stringify=function r(n,a){if(typeof n=="string")return n;if(Array.isArray(n)){var t="";return n.forEach(function(D){t+=r(D,a)}),t}var s={type:n.type,content:r(n.content,a),tag:"span",classes:["token",n.type],attributes:{},language:a},v=n.alias;v&&(Array.isArray(v)?Array.prototype.push.apply(s.classes,v):s.classes.push(v)),l.hooks.run("wrap",s);var _="";for(var m in s.attributes)_+=" "+m+'="'+(s.attributes[m]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+_+">"+s.content+"</"+s.tag+">"};function Z(r,n,a,t){r.lastIndex=n;var s=r.exec(a);if(s&&t&&s[1]){var v=s[1].length;s.index+=v,s[0]=s[0].slice(v)}return s}function S(r,n,a,t,s,v){for(var _ in a)if(!(!a.hasOwnProperty(_)||!a[_])){var m=a[_];m=Array.isArray(m)?m:[m];for(var D=0;D<m.length;++D){if(v&&v.cause==_+","+D)return;var E=m[D],H=E.inside,ie=!!E.lookbehind,se=!!E.greedy,ce=E.alias;if(se&&!E.pattern.global){var le=E.pattern.toString().match(/[imsuy]*$/)[0];E.pattern=RegExp(E.pattern.source,le+"g")}for(var oe=E.pattern||E,T=t.next,z=s;T!==n.tail&&!(v&&z>=v.reach);z+=T.value.length,T=T.next){var G=T.value;if(n.length>r.length)return;if(!(G instanceof L)){var X=1,R;if(se){if(R=Z(oe,z,r,ie),!R||R.index>=r.length)break;var U=R.index,ge=R.index+R[0].length,j=z;for(j+=T.value.length;U>=j;)T=T.next,j+=T.value.length;if(j-=T.value.length,z=j,T.value instanceof L)continue;for(var O=T;O!==n.tail&&(j<ge||typeof O.value=="string");O=O.next)X++,j+=O.value.length;X--,G=r.slice(z,j),R.index-=z}else if(R=Z(oe,0,G,ie),!R)continue;var U=R.index,K=R[0],P=G.slice(0,U),N=G.slice(U+K.length),x=z+G.length;v&&x>v.reach&&(v.reach=x);var Q=T.prev;P&&(Q=I(n,Q,P),z+=P.length),ae(n,Q,X);var pe=new L(_,H?l.tokenize(K,H):K,ce,K);if(T=I(n,Q,pe),N&&I(n,T,N),X>1){var e={cause:_+","+D,reach:x};S(r,n,a,T.prev,z,e),v&&e.reach>v.reach&&(v.reach=e.reach)}}}}}}function q(){var r={value:null,prev:null,next:null},n={value:null,prev:r,next:null};r.next=n,this.head=r,this.tail=n,this.length=0}function I(r,n,a){var t=n.next,s={value:a,prev:n,next:t};return n.next=s,t.prev=s,r.length++,s}function ae(r,n,a){for(var t=n.next,s=0;s<a&&t!==r.tail;s++)t=t.next;n.next=t,t.prev=n,r.length-=s}function J(r){for(var n=[],a=r.head.next;a!==r.tail;)n.push(a.value),a=a.next;return n}if(!f.document)return f.addEventListener&&(l.disableWorkerMessageHandler||f.addEventListener("message",function(r){var n=JSON.parse(r.data),a=n.language,t=n.code,s=n.immediateClose;f.postMessage(l.highlight(t,l.languages[a],a)),s&&f.close()},!1)),l;var B=l.util.currentScript();B&&(l.filename=B.src,B.hasAttribute("data-manual")&&(l.manual=!0));function V(){l.manual||l.highlightAll()}if(!l.manual){var te=document.readyState;te==="loading"||te==="interactive"&&B&&B.defer?document.addEventListener("DOMContentLoaded",V):window.requestAnimationFrame?window.requestAnimationFrame(V):window.setTimeout(V,16)}return l}({});h.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};h.languages.markup.tag.inside["attr-value"].inside.entity=h.languages.markup.entity;h.languages.markup.doctype.inside["internal-subset"].inside=h.languages.markup;h.hooks.add("wrap",function(f){f.type==="entity"&&(f.attributes.title=f.content.replace(/&amp;/,"&"))});Object.defineProperty(h.languages.markup.tag,"addInlined",{value:function(g,$){var C={};C["language-"+$]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:h.languages[$]},C.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:C}};l["language-"+$]={pattern:/[\s\S]+/,inside:h.languages[$]};var L={};L[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:l},h.languages.insertBefore("markup","cdata",L)}});Object.defineProperty(h.languages.markup.tag,"addAttribute",{value:function(f,g){h.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+f+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:h.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});h.languages.html=h.languages.markup;h.languages.mathml=h.languages.markup;h.languages.svg=h.languages.markup;h.languages.xml=h.languages.extend("markup",{});h.languages.ssml=h.languages.xml;h.languages.atom=h.languages.xml;h.languages.rss=h.languages.xml;(function(f){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;f.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},f.languages.css.atrule.inside.rest=f.languages.css;var $=f.languages.markup;$&&($.tag.addInlined("style","css"),$.tag.addAttribute("style","css"))})(h);h.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};h.languages.javascript=h.languages.extend("clike",{"class-name":[h.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});h.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;h.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:h.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:h.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:h.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:h.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:h.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});h.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:h.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});h.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});h.languages.markup&&(h.languages.markup.tag.addInlined("script","javascript"),h.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));h.languages.js=h.languages.javascript;const re=h,Le="_markdown_1qobx_2",De="_footnotes_1qobx_1",Te="_highfade_1qobx_1",Ie={markdown:Le,footnotes:De,highfade:Te};var ze=`

<!-- title: Custom Markdown 基础语法支持  -->
<!-- intro: Markdown 基础语法 用于展示 Custom Markdown 的基础语法支持情况  --> 
 
## 标题

# h1 标题  
## h2 标题   <small> <sub>(h2添加了特殊样式) </sub></small> 
### h3 标题  
#### h4 标题  
##### h5 标题  
###### h6 标题  

 
## 文本样式

*这是倾斜的文字*    
**这是加粗的文字**   
***这是斜体加粗的文字***  
~~这是加删除线的文字~~  


## 引用

>这是引用的内容  
>>这是二级引用的内容   

## 分割线 

---
*** 

## 图片

![blockchain](https://avatars.githubusercontent.com/u/31484328?v=4 "区块链")
<!-- <img src="https://avatars.githubusercontent.com/u/31484328?v=4" alt="区块链" /> -->


## 超链接  

[Custom Markdown](https://github.com/forzys/custom-markdown "超链接")


## 列表

1. 无序列表
    + Create a list by starting a line with \`+\`, \`-\`, or \`*\`
    + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:   
        * Create with \`*\`
        + Create with \`+\`
        -  Create with \`-\`
    + Very easy!

2. 有序列表
    1. List item marker
    2. List item marker
    3. List item marker

3. 自定义列表开始序号  
    57. List item marker
    1. List item marker


## 代码

1.Inline \`code\`  

2.Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


3.Block code "fences"

\`\`\`
Sample text here...
\`\`\`

4.Syntax highlighting

\`\`\`js
var foo = function (bar) {
  return bar++;
}; 
console.log(foo(5));
\`\`\`

\`\`\`css
body {
    background-color: #f1f1f1;
}
\`\`\`

## 表格

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

`;const Pe=fe.memo(f=>{var Z;Ce();const[g,$,{navigate:C}]=Se({pre:"blog",pages:{page:0,total:""}}),l=fe.useMemo(()=>new Me.Converter,[]);fe.useEffect(()=>{ke.blogs.replace("$blog",g.pre),ke.blogs.replace("$blog",g.pre+"_0"),l.hooks.set("postCodeGamut",(S,q)=>{var I;return console.log({text:S}),re.highlight(S,(I=re==null?void 0:re.languages)==null?void 0:I[q||"js"])||S}),console.log({prism:re}),$({mdc:l.makeHtml(ze)})},[]);const L=S=>{C("/blog/11111")};return ye("div",{className:"main",children:[g.mdc&&W(_e,{children:W("div",{className:Ie.markdown,dangerouslySetInnerHTML:{__html:g.mdc}})}),W(Ae,{loading:g.loading,children:W("div",{style:{display:g.mdc?"none":"block"},children:(Z=g==null?void 0:g.archive)==null?void 0:Z.map(S=>{var q;return ye("article",{className:"blog-item",children:[W("h2",{children:W("a",{style:{cursor:"pointer"},onClick:L.bind(null,S),children:S==null?void 0:S.title})}),W("aside",{children:((q=S==null?void 0:S.intro)==null?void 0:q.slice(0,50))+"..."}),W("footer",{children:$e(S==null?void 0:S.updated).format("YYYY-MM-DD hh:mm:ss")})]},S==null?void 0:S.id)})})})]})});export{Pe as default};

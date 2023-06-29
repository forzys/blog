import{r as q,a as w,j as F,F as tr,S as fr,d as hr}from"./index-cfba0c20.js";import{u as dr,a as O,C as vr}from"./apis-05e7e71e.js";import{u as mr}from"./useUpdate-ee26ec70.js";import{B as _r}from"./index-5a289846.js";var R={};function Q(s){return s}function br(s){return!1}function K(){}K.prototype={chain:function(s,g){var m=this[s];if(!m)throw new Error("unknown hook "+s);m===Q?this[s]=g:this[s]=function(b){return g(m(b))}},set:function(s,g){if(!this[s])throw new Error("unknown hook "+s);this[s]=g},addNoop:function(s){this[s]=Q},addFalse:function(s){this[s]=br}};R.HookCollection=K;function I(){}I.prototype={set:function(s,g){this["s_"+s]=g},get:function(s){return this["s_"+s]}};R.Converter=function(){var s=this.hooks=new K;s.addNoop("plainLinkText"),s.addNoop("preConversion"),s.addNoop("postConversion");var g,m,b,S;this.makeHtml=function(r){if(g)throw new Error("Recursive call to converter.makeHtml");return g=new I,m=new I,b=[],S=0,r=s.preConversion(r),r=r.replace(/~/g,"~T"),r=r.replace(/\$/g,"~D"),r=r.replace(/\r\n/g,`
`),r=r.replace(/\r/g,`
`),r=`

`+r+`

`,r=z(r),r=gr(r),r=r.replace(/^[ \t]+$/mg,""),r=D(r),r=H(r),r=d(r),r=ur(r),r=r.replace(/~D/g,"$$"),r=r.replace(/~T/g,"~"),r=s.postConversion(r),b=m=g=null,r};function H(r){return r=r.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(i,n,e,o,t,u){return n=n.toLowerCase(),g.set(n,Y(e)),t?o:(u&&m.set(n,u.replace(/"/g,"&quot;")),"")}),r}function D(r){return r=r.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,$),r=r.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,$),r=r.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,$),r=r.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,$),r=r.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,$),r}function $(r,i){var n=i;return n=n.replace(/^\n+/,""),n=n.replace(/\n+$/g,""),n=`

~K`+(b.push(n)-1)+`K

`,n}function d(r,i){r=x(r);var n=`<hr />
`;return r=r.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),r=r.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,n),r=r.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),r=P(r),r=nr(r),r=lr(r),r=D(r),r=cr(r,i),r}function _(r){return r=j(r),r=X(r),r=or(r),r=V(r),r=J(r),r=ir(r),r=r.replace(/~P/g,"://"),r=Y(r),r=ar(r),r=r.replace(/  +\n/g,` <br />
`),r}function X(r){var i=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return r=r.replace(i,function(n){var e=n.replace(/(.)<\/?code>(?=.)/g,"$1`");return e=k(e,n.charAt(1)=="!"?"\\`*_/":"\\`*_"),e}),r}function J(r){return r=r.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,A),r=r.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,A),r=r.replace(/(\[([^\[\]]+)\])()()()()()/g,A),r}function A(r,i,n,e,o,t,u,p){p==null&&(p="");var v=i,c=n.replace(/:\/\//g,"~P"),a=e.toLowerCase(),l=o,f=p;if(l=="")if(a==""&&(a=c.toLowerCase().replace(/ ?\n/g," ")),l="#"+a,g.get(a)!=null)l=g.get(a),m.get(a)!=null&&(f=m.get(a));else if(v.search(/\(\s*\)$/m)>-1)l="";else return v;l=pr(l),l=k(l,"*_");var h='<a href="'+l+'"';return f!=""&&(f=f.replace(/"/g,"&quot;"),f=k(f,"*_"),h+=' title="'+f+'"'),h+=">"+c+"</a>",h}function V(r){return r=r.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,N),r=r.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,N),r}function N(r,i,n,e,o,t,u,p){var v=i,c=n,a=e.toLowerCase(),l=o,f=p;if(f||(f=""),l=="")if(a==""&&(a=c.toLowerCase().replace(/ ?\n/g," ")),l="#"+a,g.get(a)!=null)l=g.get(a),m.get(a)!=null&&(f=m.get(a));else return v;c=k(c.replace(/"/g,"&quot;"),"*_[]()"),l=k(l,"*_");var h='<img src="'+l+'" alt="'+c+'"';return f=f.replace(/"/g,"&quot;"),f=k(f,"*_"),h+=' title="'+f+'"',h+=" />",h}function x(r){return r=r.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(i,n){return"<h1>"+_(n)+`</h1>

`}),r=r.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(i,n){return"<h2>"+_(n)+`</h2>

`}),r=r.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(i,n,e){var o=n.length;return"<h"+o+">"+_(e)+"</h"+o+`>

`}),r}function P(r){r+="~0";var i=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return S?r=r.replace(i,function(n,e,o){var t=e,u=o.search(/[*+-]/g)>-1?"ul":"ol",p=W(t,u);return p=p.replace(/\s+$/,""),p="<"+u+">"+p+"</"+u+`>
`,p}):(i=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,r=r.replace(i,function(n,e,o,t){var u=e,p=o,v=t.search(/[*+-]/g)>-1?"ul":"ol",c=W(p,v);return c=u+"<"+v+`>
`+c+"</"+v+`>
`,c})),r=r.replace(/~0/,""),r}var rr={ol:"\\d+[.]",ul:"[*+-]"};function W(r,i){S++,r=r.replace(/\n{2,}$/,`
`),r+="~0";var n=rr[i],e=new RegExp("(^[ \\t]*)("+n+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+n+")[ \\t]+))","gm"),o=!1;return r=r.replace(e,function(t,u,p,v){var c=v,a=/\n\n$/.test(c),l=a||c.search(/\n{2,}/)>-1;return l||o?c=d(L(c),!0):(c=P(L(c)),c=c.replace(/\n$/,""),c=_(c)),o=a,"<li>"+c+`</li>
`}),r=r.replace(/~0/g,""),S--,r}function nr(r){return r+="~0",r=r.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(i,n,e){var o=n,t=e;return o=U(L(o)),o=z(o),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),o="<pre><code>"+o+`
</code></pre>`,`

`+o+`

`+t}),r=r.replace(/~0/,""),r}function er(r){return r=r.replace(/(^\n+|\n+$)/g,""),`

~K`+(b.push(r)-1)+`K

`}function j(r){return r=r.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(i,n,e,o,t){var u=o;return u=u.replace(/^([ \t]*)/g,""),u=u.replace(/[ \t]*$/g,""),u=U(u),u=u.replace(/:\/\//g,"~P"),n+"<code>"+u+"</code>"}),r}function U(r){return r=r.replace(/&/g,"&amp;"),r=r.replace(/</g,"&lt;"),r=r.replace(/>/g,"&gt;"),r=k(r,"*_{}[]\\",!1),r}function ar(r){return r=r.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),r=r.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4"),r}function lr(r){return r=r.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(i,n){var e=n;return e=e.replace(/^[ \t]*>[ \t]?/gm,"~0"),e=e.replace(/~0/g,""),e=e.replace(/^[ \t]+$/gm,""),e=d(e),e=e.replace(/(^|\n)/g,"$1  "),e=e.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(o,t){var u=t;return u=u.replace(/^  /mg,"~0"),u=u.replace(/~0/g,""),u}),er(`<blockquote>
`+e+`
</blockquote>`)}),r}function cr(r,i){r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,"");for(var n=r.split(/\n{2,}/g),e=[],o=/~K(\d+)K/,t=n.length,u=0;u<t;u++){var p=n[u];o.test(p)?e.push(p):/\S/.test(p)&&(p=_(p),p=p.replace(/^([ \t]*)/g,"<p>"),p+="</p>",e.push(p))}if(!i){t=e.length;for(var u=0;u<t;u++)for(var v=!0;v;)v=!1,e[u]=e[u].replace(/~K(\d+)K/g,function(a,l){return v=!0,b[l]})}return e.join(`

`)}function Y(r){return r=r.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),r=r.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),r}function or(r){return r=r.replace(/\\(\\)/g,E),r=r.replace(/\\([`*_{}\[\]()>#+-.!])/g,E),r}function ir(r){r=r.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");var i=function(n,e){return'<a href="'+e+'">'+s.plainLinkText(e)+"</a>"};return r=r.replace(/<((https?|ftp):[^'">\s]+)>/gi,i),r}function ur(r){return r=r.replace(/~E(\d+)E/g,function(i,n){var e=parseInt(n);return String.fromCharCode(e)}),r}function L(r){return r=r.replace(/^(\t|[ ]{1,4})/gm,"~0"),r=r.replace(/~0/g,""),r}function z(r){if(!/\t/.test(r))return r;var i=["    ","   ","  "," "],n=0,e;return r.replace(/[\n\t]/g,function(o,t){return o===`
`?(n=t+1,o):(e=(t-n)%4,n=t+1,i[e])})}var sr=/(?:["'*()[\]:]|~D)/g;function pr(r){if(!r)return"";var i=r.length;return r.replace(sr,function(n,e){return n=="~D"?"%24":n==":"&&(e==i-1||/[0-9\/]/.test(r.charAt(e+1)))?":":"%"+n.charCodeAt(0).toString(16)})}function k(r,i,n){var e="(["+i.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(e="\\\\"+e);var o=new RegExp(e,"g");return r=r.replace(o,E),r}function E(r,i){var n=i.charCodeAt(0);return"~E"+n+"E"}function gr(r,i={}){var n=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,e=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function o(c){return/^:[ \t]*--*$/.test(c)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(c)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(c)?' style="text-align:center;"':""}function t(c,a){var l="";return c=c.trim(),(i.tablesHeaderId||i.tableHeaderId)&&(l=' id="'+c.replace(/ /g,"_").toLowerCase()+'"'),c=_(c),"<th"+l+a+">"+c+`</th>
`}function u(c,a){var l=_(c);return"<td"+a+">"+l+`</td>
`}function p(c,a){for(var l=`<table>
<thead>
<tr>
`,f=c.length,h=0;h<f;++h)l+=c[h];for(l+=`</tr>
</thead>
<tbody>
`,h=0;h<a.length;++h){l+=`<tr>
`;for(var C=0;C<f;++C)l+=a[h][C];l+=`</tr>
`}return l+=`</tbody>
</table>
`,l}function v(c){var a,l=c.split(`
`);for(a=0;a<l.length;++a)/^ {0,3}\|/.test(l[a])&&(l[a]=l[a].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(l[a])&&(l[a]=l[a].replace(/\|[ \t]*$/,"")),l[a]=j(l[a]);var f=l[0].split("|").map(function(y){return y.trim()}),h=l[1].split("|").map(function(y){return y.trim()}),C=[],B=[],M=[],Z=[];for(l.shift(),l.shift(),a=0;a<l.length;++a)l[a].trim()!==""&&C.push(l[a].split("|").map(function(y){return y.trim()}));if(f.length<h.length)return c;for(a=0;a<h.length;++a)M.push(o(h[a]));for(a=0;a<f.length;++a)typeof M[a]>"u"&&(M[a]=""),B.push(t(f[a],M[a]));for(a=0;a<C.length;++a){for(var G=[],T=0;T<B.length;++T)G.push(u(C[a][T],M[T]));Z.push(G)}return p(B,Z)}return r=r.replace(/\\(\|)/g,E),r=r.replace(n,v),r=r.replace(e,v),r}};const wr=R;var $r=`


<!-- config: { "id": "diary-2304", "title": "工作日记-23年4月", "created_at": "2023-04-30T23:59:59Z" } --> 
<!-- intro: 迁移记录的23年4月godigitalchina工作日记 -->
<!-- gitblog: https://github.com/yihong0618/gitblog -->

## ABCD

[中国色](http://zhongguose.com/#beiguahuang)

  
<marquee> 表格 标签 </marquee>  

|  表头   | 表头  | 表头 | 表头 |
| :---  | ---:  | :--: | ---- |
| 单元格  | 单元格 |单元格|单元格|
| 单元格  | 单元格 |单元格|单元格|

>生活很困难
但仍要继续下去
加油朋友  

加油朋友

<kbd> Ctrl </kbd>


`;const yr=q.memo(s=>{var $;dr();const[g,m,{navigate:b}]=mr({pre:"blog",pages:{page:0,total:""}}),S=q.useMemo(()=>new wr.Converter,[]);q.useEffect(()=>{O.blogs.replace("$blog",g.pre),O.blogs.replace("$blog",g.pre+"_0"),m({mdc:S.makeHtml($r)})},[]);const H=d=>{b("/blog/11111")},D=()=>{m({mdc:""})};return w("div",{className:"main",children:F(vr,{children:[g.mdc&&F(tr,{children:[w(_r,{onClick:D,children:"Back"}),w("div",{dangerouslySetInnerHTML:{__html:g.mdc}})]}),w(fr,{loading:g.loading,children:w("div",{style:{display:g.mdc?"none":"block"},children:($=g==null?void 0:g.archive)==null?void 0:$.map(d=>{var _;return F("article",{className:"blog-item",children:[w("h2",{children:w("a",{style:{cursor:"pointer"},onClick:H.bind(null,d),children:d==null?void 0:d.title})}),w("aside",{children:((_=d==null?void 0:d.intro)==null?void 0:_.slice(0,50))+"..."}),w("footer",{children:hr(d==null?void 0:d.updated).format("YYYY-MM-DD hh:mm:ss")})]},d==null?void 0:d.id)})})})]})})});export{yr as default};

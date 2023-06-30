import{r as q,a as w,j as I,F as hr,S as dr,d as vr}from"./index-b98271d9.js";import{u as mr,a as Z,C as _r}from"./apis-93863c31.js";import{u as br}from"./useUpdate-81e2cec9.js";import{B as wr}from"./index-8240fd53.js";var R={};function Q(t){return t}function $r(t){return!1}function K(){}K.prototype={chain:function(t,g){var m=this[t];if(!m)throw new Error("unknown hook "+t);m===Q?this[t]=g:this[t]=function(b){return g(m(b))}},set:function(t,g){if(!this[t])throw new Error("unknown hook "+t);this[t]=g},addNoop:function(t){this[t]=Q},addFalse:function(t){this[t]=$r}};R.HookCollection=K;function F(){}F.prototype={set:function(t,g){this["s_"+t]=g},get:function(t){return this["s_"+t]}};R.Converter=function(){var t=this.hooks=new K;t.addNoop("plainLinkText"),t.addNoop("preConversion"),t.addNoop("postConversion");var g,m,b,S;this.makeHtml=function(r){if(g)throw new Error("Recursive call to converter.makeHtml");return g=new F,m=new F,b=[],S=0,r=t.preConversion(r),r=fr(r),r=gr(r),r=r.replace(/~/g,"~T"),r=r.replace(/\$/g,"~D"),r=r.replace(/\r\n/g,`
`),r=r.replace(/\r/g,`
`),r=`

`+r+`

`,r=z(r),r=tr(r),r=r.replace(/^[ \t]+$/mg,""),r=E(r),r=H(r),r=v(r),r=sr(r),r=r.replace(/~D/g,"$$"),r=r.replace(/~T/g,"~"),r=t.postConversion(r),b=m=g=null,r};function H(r){return r=r.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(c,n,e,o,u,s){return n=n.toLowerCase(),g.set(n,U(e)),u?o:(s&&m.set(n,s.replace(/"/g,"&quot;")),"")}),r}function E(r){return r=r.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,$),r=r.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,$),r=r.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,$),r=r.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,$),r=r.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,$),r}function $(r,c){var n=c;return n=n.replace(/^\n+/,""),n=n.replace(/\n+$/g,""),n=`

~K`+(b.push(n)-1)+`K

`,n}function v(r,c){r=x(r);var n=`<hr />
`;return r=r.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),r=r.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,n),r=r.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),r=P(r),r=nr(r),r=lr(r),r=E(r),r=or(r,c),r}function _(r){return r=j(r),r=V(r),r=cr(r),r=J(r),r=X(r),r=ir(r),r=r.replace(/~P/g,"://"),r=U(r),r=ar(r),r=r.replace(/  +\n/g,` <br />
`),r}function V(r){var c=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return r=r.replace(c,function(n){var e=n.replace(/(.)<\/?code>(?=.)/g,"$1`");return e=k(e,n.charAt(1)=="!"?"\\`*_/":"\\`*_"),e}),r}function X(r){return r=r.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,L),r=r.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,L),r=r.replace(/(\[([^\[\]]+)\])()()()()()/g,L),r}function L(r,c,n,e,o,u,s,p){p==null&&(p="");var h=c,i=n.replace(/:\/\//g,"~P"),a=e.toLowerCase(),l=o,f=p;if(l=="")if(a==""&&(a=i.toLowerCase().replace(/ ?\n/g," ")),l="#"+a,g.get(a)!=null)l=g.get(a),m.get(a)!=null&&(f=m.get(a));else if(h.search(/\(\s*\)$/m)>-1)l="";else return h;l=pr(l),l=k(l,"*_");var d='<a href="'+l+'"';return f!=""&&(f=f.replace(/"/g,"&quot;"),f=k(f,"*_"),d+=' title="'+f+'"'),d+=">"+i+"</a>",d}function J(r){return r=r.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,N),r=r.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,N),r}function N(r,c,n,e,o,u,s,p){var h=c,i=n,a=e.toLowerCase(),l=o,f=p;if(f||(f=""),l=="")if(a==""&&(a=i.toLowerCase().replace(/ ?\n/g," ")),l="#"+a,g.get(a)!=null)l=g.get(a),m.get(a)!=null&&(f=m.get(a));else return h;i=k(i.replace(/"/g,"&quot;"),"*_[]()"),l=k(l,"*_");var d='<img src="'+l+'" alt="'+i+'"';return f=f.replace(/"/g,"&quot;"),f=k(f,"*_"),d+=' title="'+f+'"',d+=" />",d}function x(r){return r=r.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(c,n){return"<h1>"+_(n)+`</h1>

`}),r=r.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(c,n){return"<h2>"+_(n)+`</h2>

`}),r=r.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(c,n,e){var o=n.length;return"<h"+o+">"+_(e)+"</h"+o+`>

`}),r}function P(r){r+="~0";var c=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return S?r=r.replace(c,function(n,e,o){var u=e,s=o.search(/[*+-]/g)>-1?"ul":"ol",p=W(u,s);return p=p.replace(/\s+$/,""),p="<"+s+">"+p+"</"+s+`>
`,p}):(c=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,r=r.replace(c,function(n,e,o,u){var s=e,p=o,h=u.search(/[*+-]/g)>-1?"ul":"ol",i=W(p,h);return i=s+"<"+h+`>
`+i+"</"+h+`>
`,i})),r=r.replace(/~0/,""),r}var rr={ol:"\\d+[.]",ul:"[*+-]"};function W(r,c){S++,r=r.replace(/\n{2,}$/,`
`),r+="~0";var n=rr[c],e=new RegExp("(^[ \\t]*)("+n+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+n+")[ \\t]+))","gm"),o=!1;return r=r.replace(e,function(u,s,p,h){var i=h,a=/\n\n$/.test(i),l=a||i.search(/\n{2,}/)>-1;return l||o?i=v(A(i),!0):(i=P(A(i)),i=i.replace(/\n$/,""),i=_(i)),o=a,"<li>"+i+`</li>
`}),r=r.replace(/~0/g,""),S--,r}function nr(r){return r+="~0",r=r.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(c,n,e){var o=n,u=e;return o=Y(A(o)),o=z(o),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),o="<pre><code>"+o+`
</code></pre>`,`

`+o+`

`+u}),r=r.replace(/~0/,""),r}function er(r){return r=r.replace(/(^\n+|\n+$)/g,""),`

~K`+(b.push(r)-1)+`K

`}function j(r){return r=r.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(c,n,e,o,u){var s=o;return s=s.replace(/^([ \t]*)/g,""),s=s.replace(/[ \t]*$/g,""),s=Y(s),s=s.replace(/:\/\//g,"~P"),n+"<code>"+s+"</code>"}),r}function Y(r){return r=r.replace(/&/g,"&amp;"),r=r.replace(/</g,"&lt;"),r=r.replace(/>/g,"&gt;"),r=k(r,"*_{}[]\\",!1),r}function ar(r){return r=r.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),r=r.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4"),r}function lr(r){return r=r.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(c,n){var e=n;return e=e.replace(/^[ \t]*>[ \t]?/gm,"~0"),e=e.replace(/~0/g,""),e=e.replace(/^[ \t]+$/gm,""),e=v(e),e=e.replace(/(^|\n)/g,"$1  "),e=e.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(o,u){var s=u;return s=s.replace(/^  /mg,"~0"),s=s.replace(/~0/g,""),s}),er(`<blockquote>
`+e+`
</blockquote>`)}),r}function or(r,c){r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,"");for(var n=r.split(/\n{2,}/g),e=[],o=/~K(\d+)K/,u=n.length,s=0;s<u;s++){var p=n[s];o.test(p)?e.push(p):/\S/.test(p)&&(p=_(p),p=p.replace(/^([ \t]*)/g,"<p>"),p+="</p>",e.push(p))}if(!c){u=e.length;for(var s=0;s<u;s++)for(var h=!0;h;)h=!1,e[s]=e[s].replace(/~K(\d+)K/g,function(a,l){return h=!0,b[l]})}return e.join(`

`)}function U(r){return r=r.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),r=r.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),r}function cr(r){return r=r.replace(/\\(\\)/g,T),r=r.replace(/\\([`*_{}\[\]()>#+-.!])/g,T),r}function ir(r){r=r.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");var c=function(n,e){return'<a href="'+e+'">'+t.plainLinkText(e)+"</a>"};return r=r.replace(/<((https?|ftp):[^'">\s]+)>/gi,c),r}function sr(r){return r=r.replace(/~E(\d+)E/g,function(c,n){var e=parseInt(n);return String.fromCharCode(e)}),r}function A(r){return r=r.replace(/^(\t|[ ]{1,4})/gm,"~0"),r=r.replace(/~0/g,""),r}function z(r){if(!/\t/.test(r))return r;var c=["    ","   ","  "," "],n=0,e;return r.replace(/[\n\t]/g,function(o,u){return o===`
`?(n=u+1,o):(e=(u-n)%4,n=u+1,c[e])})}var ur=/(?:["'*()[\]:]|~D)/g;function pr(r){if(!r)return"";var c=r.length;return r.replace(ur,function(n,e){return n=="~D"?"%24":n==":"&&(e==c-1||/[0-9\/]/.test(r.charAt(e+1)))?":":"%"+n.charCodeAt(0).toString(16)})}function k(r,c,n){var e="(["+c.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(e="\\\\"+e);var o=new RegExp(e,"g");return r=r.replace(o,T),r}function T(r,c){var n=c.charCodeAt(0);return"~E"+n+"E"}function tr(r,c={}){var n=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,e=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function o(i){return/^:[ \t]*--*$/.test(i)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(i)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(i)?' style="text-align:center;"':""}function u(i,a){var l="";return i=i.trim(),(c.tablesHeaderId||c.tableHeaderId)&&(l=' id="'+i.replace(/ /g,"_").toLowerCase()+'"'),i=_(i),"<th"+l+a+">"+i+`</th>
`}function s(i,a){var l=_(i);return"<td"+a+">"+l+`</td>
`}function p(i,a){for(var l=`<table>
<thead>
<tr>
`,f=i.length,d=0;d<f;++d)l+=i[d];for(l+=`</tr>
</thead>
<tbody>
`,d=0;d<a.length;++d){l+=`<tr>
`;for(var C=0;C<f;++C)l+=a[d][C];l+=`</tr>
`}return l+=`</tbody>
</table>
`,l}function h(i){var a,l=i.split(`
`);for(a=0;a<l.length;++a)/^ {0,3}\|/.test(l[a])&&(l[a]=l[a].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(l[a])&&(l[a]=l[a].replace(/\|[ \t]*$/,"")),l[a]=j(l[a]);var f=l[0].split("|").map(function(y){return y.trim()}),d=l[1].split("|").map(function(y){return y.trim()}),C=[],B=[],M=[],G=[];for(l.shift(),l.shift(),a=0;a<l.length;++a)l[a].trim()!==""&&C.push(l[a].split("|").map(function(y){return y.trim()}));if(f.length<d.length)return i;for(a=0;a<d.length;++a)M.push(o(d[a]));for(a=0;a<f.length;++a)typeof M[a]>"u"&&(M[a]=""),B.push(u(f[a],M[a]));for(a=0;a<C.length;++a){for(var O=[],D=0;D<B.length;++D)O.push(s(C[a][D],M[D]));G.push(O)}return p(B,G)}return r=r.replace(/\\(\|)/g,T),r=r.replace(n,h),r=r.replace(e,h),r}function gr(r){function c(n,e){return"<del>"+e+"</del>"}return r=r.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,c),r}function fr(r){const c=/```(\w*)\n([\s\S]*?)\n```/g,n=r.match(c),e=n?n.map(u=>({language:u.replace(/```(\w*)\n[\s\S]*/,"$1").trim(),code:u.replace(/```(\w*)\n|\n```/g,"").trim()})):[];let o=r;for(let u=0;u<e.length;u++){const{language:s,code:p}=e[u],h=`<pre><code class="${s}">${p}</code></pre>`;o=o.replace(n[u],h)}return o}};const kr=R;var Cr=`
# h1 标题
## h2 标题
### h3 标题
#### h4 标题
##### h5 标题
###### h6 标题


## 水平线

___

---

***


## 文本样式


**这是加粗的文字**  

*这是倾斜的文字*  

***这是斜体加粗的文字***  

~~这是加删除线的文字~~  


>这是引用的内容  

>>这是引用的内容  

>>>>>>>>>>这是引用的内容  


![blockchain](https://avatars.githubusercontent.com/u/31484328?v=4 "区块链")


## 列表

无序

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:   
       * Ac tristique libero volutpat at
       + Facilisis in pretium nisl aliquet
       - Nulla volutpat aliquam velit
+ Very easy!

有序

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

---
1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## 代码

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

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

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

`;const Tr=q.memo(t=>{var $;mr();const[g,m,{navigate:b}]=br({pre:"blog",pages:{page:0,total:""}}),S=q.useMemo(()=>new kr.Converter,[]);q.useEffect(()=>{Z.blogs.replace("$blog",g.pre),Z.blogs.replace("$blog",g.pre+"_0"),m({mdc:S.makeHtml(Cr)})},[]);const H=v=>{b("/blog/11111")},E=()=>{m({mdc:""})};return w("div",{className:"main",children:I(_r,{bodyStyle:{overflow:"auto"},children:[g.mdc&&I(hr,{children:[w(wr,{onClick:E,children:"Back"}),w("div",{dangerouslySetInnerHTML:{__html:g.mdc}})]}),w(dr,{loading:g.loading,children:w("div",{style:{display:g.mdc?"none":"block"},children:($=g==null?void 0:g.archive)==null?void 0:$.map(v=>{var _;return I("article",{className:"blog-item",children:[w("h2",{children:w("a",{style:{cursor:"pointer"},onClick:H.bind(null,v),children:v==null?void 0:v.title})}),w("aside",{children:((_=v==null?void 0:v.intro)==null?void 0:_.slice(0,50))+"..."}),w("footer",{children:vr(v==null?void 0:v.updated).format("YYYY-MM-DD hh:mm:ss")})]},v==null?void 0:v.id)})})})]})})});export{Tr as default};

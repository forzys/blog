import{r as o,u as m,j as n,F as c,a as e,O as h}from"./index-04e27147.js";import{S as d}from"./index-e007ac34.js";import{u}from"./useUpdate-102355c8.js";const _="_header_18v73_3",g="_inner_18v73_19",p="_main_18v73_28",v="_footer_18v73_33",b="_item_18v73_44",f="_github_18v73_51",a={header:_,inner:g,main:p,footer:v,item:b,github:f},z=o.memo(C=>{const[N,x,{navigate:s}]=u({loading:!0}),r=m((t,l)=>{s("/"+l.value)}),i=o.useMemo(()=>{var t;return(t=location==null?void 0:location.pathname)==null?void 0:t.replace("/","")},[]);return n(c,{children:[e("header",{className:a.header,children:e("div",{className:a.inner,children:e(d,{fontSize:"0.8rem",init:i,options:[{label:"Blog",value:"blog"},{label:"Video",value:"video"},{label:"Component",value:"component"},{label:"Calendar",value:"calendar"},{label:"Theme",value:"theme"}],onChange:r})})}),e("main",{className:a.main,children:e(h,{})}),n("footer",{className:a.footer,children:[e("a",{href:"https://beian.miit.gov.cn/",children:"豫ICP备2023012795号"}),n("span",{className:a.item,children:[e("a",{className:a.github,target:"_blank",href:"https://github.com/forzys/blog"}),e("a",{children:"Copyright@2023 "})]})]})]})});export{z as default};
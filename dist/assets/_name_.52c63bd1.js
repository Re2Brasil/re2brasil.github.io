import{n as f,p,q as v,d as N,u as k,a as h,s as x,o as c,c as i,e,t as r,f as n,F as b,v as y,x as w,b as C,w as S,h as V,r as g}from"./index.0b08345f.js";const B=f("user",()=>{const t=p(""),a=p(new Set),m=v(()=>Array.from(a.value)),o=v(()=>m.value.filter(u=>u!==t.value));function s(u){t.value&&a.value.add(t.value),t.value=u}return{setNewName:s,otherNames:o,savedName:t}}),E=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),F={"text-sm":"","opacity-75":""},$={key:0,"text-sm":"","mt-4":""},q={"opacity-75":""},D=N({__name:"[name]",props:{name:null},setup(t){const a=t,m=k(),o=B(),{t:s}=h();return x(()=>{o.setNewName(a.name)}),(u,d)=>{const _=g("router-link");return c(),i("div",null,[E,e("p",null,r(n(s)("intro.hi",{name:a.name})),1),e("p",F,[e("em",null,r(n(s)("intro.dynamic-route")),1)]),n(o).otherNames.length?(c(),i("p",$,[e("span",q,r(n(s)("intro.aka"))+":",1),e("ul",null,[(c(!0),i(b,null,y(n(o).otherNames,l=>(c(),i("li",{key:l},[C(_,{to:`/hi/${l}`,replace:""},{default:S(()=>[V(r(l),1)]),_:2},1032,["to"])]))),128))])])):w("",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:d[0]||(d[0]=l=>n(m).back())},r(n(s)("button.back")),1)])])}}});export{D as default};
import{t as i}from"./chunks/theme.v2gviXYB.js";import{j as o,a1 as u,a2 as c,a3 as l,d as f,u as d,l as m,x as h,a4 as A,a5 as g,a6 as v,a7 as y,a8 as C,a9 as P,aa as w,ab as b,ac as R,ad as j,ae as x}from"./chunks/framework.CiTRRGcV.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),D=f({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=d();return m(()=>{h(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&A(),g(),v(),s.setup&&s.setup(),()=>y(s.Layout)}});async function E(){const e=F(),a=S();a.provide(C,e);const t=P(e.route);return a.provide(w,t),a.component("Content",b),a.component("ClientOnly",R),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:j}),{app:a,router:e,data:t}}function S(){return l(D)}function F(){let e=o,a;return u(t=>{let n=c(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&E().then(({app:e,router:a,data:t})=>{a.go().then(()=>{x(a.route,t.site),e.mount("#app")})});export{E as createApp};

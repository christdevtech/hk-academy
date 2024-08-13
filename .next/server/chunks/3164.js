exports.id=3164,exports.ids=[3164],exports.modules={4586:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,1297,23)),Promise.resolve().then(a.t.bind(a,2796,23)),Promise.resolve().then(a.bind(a,3940)),Promise.resolve().then(a.bind(a,9496)),Promise.resolve().then(a.bind(a,5223)),Promise.resolve().then(a.bind(a,4011)),Promise.resolve().then(a.bind(a,966))},3470:e=>{e.exports={hero:"HighImpact_hero__qkKp_",media:"HighImpact_media__uxa5y",links:"HighImpact_links__yDa_5",caption:"HighImpact_caption__Vmt4w",content:"HighImpact_content__ifEIW"},e.exports.__checksum="cd58124ffd25"},967:e=>{e.exports={},e.exports.__checksum="73ff4aef96d0"},7791:e=>{e.exports={hero:"MediumImpact_hero__x2eOT",richText:"MediumImpact_richText__NN8m_",links:"MediumImpact_links__jKvJ9",link:"MediumImpact_link__T2op7",media:"MediumImpact_media___5aQS"},e.exports.__checksum="2003c8dbb903"},3705:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v,dynamic:()=>N,generateMetadata:()=>w,generateStaticParams:()=>I});var s=a(8144),r=a(3830),i=a.n(r),n=a(9859),l=a(6465);let c={id:"",title:"Home",slug:"home",createdAt:"",updatedAt:"",meta:{title:"Payload Website Template",description:"An open-source website built with Payload and Next.js."},hero:{type:"lowImpact",links:null,richText:[{children:[{text:"Payload Website Template"}],type:"h1"},{children:[{text:"Welcome to your website! "},{text:"Your database is currently empty.",bold:!0},{text:" To seed your database with a few pages, posts, and projects, "},{type:"link",linkType:"custom",url:"/admin",children:[{text:"log in to the admin dashboard"}]},{text:' and click "seed your database". If you have already seeded your database, '},{text:"you may need to hard refresh this page to clear the cached request.",bold:!0}]},{children:[{text:"The code for this template is completely open-source and can be found "},{type:"link",linkType:"custom",url:"https://github.com/payloadcms/payload/tree/main/templates/website",newTab:!0,children:[{text:"here"}]},{text:"."}]}],media:""},layout:[{richText:[{children:[{text:"Seed your database"}],type:"h4"},{children:[{text:"Your database is currently empty. To seed your database, "},{type:"link",linkType:"custom",url:"/admin",children:[{text:"log in to the admin dashboard"}]},{text:' and click "seed your database".'}]}],links:[{link:{type:"custom",url:"/admin",label:"Go to dashboard",appearance:"primary",reference:null}}],blockName:"CTA",blockType:"cta"}]};var o=a(9882),d=a(1933),m=a(77),h=a(3205),p=a(584),u=a(6355),x=a(702),y=a(3470),b=a.n(y),_=a(5509),j=a(7791),k=a.n(j);let g={highImpact:({richText:e,media:t,links:a})=>(0,s.jsxs)(h.T,{className:b().hero,children:[(0,s.jsxs)("div",{className:b().content,children:[s.jsx(x.Z,{content:e}),Array.isArray(a)&&a.length>0&&s.jsx("ul",{className:b().links,children:a.map(({link:e},t)=>s.jsx("li",{children:s.jsx(p.g,{...e})},t))})]}),s.jsx("div",{className:b().media,children:"object"==typeof t&&(0,s.jsxs)(r.Fragment,{children:[s.jsx(u.p,{resource:t,imgClassName:b().image,priority:!0}),t?.caption&&s.jsx(x.Z,{content:t.caption,className:b().caption})]})})]}),mediumImpact:e=>{let{richText:t,media:a,links:r}=e;return(0,s.jsxs)(h.T,{className:k().hero,children:[(0,s.jsxs)("div",{className:k().background,children:[s.jsx(x.Z,{className:k().richText,content:t}),Array.isArray(r)&&s.jsx("ul",{className:k().links,children:r.map(({link:e},t)=>s.jsx("li",{children:s.jsx(p.g,{className:k().link,...e})},t))})]}),s.jsx("div",{className:k().media,children:"object"==typeof a&&s.jsx(u.p,{className:k().media,resource:a})})]})},lowImpact:_.R},f=e=>{let{type:t}=e||{};if(!t||"none"===t)return null;let a=g[t];return a?s.jsx(a,{...e}):null};var T=a(839);let N="force-dynamic";async function v({params:{slug:e="home"}}){let{isEnabled:t}=(0,n.draftMode)(),a=null;try{a=await (0,o.D)({collection:"pages",slug:e,draft:t})}catch(e){}if(a||"home"!==e||(a=c),!a)return(0,l.notFound)();let{hero:r,layout:d}=a;return(0,s.jsxs)(i().Fragment,{children:[s.jsx(f,{...r}),s.jsx(m.n,{blocks:d,disableTopPadding:!r||r?.type==="none"||r?.type==="lowImpact"})]})}async function I(){try{let e=await (0,d.N)("pages");return e?.map(({slug:e})=>e)}catch(e){return[]}}async function w({params:{slug:e="home"}}){let{isEnabled:t}=(0,n.draftMode)(),a=null;try{a=await (0,o.D)({collection:"pages",slug:e,draft:t})}catch(e){}return a||"home"!==e||(a=c),(0,T.v)({doc:a})}},5509:(e,t,a)=>{"use strict";a.d(t,{R:()=>o});var s=a(8144);a(3830);var r=a(3205),i=a(702),n=a(864),l=a(967),c=a.n(l);let o=({richText:e})=>s.jsx(r.T,{className:c().lowImpactHero,children:s.jsx("div",{className:c().content,children:s.jsx(n.G,{children:s.jsx(i.Z,{className:c().richText,content:e})})})})}};
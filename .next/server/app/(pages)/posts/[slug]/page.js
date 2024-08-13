(()=>{var e={};e.id=8265,e.ids=[8265],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},3837:e=>{"use strict";e.exports=require("util")},5791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>m,routeModule:()=>h,tree:()=>d});var s=n(3137),o=n(4647),r=n(4183),a=n.n(r),i=n(1775),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);n.d(t,l);let c=s.AppPageRouteModule,d=["",{children:["(pages)",{children:["posts",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,1333)),"C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\(pages)\\posts\\[slug]\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(n.bind(n,5653)),"C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\(pages)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,3719)),"C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,1918,23)),"next/dist/client/components/not-found-error"]}],m=["C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\(pages)\\posts\\[slug]\\page.tsx"],p="/(pages)/posts/[slug]/page",u={require:n,loadChunk:()=>Promise.resolve()},h=new c({definition:{kind:o.x.APP_PAGE,page:"/(pages)/posts/[slug]/page",pathname:"/posts/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},985:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1297,23)),Promise.resolve().then(n.t.bind(n,2796,23)),Promise.resolve().then(n.bind(n,3940)),Promise.resolve().then(n.bind(n,9496)),Promise.resolve().then(n.bind(n,5223)),Promise.resolve().then(n.bind(n,4011)),Promise.resolve().then(n.bind(n,966)),Promise.resolve().then(n.bind(n,7855))},7855:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PremiumContent:()=>K});var s=n(80),o=n(9885),r=n.n(o),a=n(1440),i=n.n(a);let l=`categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`,c=({disableAppearance:e,disableLabel:t}={})=>`{
  ${t?"":"label"}
  ${e?"":"appearance"}
  type
  newTab
  url
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`,d=`
mimeType
filename
width
height
alt
caption
`,m=`media {
  ${d}
}`,p=`meta {
  title
  image {
    ${d}
  }
  description
}`,u=`
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${c()}
  }
}
`,h=`
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${c()}
  }
}
`,_=`
...on MediaBlock {
  blockType
  invertBackground
  position
  ${m}
}
`,g=`
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${l}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${p}
      }
      ...on Project {
        id
        slug
        title
        ${p}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${l}
        ${p}
      }
      ...on Project {
        id
        slug
        title
        ${l}
        ${p}
      }
    }
  }
  populatedDocsTotal
}
`,x=`
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        premiumContent {
          ${u}
          ${h}
          ${_}
          ${g}
        }
      }
    }
  }
`;var j=n(8693),v=n(5223),b=n(5964),y=n(3060),k=n(9893),f=n.n(k),P=n(2915),T=n(7468),C=n.n(T);let N=({top:e="medium",bottom:t="medium",className:n,children:o})=>s.jsx("div",{className:[n,C()[`top-${e}`],C()[`bottom-${t}`]].filter(Boolean).join(" "),children:o});var A=n(9520),w=n.n(A),$=n(3940),B=n(3728),H=n.n(B),D=n(8995),q=n(4175),F=n.n(q),G=n(2627),E=n(3240),M=n.n(E);let R=e=>e?.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase();var L=n(1817),S=n.n(L);let Z=e=>{let{id:t,className:n,children:o,invert:r}=e;return s.jsx("div",{id:t,className:[r&&S().invert,n].filter(Boolean).join(" "),children:o})},U={cta:({links:e,richText:t,invertBackground:n})=>s.jsx(b.T,{children:s.jsx(N,{className:[w().callToAction,n&&w().invert].filter(Boolean).join(" "),children:(0,s.jsxs)("div",{className:w().wrap,children:[s.jsx("div",{className:w().content,children:s.jsx(y.Z,{className:w().richText,content:t})}),s.jsx("div",{className:w().linkGroup,children:(e||[]).map(({link:e},t)=>s.jsx(P.g,{...e,invert:n},t))})]})})}),content:e=>{let{columns:t}=e;return s.jsx(b.T,{className:H().content,children:s.jsx("div",{className:H().grid,children:t&&t.length>0&&t.map((e,t)=>{let{enableLink:n,richText:o,link:r,size:a}=e;return(0,s.jsxs)("div",{className:[H().column,H()[`column--${a}`]].join(" "),children:[s.jsx(y.Z,{content:o}),n&&s.jsx(P.g,{className:H().link,...r})]},t)})})})},mediaBlock:e=>{let t;let{media:n,position:o="default",staticImage:r}=e;return n&&"object"==typeof n&&(t=n.caption),(0,s.jsxs)("div",{className:F().mediaBlock,children:["fullscreen"===o&&s.jsx("div",{className:F().fullscreen,children:s.jsx(D.p,{resource:n,src:r})}),"default"===o&&s.jsx(b.T,{children:s.jsx(D.p,{resource:n,src:r})}),t&&s.jsx(b.T,{className:F().caption,children:s.jsx(y.Z,{content:t})})]})},archive:e=>{let{introContent:t,id:n,relationTo:o,populateBy:r,limit:a,populatedDocs:i,populatedDocsTotal:l,selectedDocs:c,categories:d}=e;return(0,s.jsxs)("div",{id:`block-${n}`,className:f().archiveBlock,children:[t&&s.jsx(b.T,{className:f().introContent,children:s.jsx(y.Z,{content:t})}),s.jsx(v.CollectionArchive,{populateBy:r,relationTo:o,populatedDocs:i,populatedDocsTotal:l,selectedDocs:c,categories:d,limit:a,sort:"-publishedAt"})]})},relatedPosts:e=>{let{introContent:t,docs:n,relationTo:o}=e;return(0,s.jsxs)("div",{className:M().relatedPosts,children:[t&&s.jsx(b.T,{className:M().introContent,children:s.jsx(y.Z,{content:t})}),s.jsx(b.T,{children:s.jsx("div",{className:M().grid,children:n?.map((e,t)=>"string"==typeof e?null:s.jsx("div",{className:[M().column,2===n.length&&M()["cols-half"],n.length>=3&&M()["cols-thirds"]].filter(Boolean).join(" "),children:s.jsx(G.Z,{relationTo:o,doc:e,showCategories:!0})},t))})})]})},comments:$.CommentsBlock},I=e=>{let{disableTopPadding:t,blocks:n}=e,r=n&&Array.isArray(n)&&n.length>0;return r?s.jsx(o.Fragment,{children:n.map((e,o)=>{let{blockName:r,blockType:a}=e;if(a&&a in U){let i=U[a],l="invertBackground"in e&&"cta"!==a&&e.invertBackground,c=n[o-1],d=c&&"invertBackground"in c&&c?.invertBackground,m="large",p="large";if(c&&!!l==!!d&&(m="none"),o===n.length-1&&(p="large"),t&&0===o&&(m="none"),i)return s.jsx(Z,{invert:l,children:s.jsx(N,{top:m,bottom:p,children:s.jsx(i,{id:R(r),...e})})},o)}return null})}):null};var W=n(2215),O=n.n(W);let X=e=>{let t=Array.from(Array(e.number||1).keys());return s.jsx("div",{className:O().loading,children:t.map((e,t)=>s.jsx("div",{className:O().shimmer},t))})};var Y=n(2655);let K=e=>{let{postSlug:t,disableTopPadding:n}=e,{user:a}=(0,j.a)(),[l,c]=r().useState(!1),[d,m]=r().useState(),p=r().useRef(!1),u=r().useRef(!1);return((0,o.useEffect)(()=>{if(!a||p.current||u.current)return;p.current=!0,u.current=!0;let e=Date.now(),n=async()=>{c(!0);try{let n=await fetch("https://hkacademy.net/api/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:x,variables:{slug:t}})})?.then(e=>e.json())?.then(e=>e?.data?.Posts.docs[0]?.premiumContent);n&&m(n);let s=Date.now();s-e<1e3&&await new Promise(t=>setTimeout(t,500-(s-e))),c(!1)}catch(e){console.error(e),c(!1)}};n(),u.current=!1},[a,t]),void 0===a)?null:null===a?s.jsx(b.T,{children:s.jsx(N,{bottom:"large",top:"none",children:s.jsx(Y.v,{message:(0,s.jsxs)(s.Fragment,{children:["This content is gated behind authentication. You must be ",s.jsx(i(),{href:`/login?redirect=${encodeURIComponent(window.location.pathname)}`,children:"logged in"})," to view this content."]})})})}):l?s.jsx(b.T,{children:s.jsx(N,{bottom:"large",top:"none",children:s.jsx(X,{})})}):d&&0!==d.length?s.jsx(I,{blocks:d,disableTopPadding:n}):s.jsx(b.T,{children:s.jsx(N,{bottom:"large",top:"none",children:s.jsx(Y.v,{message:"Log in to unlock this premium content."})})})}},9893:e=>{e.exports={archiveBlock:"ArchiveBlock_archiveBlock__5UEq_",introContent:"ArchiveBlock_introContent__H4Ko0"},e.exports.__checksum="35096ecb5b22"},9520:e=>{e.exports={callToAction:"CallToAction_callToAction__WNeXD",invert:"CallToAction_invert__tvOO1",wrap:"CallToAction_wrap__AK9_4",content:"CallToAction_content__BiisP",linkGroup:"CallToAction_linkGroup__jZg4Y"},e.exports.__checksum="32442875b3b7"},3728:e=>{e.exports={grid:"Content_grid__7xRAI","column--oneThird":"Content_column--oneThird__HyYv1","column--half":"Content_column--half___Gx1x","column--twoThirds":"Content_column--twoThirds__QXm6g","column--full":"Content_column--full__D_eoS",column:"Content_column__bhKOQ",link:"Content_link__5_dJG"},e.exports.__checksum="7ea6d385335b"},4175:e=>{e.exports={mediaBlock:"MediaBlock_mediaBlock__kLxM0",caption:"MediaBlock_caption__vE6Rw"},e.exports.__checksum="9103938fdf7c"},3240:e=>{e.exports={introContent:"RelatedPosts_introContent__rC_B_",grid:"RelatedPosts_grid__6I_Hu",column:"RelatedPosts_column__CatHL","cols-half":"RelatedPosts_cols-half__S3xN3","cols-thirds":"RelatedPosts_cols-thirds___Q5VW"},e.exports.__checksum="ff78876dbaaf"},1817:e=>{e.exports={invert:"BackgroundColor_invert__8yPWe"},e.exports.__checksum="043799d422a9"},2215:e=>{e.exports={loading:"LoadingShimmer_loading__sK7Rg",shimmer:"LoadingShimmer_shimmer__YtrFI"},e.exports.__checksum="eba6cbe2403e"},7468:e=>{e.exports={"top-large":"VerticalPadding_top-large__Fdv3J","top-medium":"VerticalPadding_top-medium__8WZul","bottom-large":"VerticalPadding_bottom-large__W6wnm","bottom-medium":"VerticalPadding_bottom-medium__T9Qsp"},e.exports.__checksum="275c76d22479"},4884:e=>{e.exports={leader:"PostHero_leader__dXb5O",postHero:"PostHero_postHero__n2saY",content:"PostHero_content__AqcUA",title:"PostHero_title___txbY",warning:"PostHero_warning__AFn65",meta:"PostHero_meta__yXA9E",description:"PostHero_description__yk3mG",media:"PostHero_media__azoTa",mediaWrapper:"PostHero_mediaWrapper__yXeZK",image:"PostHero_image__lH8GL",placeholder:"PostHero_placeholder__F_Gvi",caption:"PostHero_caption__UCHRf"},e.exports.__checksum="b8a7638b6840"},1333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A,dynamic:()=>N,generateMetadata:()=>$,generateStaticParams:()=>w});var s=n(8144),o=n(3830),r=n.n(o),a=n(9859),i=n(6465),l=n(6825),c=n(9882),d=n(1933),m=n(77),p=n(7536);let u=(0,p.createProxy)(String.raw`C:\Users\MICHAEL\Documents\GitHub\hk-academy\src\app\_components\PremiumContent\index.tsx`),{__esModule:h,$$typeof:_}=u;u.default;let g=u.PremiumContent;var x=n(4602),j=n.n(x),v=n(3205),b=n(6355),y=n(702),k=n(6993),f=n(4884),P=n.n(f);let T=({post:e})=>{let{id:t,title:n,categories:r,meta:{image:a,description:i}={},publishedAt:l,populatedAuthors:c}=e;return s.jsx(o.Fragment,{children:(0,s.jsxs)(v.T,{className:P().postHero,children:[(0,s.jsxs)("div",{className:P().content,children:[s.jsx("div",{className:P().leader,children:s.jsx("div",{className:P().categories,children:r?.map((e,t)=>{if("object"==typeof e&&null!==e){let{title:n}=e,a=t===r.length-1;return s.jsxs(o.Fragment,{children:[n||"Untitled category",!a&&s.jsx(o.Fragment,{children:", \xa0"})]},t)}return null})})}),s.jsx("h1",{className:P().title,children:n}),(0,s.jsxs)("p",{className:P().meta,children:[c&&(0,s.jsxs)(o.Fragment,{children:["By ",c.map((e,t)=>{let{name:n}=e,r=t===c.length-1,a=t===c.length-2;return(0,s.jsxs)(o.Fragment,{children:[n,a&&c.length>2&&s.jsx(o.Fragment,{children:", "}),a&&2===c.length&&s.jsx(o.Fragment,{children:" "}),!r&&c.length>1&&s.jsx(o.Fragment,{children:"and "})]},t)})]}),l&&(0,s.jsxs)(o.Fragment,{children:[" on ",(0,k.o)(l)]})]}),s.jsx("div",{children:(0,s.jsxs)("p",{className:P().description,children:[`${i?`${i} `:""}To edit this post, `,s.jsx(j(),{href:`https://hkacademy.net/admin/collections/posts/${t}`,children:"navigate to the admin dashboard"}),"."]})})]}),(0,s.jsxs)("div",{className:P().media,children:[(0,s.jsxs)("div",{className:P().mediaWrapper,children:[!a&&s.jsx("div",{className:P().placeholder,children:"No image"}),a&&"string"!=typeof a&&s.jsx(b.p,{imgClassName:P().image,resource:a,fill:!0})]}),a&&"string"!=typeof a&&a?.caption&&s.jsx(y.Z,{content:a.caption,className:P().caption})]})]})})};var C=n(839);let N="force-dynamic";async function A({params:{slug:e}}){let{isEnabled:t}=(0,a.draftMode)(),n=null;try{n=await (0,c.D)({collection:"posts",slug:e,draft:t})}catch(e){console.error(e)}n||(0,i.notFound)();let o=await (0,l.t)({doc:n?.id}),{layout:d,relatedPosts:p,enablePremiumContent:u,premiumContent:h}=n;return(0,s.jsxs)(r().Fragment,{children:[s.jsx(T,{post:n}),s.jsx(m.n,{blocks:d}),u&&s.jsx(g,{postSlug:e,disableTopPadding:!0}),s.jsx(m.n,{disableTopPadding:!0,blocks:[{blockType:"comments",blockName:"Comments",relationTo:"posts",introContent:[{type:"h4",children:[{text:"Comments"}]},{type:"p",children:[{text:'Authenticated users can leave comments on this post. All new comments are given the status "draft" until they are approved by an admin. Draft comments are not accessible to the public and will not show up on this page until it is marked as "published". To manage all comments, '},{type:"link",url:"/admin/collections/comments",children:[{text:"navigate to the admin dashboard"}]},{text:"."}]}],doc:n,comments:o},{blockType:"relatedPosts",blockName:"Related Posts",relationTo:"posts",introContent:[{type:"h4",children:[{text:"Related posts"}]},{type:"p",children:[{text:'The posts displayed here are individually selected for this page. Admins can select any number of related posts to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate posts by category complete with pagination. To manage related posts, '},{type:"link",url:`/admin/collections/posts/${n.id}`,children:[{text:"navigate to the admin dashboard"}]},{text:"."}]}],docs:p}]})]})}async function w(){try{let e=await (0,d.N)("posts");return e?.map(({slug:e})=>e)}catch(e){return[]}}async function $({params:{slug:e}}){let{isEnabled:t}=(0,a.draftMode)(),n=null;try{n=await (0,c.D)({collection:"posts",slug:e,draft:t})}catch(e){}return(0,C.v)({doc:n})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[4650,2560,345,3497,5094,6558,9859,6465,2451,1073,4769,1369,702,484,7770,4613,7617,9217,3435],()=>n(5791));module.exports=s})();
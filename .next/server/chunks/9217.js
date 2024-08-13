exports.id=9217,exports.ids=[9217],exports.modules={3940:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CommentsBlock:()=>$});var a=r(80),s=r(9885),l=r.n(s),n=r(1440),i=r.n(n),o=r(5964),c=r(2190),d=r.n(c);let h=e=>{let{className:t}=e;return a.jsx("hr",{className:[t,d().hr].filter(Boolean).join(" ")})};var m=r(2655),u=r(3060);let _=e=>{let t=new Date,r=t;e&&(r=new Date(e));let a=r.getMonth(),s=r.getDate(),l=a+1<10?`0${a+1}`:a+1,n=s<10?`0${s}`:s,i=r.getFullYear();return`${l}/${n}/${i}`};var p=r(6558),g=r(7114),x=r(9496),j=r(2672),v=r(8693),y=r(5472),f=r.n(y);let b=({docID:e})=>{let t=(0,g.usePathname)(),[r,n]=l().useState(null),[o,c]=l().useState(null),{register:d,handleSubmit:h,formState:{errors:u,isLoading:_},reset:y}=(0,p.cI)(),{user:b}=(0,v.a)(),C=(0,s.useCallback)(async t=>{if(b)try{let r=await fetch("https://hkacademy.net/api/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"draft",doc:e,user:b.id,...t})}),l=await r.json();if(!r.ok)throw Error(l.message);n(null),c((0,a.jsxs)(s.Fragment,{children:["Your comment was submitted for moderation successfully. To approve it, ",a.jsx(i(),{href:`https://hkacademy.net/admin/collections/comments/${"object"==typeof l.doc?l.doc.id:l.doc}`,children:"navigate to the admin dashboard"}),' and click "publish".']})),y()}catch(e){n("Something went wrong")}},[e,b,y]);return(0,a.jsxs)("form",{onSubmit:h(C),className:f().form,children:[a.jsx(m.v,{error:r,success:o,className:f().message}),a.jsx(j.I,{name:"comment",label:"Comment",required:!0,register:d,error:u.comment,type:"textarea",placeholder:b?"Leave a comment":"Login to leave a comment",disabled:!b,validate:e=>e?e.length<3?"Please enter a comment over 3 characters":!(e.length>500)||"Please enter a comment under 500 characters":"Please enter a comment"}),b?a.jsx(x.Button,{type:"submit",appearance:"primary",label:_?"Processing":"Comment",disabled:_,className:f().submit}):a.jsx(x.Button,{href:`/login?redirect=${encodeURIComponent(t)}`,appearance:"primary",label:"Login to comment",disabled:_,className:f().submit})]})};var C=r(1085),k=r.n(C);let $=e=>{let{introContent:t,doc:r,comments:l}=e;return(0,a.jsxs)("div",{className:k().commentsBlock,children:[t&&a.jsx(o.T,{className:k().introContent,children:a.jsx(u.Z,{content:t})}),a.jsx(o.T,{children:(0,a.jsxs)("div",{className:k().comments,children:[a.jsx(h,{}),l?.map((e,t)=>{let{populatedUser:r,comment:n,createdAt:o,_status:c}=e;return n?a.jsxs(s.Fragment,{children:[a.jsxs("div",{className:[k().column,2===l.length&&k()["cols-half"],l.length>=3&&k()["cols-thirds"]].filter(Boolean).join(" "),children:["draft"===c&&a.jsx(m.v,{message:a.jsxs(s.Fragment,{children:["This is a draft comment. You are seeing it because you are an admin. To approve this comment, ",a.jsx(i(),{href:`https://hkacademy.net/admin/collections/comments/${e.id}`,children:"navigate to the admin dashboard"}),' and click "publish".']})}),a.jsxs("p",{className:k().comment,children:['"',n,'"']}),r&&a.jsxs("p",{className:k().meta,children:[r?.name||"Unnamed User",o&&` on ${_(o)}`]})]}),t<l.length-1&&a.jsx(h,{})]},t):null}),a.jsx(h,{}),a.jsx(b,{docID:r.id})]})})]})}},2627:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(80),s=r(9885),l=r(1440),n=r.n(l),i=r(8995),o=r(6342),c=r.n(o);let d=e=>{let{relationTo:t,showCategories:r,title:l,doc:o,className:d,orientation:h="vertical"}=e,{slug:m,title:u,categories:_,meta:p}=o||{},{description:g,image:x}=p||{},j=_&&Array.isArray(_)&&_.length>0,v=l||u,y=g?.replace(/\s/g," "),f=`/${t}/${m}`;return(0,a.jsxs)("div",{className:[c().card,d,h&&c()[h]].filter(Boolean).join(" "),children:[(0,a.jsxs)(n(),{href:f,className:c().mediaWrapper,children:[!x&&a.jsx("div",{className:c().placeholder,children:"No image"}),x&&"string"!=typeof x&&a.jsx(i.p,{imgClassName:c().image,resource:x,fill:!0})]}),(0,a.jsxs)("div",{className:c().content,children:[r&&j&&a.jsx("div",{className:c().leader,children:r&&j&&a.jsx("div",{children:_?.map((e,t)=>{if("object"==typeof e){let{title:r}=e,l=t===_.length-1;return a.jsxs(s.Fragment,{children:[r||"Untitled category",!l&&a.jsx(s.Fragment,{children:", \xa0"})]},t)}return null})})}),v&&a.jsx("h4",{className:c().title,children:a.jsx(n(),{href:f,className:c().titleLink,children:v})}),g&&a.jsx("div",{className:c().body,children:g&&a.jsx("p",{className:c().description,children:y})})]})]})}},5223:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CollectionArchive:()=>y});var a=r(80),s=r(9885),l=r(2059),n=r.n(l),i=r(2627),o=r(5964),c=r(5341),d=r.n(c);let h={plural:"Docs",singular:"Doc"},m={posts:{plural:"Posts",singular:"Post"},projects:{plural:"Projects",singular:"Project"}},u=e=>{let{className:t,collection:r,collectionLabels:s,currentPage:l,limit:n,totalDocs:i}=e,o=(l?l-1:1)*(n||1)+1;i&&o>i&&(o=0);let c=(l||1)*(n||1);i&&c>i&&(c=i);let{plural:u,singular:_}=s||m[r||""]||h||{};return(0,a.jsxs)("div",{className:[t,d().pageRange].filter(Boolean).join(" "),children:[(void 0===i||0===i)&&"Search produced no results.",void 0!==i&&i>0&&`Showing ${o}${o>0?` - ${c}`:""} of ${i} ${i>1?u:_}`]})};var _=r(7002),p=r(6464),g=r.n(p);let x=e=>{let{page:t,totalPages:r,onClick:s,className:l}=e,n=t<r,i=t>1;return(0,a.jsxs)("div",{className:[g().pagination,l].filter(Boolean).join(" "),children:[a.jsx("button",{type:"button",className:g().button,disabled:!i,onClick:()=>{s(t-1)},children:a.jsx(_.T,{rotate:90,className:g().icon})}),a.jsx("div",{className:g().pageRange,children:(0,a.jsxs)("span",{className:g().pageRangeLabel,children:["Page ",t," of ",r]})}),a.jsx("button",{type:"button",className:g().button,disabled:!n,onClick:()=>{s(t+1)},children:a.jsx(_.T,{rotate:-90,className:g().icon})})]})};var j=r(3894),v=r.n(j);let y=e=>{let{categories:t,className:r,limit:l=10,onResultChange:c,populateBy:d,populatedDocs:h,populatedDocsTotal:m,relationTo:_,selectedDocs:p,showPageRange:g,sort:j="-createdAt"}=e,[y,f]=(0,s.useState)({docs:("collection"===d?h:"selection"===d?p:[])?.map(e=>e.value),hasNextPage:!1,hasPrevPage:!1,nextPage:1,page:1,prevPage:1,totalDocs:"number"==typeof m?m:0,totalPages:1}),[b,C]=(0,s.useState)(!1),[k,$]=(0,s.useState)(void 0),P=(0,s.useRef)(null),N=(0,s.useRef)(!1),T=(0,s.useRef)(!1),[A,B]=(0,s.useState)(1),w=(t||[]).map(e=>"object"==typeof e?e.id:e).join(","),q=(0,s.useCallback)(()=>{let{current:e}=P},[]);return(0,s.useEffect)(()=>{b||y.page},[b,q,y]),(0,s.useEffect)(()=>{let e=null;if("collection"===d&&!T.current){T.current=!0,e=setTimeout(()=>{N.current&&C(!0)},500);let t=n().stringify({depth:1,limit:l,page:A,sort:j,where:{...w?{categories:{in:w}}:{}}},{encode:!1}),r=async()=>{try{let r=await fetch(`https://hkacademy.net/api/${_}?${t}`),a=await r.json();clearTimeout(e);let{docs:s}=a;s&&Array.isArray(s)&&(f(a),C(!1),"function"==typeof c&&c(a))}catch(e){console.warn(e),C(!1),$(`Unable to load "${_} archive" data at this time.`)}T.current=!1,N.current=!0};r()}return()=>{e&&clearTimeout(e)}},[A,w,_,c,j,l,d]),(0,a.jsxs)("div",{className:[v().collectionArchive,r].filter(Boolean).join(" "),children:[a.jsx("div",{className:v().scrollRef,ref:P}),!b&&k&&a.jsx(o.T,{children:k}),(0,a.jsxs)(s.Fragment,{children:[!1!==g&&"selection"!==d&&a.jsx(o.T,{children:a.jsx("div",{className:v().pageRange,children:a.jsx(u,{collection:_,currentPage:y.page,limit:l,totalDocs:y.totalDocs})})}),(0,a.jsxs)(o.T,{children:[a.jsx("div",{className:v().grid,children:y.docs?.map((e,t)=>"object"==typeof e&&null!==e?a.jsx("div",{className:v().column,children:a.jsx(i.Z,{doc:e,relationTo:_,showCategories:!0})},t):null)}),y.totalPages>1&&"selection"!==d&&a.jsx(x,{className:v().pagination,onClick:B,page:y.page,totalPages:y.totalPages})]})]})]})}},8995:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var a=r(80),s=r(9885),l=r(4011),n=r(966);let i=e=>{let{className:t,resource:r,htmlElement:i="div"}=e,o="string"!=typeof r&&r?.mimeType?.includes("video"),c=i||s.Fragment;return a.jsx(c,{...null!==i?{className:t}:{},children:o?a.jsx(n.Video,{...e}):a.jsx(l.Image,{...e})})}},3060:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var a=r(80),s=r(9885),l=r(962),n=r.n(l),i=r(8437),o=r(6608),c=r.n(o);let d=({children:e})=>a.jsx("p",{className:c().label,children:e});var h=r(4274),m=r.n(h);let u=({children:e})=>a.jsx("p",{className:m().largeBody,children:e});var _=r(2915);let p=e=>e?.map((e,t)=>{if(i.xv.isText(e)){let r=a.jsx("span",{dangerouslySetInnerHTML:{__html:n()(e.text)}});return e.bold&&(r=a.jsx("strong",{children:r},t)),e.code&&(r=a.jsx("code",{children:r},t)),e.italic&&(r=a.jsx("em",{children:r},t)),e.underline&&(r=a.jsx("span",{style:{textDecoration:"underline"},children:r},t)),e.strikethrough&&(r=a.jsx("span",{style:{textDecoration:"line-through"},children:r},t)),a.jsx(s.Fragment,{children:r},t)}if(!e)return null;switch(e.type){case"h1":return a.jsx("h1",{children:p(e?.children)},t);case"h2":return a.jsx("h2",{children:p(e?.children)},t);case"h3":return a.jsx("h3",{children:p(e?.children)},t);case"h4":return a.jsx("h4",{children:p(e?.children)},t);case"h5":return a.jsx("h5",{children:p(e?.children)},t);case"h6":return a.jsx("h6",{children:p(e?.children)},t);case"quote":return a.jsx("blockquote",{children:p(e?.children)},t);case"ul":return a.jsx("ul",{children:p(e?.children)},t);case"ol":return a.jsx("ol",{children:p(e.children)},t);case"li":return a.jsx("li",{children:p(e.children)},t);case"link":return a.jsx(_.g,{type:"internal"===e.linkType?"reference":"custom",url:e.url,reference:e.doc,newTab:!!e?.newTab,children:p(e?.children)},t);case"label":return a.jsx(d,{children:p(e?.children)},t);case"large-body":return a.jsx(u,{children:p(e?.children)},t);default:return a.jsx("p",{children:p(e?.children)},t)}})||[];var g=r(5992),x=r.n(g);let j=({className:e,content:t})=>t?a.jsx("div",{className:[x().richText,e].filter(Boolean).join(" "),children:p(t)}):null},1291:e=>{e.exports={archiveBlock:"ArchiveBlock_archiveBlock__5UEq_",introContent:"ArchiveBlock_introContent__H4Ko0"},e.exports.__checksum="35096ecb5b22"},5472:e=>{e.exports={form:"CommentForm_form__VpWEG",submit:"CommentForm_submit__MpqTt",message:"CommentForm_message__rkvi2"},e.exports.__checksum="aac6f0d9276d"},1085:e=>{e.exports={introContent:"Comments_introContent__zOL0y",column:"Comments_column__npM5c",draft:"Comments_draft__YfO1d",comment:"Comments_comment__TroQg",meta:"Comments_meta__N4Txw"},e.exports.__checksum="e098d15f9ca0"},2863:e=>{e.exports={introContent:"RelatedPosts_introContent__rC_B_",grid:"RelatedPosts_grid__6I_Hu",column:"RelatedPosts_column__CatHL","cols-half":"RelatedPosts_cols-half__S3xN3","cols-thirds":"RelatedPosts_cols-thirds___Q5VW"},e.exports.__checksum="ff78876dbaaf"},1237:e=>{e.exports={invert:"BackgroundColor_invert__8yPWe"},e.exports.__checksum="043799d422a9"},6680:e=>{e.exports={leader:"Card_leader__BDPww",card:"Card_card__dbEsw",vertical:"Card_vertical__A45Vp",horizontal:"Card_horizontal__itghP",mediaWrapper:"Card_mediaWrapper__ymlCx",content:"Card_content__2kYlr",title:"Card_title__l06An",titleLink:"Card_titleLink___1xkf",centerAlign:"Card_centerAlign__bkufK",body:"Card_body__elddF",description:"Card_description__gK3Vb",hideImageOnMobile:"Card_hideImageOnMobile__8Evfz",image:"Card_image__u8Zit",placeholder:"Card_placeholder__j9mbq",actions:"Card_actions__O3ZAz"},e.exports.__checksum="f809df421c47"},6342:e=>{e.exports={leader:"Card_leader__BDPww",card:"Card_card__dbEsw",vertical:"Card_vertical__A45Vp",horizontal:"Card_horizontal__itghP",mediaWrapper:"Card_mediaWrapper__ymlCx",content:"Card_content__2kYlr",title:"Card_title__l06An",titleLink:"Card_titleLink___1xkf",centerAlign:"Card_centerAlign__bkufK",body:"Card_body__elddF",description:"Card_description__gK3Vb",hideImageOnMobile:"Card_hideImageOnMobile__8Evfz",image:"Card_image__u8Zit",placeholder:"Card_placeholder__j9mbq",actions:"Card_actions__O3ZAz"},e.exports.__checksum="f809df421c47"},3894:e=>{e.exports={scrollRef:"CollectionArchive_scrollRef__cpVNx",introContent:"CollectionArchive_introContent__3ius4",resultCountWrapper:"CollectionArchive_resultCountWrapper__HeyC2",pageRange:"CollectionArchive_pageRange___Fm9R",list:"CollectionArchive_list__uDZ9m",grid:"CollectionArchive_grid___oHl9",column:"CollectionArchive_column__90Pv6",pagination:"CollectionArchive_pagination__SKyX6"},e.exports.__checksum="be0b2bd103c0"},2190:e=>{e.exports={hr:"HR_hr__KdVl9"},e.exports.__checksum="6f3e37085b8c"},6608:e=>{e.exports={label:"Label_label__jIJix"},e.exports.__checksum="cf68d07545a2"},4274:e=>{e.exports={largeBody:"LargeBody_largeBody__4csV5"},e.exports.__checksum="b3616a11d61f"},5341:e=>{e.exports={pageRange:"PageRange_pageRange__6JbBn",content:"PageRange_content__xR9JI",divider:"PageRange_divider__6Q5i0",hyperlink:"PageRange_hyperlink__VRzd1"},e.exports.__checksum="3d1186f484cc"},6464:e=>{e.exports={pagination:"Pagination_pagination__UA5CJ",button:"Pagination_button__gOLVY",icon:"Pagination_icon__z6vbL"},e.exports.__checksum="382c49526847"},5992:e=>{e.exports={richText:"RichText_richText__8IUJ0"},e.exports.__checksum="4b21345af45c"},9882:(e,t,r)=>{"use strict";r.d(t,{D:()=>c});var a=r(488),s=r(5648),l=r(3674),n=r(109),i=r(6362);let o={pages:{query:a.E,key:"Pages"},posts:{query:s.a4,key:"Posts"},projects:{query:l.y,key:"Projects"}},c=async e=>{let t;let{collection:a,slug:s,draft:l}=e||{};if(!o[a])throw Error(`Collection ${a} not found`);if(l){let{cookies:e}=await Promise.resolve().then(r.t.bind(r,9859,23));t=e().get(i.Q)}let c=await fetch(`${n.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json",...t?.value&&l?{Authorization:`JWT ${t.value}`}:{}},cache:"no-store",next:{tags:[`${a}_${s}`]},body:JSON.stringify({query:o[a].query,variables:{slug:s,draft:l}})})?.then(e=>e.json())?.then(e=>{if(e.errors)throw Error(e?.errors?.[0]?.message??"Error fetching doc");return e?.data?.[o[a].key]?.docs?.[0]});return c}},1933:(e,t,r)=>{"use strict";r.d(t,{N:()=>c});var a=r(488),s=r(5648),l=r(3674),n=r(109),i=r(6362);let o={pages:{query:a.q,key:"Pages"},posts:{query:s.vA,key:"Posts"},projects:{query:l.F,key:"Projects"}},c=async(e,t,a)=>{let s;if(!o[e])throw Error(`Collection ${e} not found`);if(t){let{cookies:e}=await Promise.resolve().then(r.t.bind(r,9859,23));s=e().get(i.Q)}let l=await fetch(`${n.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json",...s?.value&&t?{Authorization:`JWT ${s.value}`}:{}},cache:"no-store",next:{tags:[e]},body:JSON.stringify({query:o[e].query,variables:a})})?.then(e=>e.json())?.then(t=>{if(t.errors)throw Error(t?.errors?.[0]?.message??"Error fetching docs");return t?.data?.[o[e].key]?.docs});return l}},6362:(e,t,r)=>{"use strict";r.d(t,{Q:()=>a});let a="payload-token"},77:(e,t,r)=>{"use strict";r.d(t,{n:()=>D});var a=r(8144),s=r(3830),l=r(7536);let n=(0,l.createProxy)(String.raw`C:\Users\MICHAEL\Documents\GitHub\hk-academy\src\app\_components\CollectionArchive\index.tsx`),{__esModule:i,$$typeof:o}=n;n.default;let c=n.CollectionArchive;var d=r(3205),h=r(702),m=r(1291),u=r.n(m),_=r(4613);let p=(0,l.createProxy)(String.raw`C:\Users\MICHAEL\Documents\GitHub\hk-academy\src\app\_blocks\Comments\index.tsx`),{__esModule:g,$$typeof:x}=p;p.default;let j=p.CommentsBlock;var v=r(7617),y=r(3466),f=r(4602),b=r.n(f),C=r(6355),k=r(6680),$=r.n(k);let P=e=>{let{relationTo:t,showCategories:r,title:l,doc:n,className:i,orientation:o="vertical"}=e,{slug:c,title:d,categories:h,meta:m}=n||{},{description:u,image:_}=m||{},p=h&&Array.isArray(h)&&h.length>0,g=l||d,x=u?.replace(/\s/g," "),j=`/${t}/${c}`;return(0,a.jsxs)("div",{className:[$().card,i,o&&$()[o]].filter(Boolean).join(" "),children:[(0,a.jsxs)(b(),{href:j,className:$().mediaWrapper,children:[!_&&a.jsx("div",{className:$().placeholder,children:"No image"}),_&&"string"!=typeof _&&a.jsx(C.p,{imgClassName:$().image,resource:_,fill:!0})]}),(0,a.jsxs)("div",{className:$().content,children:[r&&p&&a.jsx("div",{className:$().leader,children:r&&p&&a.jsx("div",{children:h?.map((e,t)=>{if("object"==typeof e){let{title:r}=e,l=t===h.length-1;return a.jsxs(s.Fragment,{children:[r||"Untitled category",!l&&a.jsx(s.Fragment,{children:", \xa0"})]},t)}return null})})}),g&&a.jsx("h4",{className:$().title,children:a.jsx(b(),{href:j,className:$().titleLink,children:g})}),u&&a.jsx("div",{className:$().body,children:u&&a.jsx("p",{className:$().description,children:x})})]})]})};var N=r(2863),T=r.n(N);let A=e=>e?.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase();var B=r(1237),w=r.n(B);let q=e=>{let{id:t,className:r,children:s,invert:l}=e;return a.jsx("div",{id:t,className:[l&&w().invert,r].filter(Boolean).join(" "),children:s})};var R=r(864);let S={cta:_.h,content:v.b,mediaBlock:y.P,archive:e=>{let{introContent:t,id:r,relationTo:s,populateBy:l,limit:n,populatedDocs:i,populatedDocsTotal:o,selectedDocs:m,categories:_}=e;return(0,a.jsxs)("div",{id:`block-${r}`,className:u().archiveBlock,children:[t&&a.jsx(d.T,{className:u().introContent,children:a.jsx(h.Z,{content:t})}),a.jsx(c,{populateBy:l,relationTo:s,populatedDocs:i,populatedDocsTotal:o,selectedDocs:m,categories:_,limit:n,sort:"-publishedAt"})]})},relatedPosts:e=>{let{introContent:t,docs:r,relationTo:s}=e;return(0,a.jsxs)("div",{className:T().relatedPosts,children:[t&&a.jsx(d.T,{className:T().introContent,children:a.jsx(h.Z,{content:t})}),a.jsx(d.T,{children:a.jsx("div",{className:T().grid,children:r?.map((e,t)=>"string"==typeof e?null:a.jsx("div",{className:[T().column,2===r.length&&T()["cols-half"],r.length>=3&&T()["cols-thirds"]].filter(Boolean).join(" "),children:a.jsx(P,{relationTo:s,doc:e,showCategories:!0})},t))})})]})},comments:j},D=e=>{let{disableTopPadding:t,blocks:r}=e,l=r&&Array.isArray(r)&&r.length>0;return l?a.jsx(s.Fragment,{children:r.map((e,s)=>{let{blockName:l,blockType:n}=e;if(n&&n in S){let i=S[n],o="invertBackground"in e&&"cta"!==n&&e.invertBackground,c=r[s-1],d=c&&"invertBackground"in c&&c?.invertBackground,h="large",m="large";if(c&&!!o==!!d&&(h="none"),s===r.length-1&&(m="large"),t&&0===s&&(h="none"),i)return a.jsx(q,{invert:o,children:a.jsx(R.G,{top:h,bottom:m,children:a.jsx(i,{id:A(l),...e})})},s)}return null})}):null}},5042:(e,t,r)=>{"use strict";r.d(t,{Iy:()=>d,hS:()=>i,P8:()=>o,kE:()=>c});let a=`categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`;var s=r(5603),l=r(5599),n=r(7950);let i=`
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${(0,s.A)()}
  }
}
`,o=`
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${(0,s.A)()}
  }
}
`,c=`
...on MediaBlock {
  blockType
  invertBackground
  position
  ${l.i}
}
`,d=`
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${a}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${n.M}
      }
      ...on Project {
        id
        slug
        title
        ${n.M}
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
        ${a}
        ${n.M}
      }
      ...on Project {
        id
        slug
        title
        ${a}
        ${n.M}
      }
    }
  }
  populatedDocsTotal
}
`},5599:(e,t,r)=>{"use strict";r.d(t,{d:()=>a,i:()=>s});let a=`
mimeType
filename
width
height
alt
caption
`,s=`media {
  ${a}
}`},7950:(e,t,r)=>{"use strict";r.d(t,{M:()=>s});var a=r(5599);let s=`meta {
  title
  image {
    ${a.d}
  }
  description
}`},488:(e,t,r)=>{"use strict";r.d(t,{E:()=>o,q:()=>i});var a=r(5042),s=r(5603),l=r(5599),n=r(7950);let i=`
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`,o=`
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          richText
          links {
            link ${(0,s.A)()}
          }
          ${l.i}
        }
        layout {
          ${a.P8}
          ${a.hS}
          ${a.P8}
          ${a.kE}
          ${a.Iy}
        }
        ${n.M}
      }
    }
  }
`},5648:(e,t,r)=>{"use strict";r.d(t,{a4:()=>o,vA:()=>i});var a=r(5042),s=r(5603),l=r(5599),n=r(7950);let i=`
  query Posts {
    Posts(limit: 300) {
      docs {
        slug
      }
    }
  }
`,o=`
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        publishedAt
        populatedAuthors {
          id
          name
        }
        hero {
          type
          richText
          links {
            link ${(0,s.A)()}
          }
          ${l.i}
        }
        layout {
          ${a.P8}
          ${a.hS}
          ${a.P8}
          ${a.kE}
          ${a.Iy}
        }
        enablePremiumContent
        relatedPosts {
          id
          slug
          title
          ${n.M}
        }
        ${n.M}
      }
    }
  }
`},3674:(e,t,r)=>{"use strict";r.d(t,{F:()=>i,y:()=>o});var a=r(5042),s=r(5603),l=r(5599),n=r(7950);let i=`
  query Projects {
    Projects(limit: 300) {
      docs {
        slug
      }
    }
  }
`,o=`
  query Project($slug: String, $draft: Boolean) {
    Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        hero {
          type
          richText
          links {
            link ${(0,s.A)()}
          }
          ${l.i}
        }
        layout {
          ${a.P8}
          ${a.hS}
          ${a.P8}
          ${a.kE}
          ${a.Iy}
        }
        relatedProjects {
          id
          slug
          title
          ${n.M}
        }
        ${n.M}
      }
    }
  }
`},839:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});var a=r(2208);let s=async e=>{let{doc:t}=e||{},r="object"==typeof t?.meta?.image&&t?.meta?.image!==null&&"url"in t?.meta?.image&&`https://hkacademy.net${t.meta.image.url}`;return{title:t?.meta?.title||"Payload",description:t?.meta?.description,openGraph:(0,a.T)({title:t?.meta?.title||"Payload",description:t?.meta?.description,url:Array.isArray(t?.slug)?t?.slug.join("/"):"/",images:r?[{url:r}]:void 0})}}}};
"use strict";exports.id=3435,exports.ids=[3435],exports.modules={6825:(e,t,r)=>{r.d(t,{t:()=>d});let s=`
id
_status
doc {
  id
  slug
}
populatedUser {
  id
  name
}
comment
createdAt
`,o=`
  query Comments($doc: JSON) {
    Comments(where: { doc: { equals: $doc } }) {
      docs {
        ${s}
      }
    }
  }
`,a=`
  query Comments($user: JSON) {
    Comments(where: { user: { equals: $user } }) {
      docs {
        ${s}
      }
    }
  }
`;var n=r(109);let d=async e=>{let{user:t,doc:r}=e||{},s=await fetch(`${n.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({query:t?a:o,variables:{user:t,doc:r}})})?.then(e=>e.json())?.then(e=>{if(e.errors)throw Error(e?.errors?.[0]?.message??"Error fetching docs");return e?.data?.Comments?.docs});return s}},6993:(e,t,r)=>{r.d(t,{o:()=>s});let s=e=>{let t=new Date,r=t;e&&(r=new Date(e));let s=r.getMonth(),o=r.getDate(),a=s+1<10?`0${s+1}`:s+1,n=o<10?`0${o}`:o,d=r.getFullYear();return`${a}/${n}/${d}`}}};
"use strict";(()=>{var e={};e.id=3899,e.ids=[3899],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},2037:e=>{e.exports=require("os")},5003:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>x,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>v,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>m});var a={};r.r(a),r.d(a,{GET:()=>u}),r(5655);var s=r(3323),n=r(4647),o=r(561),i=r(6886);async function u(e){let t=e.nextUrl.searchParams.get("collection"),r=e.nextUrl.searchParams.get("slug"),a=e.nextUrl.searchParams.get("secret");return a&&a===process.env.NEXT_PRIVATE_REVALIDATION_KEY&&"string"==typeof t&&"string"==typeof r?"string"==typeof t&&"string"==typeof r?((0,o.revalidateTag)(`${t}_${r}`),i.Z.json({revalidated:!0,now:Date.now()})):i.Z.json({revalidated:!1,now:Date.now()}):new Response("Invalid request",{status:400})}let d=s.AppRouteRouteModule,l=new d({definition:{kind:n.x.APP_ROUTE,page:"/api/revalidate/route",pathname:"/api/revalidate",filename:"route",bundlePath:"app/api/revalidate/route"},resolvedPagePath:"C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\api\\revalidate\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:c,serverHooks:v,headerHooks:g,staticGenerationBailout:m}=l,x="/api/revalidate/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[3497,9727,5347],()=>r(5003));module.exports=a})();
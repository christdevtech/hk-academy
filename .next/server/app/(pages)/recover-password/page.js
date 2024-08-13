(()=>{var e={};e.id=2047,e.ids=[2047],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},3753:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>l});var t=s(3137),a=s(4647),o=s(4183),n=s.n(o),i=s(1775),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);s.d(r,c);let d=t.AppPageRouteModule,l=["",{children:["(pages)",{children:["recover-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5012)),"C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\(pages)\\recover-password\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.bind(s,5653)),"C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\(pages)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,3719)),"C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Users\\MICHAEL\\Documents\\GitHub\\hk-academy\\src\\app\\(pages)\\recover-password\\page.tsx"],u="/(pages)/recover-password/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new d({definition:{kind:a.x.APP_PAGE,page:"/(pages)/recover-password/page",pathname:"/recover-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},277:(e,r,s)=>{Promise.resolve().then(s.bind(s,2321))},2321:(e,r,s)=>{"use strict";s.r(r),s.d(r,{RecoverPasswordForm:()=>x});var t=s(80),a=s(9885),o=s.n(a),n=s(6558),i=s(1440),c=s.n(i),d=s(9496),l=s(2672),p=s(2655),u=s(9949),m=s.n(u);let x=()=>{let[e,r]=(0,a.useState)(""),[s,i]=(0,a.useState)(!1),{register:u,handleSubmit:x,formState:{errors:h}}=(0,n.cI)(),v=(0,a.useCallback)(async e=>{let s=await fetch("https://hkacademy.net/api/users/forgot-password",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});s.ok?(i(!0),r("")):r("There was a problem while attempting to send you a password reset email. Please try again.")},[]);return(0,t.jsxs)(a.Fragment,{children:[!s&&(0,t.jsxs)(o().Fragment,{children:[t.jsx("h1",{children:"Recover Password"}),(0,t.jsxs)("div",{className:m().formWrapper,children:[(0,t.jsxs)("p",{children:[`Please enter your email below. You will receive an email message with instructions on
              how to reset your password. To manage your all users, `,t.jsx(c(),{href:"/admin/collections/users",children:"login to the admin dashboard"}),"."]}),(0,t.jsxs)("form",{onSubmit:x(v),className:m().form,children:[t.jsx(p.v,{error:e,className:m().message}),t.jsx(l.I,{name:"email",label:"Email Address",required:!0,register:u,error:h.email,type:"email"}),t.jsx(d.Button,{type:"submit",appearance:"primary",label:"Recover Password",className:m().submit})]})]})]}),s&&(0,t.jsxs)(o().Fragment,{children:[t.jsx("h1",{children:"Request submitted"}),t.jsx("p",{children:"Check your email for a link that will allow you to securely reset your password."})]})]})}},9949:e=>{e.exports={error:"RecoverPasswordForm_error__He2s2",formWrapper:"RecoverPasswordForm_formWrapper__yX3wE",submit:"RecoverPasswordForm_submit__N5ByH",message:"RecoverPasswordForm_message__ZawFD"},e.exports.__checksum="e2268412787f"},1278:e=>{e.exports={recoverPassword:"recover-password_recoverPassword__1jrYc"},e.exports.__checksum="875f31f90eb3"},5012:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>m,metadata:()=>x});var t=s(8144);s(3830);var a=s(3205),o=s(2208),n=s(7536);let i=(0,n.createProxy)(String.raw`C:\Users\MICHAEL\Documents\GitHub\hk-academy\src\app\(pages)\recover-password\RecoverPasswordForm\index.tsx`),{__esModule:c,$$typeof:d}=i;i.default;let l=i.RecoverPasswordForm;var p=s(1278),u=s.n(p);async function m(){return t.jsx(a.T,{className:u().recoverPassword,children:t.jsx(l,{})})}let x={title:"Recover Password",description:"Enter your email address to recover your password.",openGraph:(0,o.T)({title:"Recover Password",url:"/recover-password"})}}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[4650,2560,345,6558,4769,1369,484],()=>s(3753));module.exports=t})();
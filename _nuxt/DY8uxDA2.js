import{d as M,r as f,K as C,G as A,_ as c,g as $,v as r,x as l,y as e,H as b,A as s,B as a,C as n,P as k,I as g,L as y,M as h,T as x,D,N as j}from"./DD5MUU7h.js";const B=M({name:"Navbar",setup(){const t=f(null),o=f(!1),v=f("home"),d=f(null),m=f({}),w=C();return{dropdownOpen:t,mobileMenuOpen:o,activeMenu:v,mobileDropdownOpen:d,menuData:m,toggleDropdown:p=>{t.value=p},toggleMobileMenu:()=>{d.value=null,o.value=!o.value},setActive:p=>{v.value=p},toggleMobileDropdown:p=>{d.value=d.value===p?null:p},isActive:p=>w.path.startsWith(p),closeMobileMenu:()=>{o.value=!1,d.value=null}}}}),O=A("/images/logo.svg"),T={class:"w-full bg-white sticky top-0 z-50 text-md"},N={class:"max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4"},V={class:"flex items-center"},P={class:"hidden space-x-8 font-extralight text-gray-500 md:flex items-center menu-animation"},F={key:0,class:"absolute bottom-0 left-0 w-full h-[2px] bg-black"},G={key:0,class:"absolute bottom-0 left-0 w-full h-[2px] bg-black"},H={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},L={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R={key:0,class:"absolute bottom-0 left-0 w-full h-[2px] bg-black"},S={class:"absolute mt-2 w-48 bg-white shadow-lg rounded-lg"},I={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},U={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},z={key:0,class:"absolute bottom-0 left-0 w-full h-[2px] bg-black"},J={class:"absolute mt-2 w-36 bg-white shadow-lg rounded-lg"},E={key:0,class:"absolute top-[70px] w-full bg-white shadow-lg flex flex-col font-extralight text-md py-4 md:hidden"},K={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},W={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},q={key:0,class:"pl-6"},Q={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},X={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y={key:0,class:"pl-6"};function Z(t,o,v,d,m,w){const i=$("router-link");return l(),r("nav",T,[e("div",N,[e("div",V,[s(i,{to:"/"},{default:a(()=>o[7]||(o[7]=[e("img",{src:O,alt:"Three Tree Place Logo",class:"h-12 md:h-14 logo-animation"},null,-1)])),_:1})]),e("div",P,[s(i,{to:"/",class:"relative py-2 hover:text-black transition duration-300","active-class":"text-black"},{default:a(()=>[o[8]||(o[8]=n(" Home ")),(t._.provides[k]||t.$route).path==="/"?(l(),r("span",F)):b("",!0)]),_:1}),s(i,{to:"/about",class:"relative py-2 hover:text-black transition duration-300","active-class":"text-black"},{default:a(()=>[o[9]||(o[9]=n(" About Us ")),(t._.provides[k]||t.$route).path==="/about"?(l(),r("span",G)):b("",!0)]),_:1}),e("div",{class:"relative group",onMouseenter:o[0]||(o[0]=u=>t.toggleDropdown("for-guests")),onMouseleave:o[1]||(o[1]=u=>t.toggleDropdown(null))},[e("a",{href:"#for-guests",class:g(["flex items-center py-2 hover:text-black transition duration-300 cursor-pointer",{"text-black":t.isActive("/corporate-housing")||t.isActive("/trade-accommodation")||t.isActive("/temporary-accommodation")}])},[o[12]||(o[12]=n(" For Guests ")),t.dropdownOpen==="for-guests"?(l(),r("svg",H,o[10]||(o[10]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]))):(l(),r("svg",L,o[11]||(o[11]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])))],2),t.isActive("/corporate-housing")||t.isActive("/trade-accommodation")||t.isActive("/temporary-accommodation")?(l(),r("span",R)):b("",!0),s(x,{name:"fade"},{default:a(()=>[y(e("div",S,[s(i,{to:"/corporate-housing",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100","active-class":"bg-gray-100"},{default:a(()=>o[13]||(o[13]=[n(" Corporate Housing ")])),_:1}),s(i,{to:"/trade-accommodation",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100","active-class":"bg-gray-100"},{default:a(()=>o[14]||(o[14]=[n(" Trade Accommodation ")])),_:1}),s(i,{to:"/temporary-accommodation",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100","active-class":"bg-gray-100"},{default:a(()=>o[15]||(o[15]=[n(" Temporary Accommodation ")])),_:1})],512),[[h,t.dropdownOpen==="for-guests"]])]),_:1})],32),e("div",{class:"relative group",onMouseenter:o[2]||(o[2]=u=>t.toggleDropdown("for-landlords")),onMouseleave:o[3]||(o[3]=u=>t.toggleDropdown(null))},[e("a",{href:"#for-landlords",class:g(["flex items-center py-2 hover:text-black transition duration-300 cursor-pointer",{"text-black":t.isActive("/guaranteed-rent")||t.isActive("/partnerships-and-joint-ventures")}])},[o[18]||(o[18]=n(" For Landlords ")),t.dropdownOpen==="for-landlords"?(l(),r("svg",I,o[16]||(o[16]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]))):(l(),r("svg",U,o[17]||(o[17]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])))],2),t.isActive("/guaranteed-rent")||t.isActive("/partnerships-and-joint-ventures")?(l(),r("span",z)):b("",!0),s(x,{name:"fade"},{default:a(()=>[y(e("div",J,[s(i,{to:"/guaranteed-rent",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100","active-class":"bg-gray-100"},{default:a(()=>o[19]||(o[19]=[n(" Guaranteed Rent ")])),_:1}),s(i,{to:"/partnerships-and-joint-ventures",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100","active-class":"bg-gray-100"},{default:a(()=>o[20]||(o[20]=[n(" Partnerships & Joint Ventures ")])),_:1})],512),[[h,t.dropdownOpen==="for-landlords"]])]),_:1})],32)]),e("button",{class:"block md:hidden text-gray-500 focus:outline-none",onClick:o[4]||(o[4]=(...u)=>t.toggleMobileMenu&&t.toggleMobileMenu(...u))},o[21]||(o[21]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))]),t.mobileMenuOpen?(l(),r("div",E,[s(i,{to:"/",class:"block py-2 px-6 border-b border-gray-200 hover:bg-gray-100 transition duration-300",onClick:t.closeMobileMenu},{default:a(()=>o[22]||(o[22]=[n(" Home ")])),_:1},8,["onClick"]),s(i,{to:"/about",class:g(["block py-2 px-6 border-b border-gray-200 hover:bg-gray-100 transition duration-300",{"font-bold":t.isActive("/about")}]),onClick:t.closeMobileMenu},{default:a(()=>o[23]||(o[23]=[n(" About Us ")])),_:1},8,["class","onClick"]),e("div",null,[e("button",{onClick:o[5]||(o[5]=u=>t.toggleMobileDropdown("for-guests")),class:"w-full flex justify-between items-center px-6 py-2 text-gray-500 hover:bg-gray-100 transition"},[o[26]||(o[26]=n(" For Guests ")),t.mobileDropdownOpen==="for-guests"?(l(),r("svg",K,o[24]||(o[24]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]))):(l(),r("svg",W,o[25]||(o[25]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])))]),t.mobileDropdownOpen==="for-guests"?(l(),r("div",q,[s(i,{to:"/corporate-housing",class:g(["block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300",{"font-bold":t.isActive("/corporate-housing")}]),onClick:t.closeMobileMenu},{default:a(()=>o[27]||(o[27]=[n(" Corporate Housing ")])),_:1},8,["class","onClick"]),s(i,{to:"/trade-accommodation",class:g(["block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300",{"font-bold":t.isActive("/trade-accommodation")}]),onClick:t.closeMobileMenu},{default:a(()=>o[28]||(o[28]=[n(" Trade Accommodation ")])),_:1},8,["class","onClick"]),s(i,{to:"/temporary-accommodation",class:g(["block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300",{"font-bold":t.isActive("/temporary-accommodation")}]),onClick:t.closeMobileMenu},{default:a(()=>o[29]||(o[29]=[n(" Temporary Accommodation ")])),_:1},8,["class","onClick"])])):b("",!0)]),e("div",null,[e("button",{onClick:o[6]||(o[6]=u=>t.toggleMobileDropdown("for-landlords")),class:"w-full flex justify-between items-center px-6 py-2 text-gray-500 hover:bg-gray-100 transition"},[o[32]||(o[32]=n(" For Landlords ")),t.mobileDropdownOpen==="for-landlords"?(l(),r("svg",Q,o[30]||(o[30]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]))):(l(),r("svg",X,o[31]||(o[31]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])))]),t.mobileDropdownOpen==="for-landlords"?(l(),r("div",Y,[s(i,{to:"/guaranteed-rent",class:g(["block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300",{"font-bold":t.isActive("/guaranteed-rent")}]),onClick:t.closeMobileMenu},{default:a(()=>o[33]||(o[33]=[n(" Guaranteed Rent ")])),_:1},8,["class","onClick"]),s(i,{to:"/partnerships-and-joint-ventures",class:g(["block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300",{"font-bold":t.isActive("/partnerships-and-joint-ventures")}]),onClick:t.closeMobileMenu},{default:a(()=>o[34]||(o[34]=[n(" Partnerships and Joint Ventures ")])),_:1},8,["class","onClick"])])):b("",!0)])])):b("",!0)])}const _=c(B,[["render",Z],["__scopeId","data-v-8313c409"]]),oo={},to={class:"bg-black text-white py-8"};function eo(t,o){return l(),r("footer",to,o[0]||(o[0]=[D('<div class="container mx-auto px-4 lg:px-8 flex flex-col items-center" data-v-1bbf049a><p class="text-lg font-semibold" data-v-1bbf049a>© 2025 Three Tree Place. All rights reserved.</p><p class="mt-4 text-gray-400" data-v-1bbf049a>Crafted for contemporary living and upscale lifestyles.</p><div class="flex space-x-4 mt-6" data-v-1bbf049a><a href="#" class="hover:text-primary" data-v-1bbf049a><i class="fab fa-facebook-f" data-v-1bbf049a></i></a><a href="#" class="hover:text-primary" data-v-1bbf049a><i class="fab fa-twitter" data-v-1bbf049a></i></a><a href="#" class="hover:text-primary" data-v-1bbf049a><i class="fab fa-instagram" data-v-1bbf049a></i></a></div></div>',1)]))}const so=c(oo,[["render",eo],["__scopeId","data-v-1bbf049a"]]),no={},ro={id:"app"};function lo(t,o){const v=_,d=so;return l(),r("div",ro,[s(v),j(t.$slots,"default"),s(d)])}const bo=c(no,[["render",lo]]);export{bo as default};

"use strict";(self.webpackChunkredo_dev=self.webpackChunkredo_dev||[]).push([[514,278],{3973:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ue});var a=n(9496),r=n(1626),l=n(6994),o=n(9004),c=n(400),i=n(2318),s=n(6823),d=n(6943),m=n(6737),u=n(9386),b=n(9355),p=n(6135);const f="backToTopButton_qxiO",h="backToTopButtonShow_orX7";function v(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},a)=>{const l=null==a?void 0:a.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var E=n(3226),g=n(8433),y=n(8113),k=n(9486),_=Object.defineProperty,C=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function N(e){return a.createElement("svg",((e,t)=>{for(var n in t||(t={}))I.call(t,n)&&O(e,n,t[n]);if(C)for(var n of C(t))S.call(t,n)&&O(e,n,t[n]);return e})({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const x="collapseSidebarButton_xVNB",w="collapseSidebarButtonIcon__9Qo";function P({onClick:e}){return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",x),onClick:e},a.createElement(N,{className:w}))}var T=n(2906),Z=n(5249);const j=Symbol("EmptyContext"),L=a.createContext(j);function A({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(L.Provider,{value:r},e)}var B=n(2703),F=n(8552),M=n(2478),H=n(225),R=Object.defineProperty,W=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function q({categoryLabel:e,onClick:t}){return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function z(e){var t=e,{item:n,onItemClick:o,activePath:c,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)D.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&W)for(var a of W(e))t.indexOf(a)<0&&Q.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:b,collapsible:p,className:f,href:h}=n,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,y.L)(),E=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,l.Wl)(e):void 0),[e,t])}(n),g=(0,l._F)(n,c),k=(0,B.Mg)(h,c),{collapsed:_,setCollapsed:C}=(0,F.u)({initialState:()=>!!p&&(!g&&n.collapsed)}),{expandedItem:I,setExpandedItem:S}=function(){const e=(0,a.useContext)(L);if(e===j)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),O=(e=!_)=>{S(e?null:d),C(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,Z.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:_,updateCollapsed:O}),(0,a.useEffect)((()=>{p&&I&&I!==d&&v&&C(!0)}),[p,I,d,C,v]),a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":_},f)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(M.Z,((e,t)=>{for(var n in t||(t={}))D.call(t,n)&&V(e,n,t[n]);if(W)for(var n of W(t))Q.call(t,n)&&V(e,n,t[n]);return e})({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{null==o||o(n),h?O(!1):(e.preventDefault(),O())}:()=>{null==o||o(n)},"aria-current":k?"page":void 0,"aria-expanded":p?!_:void 0,href:p?null!=E?E:"#":E},m),b),h&&p&&a.createElement(q,{categoryLabel:b,onClick:e=>{e.preventDefault(),O()}})),a.createElement(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(ve,{items:u,tabIndex:_?-1:0,onItemClick:o,activePath:c,level:s+1})))}var Y=n(7055),G=n(5679);const J="menuExternalLink_QcYg";var K=Object.defineProperty,U=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,ee=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))X.call(t,n)&&ee(e,n,t[n]);if(U)for(var n of U(t))$.call(t,n)&&ee(e,n,t[n]);return e};function ne(e){var t=e,{item:n,onItemClick:o,activePath:c,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)X.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&U)for(var a of U(e))t.indexOf(a)<0&&$.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p}=n,f=(0,l._F)(n,c),h=(0,Y.Z)(u);return a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:b},a.createElement(M.Z,te(te({className:(0,r.Z)("menu__link",!h&&J,{"menu__link--active":f}),"aria-current":f?"page":void 0,to:u},h&&{onClick:o?()=>o(n):void 0}),m),b,!h&&a.createElement(G.Z,null)))}const ae="menuHtmlItem_kLn1";function re({item:e,level:t,index:n}){const{value:l,defaultStyle:o,className:c}=e;return a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(t),o&&[ae,"menu__list-item"],c),key:n,dangerouslySetInnerHTML:{__html:l}})}var le=Object.defineProperty,oe=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,se=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,de=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&se(e,n,t[n]);if(oe)for(var n of oe(t))ie.call(t,n)&&se(e,n,t[n]);return e};function me(e){var t=e,{item:n}=t,r=((e,t)=>{var n={};for(var a in e)ce.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&oe)for(var a of oe(e))t.indexOf(a)<0&&ie.call(e,a)&&(n[a]=e[a]);return n})(t,["item"]);switch(n.type){case"category":return a.createElement(z,de({item:n},r));case"html":return a.createElement(re,de({item:n},r));default:return a.createElement(ne,de({item:n},r))}}var ue=Object.defineProperty,be=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,he=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const ve=(0,a.memo)((function(e){var t=e,{items:n}=t,r=((e,t)=>{var n={};for(var a in e)pe.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&be)for(var a of be(e))t.indexOf(a)<0&&fe.call(e,a)&&(n[a]=e[a]);return n})(t,["items"]);return a.createElement(A,null,n.map(((e,t)=>a.createElement(me,((e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&he(e,n,t[n]);if(be)for(var n of be(t))fe.call(t,n)&&he(e,n,t[n]);return e})({key:t,item:e,index:t},r)))))})),Ee="menu_EgnG",ge="menuWithAnnouncementBar_QvQQ";function ye({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Ee,l&&ge,n)},a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(ve,{items:t,activePath:e,level:1})))}const ke="sidebar_Hkvy",_e="sidebarWithHideableNavbar_IRHQ",Ce="sidebarHidden_Vagn",Ie="sidebarLogo_NmJp";const Se=a.memo((function({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:c}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(ke,o&&_e,l&&Ce)},o&&a.createElement(k.Z,{tabIndex:-1,className:Ie}),a.createElement(ye,{path:e,sidebar:t}),c&&a.createElement(P,{onClick:n}))}));var Oe=n(1702),Ne=n(4309);const xe=({sidebar:e,path:t})=>{const n=(0,Oe.e)();return a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(ve,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};const we=a.memo((function(e){return a.createElement(Ne.Zo,{component:xe,props:e})}));var Pe=Object.defineProperty,Te=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))Ze.call(t,n)&&Le(e,n,t[n]);if(Te)for(var n of Te(t))je.call(t,n)&&Le(e,n,t[n]);return e};function Be(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Se,Ae({},e)),r&&a.createElement(we,Ae({},e)))}const Fe="expandButton_lPiL",Me="expandButtonIcon_Bq1S";function He({toggleSidebar:e}){return a.createElement("div",{className:Fe,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(N,{className:Me}))}const Re="docSidebarContainer_ylT_",We="docSidebarContainerHidden_oFRx";function De({children:e}){var t;const n=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==n?void 0:n.name)?t:"noSidebar"},e)}function Qe({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:l}=(0,E.TH)(),[o,c]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{o&&c(!1),n((e=>!e))}),[n,o]);return a.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,Re,t&&We),onTransitionEnd:e=>{e.currentTarget.classList.contains(Re)&&t&&c(!0)}},a.createElement(De,null,a.createElement(Be,{sidebar:e,path:l,onCollapse:s,isHidden:o})),o&&a.createElement(He,{toggleSidebar:s}))}const Ve={docMainContainer:"docMainContainer_eJN2",docMainContainerEnhanced:"docMainContainerEnhanced_oQoC",docItemWrapperEnhanced:"docItemWrapperEnhanced_hkwh"};function qe({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(Ve.docMainContainer,(e||!n)&&Ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ve.docItemWrapper,e&&Ve.docItemWrapperEnhanced)},t))}const ze="docPage_f0h5",Ye="docsWrapper_SxNK";function Ge({children:e}){const t=(0,d.V)(),[n,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ye},a.createElement(v,null),a.createElement("div",{className:ze},t&&a.createElement(Qe,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(qe,{hiddenSidebarContainer:n},e)))}var Je=n(8278),Ke=n(285);function Ue(e){const{versionMetadata:t}=e,n=(0,l.hI)(e);if(!n)return a.createElement(Je.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(Ke.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(c.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(Ge,null,m)))))}},8278:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9496),r=n(9386),l=n(400),o=n(6737);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},6823:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>o});var a=n(9496),r=n(5249);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_tile-b5230eebb2bf467aed140d3e305532c8.png"},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_service-3c798416bd2a7ccd0f6a5468c799983f.png"},147:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_link-c307db52e829b1d410ebb595311e6b80.png"},148:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_canvas-fe8d87aeebbe72c5b47f447a91497f38.png"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(2),r=n(6),a=(n(0),n(107)),o={id:"nifi",title:"Creating a NiFi image"},c={unversionedId:"kd-img-dev/nifi",id:"kd-img-dev/nifi",isDocsHomePage:!1,title:"Creating a NiFi image",description:"In this session we will create a basic Apache NiFi image and deploy it to HPE Container Platform.",source:"@site/docs/kd-img-dev/nifi.md",slug:"/kd-img-dev/nifi",permalink:"/learn-kubedirector/docs/kd-img-dev/nifi",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/nifi.md",version:"current",sidebar:"someSidebar",previous:{title:"HPE Ezmeral CP (optional)",permalink:"/learn-kubedirector/docs/kd-img-dev/hpecp_kd_app"},next:{title:"More coming soon",permalink:"/learn-kubedirector/docs/kd-img-dev/more"}},l=[{value:"Functionality Walkthrough",id:"functionality-walkthrough",children:[]},{value:"Installing the NiFi Application",id:"installing-the-nifi-application",children:[]}],s={rightToc:l};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this session we will create a basic Apache NiFi image and deploy it to HPE Container Platform."),Object(a.b)("p",null,"We do NOT need the kubedirector-lab in this session."),Object(a.b)("h3",{id:"functionality-walkthrough"},"Functionality Walkthrough"),Object(a.b)("p",null,"After following this lesson you will have a NiFi tile in your list of Applications:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Tile",src:n(145).default})),Object(a.b)("p",null,"If you select the Service Endpoints menu, you should see a http endpoint: "),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Service",src:n(146).default})),Object(a.b)("p",null,"If you select the link for the http endpoint, you should see a NiFi page:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Link",src:n(147).default})),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you see a HTTP 503 error wait a few minutes for the NiFi service to start and then try again."))),Object(a.b)("p",null,"You should then see the NiFi canvas:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"NiFi Canvas",src:n(148).default})),Object(a.b)("h3",{id:"installing-the-nifi-application"},"Installing the NiFi Application"),Object(a.b)("p",null,"coming soon ..."))}u.isMDXComponent=!0}}]);
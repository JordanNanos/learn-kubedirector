(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(2),c=(n(0),n(94)),o=n.p+"assets/images/lab_ui_edit_ubuntu-40a49cc4e9df04c46817cc60b312f295.png";const i={id:"using",title:"Using KD"},u={unversionedId:"kd-user/using",id:"kd-user/using",isDocsHomePage:!1,title:"Using KD",description:"Deploying clusters",source:"@site/docs/kd-user/using.md",slug:"/kd-user/using",permalink:"/learn-kubedirector/docs/kd-user/using",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-user/using.md",version:"current",sidebar:"someSidebar",previous:{title:"Concepts",permalink:"/learn-kubedirector/docs/kd-user/concepts"},next:{title:"Reference",permalink:"/learn-kubedirector/docs/kd-user/ref"}},a=[{value:"Deploying clusters",id:"deploying-clusters",children:[]},{value:"Inspecting clusters",id:"inspecting-clusters",children:[]}],l={rightToc:a};function s({components:e,...t}){return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"deploying-clusters"},"Deploying clusters"),Object(c.b)("p",null,"We will start by deploying a Ubuntu cluster.  "),Object(c.b)("p",null,"First we need to reduce the memory of the cluster so that it runs easily in our lab VM."),Object(c.b)("p",null,"Using the LAB UI file browser, open ",Object(c.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/cr-cluster-ubuntu18.04.yaml")),Object(c.b)("p",null,"Change the definition of to change both instances of ",Object(c.b)("inlineCode",{parentName:"p"},'memory: "4Gi"')," to ",Object(c.b)("inlineCode",{parentName:"p"},'memory: "1Gi"'),":"),Object(c.b)("img",{src:o}),Object(c.b)("p",null,"In the Lab Browser UI open a new terminal and run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04.yaml\n")),Object(c.b)("p",null,"more content coming soon ..."),Object(c.b)("h2",{id:"inspecting-clusters"},"Inspecting clusters"))}s.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?c.a.createElement(f,u(u({ref:t},l),{},{components:n})):c.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
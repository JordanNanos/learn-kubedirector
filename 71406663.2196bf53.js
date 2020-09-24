(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(104)),c={id:"hpecp_kd_app",title:"HPE Ezmeral Container Platform (optional)"},i={unversionedId:"kd-img-dev/hpecp_kd_app",id:"kd-img-dev/hpecp_kd_app",isDocsHomePage:!1,title:"HPE Ezmeral Container Platform (optional)",description:"In this section, we apply the concepts learn in our lab and deploy our custom application to the HPE Ezmeral Container Platform.",source:"@site/docs/kd-img-dev/hpecp_kd_app.md",slug:"/kd-img-dev/hpecp_kd_app",permalink:"/learn-kubedirector/docs/kd-img-dev/hpecp_kd_app",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/hpecp_kd_app.md",version:"current",sidebar:"someSidebar",previous:{title:"Config Package",permalink:"/learn-kubedirector/docs/kd-img-dev/configpackage"},next:{title:"More coming soon",permalink:"/learn-kubedirector/docs/kd-img-dev/more"}},l=[{value:"Create a Kubernetes Cluster",id:"create-a-kubernetes-cluster",children:[]},{value:"Create a Tenant",id:"create-a-tenant",children:[]},{value:"Ensure Harbor addon is enabled",id:"ensure-harbor-addon-is-enabled",children:[]},{value:"Retrieve the Harbor url",id:"retrieve-the-harbor-url",children:[]},{value:"Login to Harbor",id:"login-to-harbor",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we apply the concepts learn in our lab and deploy our custom application to the HPE Ezmeral Container Platform."),Object(o.b)("h2",{id:"create-a-kubernetes-cluster"},"Create a Kubernetes Cluster"),Object(o.b)("p",null,"Using the HPE Ezmeral Container Platform user interface create a Kubernetes cluster."),Object(o.b)("h2",{id:"create-a-tenant"},"Create a Tenant"),Object(o.b)("p",null,"Using the HPE Ezmeral Container Platform user interface create a tenant for your Kubernetes cluster."),Object(o.b)("h2",{id:"ensure-harbor-addon-is-enabled"},"Ensure Harbor addon is enabled"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," hpecp k8scluster list\n")),Object(o.b)("p",null," Returns something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"+----------------------+------+-------------+-------------+--------+\n|          id          | name | description | k8s_version | status |\n+----------------------+------+-------------+-------------+--------+\n| /api/v2/k8scluster/1 |  c1  |             |   1.17.9    | ready  |\n+----------------------+------+-------------+-------------+--------+\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"hpecp k8scluster get /api/v2/k8scluster/1\n")),Object(o.b)("p",null,"Returns something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"_links:\n  self:\n    href: /api/v2/k8scluster/1\naddons:\n- harbor\n...\nharbor_endpoint_access: https://ip-10-1-0-108.eu-west-3.compute.internal:10004\n...\nk8shosts_config:\n- node: /api/v2/worker/k8shost/3\n  role: master\n- node: /api/v2/worker/k8shost/4\n  role: worker\n...\n")),Object(o.b)("p",null,"You can see that harbor addon is enabled.  If the harbor is not enabled, you can enable it like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"hpecp k8scluster add-addons --id /api/v2/k8scluster/1 --addons [harbor]\n")),Object(o.b)("h2",{id:"retrieve-the-harbor-url"},"Retrieve the Harbor url"),Object(o.b)("p",null,"You can see the output from ",Object(o.b)("inlineCode",{parentName:"p"},"hpecp k8scluster get /api/v2/k8scluster/1")," that\nthe harbor endpoint is: ",Object(o.b)("inlineCode",{parentName:"p"},"https://ip-10-1-0-108.eu-west-3.compute.internal:10004")),Object(o.b)("h2",{id:"login-to-harbor"},"Login to Harbor"),Object(o.b)("p",null,"Open a browser to the harbor endpoint and login with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Username ",Object(o.b)("inlineCode",{parentName:"li"},"admin")," "),Object(o.b)("li",{parentName:"ul"},"Password ",Object(o.b)("inlineCode",{parentName:"li"},"Harbor12345"))),Object(o.b)("hr",null),Object(o.b)("p",null,"More content coming soon ..."))}s.isMDXComponent=!0}}]);
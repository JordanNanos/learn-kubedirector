(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(104)),i=n.p+"assets/images/harbor_projects-90a3a260ca1c5f858097c74a9c8bdce9.png",c={id:"hpecp_kd_app",title:"HPE Ezmeral CP (optional)"},l={unversionedId:"kd-img-dev/hpecp_kd_app",id:"kd-img-dev/hpecp_kd_app",isDocsHomePage:!1,title:"HPE Ezmeral CP (optional)",description:"In this section we apply the concepts learned in the previous lesson and",source:"@site/docs/kd-img-dev/hpecp_kd_app.md",slug:"/kd-img-dev/hpecp_kd_app",permalink:"/learn-kubedirector/docs/kd-img-dev/hpecp_kd_app",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/hpecp_kd_app.md",version:"current",sidebar:"someSidebar",previous:{title:"Config Package",permalink:"/learn-kubedirector/docs/kd-img-dev/configpackage"},next:{title:"More coming soon",permalink:"/learn-kubedirector/docs/kd-img-dev/more"}},p=[{value:"Create a Kubernetes Cluster",id:"create-a-kubernetes-cluster",children:[]},{value:"Create a Tenant",id:"create-a-tenant",children:[]},{value:"Ensure Harbor addon is enabled",id:"ensure-harbor-addon-is-enabled",children:[]},{value:"Retrieve the Harbor url",id:"retrieve-the-harbor-url",children:[]},{value:"Login to Harbor",id:"login-to-harbor",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we apply the concepts learned in the previous lesson and\nwe deploy our custom application to the HPE Ezmeral Container Platform."),Object(o.b)("p",null,"Previously we deployed a docker registry in our lab environment and pushed the docker image for our KD application there.\nFor deploying our KD application to Ezmeral Container Platform we will enable\nHarbor as the registry. "),Object(o.b)("h2",{id:"create-a-kubernetes-cluster"},"Create a Kubernetes Cluster"),Object(o.b)("p",null,"Using the HPE Ezmeral Container Platform user interface create a Kubernetes cluster."),Object(o.b)("h2",{id:"create-a-tenant"},"Create a Tenant"),Object(o.b)("p",null,"Using the HPE Ezmeral Container Platform user interface create a tenant for your Kubernetes cluster."),Object(o.b)("h2",{id:"ensure-harbor-addon-is-enabled"},"Ensure Harbor addon is enabled"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This step uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pypi.org/project/hpecp/"}),"hpecp")," CLI.  You can install it with:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"pip3 install hpecp`\n")),Object(o.b)("p",{parentName:"div"},"After installing, configure with:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"hpecp configure-cli\n")),Object(o.b)("p",{parentName:"div"},"You can test the CLI is set up correctly with the following command which connects to the HPE Ezmeral cluster and retrieves it's build version."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"hpecp config get --query 'objects.[bds_global_version]' --output text\n")))),Object(o.b)("p",null,"First we want to list the K8S clusters:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," hpecp k8scluster list\n")),Object(o.b)("p",null," This will return something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"+----------------------+------+-------------+-------------+--------+\n|          id          | name | description | k8s_version | status |\n+----------------------+------+-------------+-------------+--------+\n| /api/v2/k8scluster/1 |  c1  |             |   1.17.9    | ready  |\n+----------------------+------+-------------+-------------+--------+\n")),Object(o.b)("p",null,"We can then get the details for the cluster we are interested in - in this particular case ",Object(o.b)("inlineCode",{parentName:"p"},"/api/v2/k8scluster/1"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"hpecp k8scluster get /api/v2/k8scluster/1\n")),Object(o.b)("p",null,"This will returns something like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"_links:\n  self:\n    href: /api/v2/k8scluster/1\naddons:\n- harbor\n...\nharbor_endpoint_access: https://ip-10-1-0-108.eu-west-3.compute.internal:10004\n...\nk8shosts_config:\n- node: /api/v2/worker/k8shost/3\n  role: master\n- node: /api/v2/worker/k8shost/4\n  role: worker\n...\n")),Object(o.b)("p",null,"You can see that harbor addon is enabled.  If the harbor is not enabled, you can enable it like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"hpecp k8scluster add-addons --id /api/v2/k8scluster/1 --addons [harbor]\n")),Object(o.b)("h2",{id:"retrieve-the-harbor-url"},"Retrieve the Harbor url"),Object(o.b)("p",null,"In the output from ",Object(o.b)("inlineCode",{parentName:"p"},"hpecp k8scluster get /api/v2/k8scluster/1"),", above you can see that\nmy harbor endpoint is: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https://ip-10-1-0-108.eu-west-3.compute.internal:10004"))),Object(o.b)("h2",{id:"login-to-harbor"},"Login to Harbor"),Object(o.b)("p",null,"Open a browser to the harbor endpoint and login with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Username ",Object(o.b)("inlineCode",{parentName:"li"},"admin")," "),Object(o.b)("li",{parentName:"ul"},"Password ",Object(o.b)("inlineCode",{parentName:"li"},"Harbor12345"))),Object(o.b)("p",null,"Click the ",Object(o.b)("strong",{parentName:"p"},"Projects")," link:"),Object(o.b)("img",{src:i}),Object(o.b)("p",null,"Next click on the link that corresponds to your HPE Container Platform tenant (in my case ",Object(o.b)("inlineCode",{parentName:"p"},"k8s_tenant_1"),"):"),Object(o.b)("p",null,"More content coming soon ..."))}b.isMDXComponent=!0},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
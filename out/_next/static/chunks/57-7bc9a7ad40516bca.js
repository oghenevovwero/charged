(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{2411:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),o=r(977),i=r(2265),a=r(7302),s=r.n(a),c=r(2163);let l=e=>{let t={loading:!1,error:!1,success:!1},[r,n]=(0,i.useState)(t),[o,a]=(0,i.useState)("");return{status:r,loading:r.loading,success:r.success,error:r.error,message:o,handleSubmit:function(o){try{let i=c.stringify(o),l=e.replace("/post?","/post-json?")+"&"+i;n({...r,loading:!0}),a("");let u=function(e,r){try{var o=Promise.resolve(s()(l,{jsonpCallback:"c"})).then(function(e){return Promise.resolve(e.json()).then(function(r){let o=!e.ok||"error"===r.result;n({...t,success:!o,error:o}),a(r.msg)})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){n({...t,error:!0}),a((e=>{if("object"==typeof e&&null!==e&&"message"in e&&"string"==typeof e.message)return e;try{return Error(JSON.parse(JSON.stringify(e)))}catch{return Error(String(e))}})(e).message)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},reset:()=>{a(""),n(t)}}};function u(){let{loading:e,error:t,success:r,handleSubmit:a,reset:s}=l("https://gochargemenow.us18.list-manage.com/subscribe/post?u=9fd1d8523f3cea31d645a213f&amp;id=1e1d47bb70&amp;f_id=003539e1f0"),[c,u]=(0,i.useState)(""),[d,p]=(0,i.useState)(""),f=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),m=(0,i.useRef)(""),g=(0,i.useRef)("");return(0,n.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),""!==c)return;if(""===m.current.trim()){u("Email field cannot be empty");return}if(""!==d)return;if(""===g.current.trim()){p("Name field cannot be empty");return}let t=g.current.trim().split(" ");if(t.length>1){a({EMAIL:m.current.trim(),FNAME:t[0],LNAME:t[1]});return}a({EMAIL:m.current,FNAME:g.current.trim()})},children:[(0,n.jsxs)("div",{className:"flex flex-col gap-4 sm:gap-2 sm:flex-row",children:[(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("input",{type:"text",onChange:e=>{g.current=e.target.value,""===e.target.value?p("Name cannot be empty"):2!==g.current.trim().split(" ").length?p("Enter first and last name"):p("")},placeholder:"Your name",className:"w-full rounded-lg border border-gray-400 bg-[#54645D] px-3 py-[14px] text-lg outline-none placeholder:text-white"}),(0,n.jsx)("div",{className:"flex w-full sm:justify-center text-lg text-red-400",children:d})]}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("input",{type:"email",onChange:e=>{""===e.target.value?u("Email cannot be empty"):f.test(e.target.value)?(u(""),m.current=e.target.value):u("Email not well formed")},placeholder:"Email address",className:"w-full rounded-lg border border-gray-400 bg-[#54645D] px-3 py-[14px] text-lg outline-none placeholder:text-white"}),(0,n.jsx)("div",{className:"flex w-full sm:justify-center text-lg text-red-400",children:c})]})]}),(0,n.jsx)("button",{type:"submit",style:{backgroundColor:e?"orange":t?"red":o.Fv},className:"\n          mt-4 \n          w-full\n          cursor-pointer\n              rounded-md\n              px-3 \n              py-4 \n              text-xl\n              text-white \n              transition-transform \n              duration-300 \n              active:opacity-50 \n              md:hover:scale-[101%]",children:e?"Processing":t?"Failed":r?"Subscribed":"Join waitlist"}),(0,n.jsx)("div",{style:{visibility:r?"visible":"hidden",transition:"all 1s linear"},className:"text-white text-lg sm:text-center mt-2",children:"Hooray! You're in line for something amazing"})]})}},9230:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7437),o=r(6575),i=r(3991),a=r(5250),s=r.n(a),c=r(5313),l=r(2265),u=r(977);function d(e){let{title:t,to:r="#"}=e;return(0,n.jsx)("div",{className:"w-fit",children:(0,n.jsx)(s(),{href:"/".concat(r),children:(0,n.jsx)("div",{style:{backgroundColor:u.Fv},className:"\n          cursor-pointer\n          rounded-lg\n          px-[33px] \n          py-[14px] \n          text-center\n          text-lg \n          text-white \n          transition-transform \n          duration-300 \n          md:hover:scale-[97.5%]\n          active:opacity-50",children:t})})})}function p(e){let{children:t,className:r}=e;return(0,n.jsx)("div",{className:"px-3 sm:px-8 md:px-[60px] lg:px-[120px] ".concat(r),children:t})}function f(e){let{alwaysOpaque:t=!1}=e,[r,a]=(0,l.useState)(!0),[u,f]=(0,l.useState)(!1),m=(0,c.usePathname)(),g=(0,l.useRef)(!1),h=()=>{window.scrollY>=window.screen.height-250?a(!0):g.current?a(!0):a(!1)};(0,l.useEffect)(()=>{if(!t)return h(),window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}});let y=(0,n.jsx)(s(),{href:"/about",className:"".concat("/about"===m?"text-[#00A630]":""," w-fit cursor-pointer active:opacity-50 md:hover:opacity-60"),children:"About us"}),A=(0,n.jsx)(s(),{href:"/pricing",className:"".concat("/pricing"===m?"text-[#00A630]":""," w-fit cursor-pointer active:opacity-50 md:hover:opacity-60"),children:"Pricing"}),x=(0,n.jsx)(s(),{href:"/faqs",className:"".concat("/faqs"===m?"text-[#00A630]":""," w-fit cursor-pointer active:opacity-50 md:hover:opacity-60"),children:"FAQs"}),b=(0,n.jsx)(s(),{href:"/careers",className:"".concat("/careers"===m?"text-[#00A630]":""," w-fit cursor-pointer active:opacity-50 md:hover:opacity-60"),children:"Careers"}),w=(0,n.jsx)(s(),{href:"/contact",className:"".concat("/contact"===m?"text-[#00A630]":""," w-fit cursor-pointer active:opacity-50 md:hover:opacity-60"),children:"Contact us"}),v=(0,n.jsx)(d,{title:"Access App"}),j=(0,n.jsx)("div",{className:"flex h-full items-center justify-between",children:(0,n.jsxs)("button",{onClick:()=>{f(e=>(g.current=!e,!e))},className:"block rounded focus:outline-none lg:hidden",children:[(0,n.jsx)("svg",{className:"h-6 w-6 ".concat(u?"hidden":"block"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})}),(0,n.jsx)("svg",{className:"h-6 w-6 ".concat(u?"block":"hidden"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),N=(0,n.jsxs)("div",{className:"flex items-center justify-around gap-7",children:[y,A,x,b,w,v]}),k=(0,n.jsxs)("div",{className:"flex w-full flex-col gap-7 pt-7",children:[y,A,x,b,w,v]});return(0,n.jsxs)(p,{className:"\n        fixed \n        inset-x-0\n        top-0\n        z-10       \n        overflow-clip      \n        pt-1\n        text-lg \n        text-white \n        transition-all\n        duration-300\n        ".concat(r?"bg-[#1A202B] shadow-xl":"bg-transparent","\n        ").concat(u?"h-screen":r?"h-20":"h-28","\n        "),children:[(0,n.jsxs)("div",{className:"flex h-fit w-full items-center justify-between",children:[(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)(i.default,{src:o.default,className:"".concat(r?"w-20":"w-28"," cursor-pointer transition-all md:hover:scale-[97.5%]"),alt:"Our logo"})}),(0,n.jsx)("div",{className:"lg:hidden",children:j}),(0,n.jsx)("div",{className:"max-lg:hidden",children:N})]}),k]})}},977:function(e,t,r){"use strict";r.d(t,{Fv:function(){return n}});let n="#00A54D"},6314:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),n=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{t[o[0]]=decodeURIComponent(o[0])}catch(e){var i=function(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var n=t.slice(0,r),o=t.slice(r);return Array.prototype.concat.call([],e(n),e(o))})(t,n).join("")).match(r)||[];return e}}(o[0]);i!==o[0]&&(t[o[0]]=i)}o=n.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var c=a[s];e=e.replace(RegExp(c,"g"),t[c])}return e}(e)}}},7302:function(e,t){var r,n,o;n=[t,e],void 0!==(o="function"==typeof(r=function(e,t){"use strict";var r={timeout:5e3,jsonpCallback:"callback"};function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function o(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,a=t.timeout||r.timeout,s=t.jsonpCallback||r.jsonpCallback,c=void 0;return new Promise(function(r,l){var u=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),d=s+"_"+u;window[u]=function(e){r({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),o(d),n(u)},i+=-1===i.indexOf("?")?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+i+s+"="+u),t.charset&&p.setAttribute("charset",t.charset),t.nonce&&p.setAttribute("nonce",t.nonce),t.referrerPolicy&&p.setAttribute("referrerPolicy",t.referrerPolicy),p.id=d,document.getElementsByTagName("head")[0].appendChild(p),c=setTimeout(function(){l(Error("JSONP request to "+e+" timed out")),n(u),o(d),window[u]=function(){n(u)}},a),p.onerror=function(){l(Error("JSONP request to "+e+" failed")),n(u),o(d),c&&clearTimeout(c)}})}})?r.apply(t,n):r)&&(e.exports=o)},2910:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),i=0;i<n.length;i++){var a=n[i],s=e[a];(o?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},2163:function(e,t,r){"use strict";let n=r(5936),o=r(6314),i=r(3282),a=r(2910),s=e=>null==e,c=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function d(e,t){return t.decode?o(e):e}function p(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function f(e){let t=(e=p(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function g(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"comma":case"separator":return(t,r,n)=>{let o="string"==typeof r&&r.includes(e.arrayFormatSeparator),i="string"==typeof r&&!o&&d(r,e).includes(e.arrayFormatSeparator);r=i?d(r,e):r;let a=o||i?r.split(e.arrayFormatSeparator).map(t=>d(t,e)):null===r?r:d(r,e);n[t]=a};case"bracket-separator":return(t,r,n)=>{let o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o){n[t]=r?d(r,e):r;return}let i=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>d(t,e));if(void 0===n[t]){n[t]=i;return}n[t]=[].concat(n[t],i)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let o of e.split("&")){if(""===o)continue;let[e,a]=i(t.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:d(a,t),r(d(e,t),a,n)}for(let e of Object.keys(n)){let r=n[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=m(r[e],t);else n[e]=m(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[",o,"]"].join("")]:[...r,[u(t,e),"[",u(o,e),"]=",u(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length)?[[u(r,e),t,u(o,e)].join("")]:[[n,u(o,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,u(t,e)]:[...r,[u(t,e),"=",u(n,e)].join("")]}}(t),o={};for(let t of Object.keys(e))r(t)||(o[t]=e[t]);let i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map(r=>{let o=e[r];return void 0===o?"":null===o?u(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":o.reduce(n(r),[]).join("&"):u(r,t)+"="+u(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,n]=i(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:d(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);let n=p(e.url).split("?")[0]||"",o=t.extract(e.url),i=Object.assign(t.parse(o,{sort:!1}),e.query),a=t.stringify(i,r);a&&(a=`?${a}`);let s=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s=`#${r[c]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${a}${s}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);let{url:o,query:i,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:a(i,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{let o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},3282:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},5936:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},6575:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/the-logo-c.45402d36.png",height:112,width:128,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAS1BMVEWj2rfF39AHnAfH3sx9ynGzurqipqrS5dPw9/bk8O3g5utNZj5RzQAGlwIipwGp1LGqzLIplBr8+v/w8PuHw3NJXjg5VzNXo03V490ein2BAAAAGXRSTlMBZBJdNzSJRlpLcvesnchZdVZyR03++32gLxtPowAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwVxlkSwCAIBcGnooC7WTT3P2mK+ekBEFOKsC4iMe+PnmBz9lvKAnzrtfbmMZyKqJtgDjkz6w8wDQG5ejO+/wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},6450:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/unrounded-plug.fd49b56d.png",height:478,width:574,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAWlBMVEUiLjEtNz80RkdteoKbs8VPX2hZdmh+mqsSHyFpf4V2lqhndX6/ytHl7vIFMgxEWFQcVC1CiVWFtIlBcFIwc0YFJw0USCNbb3w9S1ORo6+2ubwAAACwu8GapKlq34zOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nAXBBQKAMAwAsZu2M4Y7//8mCd3gRIoSLUmye5gXTZILTCtGQ62Mu56KDQzb4eUNHzF5f92t/T7lAk41xbNyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}}}]);
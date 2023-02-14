/*! For license information please see component---src-pages-index-tsx-a66245895a948f1344e0.js.LICENSE.txt */
(self.webpackChunkpansy=self.webpackChunkpansy||[]).push([[691],{4184:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var l=n.apply(null,a);l&&e.push(l)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},8032:function(e,t,a){"use strict";a.d(t,{G:function(){return q},L:function(){return h},M:function(){return k},P:function(){return E},_:function(){return o},a:function(){return l},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return i}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function m(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const m=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:i}=e,c=o(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,b);const i=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,l({},s,t,{sizes:i,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:i})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const x=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,x);return t?r.createElement(w,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(w,l({},e)),r.createElement("noscript",null,r.createElement(w,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=w.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:s().object.isRequired,alt:L},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],j=new Set;let z,O;const A=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,I);const{width:b,height:y,layout:w}=n,v=m(b,y,w),{style:x,className:E}=v,k=o(v,T),N=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{z||(z=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(O&&j.has(S))return;let t,r;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:j.has(S),image:n},f)),j.has(S)||(t=requestAnimationFrame((()=>{N.current&&(r=o(N.current,S,j,s,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(S)&&O&&(N.current.innerHTML=O(l({isLoading:j.has(S),isLoaded:j.has(S),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},x,s,{backgroundColor:c}),className:E+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));q.propTypes=_,q.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(e){return function(t){let{src:a,__imageData:n,__error:s}=t,i=o(t,P);return s&&console.warn(s),n?r.createElement(e,l({image:n},i)):(console.warn("Image not loaded",a),null)}}const R=D((function(e){let{as:t="div",className:a,class:n,style:s,image:i,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:f,objectFit:b,objectPosition:y}=e,w=o(e,N);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),g=l({objectFit:b,objectPosition:y,backgroundColor:f},g);const{width:v,height:x,layout:L,images:_,placeholder:I,backgroundColor:T}=i,j=m(v,x,L),{style:z,className:O}=j,A=o(j,S),q={fallback:void 0,sources:[]};return _.fallback&&(q.fallback=l({},_.fallback,{srcSet:_.fallback.srcSet?C(_.fallback.srcSet):void 0})),_.sources&&(q.sources=_.sources.map((e=>l({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,l({},A,{style:l({},z,s,{backgroundColor:f}),className:O+(a?" "+a:"")}),r.createElement(h,{layout:L,width:v,height:x},r.createElement(E,l({},u(I,!1,L,v,x,T,b,y))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:p},w,d("eager"===c,!1,q,c,g)))))})),H=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:L,width:H,height:H,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=F;const W=D(q);W.displayName="StaticImage",W.propTypes=F},2369:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},2055:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),n=a(4184),s=a.n(n);const l=e=>{let{}=e;return r.createElement("div",{className:"mb-12 md:hidden"},"Sorry, the mobile version of this site currently kinda sucks, and maybe always will. Find me on"," ",r.createElement("a",{href:"https://www.instagram.com/imaginary_hannah/",target:"_blank",rel:"noopener noreferrer",className:s()()},r.createElement("span",{className:"text-xs uppercase underline transition-opacity delay-100 hover:no-underline group-hover:text-4xl group-hover:opacity-100 md:opacity-0"},"instagram"))," ","@imaginary_hannah… U know, that format is perfect for phones"," ",r.createElement("span",{className:"font-dingbats"},"J")," !!")};var o=e=>{let{}=e;return r.createElement("nav",{className:"nav-transition group relative z-10 h-fit md:rotate-[52deg]"},r.createElement("a",{className:s()("hidden rotate-[-28deg] rounded-full border-2 border-white bg-primary py-6 px-4 uppercase text-white opacity-100 duration-1000 group-hover:opacity-0","md:absolute md:bottom-[-66px] md:ml-0 md:block md:py-[3.6rem] md:px-[.8rem] md:text-4xl")},"links"),r.createElement(l,null),r.createElement("div",{className:"hidden text-black md:mt-0 md:block md:opacity-0 group-hover:md:opacity-100"},r.createElement("a",{href:"https://www.instagram.com/imaginary_hannah/",target:"_blank",rel:"noopener noreferrer",className:s()("bottom-[-66px] z-20 w-full origin-[40px_40px] rounded-full border-2 border-black bg-white py-6 hover:bg-black hover:text-white group-hover:w-72 group-hover:rotate-[65deg]","md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[65deg]")},r.createElement("span",{className:"pl-44 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0"},"instagram")),r.createElement("a",{href:"https://github.com/hjmccain",target:"_blank",rel:"noopener noreferrer",className:s()("-5xl-xl md:-5xl-5xl bottom-[-66px] z-10 w-full origin-[40px_40px] rounded-full border-2 border-black bg-white py-6 hover:bg-black hover:text-white  group-hover:w-72 group-hover:rotate-[32deg]","md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[32deg]")},r.createElement("span",{className:"ml-8 pl-52 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0"},"github")),r.createElement("a",{href:"https://www.are.na/hannah-mccain",target:"_blank",rel:"noopener noreferrer",className:s()("-5xl-right -5xl-xl bottom-[-66px] w-full origin-[40px_40px] rounded-full border-2 border-black bg-white py-6 duration-1000 hover:bg-black hover:text-white group-hover:w-72","md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem]")},r.createElement("span",{className:"ml-16 pl-52 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0"},"are.na"))))};var i=e=>{let{hideSelf:t}=e;return r.createElement("div",{id:"marquee",className:s()(t?"invisible":"visible","marquee hidden w-full bg-primary text-white motion-reduce:invisible md:block")},r.createElement("div",{className:"marquee__inner whitespace-nowrap","aria-hidden":"true"},r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"this website is a work in progress"," ",r.createElement("span",{className:"font-dingbats"},"J")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"check back for updates ",r.createElement("span",{className:"font-dingbats"},"V")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"hope ur having a great day !"),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"this website is a work in progress"," ",r.createElement("span",{className:"font-dingbats"},"J")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"check back for updates ",r.createElement("span",{className:"font-dingbats"},"V")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"hope ur having a great day !"),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"this website is a work in progress"," ",r.createElement("span",{className:"font-dingbats"},"J")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"check back for updates ",r.createElement("span",{className:"font-dingbats"},"V")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"hope ur having a great day !"),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"this website is a work in progress"," ",r.createElement("span",{className:"font-dingbats"},"J")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"check back for updates ",r.createElement("span",{className:"font-dingbats"},"V")),r.createElement("span",{className:"w-[55rem] whitespace-nowrap text-center"},"hope ur having a great day !")))};var c=e=>{let{children:t}=e;return r.createElement("main",{className:"flex max-h-full min-h-screen flex-col bg-secondary font-sans text-primary"},r.createElement(i,{hideSelf:!1}),r.createElement("div",{className:s()("relative top-12 flex flex-row items-end md:left-10 md:z-40")},r.createElement(o,null)),r.createElement("div",{className:s()("detail-view-transition flex w-full flex-col justify-self-center transition-all duration-500 md:mb-52")},r.createElement("div",{className:s()("h-40 w-full px-10 text-center font-display text-med text-primary","md:m-0 md:my-12 md:w-auto md:text-bigger")},r.createElement("p",null,"HANNAH"),r.createElement("p",{className:"mt-[-3rem] md:mt-[-9rem]"},"JOYCE"))),r.createElement("div",{className:s()("flex flex-grow flex-col justify-center md:mx-24")},t),r.createElement("div",{className:"mt-[-40px] flex h-[40px] items-end text-xs"},r.createElement("p",null,"This website uses the fonts"," ",r.createElement("a",{href:"https://velvetyne.fr/fonts/picnic/",target:"_blank",rel:"noopener noreferrer",className:s()()},r.createElement("span",{className:" text-primary transition-opacity delay-100 hover:text-4xl"},"PicNic")),", ",r.createElement("a",{href:"https://fontesk.com/director-typeface/",target:"_blank",rel:"noopener noreferrer",className:s()()},r.createElement("span",{className:" text-primary transition-opacity delay-100 hover:text-4xl"},"Director")),", and"," ",r.createElement("a",{href:"https://velvetyne.fr/fonts/mr-pixel/",target:"_blank",rel:"noopener noreferrer",className:s()()},r.createElement("span",{className:" text-primary transition-opacity delay-100 hover:text-4xl"},"Mister Pixel Tools")),". Major thanks to the awesome open source foundries & non-Google free font resources out there !")),r.createElement("div",null,r.createElement("li",{className:"list-none bg-primary py-[.18rem] text-center text-[2rem] text-white hover:bg-black"},r.createElement("a",{href:"mailto:hannahjmccain@gmail.com"},">> say hi ",r.createElement("span",{className:"font-dingbats"},"J")," <<"))))}},9956:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return p},default:function(){return u},findImage:function(){return d}});var r=a(7294),n=a(1883),s=a(2055),l=a(8032),o=a(4184),i=a.n(o);var c=(e,t)=>{(0,r.useEffect)((()=>{const a=a=>{e.current&&!e.current.contains(a.target)&&t()};return document.addEventListener("mousedown",a,!0),document.addEventListener("mouseover",a,!0),document.addEventListener("touchstart",a,!0),()=>{document.removeEventListener("mousedown",a,!0),document.removeEventListener("mouseover",a,!0),document.removeEventListener("touchstart",a,!0)}}),[e,t])};const m=e=>{let{top:t,left:a,imageData:n,selfSelected:s}=e;return n?r.createElement("div",{style:{top:t,left:a},className:i()(s?"z-30 opacity-100":"z-0 opacity-0","absolute md:w-1/3")},r.createElement(l.G,{image:n,alt:"",className:""})):null};function d(e,t){const a=e.edges.find((e=>e.node.name===t)),r=null==a?void 0:a.node;return r&&(0,l.c)(r)||null}var u=()=>{const{0:e,1:t}=(0,r.useState)(null),a=(0,r.useRef)(null);c(a,(()=>t(null)));const{allFile:l}=(0,n.useStaticQuery)("2151588002");return(0,r.useEffect)((()=>{const e=document.getElementById("bio-table");function a(e){var a;const r=null===(a=e.target)||void 0===a?void 0:a.id;console.log("hovered!"),t(r)}return null==e||e.addEventListener("mouseover",a),()=>{null==e||e.removeEventListener("mouseover",a)}})),r.createElement(s.Z,null,r.createElement("div",{ref:a,className:"mb-48 flex flex-col items-center"},r.createElement(m,{top:"15%",left:"30%",imageData:d(l,"hannah"),selfSelected:"hannah"===e}),r.createElement(m,{top:"25%",left:"45%",imageData:d(l,"writer"),selfSelected:"writer"===e}),r.createElement(m,{top:"20%",left:"40%",imageData:d(l,"coder"),selfSelected:"coder"===e}),r.createElement(m,{top:"30%",left:"35%",imageData:d(l,"artist"),selfSelected:"artist"===e}),r.createElement(m,{top:"50%",left:"60%",imageData:d(l,"tucson"),selfSelected:"tucson"===e}),r.createElement("table",{id:"bio-table",className:"relative z-10 w-full cursor-pointer text-black md:text-4xl"},r.createElement("tbody",null,r.createElement("tr",{className:"border-y border-black"},r.createElement("td",{id:"hannah",className:i()("w-full py-4 text-left transition-colors","hannah"===e?"bg-black text-white":"bg-secondary text-black")},"Hi, my name is Hannah !")),r.createElement("tr",{className:"border-y border-black"},r.createElement("td",{id:"writer",className:i()("w-full py-4 text-left transition-colors","writer"===e?"bg-black text-white":"bg-secondary text-black")},"I'm a writer,")),r.createElement("tr",{className:"border-y border-black"},r.createElement("td",{id:"coder",className:i()("w-full py-4 text-left transition-colors","coder"===e?"bg-black text-white":"bg-secondary text-black")},"software developer,")),r.createElement("tr",{className:"border-y border-black"},r.createElement("td",{id:"artist",className:i()("w-full py-4 text-left transition-colors","artist"===e?"bg-black text-white":"bg-secondary text-black")},"& artist")),r.createElement("tr",{className:"group w-full border-y border-black"},r.createElement("td",{id:"artist-2",className:i()("w-full py-4 text-left italic transition-colors md:pl-12","artist-2"===e?"bg-black text-white":"bg-secondary text-black")},"(of many kinds)",r.createElement("a",{className:"ml-40 inline-block text-white opacity-0 hover:text-black hover:underline group-hover:opacity-100",href:"https://sonyabladeband.bandcamp.com/album/demo",target:"_blank",rel:"noopener noreferrer"},">> sonya blade"))),r.createElement("tr",{className:"border-y border-black"},r.createElement("td",{id:"tucson",className:i()("w-full py-4 text-left transition-colors","tucson"===e?"bg-black text-white":"bg-secondary text-black")},"living in sunny Tucson, Arizona !"))))))};const p=()=>r.createElement("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a66245895a948f1344e0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{J4bc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Zttt"),i=n("Wbzz"),l=n("7Qib"),s=n("d+ly"),u=n.n(s),c=n("gGy4"),m=function(){var e=Object(c.b)().author;return r.a.createElement("div",{className:u.a.author},r.a.createElement("p",{className:u.a.author__bio},e.bio,r.a.createElement("a",{className:u.a["author__bio-twitter"],href:Object(l.a)("github",e.contacts.github),rel:"noopener noreferrer",target:"_blank"},r.a.createElement("strong",null,e.name)," on Github")))},d=n("RPjP"),f=n.n(d),p=function(e){var t=e.postTitle,n=e.postSlug,a=Object(c.b)(),o=a.url,i=a.disqusShortname;return i?r.a.createElement(f.a,{shortname:i,identifier:t,title:t,url:o+n}):null},g=n("Mvws"),_=n.n(g),y=function(e){var t=e.body,n=e.title;return r.a.createElement("div",{className:_.a.content},r.a.createElement("h1",{className:_.a.content__title},n),r.a.createElement("div",{className:_.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},h=n("myfg"),b=n.n(h),v=function(e){var t=e.date;return r.a.createElement("div",{className:b.a.meta},r.a.createElement("p",{className:b.a.meta__date},"Published ",new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"numeric",day:"numeric"})))},w=n("WXWR"),E=n.n(w),N=function(e){var t=e.tags,n=e.tagSlugs;return r.a.createElement("div",{className:E.a.tags},r.a.createElement("ul",{className:E.a.tags__list},n&&n.map((function(e,n){return r.a.createElement("li",{className:E.a["tags__list-item"],key:t[n]},r.a.createElement(i.Link,{to:e,className:E.a["tags__list-item-link"]},t[n]))}))))},k=n("JACm"),O=n("bOng"),S=n.n(O);function j(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var C=function(e){for(var t,n=[],a=j(e.gallery.nodes.entries());!(t=a()).done;){var o=t.value,i="gallery-img-"+o[0],l=o[1].childrenImageSharp[0];if(l){var s=null==l?void 0:l.gatsbyImageData;s&&n.push(r.a.createElement(k.a,{key:i,alt:i,image:s}))}}return n.length>0?r.a.createElement("div",{className:S.a.gallery},n):null},q=n("gt/k"),D=n.n(q),T=function(e){var t=e.post,n=e.gallery,a=t.html,o=t.fields,l=o.tagSlugs,s=o.slug,u=t.frontmatter,c=u.tags,d=u.title,f=u.date,g=null;return n.totalCount>0&&(g=r.a.createElement(C,{gallery:n})),r.a.createElement("div",{className:D.a.post},r.a.createElement(i.Link,{className:D.a["post__home-button"],to:"/"},"All Articles"),r.a.createElement("div",{className:D.a.post__content},r.a.createElement(y,{body:a,title:d}),g),r.a.createElement("div",{className:D.a.post__footer},r.a.createElement(v,{date:f}),c&&l&&r.a.createElement(N,{tags:c,tagSlugs:l}),r.a.createElement(m,null)),r.a.createElement("div",{className:D.a.post__comments},r.a.createElement(p,{postSlug:s,postTitle:t.frontmatter.title})))};t.default=function(e){var t=e.data,n=Object(c.b)(),a=n.title,i=n.subtitle,l=t.markdownRemark.frontmatter,s=l.title,u=l.description,m=void 0===u?"":u,d=l.socialImage,f=m||i,p=null==d?void 0:d.publicURL;return r.a.createElement(o.a,{title:s+" - "+a,description:f,socialImage:p},r.a.createElement(T,{post:t.markdownRemark,gallery:t.allFile}))}},Mvws:function(e,t,n){e.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=l(n("q1tI")),i=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var f=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return c.some((function(e){return e===n}))?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);f.displayName="DisqusThread",f.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=f},WXWR:function(e,t,n){e.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},bOng:function(e,t,n){e.exports={gallery:"Gallery-module--gallery--1Epkj"}},"d+ly":function(e,t,n){e.exports={author:"Author-module--author--2Yefr","author__bio-twitter":"Author-module--author__bio-twitter--n-O9n"}},"gt/k":function(e,t,n){e.exports={post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}},myfg:function(e,t,n){e.exports={meta__date:"Meta-module--meta__date--29eD7"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-5ab2f930c9fb4b9f1d39.js.map
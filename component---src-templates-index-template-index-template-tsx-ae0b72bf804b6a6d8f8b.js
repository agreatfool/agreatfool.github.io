/*! For license information please see component---src-templates-index-template-index-template-tsx-ae0b72bf804b6a6d8f8b.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[574],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&e.push(c)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},5674:function(e,t,a){"use strict";a.d(t,{f:function(){return c}});var n=a(7294),r=a(1597),l="Feed-module--link--GNuXE",c=function(e){var t=e.edges;return n.createElement("div",{className:"Feed-module--feed--3dYe7"},t.map((function(e){return n.createElement("div",{className:"Feed-module--item--ooOky",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--ECIPa"},n.createElement("time",{className:"Feed-module--time--17yla",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("zh-CN",{year:"numeric",month:"numeric",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("zh-CN",{year:"numeric",month:"numeric",day:"numeric"})),n.createElement("span",{className:"Feed-module--divider--3kBgQ"}),n.createElement("span",{className:"Feed-module--category--DGEwP"},n.createElement(r.Link,{to:e.node.fields.categorySlug,className:l},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--1qA0W"},n.createElement(r.Link,{className:l,to:e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--UXUO2"},e.node.frontmatter.description),n.createElement(r.Link,{className:"Feed-module--more--Axk8-",to:e.node.fields.slug},"Read"))})))}},4808:function(e,t,a){"use strict";a.d(t,{T:function(){return r}});var n=a(7294),r=function(e){var t=e.title,a=e.children,r=(0,n.useRef)(null);return(0,n.useEffect)((function(){r.current&&r.current.scrollIntoView()}),[]),n.createElement("div",{ref:r,className:"Page-module--page--2Y5e7"},n.createElement("div",{className:"Page-module--inner--3HKeR"},t&&n.createElement("h1",{className:"Page-module--title--Z69a4"},t),n.createElement("div",{className:"Page-module--body--hPYHN"},a)))}},775:function(e,t,a){"use strict";a.d(t,{t:function(){return m}});var n=a(7294),r=a(5900),l=a.n(r),c=a(1597),o=a(100),i="Pagination-module--disable--4zAQA",m=function(e){var t,a,r=e.prevPagePath,m=e.nextPagePath,s=e.hasNextPage,u=e.hasPrevPage,d=l()("Pagination-module--previousLink--1mLDH",((t={})[i]=!u,t)),g=l()("Pagination-module--nextLink--DTlD5",((a={})[i]=!s,a));return n.createElement("div",{className:"Pagination-module--pagination--3KtNE"},n.createElement("div",{className:"Pagination-module--previous--3Jp_8"},n.createElement(c.Link,{rel:"prev",to:u?r:"/",className:d},o.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--PX9hj"},n.createElement(c.Link,{rel:"next",to:s?m:"/",className:g},o.X.NEXT_PAGE)))}},20:function(e,t,a){"use strict";a.d(t,{Y:function(){return p}});var n=a(7294),r=a(7783),l=a(1597),c=a(3366),o=a(3723),i=["path"],m=function(e){var t=e.path,a=(0,c.Z)(e,i);return n.createElement(l.StaticQuery,{query:"63107425",render:function(e){var r=e.images,l=(r=void 0===r?{}:r).edges,c=(void 0===l?[]:l).find((function(e){return e.node.absolutePath.includes(t)}));if(!c)return null;var i=c.node.childImageSharp;return n.createElement(o.G,Object.assign({},a,{image:i.gatsbyImageData}))}})},s="Author-module--link--1dqxo",u="Author-module--title--2UdHe",d=function(e){var t=e.author,a=e.isIndex;return n.createElement("div",{className:"Author-module--author--12DFk"},n.createElement(l.Link,{to:"/"},n.createElement(m,{alt:t.name,path:t.photo,className:"Author-module--photo--1WT_U"})),a?n.createElement("h1",{className:u},n.createElement(l.Link,{className:s,to:"/"},t.name)):n.createElement("h2",{className:u},n.createElement(l.Link,{className:s,to:"/"},t.name)),n.createElement("p",{className:"Author-module--subtitle--3HDSh"},t.bio))},g=function(e){var t=e.name,a=e.icon;return n.createElement("svg",{className:"Icon-module--icon--fdMTB",viewBox:a.viewBox},n.createElement("title",null,t),n.createElement("path",{d:a.path}))},f=a(2713),E=function(e){var t=e.contacts;return n.createElement("div",{className:"Contacts-module--contacts--3rFuK"},n.createElement("ul",{className:"Contacts-module--list--3gIi_"},Object.keys(t).map((function(e){return t[e]?n.createElement("li",{className:"Contacts-module--item--3aZ8X",key:e},n.createElement("a",{className:"Contacts-module--link--2rGsi",href:(0,f.KA)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},n.createElement(g,{name:e,icon:(0,f.q7)(e)}))):null}))))},h=function(e){var t=e.copyright;return n.createElement("div",{className:"Copyright-module--copyright--1IQFN"},t)},v=function(e){var t=e.menu;return n.createElement("nav",{className:"Menu-module--menu--3SbXJ"},n.createElement("ul",{className:"Menu-module--list--1n4ZI"},t.map((function(e){return n.createElement("li",{className:"Menu-module--item--DDbJ8",key:e.path},n.createElement(l.Link,{to:e.path,className:"Menu-module--link--3lstV",activeClassName:"Menu-module--active--aYO_r"},e.label))}))))},p=function(e){var t=e.isIndex,a=(0,r.$W)(),l=a.author,c=a.copyright,o=a.menu;return n.createElement("div",{className:"Sidebar-module--sidebar--1NhQN"},n.createElement("div",{className:"Sidebar-module--inner--12iqG"},n.createElement(d,{author:l,isIndex:t}),n.createElement(v,{menu:o}),n.createElement(E,{contacts:l.contacts}),n.createElement(h,{copyright:c})))}},5886:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(5674),l=a(1018),c=a(4808),o=a(775),i=a(20),m=a(7783);t.default=function(e){var t=e.data,a=e.pageContext,s=(0,m.$W)(),u=s.title,d=s.subtitle,g=a.pagination,f=g.currentPage,E=g.hasNextPage,h=g.hasPrevPage,v=g.prevPagePath,p=g.nextPagePath,N=t.allMarkdownRemark.edges,P=f>0?"Posts - Page "+f+" - "+u:u;return n.createElement(l.A,{title:P,description:d},n.createElement(i.Y,{isIndex:!0}),n.createElement(c.T,null,n.createElement(r.f,{edges:N}),n.createElement(o.t,{prevPagePath:v,nextPagePath:p,hasPrevPage:h,hasNextPage:E})))}}}]);
//# sourceMappingURL=component---src-templates-index-template-index-template-tsx-ae0b72bf804b6a6d8f8b.js.map
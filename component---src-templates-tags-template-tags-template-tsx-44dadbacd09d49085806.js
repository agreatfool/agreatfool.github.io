"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[249],{2391:function(e,t,a){a.d(t,{T:function(){return l}});var n=a(7294),l=function(e){var t=e.title,a=e.children,l=(0,n.useRef)(null);return(0,n.useEffect)((function(){l.current&&l.current.scrollIntoView()}),[]),n.createElement("div",{ref:l,className:"Page-module--page--2Y5e7"},n.createElement("div",{className:"Page-module--inner--3HKeR"},t&&n.createElement("h1",{className:"Page-module--title--Z69a4"},t),n.createElement("div",{className:"Page-module--body--hPYHN"},a)))}},8369:function(e,t,a){a.d(t,{Y:function(){return g}});var n=a(7294),l=a(1900),r=a(1597),c=a(3366),u=a(7059),m=["path"],o=function(e){var t=e.path,a=(0,c.Z)(e,m);return n.createElement(r.StaticQuery,{query:"63107425",render:function(e){var l=e.images,r=(l=void 0===l?{}:l).edges,c=(void 0===r?[]:r).find((function(e){return e.node.absolutePath.includes(t)}));if(!c)return null;var m=c.node.childImageSharp;return n.createElement(u.G,Object.assign({},a,{image:m.gatsbyImageData}))}})},i="Author-module--link--1dqxo",s="Author-module--title--2UdHe",d=function(e){var t=e.author,a=e.isIndex;return n.createElement("div",{className:"Author-module--author--12DFk"},n.createElement(r.Link,{to:"/"},n.createElement(o,{alt:t.name,path:t.photo,className:"Author-module--photo--1WT_U"})),a?n.createElement("h1",{className:s},n.createElement(r.Link,{className:i,to:"/"},t.name)):n.createElement("h2",{className:s},n.createElement(r.Link,{className:i,to:"/"},t.name)),n.createElement("p",{className:"Author-module--subtitle--3HDSh"},t.bio))},E=function(e){var t=e.name,a=e.icon;return n.createElement("svg",{className:"Icon-module--icon--fdMTB",viewBox:a.viewBox},n.createElement("title",null,t),n.createElement("path",{d:a.path}))},h=a(7185),f=function(e){var t=e.contacts;return n.createElement("div",{className:"Contacts-module--contacts--3rFuK"},n.createElement("ul",{className:"Contacts-module--list--3gIi_"},Object.keys(t).map((function(e){return t[e]?n.createElement("li",{className:"Contacts-module--item--3aZ8X",key:e},n.createElement("a",{className:"Contacts-module--link--2rGsi",href:(0,h.KA)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},n.createElement(E,{name:e,icon:(0,h.q7)(e)}))):null}))))},v=function(e){var t=e.copyright;return n.createElement("div",{className:"Copyright-module--copyright--1IQFN"},t)},N=function(e){var t=e.menu;return n.createElement("nav",{className:"Menu-module--menu--3SbXJ"},n.createElement("ul",{className:"Menu-module--list--1n4ZI"},t.map((function(e){return n.createElement("li",{className:"Menu-module--item--DDbJ8",key:e.path},n.createElement(r.Link,{to:e.path,className:"Menu-module--link--3lstV",activeClassName:"Menu-module--active--aYO_r"},e.label))}))))},g=function(e){var t=e.isIndex,a=(0,l.$W)(),r=a.author,c=a.copyright,u=a.menu;return n.createElement("div",{className:"Sidebar-module--sidebar--1NhQN"},n.createElement("div",{className:"Sidebar-module--inner--12iqG"},n.createElement(d,{author:r,isIndex:t}),n.createElement(N,{menu:u}),n.createElement(f,{contacts:r.contacts}),n.createElement(v,{copyright:c})))}},1840:function(e,t,a){a.r(t);var n=a(7294),l=a(1597),r=a(3402),c=a(2391),u=a(8369),m=a(1900),o=a(7185);t.default=function(){var e=(0,m.$W)(),t=e.title,a=e.subtitle,i=(0,m.xJ)();return n.createElement(r.A,{title:"Tags - "+t,description:a},n.createElement(u.Y,null),n.createElement(c.T,{title:"Tags"},n.createElement("ul",null,i.map((function(e){return n.createElement("li",{key:e.fieldValue},n.createElement(l.Link,{to:"/tag/"+(0,o.mA)(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))})))))}}}]);
//# sourceMappingURL=component---src-templates-tags-template-tags-template-tsx-44dadbacd09d49085806.js.map
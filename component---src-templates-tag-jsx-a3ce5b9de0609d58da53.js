(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(155),c=n.n(i),l=n(185),u=n(153),p=n.n(u),m=n(169),f=n(180),h=n(170),d=n(172),v=n(173),g=n(174),y=n(175),E=n(239),b=n(240),N=n(171),C=n(265),x=n(164),k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.tag,n=e.nodes,a=e.page,r=e.pages,o=e.total,i=e.limit,u=e.prev,k=e.next,w=this.props.data.authors.edges;return s.a.createElement(x.a,{location:this.props.location},s.a.createElement(m.a,{isOpen:this.state.menuOpen},s.a.createElement(c.a,{title:'Posts tagged as "'+t+'" | '+p.a.siteTitle}),s.a.createElement(f.a,{config:p.a,onClose:this.handleOnClose}),s.a.createElement(h.a,null,s.a.createElement("div",{className:"tag-template"},s.a.createElement(d.a,{className:"tag-head",cover:t.featureImage},s.a.createElement(v.a,null,s.a.createElement(g.a,{logo:p.a.siteLogo,title:p.a.siteTitle}),s.a.createElement(y.a,{navigation:p.a.siteNavigation,onClick:this.handleOnClick})),s.a.createElement("div",{className:"vertical"},s.a.createElement("div",{className:"main-header-content inner"},s.a.createElement(E.a,{text:t}),s.a.createElement(b.a,{text:t.description||"A "+o+"-post collection"})))),s.a.createElement(C.a,{page:a,pages:r,total:o,limit:i,prev:u,next:k},s.a.createElement(l.a,{postEdges:n,postAuthors:w}))),s.a.createElement(N.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(s.a.Component),w="333490751";t.default=k},152:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},153:function(e,t){e.exports={blogPostDir:"fauzana-posts",blogAuthorDir:"blog-authors",blogAuthorId:"fauzana",siteTitle:"The Fauzana Times",siteTitleAlt:"It's not about bit, byte, and protocol. But profits, loses, and margins.",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fauzana.com",pathPrefix:"/",siteDescription:"The personal site of Fauzana S. Software Engineer based in Jakarta, Indonesia.",siteCover:"/images/blog-cover.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"Fauzana S",sitePaginationLimit:7,googleAnalyticsID:"UA-111982167-1",siteSocialUrls:[],postDefaultCategoryID:"Random",userLinks:[{label:"GitHub",url:"https://github.com/fauzana",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/fauzana_s",iconClassName:"fa fa-twitter"},{label:"Instagram",url:"https://instagram.com/fauzana_s",iconClassName:"fa fa-instagram"},{label:"Email",url:"mailto:fauzanaisnana@gmail.com",iconClassName:"fa fa-envelope"}],copyright:{label:"Gatsby Casper Starter"},themeColor:"#c62828",backgroundColor:"#e0e0e0",promoteGatsby:!0}},158:function(e,t,n){"use strict";n(154);var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(51),c=(n(186),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?s.a.createElement(i.Link,{to:n},t):null},t}(s.a.Component));t.a=c},159:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(187),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return s.a.createElement("article",{className:n},t)},t}(s.a.Component));t.a=i},160:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(188),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("header",{className:"post-header"},e)},t}(s.a.Component));t.a=i},161:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(189),c=n.n(i),l=(n(190),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.date;return s.a.createElement("time",{className:"post-date",dateTime:c()(new Date(e)).format("YYYY-MM-DD")},c()(new Date(e)).format("DD MMMM YYYY"))},t}(s.a.Component));t.a=l},162:function(e,t,n){"use strict";n(75);var a=function(e){return function(t){return t.uid===e}},r=function(e){return e.map(function(e){return e.node})},o=function(){function e(){}return e.hasAuthor=function(e,t){var n=r(e);return Boolean(n.find(a(t)))},e.getAuthor=function(e,t,n){var o=r(e);return this.hasAuthor(e,t)?o.find(a(t)):o.find(a(n))},e}();t.a=o},164:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(73),n(74),n(31);var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(155),c=n.n(i),l=n(153),u=n.n(l),p=(n(197),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=u.a.pathPrefix?u.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if("categories/"===n)a="Categories";else if("about/"===n)a="About";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return s.a.createElement("div",null,s.a.createElement(c.a,null,s.a.createElement("title",null,u.a.siteTitle+" |  "+this.getLocalTitle()),s.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(s.a.Component))},168:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(201),c=n.n(i),l=n(51),u=(n(202),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?s.a.createElement("span",null,t,n.map(function(e,t,n){return s.a.createElement("span",{key:e},s.a.createElement(l.Link,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(o.Component));t.a=u},169:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(152),c=n.n(i),l=(n(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return s.a.createElement("div",{className:r},t)},t}(s.a.Component));t.a=l},170:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(207),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"site-wrapper"},e)},t}(s.a.Component));t.a=i},171:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(208),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return s.a.createElement("footer",{className:"site-footer clearfix"},s.a.createElement("section",{className:"copyright"},s.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),s.a.createElement(function(e){return e.show?s.a.createElement("section",{className:"poweredby"},"Proudly published with ",s.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(o.Component));t.a=i},172:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(152),c=n.n(i),l=(n(209),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return s.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(s.a.Component));t.a=l},173:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(152),c=n.n(i),l=(n(210),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return s.a.createElement("nav",{className:a},t)},t}(s.a.Component));t.a=l},174:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(51),c=(n(211),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?s.a.createElement(i.Link,{className:"blog-logo",to:n||"/"},s.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},175:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(212),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?s.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},s.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=i},180:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=(n(23),n(76)),s=n.n(o),i=n(0),c=n.n(i),l=n(51);var u=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",component:l.Link,to:"/about/"}),t},p=(n(205),n(206),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?c.a.createElement("a",{className:"subscribe-button icon-feed",href:e},"Subscribe"):null},t}(c.a.Component)),m=function(){return null},f=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},h=function(e){var t=e.primaryText,n=e.component,a=s()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(i.createElement)(n,a,t))},d=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(i.createElement)(h,{key:t,primaryText:t});if(Object(i.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=s()(t,["divider","subheader","nestedItems"]);a=r?m:o?f:h;var u=Object.assign({},l,{key:t.key||n});return c&&(u.nestedItems=c.map(e)),Object(i.createElement)(a,u)},v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(d)),c.a.createElement(p,{url:t.siteRss})),c.a.createElement("span",{className:"nav-cover"}))},t}(i.Component);t.a=v},182:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(152),c=n.n(i),l=(n(228),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return s.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(s.a.Component));t.a=l},185:function(e,t,n){"use strict";n(154);var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(51),c=(n(226),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?s.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(s.a.Component)),l=n(168),u=n(153),p=n.n(u),m=n(158),f=n(159),h=n(160),d=n(161),v=n(162),g=(n(227),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=function(e,t){return e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:v.a.getAuthor(t,e.node.frontmatter.author,p.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}})}(e.postEdges,e.postAuthors);return s.a.createElement("div",null,t.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,o=e.tags,u=e.date,p=e.post_class?e.post_class:"post";return s.a.createElement(f.a,{className:p,key:t},s.a.createElement(h.a,null,s.a.createElement("h2",{className:"post-title"},s.a.createElement(i.Link,{to:n},t))),s.a.createElement("section",{className:"post-excerpt"},s.a.createElement("p",null,a," ",s.a.createElement(i.Link,{className:"read-more",to:n},"»"))),s.a.createElement("footer",{className:"post-meta"},s.a.createElement(c,{avatar:r.image,name:r.name}),s.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),s.a.createElement(l.a,{prefix:" on ",tags:o}),s.a.createElement(d.a,{date:u})))}))},t}(s.a.Component));t.a=g},239:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(271),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h1",{className:"page-title"},e):null},t}(s.a.Component));t.a=i},240:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(272),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h2",{className:"page-description"},e):null},t}(s.a.Component));t.a=i},265:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(182),c=(n(23),n(51)),l=(n(273),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,s.a.createElement(c.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(s.a.Component)),u=(n(274),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return s.a.createElement("nav",{className:"pagination"},s.a.createElement(l,{className:"newer-posts",url:a,text:"← Newer Posts"}),s.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),s.a.createElement(l,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(s.a.Component)),p=(n(275),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,o=e.children,c="";return t>1&&(c+=" paged"),s.a.createElement(i.a,{className:c},s.a.createElement("div",{className:"extra-pagination inner"},s.a.createElement(u,{page:t,pages:n,prev:a,next:r})),o,s.a.createElement(u,{page:t,pages:n,prev:a,next:r}))},t}(s.a.Component));t.a=p}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-a3ce5b9de0609d58da53.js.map
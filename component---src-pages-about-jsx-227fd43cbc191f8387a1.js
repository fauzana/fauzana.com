(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return D});var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=n.n(s),l=n(152),u=n.n(l),p=n(202),m=n(171),h=n(172),f=n(173),d=n(174),E=n(168),y=n(179),g=n(169),v=n(181),b=n(159),N=n(158),C=n(160),w=n(250),T=n(219),k=n(252),x=n(254),A=n(170),S=n(161),P=n(163);var O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.data,a=e.pageContext.slug,r=n.markdownRemark,o=function(e,t){var n=e;return n.id||(n.id=t),n.id||(n.category_id=u.a.postDefaultCategoryID),n}(r.frontmatter,a),s=o.cover,l=o.title,O=o.date,D=o.author,I=o.post_class?o.post_class:"post",L=S.a.getAuthor(n.authors.edges,D,u.a.blogAuthorId);return i.a.createElement(P.a,{location:t},i.a.createElement(E.a,{className:"post-template",isOpen:this.state.menuOpen},i.a.createElement(c.a,null,i.a.createElement("title",null,"About | "+u.a.siteTitle)),i.a.createElement(p.a,{postPath:a,postNode:r,postSEO:!0}),i.a.createElement(y.a,{config:u.a,onClose:this.handleOnClose}),i.a.createElement(g.a,null,i.a.createElement(m.a,{className:"post-head",cover:s},i.a.createElement(h.a,null,i.a.createElement(f.a,{logo:u.a.siteLogo,title:u.a.siteTitle}),i.a.createElement(d.a,{navigation:u.a.siteNavigation,onClick:this.handleOnClick}))),i.a.createElement(v.a,null,i.a.createElement(N.a,{className:I},i.a.createElement(b.a,null,i.a.createElement("h1",{className:"post-title"},l),i.a.createElement("section",{className:"post-meta"},i.a.createElement(C.a,{date:O}))),i.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:r.html}}),i.a.createElement(w.a,null,i.a.createElement(T.a,{author:L}),i.a.createElement(k.a,{prefix:"/author",author:L}),i.a.createElement(x.a,{postNode:r,postPath:t.pathname,config:u.a})))),i.a.createElement(A.a,{copyright:u.a.copyright,promoteGatsby:u.a.promoteGatsby}))))},t}(o.Component),D="2819220216";t.default=O},152:function(e,t){e.exports={blogPostDir:"fauzana-posts",blogAuthorDir:"blog-authors",blogAuthorId:"fauzana",siteTitle:"The Fauzana Times",siteTitleAlt:"It's not about bit, byte, and protocol. But profits, loses, and margins.",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fauzana.com",pathPrefix:"/",siteDescription:"The personal site of Fauzana S. Software Engineer based in Jakarta, Indonesia.",siteCover:"/images/blog-cover.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"Fauzana S",sitePaginationLimit:7,googleAnalyticsID:"UA-111982167-1",siteSocialUrls:[],postDefaultCategoryID:"Random",userLinks:[{label:"GitHub",url:"https://github.com/fauzana",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/fauzana_s",iconClassName:"fa fa-twitter"},{label:"Instagram",url:"https://instagram.com/fauzana_s",iconClassName:"fa fa-instagram"},{label:"Email",url:"mailto:fauzanaisnana@gmail.com",iconClassName:"fa fa-envelope"}],copyright:{label:"Gatsby Casper Starter"},themeColor:"#c62828",backgroundColor:"#e0e0e0",promoteGatsby:!0}},157:function(e,t,n){"use strict";n(153);var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(49),c=(n(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?i.a.createElement(s.Link,{to:n},t):null},t}(i.a.Component));t.a=c},158:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=(n(186),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return i.a.createElement("article",{className:n},t)},t}(i.a.Component));t.a=s},159:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=(n(187),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("header",{className:"post-header"},e)},t}(i.a.Component));t.a=s},160:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(188),c=n.n(s),l=(n(189),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.date;return i.a.createElement("time",{className:"post-date",dateTime:c()(new Date(e)).format("YYYY-MM-DD")},c()(new Date(e)).format("DD MMMM YYYY"))},t}(i.a.Component));t.a=l},161:function(e,t,n){"use strict";n(74);var a=function(e){return function(t){return t.uid===e}},r=function(e){return e.map(function(e){return e.node})},o=function(){function e(){}return e.hasAuthor=function(e,t){var n=r(e);return Boolean(n.find(a(t)))},e.getAuthor=function(e,t,n){var o=r(e);return this.hasAuthor(e,t)?o.find(a(t)):o.find(a(n))},e}();t.a=o},163:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(72),n(73),n(31);var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=n.n(s),l=n(152),u=n.n(l),p=(n(196),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=u.a.pathPrefix?u.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if("categories/"===n)a="Categories";else if("about/"===n)a="About";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("title",null,u.a.siteTitle+" |  "+this.getLocalTitle()),i.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(i.a.Component))},168:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(151),c=n.n(s),l=(n(203),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return i.a.createElement("div",{className:r},t)},t}(i.a.Component));t.a=l},169:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=(n(206),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},e)},t}(i.a.Component));t.a=s},170:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=(n(207),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),i.a.createElement(function(e){return e.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(o.Component));t.a=s},171:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(151),c=n.n(s),l=(n(208),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return i.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(i.a.Component));t.a=l},172:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(151),c=n.n(s),l=(n(209),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return i.a.createElement("nav",{className:a},t)},t}(i.a.Component));t.a=l},173:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(49),c=(n(210),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?i.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},i.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},174:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=(n(211),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=s},179:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=(n(23),n(75)),i=n.n(o),s=n(0),c=n.n(s),l=(n(76),n(49));var u=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",component:l.Link,to:"/about/"}),t},p=(n(204),n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?c.a.createElement("a",{className:"subscribe-button icon-feed",href:e},"Subscribe"):null},t}(c.a.Component)),m=function(){return null},h=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},f=function(e){var t=e.primaryText,n=e.component,a=i()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},d=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(f,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=i()(t,["divider","subheader","nestedItems"]);a=r?m:o?h:f;var u=Object.assign({},l,{key:t.key||n});return c&&(u.nestedItems=c.map(e)),Object(s.createElement)(a,u)},E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(d)),c.a.createElement(p,{url:t.siteRss})),c.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=E},181:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(151),c=n.n(s),l=(n(227),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return i.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.a.Component));t.a=l},202:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=n.n(s),l=n(152),u=n.n(l),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,l=r.postSEO;if(l){var p=o.frontmatter;e=p.title,t=p.description?p.description:o.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var m="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+m+n;var h=u.a.siteUrl+u.a.pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("meta",{property:"og:url",content:l?a:h}),l?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=p},219:function(e,t,n){"use strict";n(153);var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=(n(251),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?i.a.createElement("figure",{className:"author-image"},i.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},i.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(i.a.Component));t.a=s},220:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(151),c=n.n(s),l=(n(253),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("author-meta",n);return i.a.createElement("div",{className:a},t)},t}(i.a.Component));t.a=l},221:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?i.a.createElement("span",{className:"author-location icon-location"},e):null},t}(i.a.Component);t.a=s},222:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?i.a.createElement("span",{className:"author-link icon-link"},i.a.createElement("a",{href:e},e)):null},t}(i.a.Component);t.a=s},250:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=(n(278),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("footer",{className:"post-footer"},e)},t}(i.a.Component));t.a=s},252:function(e,t,n){"use strict";n(153);var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(49),c=(n(279),n(220)),l=n(221),u=n(222),p=n(157),m=function(e){var t=e.bio,n=e.morePostsUrl;return t?i.a.createElement("p",null,t):i.a.createElement("p",null,"Read ",i.a.createElement(s.Link,{to:n},"more posts")," by this author.")},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.prefix,t=this.props.author,n=t.uid,a=t.name,r=t.image,o=t.bio,s=t.url,h=t.location,f=e?e+"/"+n:n;return r?i.a.createElement("section",{className:"author"},i.a.createElement("h4",null,i.a.createElement(p.a,{url:f,name:a})),i.a.createElement(m,{bio:o,morePostsUrl:f}),i.a.createElement(c.a,null,i.a.createElement(l.a,{location:h}),i.a.createElement(u.a,{url:s}))):null},t}(i.a.Component);t.a=h},254:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),i=n.n(o),s=n(280),c=(n(297),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=this.props,a=n.postNode,r=n.postPath,o=n.config,c=a.frontmatter,l=(e=o.siteUrl,t=o.pathPrefix,e+("/"===t?"":t)+r),u=s.ShareButtons.FacebookShareButton,p=s.ShareButtons.GooglePlusShareButton,m=s.ShareButtons.TwitterShareButton;return i.a.createElement("section",{className:"share"},i.a.createElement("h4",null,"Share this post"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(m,{url:l,title:c.title},i.a.createElement("a",{className:"icon-twitter",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Twitter"))),i.a.createElement(u,{url:l,quote:c.title},i.a.createElement("a",{className:"icon-facebook",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Facebook"))),i.a.createElement(p,{url:l},i.a.createElement("a",{className:"icon-google-plus",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Google+")))))},t}(i.a.Component));t.a=c}}]);
//# sourceMappingURL=component---src-pages-about-jsx-227fd43cbc191f8387a1.js.map
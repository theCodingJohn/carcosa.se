(self.webpackChunkcarcosa_se=self.webpackChunkcarcosa_se||[]).push([[89],{4428:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(2263),l=a(8157),o=a(8426),i=a(6742),c=a(4973);var s=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(i.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(5601),d=a(9306);var p=function(e){var t=e.metadata,a=e.items,i=e.sidebar,c=(0,r.Z)().siteConfig.title,p=t.blogDescription,g=t.blogTitle,u="/"===t.permalink?c:g;return n.createElement(l.Z,{title:u,description:p,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(m.Z,{sidebar:i})),n.createElement("main",{className:"col col--7"},a.map((function(e){var t=e.content;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t})))))}},8426:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var n=a(7294),r=a(6010),l=a(3905),o=a(1217),i=a(6742),c=a(7277),s=a(1262),m=a(2106),d=function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"Blog",eventAction:"share via "+e,eventLabel:window.location.pathname})},p=function(e){var t=e.className,a=e.label,r=e.color,l=e.link,o=e.onClick;return n.createElement("a",{className:"share-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:o},n.createElement("span",{className:"fe "+t,style:{margin:"7px 10px",color:r}}),a)},g=function(e){var t=e.title,a=e.authors,r=n.useState(!1),l=r[0],o=r[1];return n.createElement(s.Z,null,(function(){var e=a.map((function(e){return e.twitter_username?"@"+e.twitter_username:e.name})),r=encodeURI("https://twitter.com/intent/tweet?text="+t+" by "+e.join(", ")+" "+window.location.href);return n.createElement(m.Popover,{isOpen:l,positions:["bottom"],padding:10,align:"center",onClickOutside:function(){return o(!1)},content:function(e){var t=e.position,a=e.childRect,l=e.popoverRect;return n.createElement(m.ArrowContainer,{position:t,childRect:a,popoverRect:l,arrowColor:"var(--ifm-color-content-secondary)",arrowSize:10,arrowStyle:{opacity:".1"},className:"popover-arrow-container",arrowClassName:"popover-arrow"},n.createElement("div",{className:"share-popover-container"},n.createElement("div",{className:"share-link-list"},n.createElement(p,{className:"fe-twitter",label:"Twitter",color:"#1DA1F2",link:r,onClick:function(){o(!1),d("twitter")}}),n.createElement(p,{className:"fe-linkedin",label:"LinkedIn",color:"#0072b1",link:"https://www.linkedin.com/sharing/share-offsite/?url="+window.location.href,onClick:function(){o(!1),d("linkedin")}}),n.createElement(p,{className:"fe-link",label:"Copy Link",color:"var(--ifm-color-content-secondary)",onClick:function(){var e=document.createElement("input"),t=window.location.href;document.body.appendChild(e),e.value=t,e.select(),document.execCommand("copy"),document.body.removeChild(e),o(!1)}}))))}},n.createElement("span",{className:"fe fe-share",onClick:function(){return o((function(e){return!e}))}}))}))},u="blogPostTitle_nmLu",v="blogPostDate_3tMv",E="blogPostAuthor_2Qy_",h="blogPostAuthorSeparator_1vC2",b="blogPostAvatar_1SuQ",f="blogPostTag_36QG",w="blogPostPreview_2NNd",N=["January","February","March","April","May","June","July","August","September","October","November","December"];var k=function(e){var t,a,s,m,d,p=e.children,k=e.frontMatter,_=e.metadata,y=e.truncated,C=e.isBlogPostPage,Z=void 0!==C&&C,P=_.date,x=_.permalink,A=_.tags,M=_.readingTime,T=k.authors,I=k.title,R=k.image,L=k.keywords;return n.createElement(n.Fragment,null,n.createElement(o.Z,{keywords:L,image:R}),n.createElement("article",{className:(0,r.Z)(!Z&&"margin-bottom--lg",!Z&&w)},(t=Z?"h1":"h2",a=P.substring(0,10).split("-"),s=a[0],m=N[parseInt(a[1],10)-1],d=parseInt(a[2],10),n.createElement("header",null,n.createElement(t,{className:(0,r.Z)("margin-bottom--sm",u)},Z?I:n.createElement(i.Z,{to:x},I)),n.createElement("div",{className:"margin-vert--md",style:{display:"flex",alignItems:"center"}},n.createElement("time",{dateTime:P,className:v},m," ",d,", ",s," ",M&&n.createElement(n.Fragment,null," \xb7 ",Math.ceil(M)," min read")),!y&&n.createElement(n.Fragment,null,"\xa0\xb7\xa0",n.createElement(g,{title:I,authors:T,style:{margin:"0 7px"}}))),n.createElement("div",{className:"avatar margin-vert--md"},n.createElement("div",{style:{position:"relative",height:"45px",width:53+20*(T.length-1)+"px"}},T.map((function(e,t){var a=e.name,r=e.avatar;return n.createElement("img",{key:a,className:b,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:r,alt:a})}))),n.createElement("div",{className:"avatar__intro"},n.createElement("h4",{className:(0,r.Z)(E,"avatar__name")},T.map((function(e,t){var a=e.name,l=e.url;return n.createElement(n.Fragment,{key:a},n.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),t!=T.length-1&&n.createElement("span",{className:(0,r.Z)(h)},",\xa0"))}))))))),n.createElement("section",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},p)),(A.length>0||y)&&n.createElement("footer",{className:"row margin-vert--md"},A.length>0&&n.createElement("div",{className:"col"},A.map((function(e){var t=e.label,a=e.permalink;return n.createElement(i.Z,{key:a,className:(0,r.Z)(f),to:a},t)}))),y&&n.createElement("div",{className:"col text--right"},n.createElement(i.Z,{to:_.permalink,"aria-label":"Read more about "+I},n.createElement("strong",null,"Read More"))))))}}}]);
(self.webpackChunkcarcosa_se=self.webpackChunkcarcosa_se||[]).push([[610],{9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(8157),l=a(8426),o=a(6742),c=a(5601),s=a(4973),i=a(9306);t.default=function(e){var t,a=e.metadata,m=e.items,u=e.sidebar,g=a.allTagsPath,d=a.name,p=a.count,h=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(p),tagName:d});return r.createElement(n.Z,{title:f,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(c.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(o.Z,{href:g},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},8426:function(e,t,a){"use strict";a.d(t,{Z:function(){return N}});var r=a(7294),n=a(6010),l=a(3905),o=a(1217),c=a(6742),s=a(7277),i=a(1262),m=a(2106),u=function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"Blog",eventAction:"share via "+e,eventLabel:window.location.pathname})},g=function(e){var t=e.className,a=e.label,n=e.color,l=e.link,o=e.onClick;return r.createElement("a",{className:"share-link",href:l,target:"_blank",rel:"noopener noreferrer",onClick:o},r.createElement("span",{className:"fe "+t,style:{margin:"7px 10px",color:n}}),a)},d=function(e){var t=e.title,a=e.authors,n=r.useState(!1),l=n[0],o=n[1];return r.createElement(i.Z,null,(function(){var e=a.map((function(e){return e.twitter_username?"@"+e.twitter_username:e.name})),n=encodeURI("https://twitter.com/intent/tweet?text="+t+" by "+e.join(", ")+" "+window.location.href);return r.createElement(m.Popover,{isOpen:l,positions:["bottom"],padding:10,align:"center",onClickOutside:function(){return o(!1)},content:function(e){var t=e.position,a=e.childRect,l=e.popoverRect;return r.createElement(m.ArrowContainer,{position:t,childRect:a,popoverRect:l,arrowColor:"var(--ifm-color-content-secondary)",arrowSize:10,arrowStyle:{opacity:".1"},className:"popover-arrow-container",arrowClassName:"popover-arrow"},r.createElement("div",{className:"share-popover-container"},r.createElement("div",{className:"share-link-list"},r.createElement(g,{className:"fe-twitter",label:"Twitter",color:"#1DA1F2",link:n,onClick:function(){o(!1),u("twitter")}}),r.createElement(g,{className:"fe-linkedin",label:"LinkedIn",color:"#0072b1",link:"https://www.linkedin.com/sharing/share-offsite/?url="+window.location.href,onClick:function(){o(!1),u("linkedin")}}),r.createElement(g,{className:"fe-link",label:"Copy Link",color:"var(--ifm-color-content-secondary)",onClick:function(){var e=document.createElement("input"),t=window.location.href;document.body.appendChild(e),e.value=t,e.select(),document.execCommand("copy"),document.body.removeChild(e),o(!1)}}))))}},r.createElement("span",{className:"fe fe-share",onClick:function(){return o((function(e){return!e}))}}))}))},p="blogPostTitle_nmLu",h="blogPostDate_3tMv",f="blogPostAuthor_2Qy_",v="blogPostAuthorSeparator_1vC2",E="blogPostAvatar_1SuQ",w="blogPostTag_36QG",b="blogPostPreview_2NNd",k=["January","February","March","April","May","June","July","August","September","October","November","December"];var N=function(e){var t,a,i,m,u,g=e.children,N=e.frontMatter,y=e.metadata,_=e.truncated,C=e.isBlogPostPage,P=void 0!==C&&C,Z=y.date,x=y.permalink,M=y.tags,T=y.readingTime,A=N.authors,I=N.title,R=N.image,F=N.keywords;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:F,image:R}),r.createElement("article",{className:(0,n.Z)(!P&&"margin-bottom--lg",!P&&b)},(t=P?"h1":"h2",a=Z.substring(0,10).split("-"),i=a[0],m=k[parseInt(a[1],10)-1],u=parseInt(a[2],10),r.createElement("header",null,r.createElement(t,{className:(0,n.Z)("margin-bottom--sm",p)},P?I:r.createElement(c.Z,{to:x},I)),r.createElement("div",{className:"margin-vert--md",style:{display:"flex",alignItems:"center"}},r.createElement("time",{dateTime:Z,className:h},m," ",u,", ",i," ",T&&r.createElement(r.Fragment,null," \xb7 ",Math.ceil(T)," min read")),!_&&r.createElement(r.Fragment,null,"\xa0\xb7\xa0",r.createElement(d,{title:I,authors:A,style:{margin:"0 7px"}}))),r.createElement("div",{className:"avatar margin-vert--md"},r.createElement("div",{style:{position:"relative",height:"45px",width:53+20*(A.length-1)+"px"}},A.map((function(e,t){var a=e.name,n=e.avatar;return r.createElement("img",{key:a,className:E,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:n,alt:a})}))),r.createElement("div",{className:"avatar__intro"},r.createElement("h4",{className:(0,n.Z)(f,"avatar__name")},A.map((function(e,t){var a=e.name,l=e.url;return r.createElement(r.Fragment,{key:a},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),t!=A.length-1&&r.createElement("span",{className:(0,n.Z)(v)},",\xa0"))}))))))),r.createElement("section",{className:"markdown"},r.createElement(l.Zo,{components:s.Z},g)),(M.length>0||_)&&r.createElement("footer",{className:"row margin-vert--md"},M.length>0&&r.createElement("div",{className:"col"},M.map((function(e){var t=e.label,a=e.permalink;return r.createElement(c.Z,{key:a,className:(0,n.Z)(w),to:a},t)}))),_&&r.createElement("div",{className:"col text--right"},r.createElement(c.Z,{to:y.permalink,"aria-label":"Read more about "+I},r.createElement("strong",null,"Read More"))))))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(1),l=a.n(r),c=a(54),i=a.n(c),m=function(e){var t=e.gridItems;return s.a.createElement("div",{className:"columns is-multiline"},t.map(function(e){return s.a.createElement("div",{key:e.image,className:"column is-6",style:{borderRadius:"5px"}},s.a.createElement("section",{className:"section"},s.a.createElement("p",{className:"has-text-centered"},s.a.createElement("img",{alt:"",src:e.image})),s.a.createElement("p",null,e.text)))}))};m.propTypes={gridItems:l.a.arrayOf(l.a.shape({image:l.a.string,text:l.a.string}))};var o=m,d=function(e){var t=e.testimonials;return s.a.createElement("div",null,t.map(function(e,t){return s.a.createElement("article",{className:"message",key:t},s.a.createElement("div",{className:"message-body"},e.quote,s.a.createElement("br",null),s.a.createElement("cite",null," – ",e.author)))}))};d.propTypes={testimonials:l.a.arrayOf(l.a.shape({quote:l.a.string,author:l.a.string}))};var u=d,E=function(e){var t=e.title,a=e.heading,n=e.description,r=e.offerings,l=e.meta_title,c=e.meta_description,m=e.testimonials;return s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement("title",null,l),s.a.createElement("meta",{name:"description",content:c})),s.a.createElement("section",{className:"hero is-primary is-bold is-small"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-10 is-offset-1"},s.a.createElement("div",{className:"section"},s.a.createElement("center",null,s.a.createElement("a",{href:"https://github.com/rdbox-intec/rdbox",target:"_blank"},s.a.createElement("img",{src:"img/logo_orange.png",width:"300px"}))),s.a.createElement("h1",{className:"has-text-centered"},"~ アールディーボックス ~"),s.a.createElement("center",null,s.a.createElement("h1",{className:"has-text-centered"},t)),s.a.createElement("h1",null,"."),s.a.createElement("center",null,s.a.createElement("a",{href:"https://github.com/rdbox-intec/rdbox",className:"button is-outlined",target:"_blank"},"View on GitHub"),s.a.createElement("a",null," "),s.a.createElement("a",{href:"https://github.com/rdbox-intec/rdbox/wiki",className:"button is-outlined",target:"_blank"},"Get started >")))))))),s.a.createElement("section",{className:"section section--gradient"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"section"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-10 is-offset-1"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"columns is-multiline"},s.a.createElement("div",{className:"column is-2"},s.a.createElement("p",{className:"has-text-centered"},s.a.createElement("img",{alt:"",src:"img/ROS.png",width:"90px"}),s.a.createElement("p",{className:"has-text-centered"},"For ROS"))),s.a.createElement("div",{className:"column is-2"},s.a.createElement("p",{className:"has-text-centered"},s.a.createElement("img",{alt:"",src:"img/k8s_mono.png",width:"90px"}),s.a.createElement("p",{className:"has-text-centered"},"Kubernetes ready"))),s.a.createElement("div",{className:"column is-2"},s.a.createElement("p",{className:"has-text-centered"},s.a.createElement("img",{alt:"",src:"img/RP.png",width:"70px"}),s.a.createElement("p",{className:"has-text-centered"},"Use RaspberryPi"))),s.a.createElement("div",{className:"column is-2"},s.a.createElement("p",{className:"has-text-centered"},s.a.createElement("img",{alt:"",src:"img/secure.png",width:"90px"}),s.a.createElement("p",{className:"has-text-centered"},"VPN & FireWall"))),s.a.createElement("div",{className:"column is-2"},s.a.createElement("p",{className:"has-text-centered"},s.a.createElement("img",{alt:"",src:"img/mesh-wifi.png",width:"90px"}),s.a.createElement("p",{className:"has-text-centered"},"Mesh Wi-Fi"))),s.a.createElement("div",{className:"column is-2"},s.a.createElement("p",{className:"has-text-centered"},s.a.createElement("img",{alt:"",src:"img/netapp.png",width:"90px"}),s.a.createElement("p",{className:"has-text-centered"},"DHCP/DNS/NTP Trans-Proxy"))),s.a.createElement("h1",{className:"has-text-weight-semibold is-size-2"},a),s.a.createElement("p",null,n)),s.a.createElement(o,{gridItems:r.blurbs}),s.a.createElement("h1",{className:"has-text-weight-semibold is-size-2"},"See case studies"),s.a.createElement(u,{testimonials:m}))))))),s.a.createElement("section",{className:"hero is-outlined is-bold is-small"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-10 is-offset-1"},s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement("a",{href:"https://github.com/rdbox-intec/rdbox",target:"_blank"},s.a.createElement("img",{src:"https://rdbox-intec.github.io/homepage_en/icons/icon-512x512.png",width:"150px"})))),s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement("div",null,s.a.createElement("h1",null,"Robotize your IT infrastructure for ROS robots."),s.a.createElement("h1",null,"~ No more worrying network or app delivery ~ ")),s.a.createElement("a",{href:"https://github.com/rdbox-intec/rdbox",className:"button is-primary",target:"_blank"},"View on GitHub"),s.a.createElement("a",null," "),s.a.createElement("a",{href:"https://github.com/rdbox-intec/rdbox/wiki",className:"button is-primary",target:"_blank"},"Get started >")))))))))};E.propTypes={title:l.a.string,meta_title:l.a.string,meta_description:l.a.string,heading:l.a.string,description:l.a.string,offerings:l.a.shape({blurbs:l.a.array}),testimonials:l.a.array};var p=E;a.d(t,"pageQuery",function(){return g});var h=function(e){var t=e.data.markdownRemark.frontmatter;return s.a.createElement(p,{title:t.title,meta_title:t.meta_title,meta_description:t.meta_description,heading:t.heading,description:t.description,offerings:t.offerings,testimonials:t.testimonials})};h.propTypes={data:l.a.shape({markdownRemark:l.a.shape({frontmatter:l.a.object})})};t.default=h;var g="3410549523"}}]);
//# sourceMappingURL=component---src-templates-home-page-js-e9da5852653320d9f779.js.map
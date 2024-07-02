(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{9401:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deployment",function(){return s(8357)}])},8357:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return r}});var i=s(5893),t=s(2673),l=s(6231),a=s(2069);s(9488);var o=s(2643);let r=[{depth:2,value:"Prerequisites",id:"prerequisites"},{depth:3,value:"Tip",id:"tip"},{depth:2,value:"Github Actions",id:"github-actions"},{depth:2,value:"Command Line",id:"command-line"},{depth:3,value:"Set Secrets",id:"set-secrets"},{depth:3,value:"Deploy",id:"deploy"},{depth:2,value:"Custom Domains and SSL",id:"custom-domains-and-ssl"},{depth:2,value:"Caching Strategies",id:"caching-strategies"}];function c(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",a:"a",code:"code",h3:"h3",pre:"pre",span:"span",strong:"strong",ul:"ul"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Deployment"}),"\n",(0,i.jsx)(n.p,{children:"The project is set up to be easily deployed to Fly.io, so this guide will explain this workflow."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create an account at ",(0,i.jsx)(n.a,{href:"https://fly.io",children:"Fly.io"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Download ",(0,i.jsx)(n.a,{href:"https://fly.io/docs/flyctl/",children:"flyctl"}),": Fly.io command line tool"]}),"\n",(0,i.jsxs)(n.li,{children:["Authenticate with ",(0,i.jsx)(n.code,{children:"flyctl auth login"})]}),"\n",(0,i.jsxs)(n.li,{children:["In the root of the project run ",(0,i.jsx)(n.code,{children:"flyctl launch --no-deploy"}),". This will create prompt you to create an application on Fly.io with the information provided in the ",(0,i.jsx)(n.code,{children:"fly.toml"}),".\nYou will be asked if you want to update these settings. Here you can choose a server location that is more relevant. Ensure that the port is set to ",(0,i.jsx)(n.code,{children:"8080"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tip",children:"Tip"}),"\n",(0,i.jsx)(n.p,{children:"You can use the following commands to generate your GHOST_CONTENT_API_KEY and JWT_SECRET"}),"\n",(0,i.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# GHOST_CONTENT_API_KEY - follows format Ghost generates"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"node"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-e"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"console.log(require('crypto').randomBytes(13).toString('hex'))\""})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# JWT_SECRET"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"node"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-e"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"console.log(require('crypto').randomBytes(32).toString('hex'))\""})]})]})}),"\n",(0,i.jsx)(n.h2,{id:"github-actions",children:"Github Actions"}),"\n",(0,i.jsx)(n.p,{children:"For deployment through GitHub Actions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Get Deploy API Token"}),": Navigate to the newly created application in the Fly.io dashboard and get a deploy token."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Set Secrets"}),": Configure necessary secrets in your GitHub repository settings."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Manually trigger by going to Actions tab and selecting ",(0,i.jsx)(n.code,{children:"Fly Deploy"}),". Click ",(0,i.jsx)(n.code,{children:"Run workflow"})," and enter the branch name to deploy."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can update this action to trigger on push to ",(0,i.jsx)(n.code,{children:"main"})," by changing the ",(0,i.jsx)(n.code,{children:"on"})," section of the workflow file to ",(0,i.jsx)(n.code,{children:"push: [main]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"command-line",children:"Command Line"}),"\n",(0,i.jsx)(n.p,{children:"For command line deployment:"}),"\n",(0,i.jsx)(n.h3,{id:"set-secrets",children:"Set Secrets"}),"\n",(0,i.jsx)(n.p,{children:"Configure necessary environment secrets:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'flyctl secrets set GHOST_CONTENT_API_KEY="my-api-key-value" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   OWNER_EMAIL="my-email-value" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   OWNER_PASSWORD="my-password-value" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   MAILGUN_DOMAIN="somedomain" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   MAILGUN_API_KEY="somekey" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   MAILGUN_BASE_URL="mailgunbase" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   MAILGUN_USER="postmaster@somedomain \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   MAILGUN_PASSWORD="password" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   JWT_SECRET="somejwtsecret" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   SITE_TITLE="My Site" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   SITE_DESCRIPTION="My website" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   OWNER_NAME="Admin" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   OWNER_SLUG="admin" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   BLOG_URL="https://mysite.com" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   COMMENT_SETTINGS="all" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   MEMBERS_SIGNUP_ACCESS="none" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   RAPID_READ="all" \\'})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'   ANTHROPIC_API_KEY="somekey"'})})]})}),"\n",(0,i.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,i.jsx)(n.p,{children:"Deploy your application with environment variables:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"flyctl"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"deploy"})]})})}),"\n",(0,i.jsx)(n.h2,{id:"custom-domains-and-ssl",children:"Custom Domains and SSL"}),"\n",(0,i.jsxs)(n.p,{children:["More details ",(0,i.jsx)(n.a,{href:"https://fly.io/docs/networking/custom-domains-with-fly/",children:"here"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["List your app ip addreses with ",(0,i.jsx)(n.code,{children:"flyctl ips list"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create SSL certificates."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"flyctl certs create mysite.com"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"flyctl certs create www.mysite.com"})})]})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Use the ipv4 address to create an A record in your DNS provider, and the ipv6 address to create a AAAA record. Create a CNAME record for ",(0,i.jsx)(n.code,{children:"www"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"caching-strategies",children:"Caching Strategies"}),"\n",(0,i.jsx)(n.p,{children:"GhostRemix employs a two-pronged caching approach to optimize performance:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remix Application Caching:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Utilizes an in-memory cache for dynamic content."}),"\n",(0,i.jsx)(n.li,{children:"Handles its own cache invalidation for up-to-date data."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Nginx Static Asset Caching (Production only):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Caches static assets (images, CSS, JS) on disk."}),"\n",(0,i.jsx)(n.li,{children:"Reduces load on the Remix application for frequently accessed static content."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This dual strategy ensures efficient handling of both dynamic content and static assets, significantly reducing strain on the Remix application server."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/deployment.mdx",route:"/deployment",timestamp:1719906912e3,pageMap:[{kind:"Meta",data:{index:"Overview",features:"Features","local-development":"Quick Start",deployment:"Deployment",tips:"Tips","vanilla-ghost":"Vanilla Ghost"}},{kind:"MdxPage",name:"deployment",route:"/deployment"},{kind:"MdxPage",name:"features",route:"/features"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"local-development",route:"/local-development"},{kind:"MdxPage",name:"tips",route:"/tips"},{kind:"MdxPage",name:"vanilla-ghost",route:"/vanilla-ghost"}],flexsearch:{codeblocks:!0},title:"Deployment",headings:r},pageNextRoute:"/deployment",nextraLayout:l.ZP,themeConfig:a.Z};n.default=(0,t.j)(d)},2069:function(e,n,s){"use strict";var i=s(5893);s(7294);let t={logo:(0,i.jsx)("span",{children:"Ghost Remix"}),head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:"GhostRemix"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"GhostRemix"}),(0,i.jsx)("meta",{property:"og:description",content:"GhostRemix Documentation"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),project:{link:"https://github.com/mikan-laboratory/ghost-remix"},docsRepositoryBase:"https://github.com/mikan-laboratory/ghost-remix-docs",footer:{text:"Ghost Remix Documentation"}};n.Z=t},5789:function(){}},function(e){e.O(0,[955,888,774,179],function(){return e(e.s=9401)}),_N_E=e.O()}]);
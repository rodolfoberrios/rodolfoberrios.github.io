(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{411:function(e,t,a){"use strict";a.r(t);var r=a(10),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("I've created a new PHP development framework, and I called it "),a("a",{attrs:{href:"https://chevere.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevere"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("This is the second framework I "),a("RouterLink",{attrs:{to:"/_posts/2014/2014-03-14-introducing-g-library.html"}},[e._v("announce")]),e._v(" and I believe that this time I'm better prepared for the challenge. The original idea that I had "),a("RouterLink",{attrs:{to:"/_posts/2013/2013-09-02-the-g-library.html"}},[e._v("the very first time")]),e._v(" is still around and I've been all these years just lurking for more knowledge to make it happen.")],1),e._v(" "),a("p",[e._v("I made it for easing my development, aiming for software meant to be heavily customized and yet highly performing. It is intended to be used for the creation of pluggable software, and it can be progressively implemented in any project.")]),e._v(" "),a("p",[e._v("Chevere is a brand new foundation aiming for PHP 8, "),a("em",[e._v("the ocho")]),e._v(". I made it to use it with application runners (loop, async) and I've taken many strong opinions on its design towards a safer (and better) usage of the PHP programming language.")]),e._v(" "),a("p",[e._v("I named it Chevere with the explicit intention to honor how "),a("a",{attrs:{href:"https://chevereto.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto"),a("OutboundLink")],1),e._v(" pushed me again into another stage of my career, and here we are.")]),e._v(" "),a("blockquote",[a("p",[e._v("Also, the word "),a("a",{attrs:{href:"https://en.wiktionary.org/wiki/ch%C3%A9vere",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("chévere")]),a("OutboundLink")],1),e._v(" literally means terrific, cool, awesome, nifty. Perfect naming.")])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.php.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP"),a("OutboundLink")],1),e._v(" is a programming language, which allows the creation of scripts that can be "),a("em",[e._v("wired")]),e._v(" to do anything. Its most common implementation is to provide website applications hosted in a server providing access to multiple users, which access these applications using a client device (browser).")]),e._v(" "),a("p",[e._v("This basic foundation made PHP capable to power most of the web (yes, the whole internet) that you use everyday, but its popularity is constantly declining in favor of newer technologies.")]),e._v(" "),a("p",[e._v("With Chevere I'm introducing a clean PHP framework that suits the process of pushing PHP beyond the basic known web foundation. It took me years to craft this system architecture, and it accounts all my experience around developing Chevereto. Chevere is all about just better software, and I hope that it also helps others sharing the same mindset.")]),e._v(" "),a("h2",{attrs:{id:"mistakes-made"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mistakes-made"}},[e._v("#")]),e._v(" Mistakes made")]),e._v(" "),a("h3",{attrs:{id:"🤦🏾-bad-planning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🤦🏾-bad-planning"}},[e._v("#")]),e._v(" 🤦🏾 Bad planning")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/chevereto/chevereto-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto V2"),a("OutboundLink")],1),e._v(" was very basic with just three views and even being mostly spaghetti code, I never experienced any maintenance issues because the code base was so small. With "),a("a",{attrs:{href:"https://v3-docs.chevereto.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto V3"),a("OutboundLink")],1),e._v(" I added listings, dashboard panel, users, albums, etc. I thought that the new feature set was large enough for the iteration, I didn't worry about making it extensible.")]),e._v(" "),a("p",[e._v("It happened that V3 brought a huge increase in users which started to suggest many stuff to improve the software. I learned that users wanting to do more with a piece of software of this kind was a very common and broad thing. The more users, the more needs. It is very logic if you think about it.")]),e._v(" "),a("p",[e._v("As I didn't create the software for extensibility, it shortly became a problem and I quickly witnessed how the hype for my software faded away due the lack of advanced customization and my slow pace to deliver trendy features.")]),e._v(" "),a("p",[e._v('Everyday people came with great ideas, but I was hands-tied with the code structure already made and it was very frustrating for me to say "no" to mostly everything. New features and releases starting to take too long, it was maintenance hell.')]),e._v(" "),a("p",[e._v('It was foolish to don\'t embrace change, to assume that "it will do" and try to cover everything on my own.')]),e._v(" "),a("h3",{attrs:{id:"🤤-lack-of-responsibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🤤-lack-of-responsibility"}},[e._v("#")]),e._v(" 🤤 Lack of responsibility")]),e._v(" "),a("p",[e._v("Up to Chevereto V3, I took the well-know "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Front_controller",target:"_blank",rel:"noopener noreferrer"}},[e._v("front controller"),a("OutboundLink")],1),e._v(" mapped to the web server to provide the application. The model was everywhere, and since the market already existed, I assumed that it was OK to rely the responsibility of designing my own application model in favor of choose the market defacto standard. Also, I didn't knew that much about software architecture back then anyway.")]),e._v(" "),a("p",[e._v("My mistake was that I didn't realized how not-standard was the market until I got in the mud, and I experienced first-hand the annoyance of having to deal with each hosting provider doing their own flavoured PHP recipe, targeting a different niche. The hosting market offering became a nightmare for me, and I had to spent a lot of time adapting my software to support the universe of available servers.")]),e._v(" "),a("p",[e._v("I learned how and when to delegate responsibility in the systems that I design, and that mission critical stuff like the server layer must be designed on my entirely discretion.")]),e._v(" "),a("h3",{attrs:{id:"😴-late-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#😴-late-response"}},[e._v("#")]),e._v(" 😴 Late response")]),e._v(" "),a("p",[e._v("I assumed stupid stuff, like that "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/CPanel",target:"_blank",rel:"noopener noreferrer"}},[e._v("cPanel"),a("OutboundLink")],1),e._v(" based shared servers was my only market or that the maintenance hell was how every software works in this world. I also assumed that clients won't look for newer tech, that \"if ain't broke don't fix it\" and basically, I told myself everything needed to resist the need of change.")]),e._v(" "),a("p",[e._v("When VPS offering became cheap as $5/mo I should have jump immediately into that world and "),a("em",[e._v("fuck off")]),e._v(" the previous service model. I wasn't quick enough to forsee how I could benefit from the new server offering and I refused change, just because.")]),e._v(" "),a("p",[e._v("My mistake was that I should have started this new foundation much earlier.")]),e._v(" "),a("h2",{attrs:{id:"the-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-change"}},[e._v("#")]),e._v(" The change")]),e._v(" "),a("h3",{attrs:{id:"😱-everything"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#😱-everything"}},[e._v("#")]),e._v(" 😱 Everything")]),e._v(" "),a("p",[e._v("I needed to change my software to make it customizable enough, from the simple turnkey options up to very specific needs. Must became easier to others to collaborate in all layers, and I must offer a delicate fine-tuned control on the service provisioning so it can be highly optimized.")]),e._v(" "),a("p",[e._v("Nothing was available for my goals, so a new foundation was needed to be created from scratch, forbidding all the old bad habits and embracing change and modern PHP from the beginning.")]),e._v(" "),a("p",[e._v("Thats how I got into the long journey of crafting a new system that can be plugged to the very "),a("em",[e._v("line")]),e._v(', covering from the most basic "what-if" up to complex systems extending their base functionality.')]),e._v(" "),a("h3",{attrs:{id:"🔌-pluggable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔌-pluggable"}},[e._v("#")]),e._v(" 🔌 Pluggable")]),e._v(" "),a("p",[e._v("Chevere is all about being able to create pluggable distributed applications that can be "),a("em",[e._v("wired")]),e._v(" to do "),a("em",[e._v("anything")]),e._v(". Pluggable applications are those in which it is intended to allow extension via adding extra code, think about it as a bunch of wires and switches.")]),e._v(" "),a("p",[e._v("A pluggable architecture is a must have for me because it enables me to put toggles and hooks that will allow me to easily change the code and to distribute these assets. It also enables users to do their own changes and to grow an ecosystem of developers and services around my software.")]),e._v(" "),a("h3",{attrs:{id:"👯-performing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#👯-performing"}},[e._v("#")]),e._v(" 👯 Performing")]),e._v(" "),a("p",[e._v("Adding more bells & whistles turns costumers, but it also means lot of trouble. At first, adding more plugins means more uncertain computing time so the application runtime strategy must be addressed.")]),e._v(" "),a("p",[e._v("I figured out that I had to focus in reducing the bootstrapping operations and isolate the application jobs much as possible. I ended up finding a nice profit by using application runners, which allow to preserve these states for faster runtime operations and the performance is ridiculously great.")]),e._v(" "),a("p",[e._v("I've an "),a("a",{attrs:{href:"https://github.com/chevere/examples/tree/main/03.Http",target:"_blank",rel:"noopener noreferrer"}},[e._v("example script"),a("OutboundLink")],1),e._v(" which you use to test the performance of different runtime strategies for a complete request-response context.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ab -t "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" -c "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v('Table below shows the raw performance vanilla PHP. This measures how "fastest" PHP can go.')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Vanilla "),a("code",[e._v('echo "Hello, World!"')])]),e._v(" "),a("th",[e._v("[#/sec] (mean)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("PHP -S")]),e._v(" "),a("td",[e._v("8477.45")])]),e._v(" "),a("tr",[a("td",[e._v("Apache 2.4")]),e._v(" "),a("td",[e._v("8696.59")])])])]),e._v(" "),a("p",[e._v("Adding stuff on top of vanilla PHP will drastically reduce the performance as shown in the table below, where the application footprint is huge with a reduction of about 90% of vanilla PHP performance.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Chevere "),a("code",[e._v("Hello, <name>!")])]),e._v(" "),a("th",[e._v("[#/sec] (mean)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("PHP -S")]),e._v(" "),a("td",[e._v("419.86")])]),e._v(" "),a("tr",[a("td",[e._v("Apache 2.4")]),e._v(" "),a("td",[e._v("884.46")])])])]),e._v(" "),a("p",[e._v("The reduction is because, even using cache, the system needs to bootstrap everything on every single request.")]),e._v(" "),a("p",[e._v("But when using application runners the bootstrapping remains in the loop and the result is a drastically improvement in application I/O performance.")]),e._v(" "),a("p",[e._v("Table below shows how the application is now faster than vanilla PHP.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Chevere "),a("code",[e._v("Hello, <name>!")])]),e._v(" "),a("th",[e._v("[#/sec] (mean)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("RoadRunner 1.8")]),e._v(" "),a("td",[e._v("11818.71")])]),e._v(" "),a("tr",[a("td",[e._v("Swoole 4.5")]),e._v(" "),a("td",[e._v("13428.49")])])])]),e._v(" "),a("p",[e._v("Amazing isn't? The Chevere application with routing, controller, cache, hooks and a bunch of static code is performing way faster than a bare "),a("code",[e._v('echo "Hello, World!"')]),e._v(" and it is doing it with types and data structures everywhere.")]),e._v(" "),a("p",[e._v("Application runners are "),a("em",[e._v("la zorra")]),e._v(", but the caveat is that code for it must address thread safety and many other considerations. Not a big deal, I've to change everything anyway and the performance improvement totally worth the effort. I'm a "),a("a",{attrs:{href:"https://www.youtube.com/watch?t=63&v=ko1q9xy6PLk",target:"_blank",rel:"noopener noreferrer"}},[e._v("one-man army or not"),a("OutboundLink")],1),e._v("?")]),e._v(" "),a("h3",{attrs:{id:"🧰-tooling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🧰-tooling"}},[e._v("#")]),e._v(" 🧰 Tooling")]),e._v(" "),a("p",[e._v("Chevere is a collection of highly opinionated components that provide the basic tooling needed for the changes I require. Rather offering an application model or even over simplify things, it focus exclusively in the tools.")]),e._v(" "),a("p",[e._v("In Chevere is standard to bring your own stuff and knowledge, as for me each different need suits its own efficient way to develop and present a software system. I don't believe that making fixed application models ease the developers life at all, I believe that such practice narrows you down.")]),e._v(" "),a("p",[e._v("I just can't live with the idea of a fixed application model. What can I say? I like Lego bricks and I hate the little wheels on the side of the bike.")]),e._v(" "),a("h3",{attrs:{id:"🛒-a-different-market"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🛒-a-different-market"}},[e._v("#")]),e._v(" 🛒 A different market")]),e._v(" "),a("p",[e._v("The current server market offering is great, and it gets better very quickly.")]),e._v(" "),a("p",[e._v("Developers can provision elaborated systems, in flexible setups at very good prices. Also, remarkable PHP software have mature enough to provide the modern tooling needed to go wild with this server offering. Projects like "),a("a",{attrs:{href:"https://www.swoole.co.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swoole"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://roadrunner.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RoadRunner"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://reactphp.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactPHP"),a("OutboundLink")],1),e._v(" (just to name a few) are allowing to make it a thing.")]),e._v(" "),a("p",[e._v("This market and new tooling is perfect for me as it enables me to deliver a more sophisticated software solution.")]),e._v(" "),a("h2",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),a("p",[e._v("Development started in 2018-05 and it took long to have it ready to be presented. At this time I'm using it for the development of "),a("a",{attrs:{href:"https://github.com/chevereto/chevereto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto V4"),a("OutboundLink")],1),e._v(" and I will label it for production soon as I feel it is ready.")]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("p",[e._v("Want to use Chevere?! Awesome, go to "),a("a",{attrs:{href:"https://chevere.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("chevere.org"),a("OutboundLink")],1),e._v(" where you can learn everything about it. Everything MIT licensed.")]),e._v(" "),a("p",[e._v("Chances are that you won't have any "),a("em",[e._v("puta")]),e._v(" clue on how to use it anyway. Don't mind, feel free to contact me if you want me to review your existing system and how Chevere could help you.")]),e._v(" "),a("h2",{attrs:{id:"what-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-now"}},[e._v("#")]),e._v(" What now?")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=rRm0NDo1CiY",target:"_blank",rel:"noopener noreferrer"}},[e._v("spoiler"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);
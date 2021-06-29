(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{393:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Nulled is a term used to refer to scripts that don't have any licensing or callback method to let the author know if the installation is legal or not. In other words, it means that a commercial script can be pirated and safely used without being catch. Software developers have a real problem dealing with this because they often base their protection system in obfuscation and that in the long term can be always broken.")]),e._v(" "),a("p",[e._v("A method that can stop this and allow software developers to not being fooled is like ask for the holy grail, well... I think that I've made it and it will debut in Chevereto 3 but I will like to share the method so all the developers can use it freely.")]),e._v(" "),a("p",[e._v("The system is based on the combination of public and private hashes that makes impossible to make legal an illegal installation. Basically each unique download of your software must be associated with a encrypted user id and an unique user hash. The user id must be encrypted because it can be known by a simple _GET request like "),a("code",[e._v("targetwebsite.com?uid")]),e._v(" so you encrypt it to ensure the privacy of your clients. In the other hand, the unique user hash is a random generated string that can't be retrieved by a request to the target website (this is the private part). This means that each user id is associated to an unique user hash in the delivered file to your client and the only persons with access to that information are your client and you.")]),e._v(" "),a("p",[e._v("In your database you will need to keep this user unique hash and add two more hashes: A user complement hash and a final user hash. Key element here is that the final user hash is generated by the combination of the user complement hash + user unique hash. In the end you will have the user id associated with the unique user hash, the user complement hash and the final user hash in your database.")]),e._v(" "),a("p",[e._v("Finally, once you query the target website for the user id you will do a new _GET request to this website in the form of "),a("code",[e._v("targetwebsite.com?generateHash=<user\\_complement\\_hash>")]),e._v(" which will ask the target website to generate the final user hash using the private hash (unique user hash) and the supplied user complement hash, if the final user hash doesn't match the one in your database it means that the installation has been altered and therefore is illegal.")]),e._v(" "),a("p",[e._v("The target website will only return a generated hash and the only person in the world that know the expected result is the author. If in any point the system doesn't return anything or it returns random data then you automatically know that the target installation is trying to fool the system and therefore is illegal. Add that to licensing statements that grant you full control over the permissions to use your software and they will be done.")]),e._v(" "),a("p",[e._v("The only way in that a target installation could be labeled as legal is that the user id is associated to the correct user unique hash and that means that you can find the person who is leaking your software because there will be a lot of installations running the same user. This means that they will running time bombs ready to be taken down.")]),e._v(" "),a("p",[e._v("If a installation is labeled as illegal then you only need to do a WHOIS to the server IP and send complaints to the host and data centers. Eventually they will end up using hosting services in countries like Pakistan or Vietnam where they don't care about copyright and that means a little pain in the ass for them.")]),e._v(" "),a("p",[e._v("I hope that developers out there find this method useful and feel free to ask me details about it.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
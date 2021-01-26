/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2012/10/27/santiago-chile/index.html",
    "revision": "e44fd92c69f0f201e91cb71c115380b3"
  },
  {
    "url": "2012/12/03/a-system-to-stop-being-nulled/index.html",
    "revision": "5e90a869d7312d7c0ec0acb4253176e7"
  },
  {
    "url": "2013/04/06/junkstr-pitch/index.html",
    "revision": "c26f37743f35cd7f76cd1cbcfb3785c1"
  },
  {
    "url": "2013/07/08/chevereto-cumple-6-anos/index.html",
    "revision": "354d48f4ff42f10ec481f48e042a81df"
  },
  {
    "url": "2013/09/02/the-g-library/index.html",
    "revision": "a46f023474a7a1f41f276ef18c04ffea"
  },
  {
    "url": "2013/09/19/pre-presentando-junkstr/index.html",
    "revision": "dd49a9a6e14357bda46f2d95db99ac1f"
  },
  {
    "url": "2013/11/23/hola-junkstr/index.html",
    "revision": "46d76b2aec00bdbc5b6ba887fa185e31"
  },
  {
    "url": "2013/12/07/vendiendo-700-lucas-en-cachureos/index.html",
    "revision": "4855d9ef7cf0d08768272bf21bce050d"
  },
  {
    "url": "2014/03/14/introducing-g-library/index.html",
    "revision": "d73797d903ac4e0be9d92b47caa02e44"
  },
  {
    "url": "2014/04/18/chevereto-3/index.html",
    "revision": "8eba261608004918e3bf751601b01c33"
  },
  {
    "url": "2015/02/11/a-word-on-quickty-chevereto-and-chevereme/index.html",
    "revision": "af66cad850d3f37b2fc537f94fecb0b2"
  },
  {
    "url": "2015/03/21/client-side-based-file-storage-encryption/index.html",
    "revision": "19c7d4c2349f9870da4d613e34b960e6"
  },
  {
    "url": "2015/06/07/quickty-is-already-under-development/index.html",
    "revision": "6b7e0c56fa3681490f35a8b5a1921edc"
  },
  {
    "url": "2015/08/05/quickty-dev-update-1/index.html",
    "revision": "73ef00f69beca9b94fa7c4a9afb31eb2"
  },
  {
    "url": "2015/09/03/quickty-dev-update-2/index.html",
    "revision": "70ecbe7e956a8682bb7261375c1b07d6"
  },
  {
    "url": "2016/05/14/quickty-dev-update-3/index.html",
    "revision": "e74968ea09c802a19930f37a541d5bbe"
  },
  {
    "url": "2016/09/07/quickty-dev-update-4/index.html",
    "revision": "1e38324bd29b5206db951511cfc4d6e0"
  },
  {
    "url": "2017/01/11/quickty-promo/index.html",
    "revision": "fb4bf20430ebd8206146a160a435b2a5"
  },
  {
    "url": "2017/08/08/sorry-quickty-wont-happen/index.html",
    "revision": "6c2aaef3d80a5f9ed84d91db2157d37e"
  },
  {
    "url": "2020/07/09/vuelvo-a-bloguear/index.html",
    "revision": "e05a81175f4ed86b0ebad5c56ade98f4"
  },
  {
    "url": "2020/07/23/hello-chevere/index.html",
    "revision": "9d3e449255a24effb54936038c93142c"
  },
  {
    "url": "2020/08/03/la-senda-del-chevere/index.html",
    "revision": "d04b82d1ac44243a38668dd3da18398f"
  },
  {
    "url": "2021/01/20/thoughts-on-monetize-chevereto-installations/index.html",
    "revision": "4ebfae96e1fc042b456ac5456c8f8344"
  },
  {
    "url": "404.html",
    "revision": "2fcf1b925fe878146d38746b2a0fcb31"
  },
  {
    "url": "assets/css/0.styles.bb9230d4.css",
    "revision": "5e6dfa15045b275f307a3d19714c2861"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.579a020c.js",
    "revision": "592d0b058aeeb093e5dbd84d88cd5f6e"
  },
  {
    "url": "assets/js/11.39cefc6e.js",
    "revision": "1e83b898cdc26d2086939ae5376ed677"
  },
  {
    "url": "assets/js/12.910a1d27.js",
    "revision": "7a1c140ac6ae27335ea075aaf27cc6ae"
  },
  {
    "url": "assets/js/13.d3833eb2.js",
    "revision": "302a8592b193a15a86fcd31b276a1144"
  },
  {
    "url": "assets/js/14.b3957374.js",
    "revision": "0a013a382095ebbba9ddcf616e29c5dc"
  },
  {
    "url": "assets/js/15.b6136d87.js",
    "revision": "424c2cd72f170dd68fd7ecacdb62742f"
  },
  {
    "url": "assets/js/16.e5f086ba.js",
    "revision": "9b379319cb52152e0ff25d10cbf7d4a9"
  },
  {
    "url": "assets/js/17.f0bc7b39.js",
    "revision": "c4346d65a278a11a6935d0b04fd0ed6b"
  },
  {
    "url": "assets/js/18.2fa42dee.js",
    "revision": "69519d63887d4479f6896154dd522274"
  },
  {
    "url": "assets/js/19.cb232cc5.js",
    "revision": "2a45a97fb81c3c28b23dacce23ca2bed"
  },
  {
    "url": "assets/js/20.132eabc4.js",
    "revision": "59241b313dc35e490afe9094ccac8809"
  },
  {
    "url": "assets/js/21.0aeceaa2.js",
    "revision": "26ef7d2a820978527c1a6648ee47616b"
  },
  {
    "url": "assets/js/22.c2fcef65.js",
    "revision": "b699bafd199fb028286c9e895bbcbe2d"
  },
  {
    "url": "assets/js/23.6589ddce.js",
    "revision": "bf3fa7e2ec5df35a26528f4075a2e5cc"
  },
  {
    "url": "assets/js/24.15786789.js",
    "revision": "1a92845c92705a224ac258e0d0fddc67"
  },
  {
    "url": "assets/js/25.97e355d4.js",
    "revision": "ecb838d77ab7b329c0f7a9bfce30c41c"
  },
  {
    "url": "assets/js/26.0d7d17f9.js",
    "revision": "ea2e324f53cfd58231bee35d2b0206fe"
  },
  {
    "url": "assets/js/27.2ca2fa04.js",
    "revision": "a410a4efc80c0f58f102250a6e502ca6"
  },
  {
    "url": "assets/js/28.795bcda1.js",
    "revision": "d1969d3a54be826c3705d1c45d7bccd5"
  },
  {
    "url": "assets/js/29.55283504.js",
    "revision": "fe6e0507edb42375d4a3a4f25a6ff880"
  },
  {
    "url": "assets/js/3.e750938b.js",
    "revision": "acd0bc24df2ad1c3730eea464dd0ab18"
  },
  {
    "url": "assets/js/30.7533e3ab.js",
    "revision": "4369549332c07296ee0936139f1eccd2"
  },
  {
    "url": "assets/js/31.47677ad3.js",
    "revision": "03aac476fb96dbbbec5f47d8587fcdc9"
  },
  {
    "url": "assets/js/32.13b2a1b9.js",
    "revision": "3e469d5aa6f70af6499715fe6e4962ac"
  },
  {
    "url": "assets/js/33.85c5c6bb.js",
    "revision": "4c108689c6dc1d28d921a1269adf6d7b"
  },
  {
    "url": "assets/js/34.508b9d17.js",
    "revision": "0cff2566cb6e0273e5c05098ed1b9267"
  },
  {
    "url": "assets/js/35.6f864f21.js",
    "revision": "036a749d80794140284e3c93ae614daf"
  },
  {
    "url": "assets/js/36.379f8fba.js",
    "revision": "aedca36c4a40ac0e6d342b7dd74bb6a4"
  },
  {
    "url": "assets/js/4.37438387.js",
    "revision": "27817697483a0870ed5f5d609be2c147"
  },
  {
    "url": "assets/js/5.db66fbf1.js",
    "revision": "995c18f53e55f7cbbf5c540171029881"
  },
  {
    "url": "assets/js/6.84508d75.js",
    "revision": "b4a12875557ac4b5d15530e3410995df"
  },
  {
    "url": "assets/js/7.354c96b4.js",
    "revision": "ea005b255c6d4cf7f432578af5983244"
  },
  {
    "url": "assets/js/8.ca4aefb5.js",
    "revision": "7130c2021c33edc76f620a1d3e4ac592"
  },
  {
    "url": "assets/js/9.7c7e7a48.js",
    "revision": "320214dc27c1db6d80a5c9a4a2732c5c"
  },
  {
    "url": "assets/js/app.f7dc1cf5.js",
    "revision": "533604ec8eed942a520877c65be235bd"
  },
  {
    "url": "assets/js/vuejs-paginate.1bb16de9.js",
    "revision": "d83b731fb449be9dadfbf1e4e2600de9"
  },
  {
    "url": "avatars/oma.jpg",
    "revision": "edaaec1a9ab0771576a2a14597e184db"
  },
  {
    "url": "avatars/rodolfo.jpg",
    "revision": "35bd164554a594eb53d8d5181ee1cba7"
  },
  {
    "url": "avatars/sape.jpg",
    "revision": "a4ca4c311543a9fef3867e9d30fabc13"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "587cdb7dc91723624b4e9b0308e8ed86"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "22647cbe600157b161a1b61605091697"
  },
  {
    "url": "index.html",
    "revision": "9af9a67dcd62c4d3c629b4abb25b58bb"
  },
  {
    "url": "logo.png",
    "revision": "e55ecfc6b9faac2d9bc91601571e85e3"
  },
  {
    "url": "page/2/index.html",
    "revision": "9ac9c2aa8013b37bcd8fe2290359c7b9"
  },
  {
    "url": "page/3/index.html",
    "revision": "5106e8bd15ea3384865adf96580353df"
  },
  {
    "url": "page/4/index.html",
    "revision": "db513ae02460f2a72f6907d0afc0a586"
  },
  {
    "url": "photos/2012-hacker.jpg",
    "revision": "879b2522e8a7b118560800a552e0f788"
  },
  {
    "url": "photos/2012-santiago-chile.jpg",
    "revision": "b1e297ce4f37afefa9ac5a0497a6bd19"
  },
  {
    "url": "photos/2013-700-lucas-en-cachureos.jpg",
    "revision": "bccedd961878fdb683f9509c87c78dc5"
  },
  {
    "url": "photos/2013-chevereto-2.png",
    "revision": "20964c2b0ffbdb3743d749cb6a2b4121"
  },
  {
    "url": "photos/2013-fat-rodolfo-next-to-the-ducky.jpg",
    "revision": "96c352f4d94720b0572a1c7982927f86"
  },
  {
    "url": "photos/2013-g.png",
    "revision": "bc0edd26f1d8ce8d0d4ff74df65b1d8c"
  },
  {
    "url": "photos/2013-junkstr-definido.jpg",
    "revision": "f3190f8c5c7776e3c6ca95b54971e2b8"
  },
  {
    "url": "photos/2013-junkstr-pitch-2.jpg",
    "revision": "36d8fbd19c9edf18804310659d945bca"
  },
  {
    "url": "photos/2013-junkstr-pitch-3.jpg",
    "revision": "8898f0886e3829bb2b6700e0df919cdc"
  },
  {
    "url": "photos/2013-junkstr-pitch.jpg",
    "revision": "4cbd84350104bde3f56fe9b88866ca8d"
  },
  {
    "url": "photos/2014-chevereto-3.jpg",
    "revision": "bff9203e19a8a94a42f4ef1c4dcf88c7"
  },
  {
    "url": "photos/2015-encryption.jpg",
    "revision": "eda7bfbe75c360f689f88616f5700f73"
  },
  {
    "url": "photos/2015-quickty-contacts.png",
    "revision": "7cf2045b20729dea01a6c40c22699310"
  },
  {
    "url": "photos/2015-quickty-logo.png",
    "revision": "06b17fed8208d54c4ab368d85210f407"
  },
  {
    "url": "photos/2015-quickty-peafowl.png",
    "revision": "7bf617c013399432d3fbb31b602d8a44"
  },
  {
    "url": "photos/2015-quickty-singup.png",
    "revision": "72799bca2a8744546394f32a53e46593"
  },
  {
    "url": "photos/2016-quickty-growl.png",
    "revision": "ae88112869f8417ece09130a9fc80bfb"
  },
  {
    "url": "photos/2016-quickty-zoom.png",
    "revision": "f1f9e7f691cd3c936bc14a26c72b91ce"
  },
  {
    "url": "photos/2017-nothing-to-see.jpg",
    "revision": "efe7e5bc76bb36d4dacf8bac56bde038"
  },
  {
    "url": "photos/2017-quickty-promo.png",
    "revision": "30c67d43cdd9bb631b6ae74e3a264a3d"
  },
  {
    "url": "photos/2020-chevere.png",
    "revision": "729b81b4686ff994054e285e91b65259"
  },
  {
    "url": "photos/2020-feels-good-man.jpg",
    "revision": "6e2773ef6e8f7538207206f50a119e43"
  },
  {
    "url": "photos/2020-jesus.jpg",
    "revision": "1fcef78f4e25a82d1803fc9faae15dda"
  },
  {
    "url": "photos/2020-ronco-retes.jpg",
    "revision": "28498c1c688c96819719d1aec99cd315"
  },
  {
    "url": "photos/2020-ruleta.jpg",
    "revision": "2a4012aaa0240980d873f8814a365064"
  },
  {
    "url": "photos/2020-still-dre.gif",
    "revision": "99c235afcc5ab530eb6b482544fe10d2"
  },
  {
    "url": "photos/2021-money.jpg",
    "revision": "d96c4b0258ed951004f445f7e602eb13"
  },
  {
    "url": "tag/🇨🇱start-up/index.html",
    "revision": "6a550c8c84eacf743d1cdff6905f7452"
  },
  {
    "url": "tag/✊🏾resurrecting/index.html",
    "revision": "f3bdfbf79ea557079cec3153a4af14bf"
  },
  {
    "url": "tag/🌎world-domination/index.html",
    "revision": "72e61946657a65769904eea8ede70d82"
  },
  {
    "url": "tag/🎉celebration/index.html",
    "revision": "9899e101d37cefbbfa8242662644378e"
  },
  {
    "url": "tag/🐘php/index.html",
    "revision": "28df86da2de29b1faa72444a53e13e2c"
  },
  {
    "url": "tag/👨🏾‍💻development/index.html",
    "revision": "832d66cf7469f9d8a4fb432d7395adcc"
  },
  {
    "url": "tag/👴🏾experience/index.html",
    "revision": "e50b88b9aaea9dee170cbb251693048f"
  },
  {
    "url": "tag/💔broken-harts/index.html",
    "revision": "71c367d94724a7b45763b03a313abb21"
  },
  {
    "url": "tag/💻systems/index.html",
    "revision": "1da6a4d6ec20e10b8a8c8d7e6b6c436c"
  },
  {
    "url": "tag/📸photos/index.html",
    "revision": "3d2ebfda4dea37a70b376ccc85fd59a0"
  },
  {
    "url": "tag/🤑money-making/index.html",
    "revision": "589c276992d4518970b08f0818ec13c8"
  },
  {
    "url": "tag/🤭fat-rodolfo/index.html",
    "revision": "97fcc7d1c20524b43df53f3e8a76a063"
  },
  {
    "url": "tag/🤯showtime/index.html",
    "revision": "bc59a50d4ec3039d3b12fee8d7cf8095"
  },
  {
    "url": "tag/🧪experiments/index.html",
    "revision": "65621640ab33e1f7f94ee608747f6a61"
  },
  {
    "url": "tag/index.html",
    "revision": "82b712660589d4a88b0d610b28aa9019"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

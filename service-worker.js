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
    "revision": "982a9940944279e6744a7ec01c267690"
  },
  {
    "url": "2012/12/03/a-system-to-stop-being-nulled/index.html",
    "revision": "4790e2981cfa5e09cf2c43e8daf35625"
  },
  {
    "url": "2013/04/06/junkstr-pitch/index.html",
    "revision": "b7959b0db4991049c19953aeb7430a6a"
  },
  {
    "url": "2013/07/08/chevereto-cumple-6-anos/index.html",
    "revision": "6ff0654a866e25124e4d1f043fc8129a"
  },
  {
    "url": "2013/09/02/the-g-library/index.html",
    "revision": "e93024fe45c9525e6da9154ee8bc90cb"
  },
  {
    "url": "2013/09/19/pre-presentando-junkstr/index.html",
    "revision": "d2c4f78e525b1bdf18caebf69bbe7f30"
  },
  {
    "url": "2013/11/23/hola-junkstr/index.html",
    "revision": "23d14f76950bb90d97fc61929861cb57"
  },
  {
    "url": "2013/12/07/vendiendo-700-lucas-en-cachureos/index.html",
    "revision": "68973dc83fa621a096f3672e4bb2f2eb"
  },
  {
    "url": "2014/03/14/introducing-g-library/index.html",
    "revision": "148260ecc86e9f05170dc44f433b67d1"
  },
  {
    "url": "2014/04/18/chevereto-3/index.html",
    "revision": "b3c5e855f92eebbe7103b3eec1d3049a"
  },
  {
    "url": "2015/02/11/a-word-on-quickty-chevereto-and-chevereme/index.html",
    "revision": "430d0f5391e384c75bd04aaf65c61dc5"
  },
  {
    "url": "2015/03/21/client-side-based-file-storage-encryption/index.html",
    "revision": "13a56466b4196686c18226052c7dd70e"
  },
  {
    "url": "2015/06/07/quickty-is-already-under-development/index.html",
    "revision": "72c51aa0af09a28050d18845d1ad0931"
  },
  {
    "url": "2015/08/05/quickty-dev-update-1/index.html",
    "revision": "d3c169f379a605f24ff1b0af71f80e95"
  },
  {
    "url": "2015/09/03/quickty-dev-update-2/index.html",
    "revision": "f9c6732d26362227ebdd481210a94bc2"
  },
  {
    "url": "2016/05/14/quickty-dev-update-3/index.html",
    "revision": "24286519b641b43ab9c590de148061f8"
  },
  {
    "url": "2016/09/07/quickty-dev-update-4/index.html",
    "revision": "0c46261d7131bd5d44b4ff1d45f0d0ea"
  },
  {
    "url": "2017/01/11/quickty-promo/index.html",
    "revision": "839705df2bec472c165801172bc88aa2"
  },
  {
    "url": "2017/08/08/sorry-quickty-wont-happen/index.html",
    "revision": "ae2c8acf55f57321854dc800eeb8ea33"
  },
  {
    "url": "2020/07/09/vuelvo-a-bloguear/index.html",
    "revision": "bf4cadaa6930217574a9cb271f5cda36"
  },
  {
    "url": "2020/07/23/hello-chevere/index.html",
    "revision": "ac66d3aaf1fd051e3117af9668cb7eb4"
  },
  {
    "url": "2020/08/03/la-senda-del-chevere/index.html",
    "revision": "4b72596af0818688dc1c61cdd51748dd"
  },
  {
    "url": "2021/01/20/monetize-your-chevereto-installation/index.html",
    "revision": "55985fb33126ce9d75789a71f59f184d"
  },
  {
    "url": "2021/02/03/monetizing-chevereto/index.html",
    "revision": "c295378fbdd293eebcc9261282ac3a86"
  },
  {
    "url": "2021/02/14/designing-better-tech-support/index.html",
    "revision": "63f937998594caacd81bd555b4ebcb84"
  },
  {
    "url": "2021/06/25/adios-chevereto-free/index.html",
    "revision": "6e7e49c08e3dc3dd1bc88e8d18d47408"
  },
  {
    "url": "404.html",
    "revision": "077abae6d3ae913a4625ae4e51d09e2b"
  },
  {
    "url": "assets/css/0.styles.7d608e16.css",
    "revision": "cf15efc2fdb1918cb313e03480ce8786"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.85247b00.js",
    "revision": "72efa4def24a0574b7d426fbd5296bfd"
  },
  {
    "url": "assets/js/11.5bbb0b4b.js",
    "revision": "0627a7983c529038d9d233cb3b235f0e"
  },
  {
    "url": "assets/js/12.62366ef0.js",
    "revision": "0525ced17ef4269aa0868bfa769ad190"
  },
  {
    "url": "assets/js/13.986827f7.js",
    "revision": "74dd975650f32d24613c1d922298e8a1"
  },
  {
    "url": "assets/js/14.83cefccc.js",
    "revision": "db0dc6dd45f2973efd326c0c73aeba13"
  },
  {
    "url": "assets/js/15.c08d2afb.js",
    "revision": "6d3f1f502d550b3b45ba626828133968"
  },
  {
    "url": "assets/js/16.a710e083.js",
    "revision": "3fc569563ec123cc513deffcac51d6da"
  },
  {
    "url": "assets/js/17.6d6a969f.js",
    "revision": "b26978b90cad7a4d7f693a36a9b1f2f2"
  },
  {
    "url": "assets/js/18.a8a06e4b.js",
    "revision": "fd6d34a66ceba7c769ec40b1e8e21350"
  },
  {
    "url": "assets/js/19.3a136fca.js",
    "revision": "bccc71635b7b389229ecf5de4c3f21fc"
  },
  {
    "url": "assets/js/20.8e63f1a7.js",
    "revision": "9044ec7ec29dd63d1a4dc632856884cf"
  },
  {
    "url": "assets/js/21.90ed70c0.js",
    "revision": "13708231e1290ecde8dedf04d7531b96"
  },
  {
    "url": "assets/js/22.2a39d114.js",
    "revision": "383d5f645c0499be21c938c1113bae53"
  },
  {
    "url": "assets/js/23.6cd25bfe.js",
    "revision": "f2f53194e0ed8559eb4758f7ef706c11"
  },
  {
    "url": "assets/js/24.59fb251d.js",
    "revision": "eed6c27ead1d151a81bbdb6d8174c0f0"
  },
  {
    "url": "assets/js/25.2b6cc98f.js",
    "revision": "553a758093b66ce377d2b3dd42ca9bc6"
  },
  {
    "url": "assets/js/26.8ebfae45.js",
    "revision": "888f43396a8fbde646fd328195f41a4e"
  },
  {
    "url": "assets/js/27.00f863b7.js",
    "revision": "be4aa1b1f0613967a1a777078cab04e0"
  },
  {
    "url": "assets/js/28.668cb952.js",
    "revision": "f29a045a638550e227fb503b72694843"
  },
  {
    "url": "assets/js/29.5114e2d7.js",
    "revision": "c74eee32e8cc6366ff85bb2c1c09fbf0"
  },
  {
    "url": "assets/js/3.3cfb46c9.js",
    "revision": "37798100be8f63cbe9cca71883ea7df3"
  },
  {
    "url": "assets/js/30.866348e7.js",
    "revision": "77a3b61d18f3904ecf9ac99bf2a9c2ab"
  },
  {
    "url": "assets/js/31.f0a76c40.js",
    "revision": "f136fe3ebffcffbe43bfb460bc7a7eec"
  },
  {
    "url": "assets/js/32.242ff2af.js",
    "revision": "8d0da3a74c29785d3307b125b30359c8"
  },
  {
    "url": "assets/js/33.dab463c3.js",
    "revision": "06c2a90a53963f717ce146448ff06a0f"
  },
  {
    "url": "assets/js/34.b0dc2892.js",
    "revision": "6e6a7ed248585797f700e842cac31313"
  },
  {
    "url": "assets/js/35.6ae48914.js",
    "revision": "0ec48f6109b6938a5b5d4db229417376"
  },
  {
    "url": "assets/js/36.26d1a111.js",
    "revision": "4588f1ebc94ce1f2ae9ff176402753f9"
  },
  {
    "url": "assets/js/37.c743a636.js",
    "revision": "2469bf468800222d9f9b960740c9a039"
  },
  {
    "url": "assets/js/38.9091cbf2.js",
    "revision": "70416fe15a8ccd3b5a63372508f74c94"
  },
  {
    "url": "assets/js/39.a35d1074.js",
    "revision": "ab6df605a2dddd2c6af90159e8ba006c"
  },
  {
    "url": "assets/js/4.e66e99e3.js",
    "revision": "0a65bcb3ed6032f4c485db24974b9e25"
  },
  {
    "url": "assets/js/5.0b9ee17b.js",
    "revision": "4edefd13bc54b3c49fc05820fbd55fd0"
  },
  {
    "url": "assets/js/6.da69e2a7.js",
    "revision": "fffa2ad94c9ca45e1823f9ff1cbde35d"
  },
  {
    "url": "assets/js/7.0e7c8b30.js",
    "revision": "50057ed282f7355f903928f5855ebcd7"
  },
  {
    "url": "assets/js/8.014d1ca1.js",
    "revision": "0b85535e2e9ad3f50062177cbfdc1391"
  },
  {
    "url": "assets/js/9.a44cda3b.js",
    "revision": "1eb039f49ad5317c1ae3b01d8cd97a76"
  },
  {
    "url": "assets/js/app.4565c5cc.js",
    "revision": "705969cd6defc594ef7e66c5f0ca7e1c"
  },
  {
    "url": "assets/js/vuejs-paginate.f29279fa.js",
    "revision": "ebceb669a4647fd8bbf13a0ffb5763a2"
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
    "revision": "5601daa2573b6ae577d698909d06f69b"
  },
  {
    "url": "logo.png",
    "revision": "e55ecfc6b9faac2d9bc91601571e85e3"
  },
  {
    "url": "page/2/index.html",
    "revision": "0c3a23d8f319c0e6ecacf90267d828b6"
  },
  {
    "url": "page/3/index.html",
    "revision": "b9b6e2982633cd531bc3f2915a6492dd"
  },
  {
    "url": "page/4/index.html",
    "revision": "2c5e42ecd5493282eafeebb87148bec1"
  },
  {
    "url": "page/5/index.html",
    "revision": "f2f4d5de0c79c579ebfe7ca0f9ebb37d"
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
    "url": "photos/2021-chevereto-free.jpeg",
    "revision": "c4aa0523e4ea6192adddbc5eb9e194ae"
  },
  {
    "url": "photos/2021-don-sata.jpeg",
    "revision": "d4df29a00cd4f03163b03c128f259476"
  },
  {
    "url": "photos/2021-monetize.png",
    "revision": "276b1781c23fc8585767f87589f83f60"
  },
  {
    "url": "photos/2021-money.jpg",
    "revision": "d96c4b0258ed951004f445f7e602eb13"
  },
  {
    "url": "tag/🇨🇱start-up/index.html",
    "revision": "0ca5b231e15f6b8937e9b9a1b4765e91"
  },
  {
    "url": "tag/✊🏾resurrecting/index.html",
    "revision": "25e9f6c5fd35d023f2a430cf4041dbd9"
  },
  {
    "url": "tag/🌎world-domination/index.html",
    "revision": "ee7619d8d4720bf86e879803a5ca1bdb"
  },
  {
    "url": "tag/🎉celebration/index.html",
    "revision": "2c5f07807d45f440445c83cbf3f4646f"
  },
  {
    "url": "tag/🐘php/index.html",
    "revision": "adac163e11d532213d0e8da5b3a51832"
  },
  {
    "url": "tag/👨🏾‍💻development/index.html",
    "revision": "7bfead96c002e81c8886f987fd19f2c2"
  },
  {
    "url": "tag/👨🏾‍💼business/index.html",
    "revision": "432eeb0794ea1593a64459af5f63c6d7"
  },
  {
    "url": "tag/👴🏾experience/index.html",
    "revision": "02d2ca9743d0a627de937a4403f357ed"
  },
  {
    "url": "tag/💔broken-harts/index.html",
    "revision": "5ec432f1f13bdda8c64914da1e60312c"
  },
  {
    "url": "tag/💻systems/index.html",
    "revision": "83c9e6d5fa8868c39c9040136266f152"
  },
  {
    "url": "tag/📸photos/index.html",
    "revision": "034e98bda81dd9ee32fafce9dac8bd67"
  },
  {
    "url": "tag/🤑money-making/index.html",
    "revision": "474c76020a050e5ecd0792b2b3d87942"
  },
  {
    "url": "tag/🤭fat-rodolfo/index.html",
    "revision": "2060e7c51365ecd46409aedc38951878"
  },
  {
    "url": "tag/🤯showtime/index.html",
    "revision": "dcc519a21d085fa1245b8b8e24810027"
  },
  {
    "url": "tag/🧪experiments/index.html",
    "revision": "2c120958297201bff21c5dea60842f34"
  },
  {
    "url": "tag/index.html",
    "revision": "9e0a45644bbdf89e27a4ad9284faa64c"
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

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"8eDR":[function(require,module,exports) {
"use strict";module.exports=function(t){return null==t};
},{}],"jYt2":[function(require,module,exports) {
"use strict";module.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0};
},{}],"NS5K":[function(require,module,exports) {
var global = arguments[3];
var o=arguments[3],e=o.Symbol,t=require("./shams");module.exports=function(){return"function"==typeof e&&("function"==typeof Symbol&&("symbol"==typeof e("foo")&&("symbol"==typeof Symbol("bar")&&t())))};
},{"./shams":"jYt2"}],"js02":[function(require,module,exports) {
"use strict";var t=Object.prototype.toString,r=require("has-symbols")();if(r){var e=Symbol.prototype.toString,o=/^Symbol\(.*\)$/,l=function(t){return"symbol"==typeof t.valueOf()&&o.test(e.call(t))};module.exports=function(r){if("symbol"==typeof r)return!0;if("[object Symbol]"!==t.call(r))return!1;try{return l(r)}catch(e){return!1}}}else module.exports=function(t){return!1};
},{"has-symbols":"NS5K"}],"rytr":[function(require,module,exports) {
"use strict";module.exports=function(t){return"object"==typeof t&&null!==t};
},{}],"xIVz":[function(require,module,exports) {
module.exports=t;var o=Object.prototype.toString;function t(t){var n=o.call(t);return"[object Function]"===n||"function"==typeof t&&"[object RegExp]"!==n||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)}
},{}],"N+lq":[function(require,module,exports) {
"use strict";var r=require("is-nil"),t=require("is-symbol"),i=require("is-object"),e=require("is-function");module.exports=function(n){if("string"==typeof n)return n;if(r(n))return"";if(t(n))return Symbol.prototype.toString.call(n);if(i(n)&&e(n.toString))return n.toString();var o=""+n;return"0"===o&&1/n==-1/0?"-0":o};
},{"is-nil":"8eDR","is-symbol":"js02","is-object":"rytr","is-function":"xIVz"}],"6g8G":[function(require,module,exports) {
function e(e,n,o){return n<o?e<n?n:e>o?o:e:e<o?o:e>n?n:e}module.exports=e;
},{}],"0DjP":[function(require,module,exports) {
"use strict";var e=require("is-nil"),r=require("is-symbol"),t=require("is-object"),i=require("is-function"),s=NaN;module.exports=function(n){if(e(n))return 0;var u=typeof n;if("number"===u)return n;if("boolean"===u)return n?1:0;if(r(n))return s;if(t(n)){var a=i(n.valueOf)?n.valueOf():n;n=t(a)?a+"":a}return"string"!==(u=typeof n)?"number"===u?n:parseInt(n,10):(n=n.replace(/^\s+|\s+$/g,""),/^0b[01]+$/i.test(n)?parseInt(n.slice(2),2):/^0o[0-7]+$/i.test(n)?parseInt(n.slice(2),8):/^0x[0-9a-f]+$/i.test(n)?parseInt(n.slice(2),16):/^0b/i.test(n)||/^0o/i.test(n)||/^[\+\-]?0x/i.test(n)?s:parseInt(n,10))};
},{"is-nil":"8eDR","is-symbol":"js02","is-object":"rytr","is-function":"xIVz"}],"Lq4l":[function(require,module,exports) {
"use strict";module.exports=9007199254740991;
},{}],"fgwm":[function(require,module,exports) {
"use strict";var e=require("clamp"),r=require("to-integer"),i=require("max-safe-int"),n=-i;function t(i,n,t,m){return"number"!=typeof i&&(i=r(i)),isNaN(i)||!isFinite(i)?m?n:t:e(i,n,t)}module.exports=function(e){e?e.inspected||(e.min=t(e.min,n,i,!0),e.max=t(e.max,n,i,!1)):e={min:n,max:i};var r=e.min,m=e.max;return r>m&&(r^=m,r^=m^=r),Math.round(Math.random()*(m-r))+r},module.exports.fixme=t;
},{"clamp":"6g8G","to-integer":"0DjP","max-safe-int":"Lq4l"}],"N0EC":[function(require,module,exports) {
"use strict";var e=require("random-integral"),i=require("max-safe-int");module.exports=function(m){return m?m.inspected||(m.min=e.fixme(m.min,0,i,!0),m.max=e.fixme(m.max,0,i,!1)):m={min:0,max:i},m.inspected=!0,e(m)},module.exports.fixme=e.fixme;
},{"random-integral":"fgwm","max-safe-int":"Lq4l"}],"m6QL":[function(require,module,exports) {
"use strict";var r=require("is-nil"),e=require("is-object"),l=require("to-str"),o=require("random-natural"),p={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"~!@#$%^&()*_+-={}[]"};p.alpha=p.lower+p.upper,p.all=p.lower+p.upper+p.number+p.symbol,module.exports=function(u){var a;return e(u)||(r(u)?u={pool:p.all}:(u=l(u),u={pool:p[u]||u})),a=u.pool?u.pool:u.lower?p.lower:u.upper?p.upper:u.alpha?p.alpha:u.number?p.number:u.symbol?p.symbol:p.all,(a=l(a)).charAt(o({min:0,max:a.length-1,inspected:!0}))};
},{"is-nil":"8eDR","is-object":"rytr","to-str":"N+lq","random-natural":"N0EC"}],"6irN":[function(require,module,exports) {
"use strict";var r=require("clamp"),e=require("is-object"),o=require("to-integer"),i=require("random-char"),n=require("random-natural");module.exports=function(t){var a=e(t)?t.length:t;a?(a=o(a),a=r(a,2,3)):a=n({min:2,max:3});for(var u,l="",m=0;m<a;m++)l+=u=0===m?i({pool:"bcdfghjklmnprstvwzaeiou"}):-1==="bcdfghjklmnprstvwz".indexOf(u)?i({pool:"bcdfghjklmnprstvwz"}):i({pool:"aeiou"});return l};
},{"clamp":"6g8G","is-object":"rytr","to-integer":"0DjP","random-char":"m6QL","random-natural":"N0EC"}],"TuHE":[function(require,module,exports) {
"use strict";var r=require("clamp"),e=require("random-natural"),n=require("random-syllable"),a=2,i=18;module.exports=function(l){var m=(l=l||{syllables:e({min:1,max:3,inspected:!0})}).length,s=l.syllables,t="";if(s){for(var u=0;u<s;u++)t+=n();return t.substring(0,i)}for(m||!l.min&&!l.max||(m=e({min:l.min||a,max:l.max||i})),m=m||e({min:a,max:i,inspected:!0}),m=r(m,a,i);t.length<m;)t+=n();return t.substring(0,m)};
},{"clamp":"6g8G","random-natural":"N0EC","random-syllable":"6irN"}],"q+AJ":[function(require,module,exports) {
module.exports=["aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","ac","academy","accenture","accountant","accountants","aco","actor","ad","adac","ads","adult","ae","aeg","aero","aetna","af","afamilycompany","afl","africa","ag","agakhan","agency","ai","aig","aigo","airbus","airforce","airtel","akdn","al","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","am","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","ao","aol","apartments","app","apple","aq","aquarelle","ar","arab","aramco","archi","army","arpa","art","arte","as","asda","asia","associates","at","athleta","attorney","au","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aw","aws","ax","axa","az","azure","ba","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bb","bbc","bbt","bbva","bcg","bcn","bd","be","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bf","bg","bh","bharti","bi","bible","bid","bike","bing","bingo","bio","biz","bj","black","blackfriday","blockbuster","blog","bloomberg","blue","bm","bms","bmw","bn","bnl","bnpparibas","bo","boats","boehringer","bofa","bom","bond","boo","book","booking","bosch","bostik","boston","bot","boutique","box","br","bradesco","bridgestone","broadway","broker","brother","brussels","bs","bt","budapest","bugatti","build","builders","business","buy","buzz","bv","bw","by","bz","bzh","ca","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","cartier","casa","case","caseih","cash","casino","cat","catering","catholic","cba","cbn","cbre","cbs","cc","cd","ceb","center","ceo","cern","cf","cfa","cfd","cg","ch","chanel","channel","charity","chase","chat","cheap","chintai","christmas","chrome","chrysler","church","ci","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","ck","cl","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","cm","cn","co","coach","codes","coffee","college","cologne","com","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","coop","corsica","country","coupon","coupons","courses","cr","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cu","cuisinella","cv","cw","cx","cy","cymru","cyou","cz","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","de","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dj","dk","dm","dnp","do","docs","doctor","dodge","dog","domains","dot","download","drive","dtv","dubai","duck","dunlop","duns","dupont","durban","dvag","dvr","dz","earth","eat","ec","eco","edeka","edu","education","ee","eg","email","emerck","energy","engineer","engineering","enterprises","epson","equipment","er","ericsson","erni","es","esq","estate","esurance","et","etisalat","eu","eurovision","eus","events","everbank","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fi","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","fj","fk","flickr","flights","flir","florist","flowers","fly","fm","fo","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","fr","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fujixerox","fun","fund","furniture","futbol","fyi","ga","gal","gallery","gallo","gallup","game","games","gap","garden","gb","gbiz","gd","gdn","ge","gea","gent","genting","george","gf","gg","ggee","gh","gi","gift","gifts","gives","giving","gl","glade","glass","gle","global","globo","gm","gmail","gmbh","gmo","gmx","gn","godaddy","gold","goldpoint","golf","goo","goodyear","goog","google","gop","got","gov","gp","gq","gr","grainger","graphics","gratis","green","gripe","grocery","group","gs","gt","gu","guardian","gucci","guge","guide","guitars","guru","gw","gy","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hk","hkt","hm","hn","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","honeywell","horse","hospital","host","hosting","hot","hoteles","hotels","hotmail","house","how","hr","hsbc","ht","hu","hughes","hyatt","hyundai","ibm","icbc","ice","icu","id","ie","ieee","ifm","ikano","il","im","imamat","imdb","immo","immobilien","in","inc","industries","infiniti","info","ing","ink","institute","insurance","insure","int","intel","international","intuit","investments","io","ipiranga","iq","ir","irish","is","iselect","ismaili","ist","istanbul","it","itau","itv","iveco","jaguar","java","jcb","jcp","je","jeep","jetzt","jewelry","jio","jll","jm","jmp","jnj","jo","jobs","joburg","jot","joy","jp","jpmorgan","jprs","juegos","juniper","kaufen","kddi","ke","kerryhotels","kerrylogistics","kerryproperties","kfh","kg","kh","ki","kia","kim","kinder","kindle","kitchen","kiwi","km","kn","koeln","komatsu","kosher","kp","kpmg","kpn","kr","krd","kred","kuokgroup","kw","ky","kyoto","kz","la","lacaixa","ladbrokes","lamborghini","lamer","lancaster","lancia","lancome","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lb","lc","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","li","liaison","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lixil","lk","llc","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","lr","ls","lt","ltd","ltda","lu","lundbeck","lupin","luxe","luxury","lv","ly","ma","macys","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mc","mckinsey","md","me","med","media","meet","melbourne","meme","memorial","men","menu","merckmsd","metlife","mg","mh","miami","microsoft","mil","mini","mint","mit","mitsubishi","mk","ml","mlb","mls","mm","mma","mn","mo","mobi","mobile","mobily","moda","moe","moi","mom","monash","money","monster","mopar","mormon","mortgage","moscow","moto","motorcycles","mov","movie","movistar","mp","mq","mr","ms","msd","mt","mtn","mtr","mu","museum","mutual","mv","mw","mx","my","mz","na","nab","nadex","nagoya","name","nationwide","natura","navy","nba","nc","ne","nec","net","netbank","netflix","network","neustar","new","newholland","news","next","nextdirect","nexus","nf","nfl","ng","ngo","nhk","ni","nico","nike","nikon","ninja","nissan","nissay","nl","no","nokia","northwesternmutual","norton","now","nowruz","nowtv","np","nr","nra","nrw","ntt","nu","nyc","nz","obi","observer","off","office","okinawa","olayan","olayangroup","oldnavy","ollo","om","omega","one","ong","onl","online","onyourside","ooo","open","oracle","orange","org","organic","origins","osaka","otsuka","ott","ovh","pa","page","panasonic","paris","pars","partners","parts","party","passagens","pay","pccw","pe","pet","pf","pfizer","pg","ph","pharmacy","phd","philips","phone","photo","photography","photos","physio","piaget","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","pk","pl","place","play","playstation","plumbing","plus","pm","pn","pnc","pohl","poker","politie","porn","post","pr","pramerica","praxi","press","prime","pro","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","ps","pt","pub","pw","pwc","py","qa","qpon","quebec","quest","qvc","racing","radio","raid","re","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","rightathome","ril","rio","rip","rmit","ro","rocher","rocks","rodeo","rogers","room","rs","rsvp","ru","rugby","ruhr","run","rw","rwe","ryukyu","sa","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sarl","sas","save","saxo","sb","sbi","sbs","sc","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scjohnson","scor","scot","sd","se","search","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","sg","sh","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","shriram","si","silk","sina","singles","site","sj","sk","ski","skin","sky","skype","sl","sling","sm","smart","smile","sn","sncf","so","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","space","sport","spot","spreadbetting","sr","srl","srt","ss","st","stada","staples","star","starhub","statebank","statefarm","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","su","sucks","supplies","supply","support","surf","surgery","suzuki","sv","swatch","swiftcover","swiss","sx","sy","sydney","symantec","systems","sz","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tc","tci","td","tdk","team","tech","technology","tel","telefonica","temasek","tennis","teva","tf","tg","th","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tj","tjmaxx","tjx","tk","tkmaxx","tl","tm","tmall","tn","to","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","tr","trade","trading","training","travel","travelchannel","travelers","travelersinsurance","trust","trv","tt","tube","tui","tunes","tushu","tv","tvs","tw","tz","ua","ubank","ubs","uconnect","ug","uk","unicom","university","uno","uol","ups","us","uy","uz","va","vacations","vana","vanguard","vc","ve","vegas","ventures","verisign","versicherung","vet","vg","vi","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","vistaprint","viva","vivo","vlaanderen","vn","vodka","volkswagen","volvo","vote","voting","voto","voyage","vu","vuelos","wales","walmart","walter","wang","wanggou","warman","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","wf","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","ws","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","कॉम","セール","佛山","ಭಾರತ","慈善","集团","在线","한국","ଭାରତ","大众汽车","点看","คอม","ভাৰত","ভারত","八卦","موقع","বাংলা","公益","公司","香格里拉","网站","移动","我爱你","москва","қаз","католик","онлайн","сайт","联通","срб","бг","бел","קום","时尚","微博","淡马锡","ファッション","орг","नेट","ストア","삼성","சிங்கப்பூர்","商标","商店","商城","дети","мкд","ею","ポイント","新闻","工行","家電","كوم","中文网","中信","中国","中國","娱乐","谷歌","భారత్","ලංකා","電訊盈科","购物","クラウド","ભારત","通販","भारतम्","भारत","भारोत","网店","संगठन","餐厅","网络","ком","укр","香港","诺基亚","食品","飞利浦","台湾","台灣","手表","手机","мон","الجزائر","عمان","ارامكو","ایران","العليان","اتصالات","امارات","بازار","موريتانيا","پاکستان","الاردن","موبايلي","بارت","بھارت","المغرب","ابوظبي","السعودية","ڀارت","كاثوليك","سودان","همراه","عراق","مليسيا","澳門","닷컴","政府","شبكة","بيتك","عرب","გე","机构","组织机构","健康","ไทย","سورية","招聘","рус","рф","珠宝","تونس","大拿","みんな","グーグル","ελ","世界","書籍","ഭാരതം","ਭਾਰਤ","网址","닷넷","コム","天主教","游戏","vermögensberater","vermögensberatung","企业","信息","嘉里大酒店","嘉里","مصر","قطر","广东","இலங்கை","இந்தியா","հայ","新加坡","فلسطين","政务","xxx","xyz","yachts","yahoo","yamaxun","yandex","ye","yodobashi","yoga","yokohama","you","youtube","yt","yun","za","zappos","zara","zero","zip","zm","zone","zuerich","zw"];
},{}],"lv6d":[function(require,module,exports) {
var r=Array.isArray,t=Object.prototype.toString;module.exports=r||function(r){return!!r&&"[object Array]"==t.call(r)};
},{}],"i8j3":[function(require,module,exports) {
"use strict";module.exports=function(r){if(null==r)return!1;var t=Object(r);return t===t.window};
},{}],"YUZp":[function(require,module,exports) {
"use strict";var r=require("is-array"),e=require("is-window"),i=require("is-function");module.exports=function(n){if(!n)return!1;if(r(n))return!0;if(i(n)||e(n))return!1;var t="length"in(n=Object(n))&&n.length;return!(1!==n.nodeType||!t)||(0===t||"number"==typeof t&&t>0&&t-1 in n)};
},{"is-array":"lv6d","is-window":"i8j3","is-function":"xIVz"}],"ppQy":[function(require,module,exports) {
"use strict";module.exports=4294967295;
},{}],"PfK7":[function(require,module,exports) {
"use strict";var e=require("random-natural"),r=require("max-array-length"),n=e.fixme;module.exports=function(a){return a?a.inspected||(a.min=n(a.min,0,r,!0),a.max=n(a.max,0,r,!1)):a={min:0,max:r},a.inspected=!0,e(a)};
},{"random-natural":"N0EC","max-array-length":"ppQy"}],"jDTB":[function(require,module,exports) {
"use strict";var r=require("is-array-like"),e=require("random-index");module.exports=function(i){if(!i||!r(i))return i;var n=i.length;return n?i[e({max:n-1})]:void 0};
},{"is-array-like":"YUZp","random-index":"PfK7"}],"oGfx":[function(require,module,exports) {
"use strict";var e=require("tld-list"),r=require("pick-item");module.exports=function(){return r(e)};
},{"tld-list":"q+AJ","pick-item":"jDTB"}],"80C2":[function(require,module,exports) {
"use strict";var r=require("clamp"),e=require("random-tld"),l=require("random-lorem");module.exports=function(t){(t=t||{level:1}).tld||(t.tld=e());for(var u=r(t.level||1,1,10),o=[];u--;)o.push(l());return o.push(t.tld),o.join(".")};
},{"clamp":"6g8G","random-tld":"oGfx","random-lorem":"TuHE"}],"bhlc":[function(require,module,exports) {
"use strict";var r=require("to-str"),e=require("random-lorem"),o=require("random-domains");module.exports=function(i){var n=i&&i.domain?r(i.domain):o();return e()+"@"+n};
},{"to-str":"N+lq","random-lorem":"TuHE","random-domains":"80C2"}],"avpp":[function(require,module,exports) {
"use strict";var t=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;exports.validate=function(r){if(!r)return!1;if(r.length>254)return!1;if(!t.test(r))return!1;var e=r.split("@");return!(e[0].length>64)&&!e[1].split(".").some(function(t){return t.length>63})};
},{}],"7jvL":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,r){if("function"==typeof e&&e.amd)e(["exports"],r);else if("undefined"!=typeof exports)r(exports);else{var n={exports:{}};r(n.exports),t.validators=n.exports}}(this,function(e){"use strict";function t(e){return/^\d+$/.test(e)}function r(e,t){if(!t||!t.acceptings)return!1;for(var r=0,n=e.length-1;r<=n;r++){for(var a=!1,i=0;i<t.acceptings.length;i++)if(e[r]===t.acceptings[i]){a=!0;break}if(!a)return!1}return!0}e.areDigits=t,e.areIn=r,e.areLettersOnly=function(e){return/^[a-z]+$/i.test(e)},e.checkIfTrue=function(e,t){return!e||t()},e.containsHTML=function(e){return/<[^<]+>/i.test(e)},e.containsURL=function(e){return new RegExp(".*(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*(\\?[;&a-z\\d%@_.,~+&:=-]*)?(\\#[-a-z\\d_]*)?.*","im").test(e)},e.equals=function(e,t){return e===t.value},e.getStrongPassword=function(e,t){var n=0;return e.length<8?0:t&&t.acceptings&&!r(e,t)?-1:(e.length>8&&(n+=1),e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(n+=1),e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)&&(n+=1),e.match(/([!,%,&,@,#,$,^,*,?,_,~])/)&&(n+=1),e.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)&&(n+=1),n)},e.isBIC=function(e){return/^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(e)};var n=[{type:"MasterCard",reg:/^(5[12345])/,minLength:16,maxLength:16},{type:"VISA",reg:/^(4)/,minLength:13,maxLength:16},{type:"Amex",reg:/^(3[47])/,minLength:16,maxLength:16},{type:"DinersClub",reg:/^(3(0[012345]|[68]))/,minLength:16,maxLength:16},{type:"enRoute",reg:/^(2(014|149))/,minLength:16,maxLength:16},{type:"Discover",reg:/^(6011)/,minLength:16,maxLength:16},{type:"JCB",reg:/^(3)|^(2131|1800)/,minLength:15,maxLength:16}];function a(e){for(var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=0,a=!1,i=e.length-1;i>=0;i--)t=parseInt(e.charAt(i),10),a&&0!==t&&(t*=2)>9&&(t-=9),a=!a,n+=t;return n%r==0}function i(e){return 97-function(e){var t=function(e){return-1!==e.indexOf("A")?{withoutLetters:e.replace("A","0"),offset:1e6}:-1!==e.indexOf("B")?{withoutLetters:e.replace("B","0"),offset:2e6}:{withoutLetters:e,offset:0}}(e),r=t.withoutLetters,n=t.offset;return parseInt(r,10)-n}(e)%97}e.isCreditCard=function(e,t){var r=n;t&&t.cardTypesAllowed&&(r=t.cardTypesAllowed);var i=e.length;if(i<13||i>16)return!1;if(!a(e))return!1;if(void 0!==r){var s=!0,d=!1,o=void 0;try{for(var u,l=r[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var c=u.value,f=n.filter(function(e){return e.type===c});if(null!=f&&1===f.length)return i>=(f=f[0]).minLength&&i<=f.maxLength&&f.reg.test(e)}}catch(h){d=!0,o=h}finally{try{!s&&l.return&&l.return()}finally{if(d)throw o}}}return!0},e.isDate=function(e,t){return null!=u(e,t)},e.isEAN13=function(e){var t,r=0,n=!1;if(13!==e.length)return!1;for(var a=e.length-1;a>=0;a--)t=parseInt(e.charAt(a),10),n&&0!==t&&(t*=3),n=!n,r+=t;return r%10==0},e.isEmail=function(e){return!/@.*@.*/.test(e)&&!/\s/.test(e)&&!/\.@/.test(e)&&!/\.\./.test(e)&&/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(e)},e.isEmpty=function(e,t){return t||(t={ignore_spaces:!0}),t&&t.ignore_spaces&&(e=e.trim()),0===e.length},e.isIBAN=function(e){var t,r,n,a,i,s=e.replace(/ /g,"").toUpperCase(),d="",o=!0,u="";if(s.length<5)return!1;if(void 0!==(n={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"}[s.substring(0,2)])&&!new RegExp("^[A-Z]{2}\\d{2}"+n+"$","").test(s))return!1;for(t=s.substring(4,s.length)+s.substring(0,4),a=0;a<t.length;a++)"0"!==(r=t.charAt(a))&&(o=!1),o||(d+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(r));for(i=0;i<d.length;i++)u=(""+u+d.charAt(i))%97;return 1===u},e.isFloat=function(e,t){return t=t||{},""!==e&&e==+e&&e!==(0|e)&&(!t.hasOwnProperty("max")||+e<=t.max)&&(!t.hasOwnProperty("min")||+e>=t.min)},e.isIMEI=function(e){return 15===e.length&&t(e)&&a(e)},e.isInteger=function(e,t){return!!((t=t||{}).hasOwnProperty("allow_leading_zeroes")&&!t.allow_leading_zeroes?/^(?:[-+]?(?:0|[1-9][0-9]*))$/:/^[-+]?[0-9]+$/).test(e)&&(e=parseInt(e,10),(!t.hasOwnProperty("min")||e>=t.min)&&(!t.hasOwnProperty("max")||e<=t.max))},e.isIPv4=function(e){if(!/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(e))return!1;for(var t=e.split("."),r=0;r<t.length;r++)if(parseInt(t[r],10)>255)return!1;return!0},e.isISBN=function(e){return function(e){var t=0,r=void 0;if(!/^(?:[0-9]{9}X|[0-9]{10})$/.test(e))return!1;for(r=0;r<9;r++)t+=(r+1)*e.charAt(r);return"X"===e.charAt(9)?t+=100:t+=10*e.charAt(9),t%11==0&&!!e}(e)||function(e){var t=0,r=void 0,n=[1,3];if(!/^(?:[0-9]{13})$/.test(e))return!1;for(r=0;r<12;r++)t+=n[r%2]*e.charAt(r);return e.charAt(12)-(10-t%10)%10==0&&!!e}(e)},e.isISSN=function(e){var t=0;if(8===e.length&&(e="0"+e),!/^\d{4}\-?\d{3}[\dX]$/.test(e))return!1;e=e.replace("-","");for(var r=0;r<e.length;r++){var n=e[r];t+=("X"===n?10:+n)*(8-r)}return t%11==0},e.isLuhn=a,e.isMobilePhoneFr=function(e){return/^(0)[67]\d{8}$/.test(e)},e.isNIR=function(e){if(15!=e.length)return!1;try{var t=function(e){return{sexe:parseInt(e.slice(0,1),10),an:parseInt(e.slice(1,3),10),mois:parseInt(e.slice(3,5),10),dept:e.slice(5,7),ville:parseInt(e.slice(7,10),10),ordre:parseInt(e.slice(10,13),10),key:parseInt(e.slice(-2),10)}}(e);return(1===t.sexe||2===t.sexe||8===t.sexe)&&i(e.slice(0,13))===t.key}catch(r){return!1}},e.isRIB=function(e){if(23!==e.length)return!1;var r=e.slice(10,21);r=r.replace(/[A|J]/g,"1").replace(/[B|K|S]/g,"2").replace(/[C|L|T]/g,"3").replace(/[D|M|U]/g,"4").replace(/[E|N|V]/g,"5").replace(/[F|O|W]/g,"6").replace(/[G|P|X]/g,"7").replace(/[H|Q|Y]/g,"8").replace(/[I|R|Z]/g,"9");var n=e.slice(21,23);if(!t(e=e.slice(0,10)+r+n))return!1;var a=parseInt(n,10),i=e.slice(0,5),s=e.slice(5,10),d=parseInt(r,10),o=i%97;return o=1e5*o+parseInt(s,10),o=(o%=97)*Math.pow(10,11)+d,o%=97,o*=100,(o=97-(o%=97))===a},e.isSEDOL=function(e){try{var t=e.substr(0,6);return e===t+function(e){var t=[1,3,1,7,3,9];if(-1==e.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/))throw"Invalid SEDOL number '"+e+"'";for(var r=0,n=0;n<e.length;n++)r+=t[n]*parseInt(e.charAt(n),36);return((10-r%10)%10).toString()}(t)}catch(r){return!1}return!1},e.isSIREN=function(e){return 9===e.length&&t(e)&&a(e,10)},e.isSIRET=function(e){var r=14===e.length&&t(e),n=e.slice(0,9);return r&&(a(n,10)||"356000000"===n&&a(e,5))},e.isTime=function(e){return/^([01][0-9]|2[0-3])(:[0-5][0-9]){1,2}$/.test(e)};var s=[];e.setTrashEmailsServer=function(e){s=e},e.isTrashEmail=function(e){if(0===s.length)throw Error("call setTrashEmailsServer with array string before call isTrashEmail");var t=e.split("@");if(2!==t.length)throw Error(e+" is a bad email");var r=t[1].toLowerCase();return s.filter(function(e){return r.indexOf(e)>=0}).length>0},e.isURL=function(e){return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*(\\?[;&a-z\\d%@_.,~+&:=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)};var d=function(e,t,r,n){var a=new XMLHttpRequest;if(void 0!==n&&null!=n&&n.forceReload){var i=Math.random();e+=-1===e.indexOf("?")?"?":"&",e+="___t="+i}a.open("GET",e,!0),a.onload=function(){if(a.status>=200&&a.status<400){if(t){var e="";200===a.status&&(e=isDef(a.responseText)&&""!==a.responseText?JSON.parse(a.responseText):"{}"),t(e)}}else console.error("ajax error",a),r&&r(a)},a.send()};function o(e){return"DD/MM/YYYY"===e?{reg:/^\d{1,2}\/\d{1,2}\/\d{4}$/,d:0,m:1,y:2,sp:"/"}:"DD-MM-YYYY"===e?{reg:/^\d{1,2}-\d{1,2}-\d{4}$/,d:0,m:1,y:2,sp:"-"}:"MM/DD/YYYY"===e?{reg:/^\d{1,2}\/\d{1,2}\/\d{4}$/,d:1,m:0,y:2,sp:"/"}:"MM-DD-YYYY"===e?{reg:/^\d{1,2}-\d{1,2}-\d{4}$/,d:1,m:0,y:2,sp:"-"}:"YYYY-MM-DD"===e?{reg:/^\d{4}-\d{1,2}-\d{1,2}$/,d:2,m:1,y:0,sp:"-"}:void 0}function u(e,t){var r=!0,n=!1,a=void 0;try{for(var i,s=t.formats[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var d=o(i.value);if(d.reg.test(e)){var u=e.split(d.sp),l=+u[d.d],c=+u[d.m],f=+u[d.y],h=[31,28,31,30,31,30,31,31,30,31,30,31];if((f%400==0||f%100!=0&&f%4==0&&2===c)&&(h[1]=29),l>0&&l<=h[c-1]&&c>=1&&c<=12&&f>=0&&f<=9999){var g=new Date(f,c-1,l);return t.max&&g>t.max||t.min&&g<t.min?null:g}}}}catch(p){n=!0,a=p}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}return null}e.isValid=function(e,t){var r=t.templateUrl.replace("%value%",e);d(r,t.onResponse,t.onError)},e.maxlength=function(e,t){return e.length<=t.max},e.minlength=function(e,t){return e.length>=t.min},e.sanitize=function(e,t){var r=e;if(t.keepChars){var n="",a=!0,i=!1,s=void 0;try{for(var d,o=e[Symbol.iterator]();!(a=(d=o.next()).done);a=!0){var u=d.value;t.keepChars.indexOf(u)>=0&&(n+=u)}}catch(l){i=!0,s=l}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}r=n}return r},e.toDate=u,e.validRegex=function(e,t){return t.regex.test(e)}});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=l(require("random-email")),t=l(require("email-validator")),n=l(require("format-validator"));function l(e){return e&&e.__esModule?e:{default:e}}var d=document.getElementById("generate"),a=document.getElementById("popup"),i=document.getElementById("popupEmail"),o=document.getElementById("close");d.addEventListener("click",function(t){a.style.display="block",i.innerHTML="".concat((0,e.default)({domain:"test.ua"}))}),o.addEventListener("click",function(e){d.style.display="block",a.style.display="none"});var r=document.getElementById("input");r.addEventListener("change",function(e){""===r.value?r.style.border="2px solid grey":!0===t.default.validate(r.value)?r.style.border="2px solid green":!1===t.default.validate(r.value)&&(r.style.border="2px solid red")});var c=document.getElementById("check"),u=document.getElementById("popupCheck"),s=document.getElementById("popupTypes"),m=document.getElementById("closeCheck"),y=document.getElementById("inputFormat"),p=[],v="";for(var f in n.default)"i"===f[0]&&"s"===f[1]&&p.push(f);c.addEventListener("click",function(e){for(var t=0;t<p.length;t+=1)if("isDate"!==p[t]&&"isTrashEmail"!==p[t]&&"isValid"!==p[t]&&n.default[p[t]](y.value)){for(var l=2;l<p[t].length;l+=1)v+=p[t].charAt(l);v+=", "}v=v.slice(0,v.length-2),u.style.display="block",s.innerHTML=v}),m.addEventListener("click",function(e){c.style.display="block",u.style.display="none",v=""});
},{"random-email":"bhlc","email-validator":"avpp","format-validator":"7jvL"}]},{},["Focm"], null)
//# sourceMappingURL=/js_sanbox/lesson_6/lesson_6.89e9ebcb.js.map
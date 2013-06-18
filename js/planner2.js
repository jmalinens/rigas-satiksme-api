    var cfg = {
        cities: {
            riga: {
		    name: { lv: 'Rīga', en: 'Riga', ru: 'Riga', lt: 'Ryga', ee: 'Riia' }
            , transport: ['tram', 'trol', 'bus', 'minibus', 'nightbus']
            , transportPlannerUncheck: { 'minibus': true, 'nightbus': true }

            , defaultTransport: '' //display all routes initially
            , skipOperator: true

            , logoInHeader: '<a id="LogoInHeader" target="_top" href="http://www.rigassatiksme.lv"><img src="images/riga/logo.png" /></a>'
		    , streetMap: 'OSM'
			, lat: 56.9491
            , lng: 24.1133
            , zoom: 12

            , planHandicappedOption: false
            , showDeparturesWithNumbers: true
            , doNotShowTimetables: { 'minibus': true, 'nightbus': true }

            , languages: 'lv,ru,en' //de,fr,lt,ee'

            , webcounter: 'keyo3bcs'
            , navigation: 'riga'

            , transportTip: {
                'minibus': {
                    lv: 'Paaugstināta servisa autobusa maršruti'
                }
            }

            , operators: {
                'minibus': {
                    notes: {
                        lv: '<b>Minibusiem kustības saraksts ar atiešanas laikiem ir noteikts tikai maršruta galapunktos.</b>'
                            + '</p><p>Minibusiem – paaugstināta servisa autobusiem ir tiesības neapstāties pieturvietā, ja tajā esošās vietas ir aizņemtas.'
                            + '</p><p>Pārvadājumus šajā maršrutā veic Rīgas satiksmes apakšuzņēmējs %operator.'
                            + '</p><p>Jautājumu gadījumā zvaniet pa bezmaksas tālruni 80001919.'

                        , en: '<b>Departure times in minibus schedules are indicated from route terminals only.</b>'
                            + '</p><p>A minibus – extra service bus has the right not to stop at regular stops if all places in the minibus are busy.'
                            + '</p><p>This route is served by %operator, a subsidiary of Rīgas satiksme.'
                            + '</p><p>If you have questions, please call toll-free phone 80001919.'

                        , ru: '<b>В расписаниях движения микроавтобусов установлено лишь время отправления с конечных пунктов маршрутов.</b>'
                            + '</p><p>Микроавтобусы – автобусы с повышенным уровнем сервиса вправе не останавливаться на остановках при отсутствии свободных мест.'
                            + '</p><p>Перевозки по этому маршруту осуществляет дочернее предприятие Rīgas satiksme – %operator.'
                            + '</p><p>Если у Вас возникли вопросы, просим звонить по бесплатному телефону 80001919.'
                    }
                }

                , 'nightbus': {
                    notes0: {
                        lt: 'Naktimis iš penktadienio į šeštadienį ir iš šeštadienio į sekmadienį'
                        , lv: 'Naktī no piektdienas uz sestdienu un no sestdienas uz svētdienu'
                        , ru: 'В ночь с пятницы на субботу и с субботы на воскресенье'
                        , en: 'In the nights from Friday to Saturday and from Saturday to Sunday'
                    }
                    , notes: {
                        lt: 'Keleiviai įlaipinami/išlaipinami tik pagal jų pareikalavimą ir per pirmas duris.'
                              + '</p><p>Blogomis oro sąlygomis ir nenumatytais atvejais išvykimo laikai gali keistis.'
	                    , en: 'Passengers get off/into the bus only at their request and through the first door.'
                              + '</p><p>In bad weather conditions and unforeseen cases departure times may change.'
                        , ru: 'Посадка и высадка пассажиров только по требованию, через первые двери.'
                            + '</p><p>В плохих погодных условиях и непредвиденных случаях время отправления может меняться.'
                        , lv: 'Pasažieru iekāpšana/izkāpšana sabiedriskā transporta pieturvietās pēc pieprasījuma, pa pirmajām durvīm.'
                            + '</p><p>Slikta laika apstākļos un neparedzētos gadījumos atiešanas laiki var mainīties.'

                    }
                    , comments: {
                        lt: 'Išvykimo laikai tarpinėse stotelėse yra apytikslūs ir gali priklausyti nuo keleivių srauto. '
                        , lv: 'Atiešanas laiki starp galapunktiem ir aptuveni – tie ir atkarīgi no pasažieru plūsmas.'
                        , ru: 'Время отправления между конечными пунктами – приблизительное и будет зависеть от пассажиропотока.'
                        , en: 'Departure times between terminals are approximate and will depend on passenger flow.'
                    }
                }

            }
		}
        }

    , operators: {}

    , programmedBy: {
        lt: 'Programavo <a target="_top" class="hover" href="http://www.merakas.lt/" title="Programos maršrutinio transporto planavimui">UAB „Merakas“</a>'
        , en: 'Programmed by <a target="_top" class="hover" href="http://www.merakas.lt/en/" title="Software for public transport scheduling">UAB „Merakas“</a>'
        , ru: 'Програмирование <a target="_top" class="hover" href="http://www.merakas.lt/ru/" title="Программы для планирования маршрутного транспорта">UAB „Merakas“</a>'
        , lv: 'Programmas autori <a target="_top" class="hover" href="http://www.merakas.lt/en/" title="Sabiedriskā transporta kustības sarakstu sastādīšanas programmas">UAB „Merakas“</a>'
		, ee: 'Programmeerinud <a target="_top" class="hover" href="http://www.merakas.lt/en/" title="Sõiduplaani koostamise tarkvara">UAB „Merakas“</a>'
    }

    , transportOrder: {} // for sorting routes by transport

    , languages: {
        lt: 'Lietuviškai'
        , en: 'In English'
        , ru: 'На русском'
        , pl: 'Po polsku'
        , by: 'На беларускай мове'
        , de: 'Auf Deutch'
        , fr: 'En français'
        , it: 'In italiano'
        , es: 'En español'
        , nl: 'Nederlands'
        , cz: 'Čeština'
        , sk: 'Slovenčina'
        , lv: 'Latviski'
        , ee: 'Eesti keel'
        , ua: 'Українська'
    }
    };

cfg.browserVersion = 999;

cfg.defaultCity = 'riga' //'jelgava' //'tallinna-linn' //'vilnius' //'liepaja' //'rostov' //'chelyabinsk' //'vologda' // 'klaipeda' //'riga' //'nnovgorod' //'kaunas' //'vologda' //'liepaja' //'alytus' // 'druskininkai' // 'minsk' //
// 'novgorod' //
;
cfg.city = cfg.cities[cfg.defaultCity];
cfg.city.doNotShowTimetables = cfg.city.doNotShowTimetables || {};
cfg.city.datadir = cfg.city.datadir || cfg.defaultCity;

if (cfg.city.operators) {
    cfg.operators = cfg.city.operators;    
}
var navigator, document;
var ti = {stops: 0,routes: 0,specialDates: {},asciiStops: {},FLD_ID: 0,FLD_CITY: 1,FLD_AREA: 2,FLD_STREET: 3,FLD_NAME: 4,FLD_INFO: 5,FLD_LNG: 6,FLD_LAT: 7,FLD_STOPS: 8,FLD_DIRS: 9,RT_ROUTEID: 0,RT_ORDER: 1,RT_ROUTENUM: 2,RT_AUTHORITY: 3,RT_CITY: 4,RT_TRANSPORT: 5,RT_OPERATOR: 6,RT_VALIDITYPERIODS: 7,RT_SPECIALDATES: 8,RT_ROUTETAG: 9,RT_ROUTETYPE: 10,RT_COMMERCIAL: 11,RT_ROUTENAME: 12,RT_WEEKDAYS: 13,RT_ENTRY: 14,RT_STREETS: 15,RT_ROUTESTOPS: 16,accent_map: {"ą": "a","ä": "a","ā": "a","č": "c","ę": "e","ė": "e","į": "i","ų": "u","ū": "u","ü": "u","ž": "z","ē": "e","ģ": "g","ī": "i","ķ": "k","ļ": "l","ņ": "n","ö": "o","õ": "o","š": "s","а": "a","б": "b","в": "v","г": "g","д": "d","е": "e","ё": "e","ж": "zh","з": "z","и": "i","й": "j","к": "k","л": "l","м": "m","н": "n","о": "o","п": "p","р": "r","с": "s","т": "t","у": "u","ф": "f","х": "x","ц": "c","ч": "ch","ш": "sh","щ": "shh","ъ": !0,"ы": "y","ь": !0,"э": "je","ю": "ju","я": "ja","–": "-","—": "-","̶": "-","­": "-","˗": "-","“": !0,"”": !0,"„": !0,"'": !0,"\"": !0},wordSeparators: "–—̶­˗“”„ _-.()'\""};
ti.SERVER = 1, String.prototype.trim = function() {
    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}, ti.dateToMinutes = function(a) {
    return Math.floor(+a / 6e4) - a.getTimezoneOffset()
}, ti.dateToDays = function(a) {
    return Math.floor(ti.dateToMinutes(a) / 1440)
}, ti.printTime = function(a, b, c) {
    if (a < 0)
        return "";
    !b && b !== "" && (b = ":");
    var d = ~~a, e = ~~(d / 60) % 24;
    d = d % 60;
    return (c && e < 10 ? c : "") + e + b + (d < 10 ? "0" : "") + d
}, ti.toMinutes = function(a) {
    var b = a.trim(), c = b.length, d = parseInt(b.substr(c - 2, 2), 10);
    return c > 2 ? d + parseInt(b.substr(0, c - 2), 10) * 60 : d * 60
}, ti.toAscii = function(a, b) {
    var c = a.toLowerCase(), d = c.split(""), e, f = ti.accent_map;
    for (var g = d.length; --g >= 0; )
        (e = f[d[g]]) ? (d[g] = e === !0 ? "" : e, c = !1) : b === !0 && d[g] === " " && (d[g] = "", c = !1);
    b === 2 && (c = d.join("").trim().replace(/\s+-/g, "-").replace(/-\s+/g, "-"));
    return c || d.join("")
}, ti.cloneObject = function(a) {
    var b = a instanceof Array ? [] : {};
    for (var c in a)
        a[c] && typeof a[c] == "object" ? b[c] = a[c].clone() : b[c] = a[c];
    return b
}, ti.naturalSort = function(a, b) {

    var c = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
	d = /(^[ ]*|[ ]*$)/g,
	e = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
	f = /^0x[0-9a-f]+$/i,
	g = /^0/,
	h = a.toString().replace(d, "") || "",
	i = b.toString().replace(d, "") || "",
	//h = a.toString().trim() || "",
	//i = b.toString().trim() || "",
	j = h.replace(c, "\u0000$1\u0000").replace(/\0$/, "").replace(/^\0/, "").split("\u0000"),
	k = i.replace(c, "\u0000$1\u0000").replace(/\0$/, "").replace(/^\0/, "").split("\u0000"),
	l = parseInt(h.match(f)) || j.length != 1 && h.match(e) && Date.parse(h),
	m = parseInt(i.match(f)) || l && i.match(e) && Date.parse(i) || null;
    if (m) {
        if (l < m)
            return -1;
        if (l > m)
            return 1
    }
    for (var n = 0, o = Math.max(j.length, k.length); n < o; n++) {
        oFxNcL = !(j[n] || "").match(g) && parseFloat(j[n]) || j[n] || 0, oFyNcL = !(k[n] || "").match(g) && parseFloat(k[n]) || k[n] || 0;
        if (isNaN(oFxNcL) !== isNaN(oFyNcL))
            return isNaN(oFxNcL) ? 1 : -1;
        typeof oFxNcL !== typeof oFyNcL && (oFxNcL += "", oFyNcL += "");
        if (oFxNcL < oFyNcL)
            return -1;
        if (oFxNcL > oFyNcL)
            return 1
    }
    return 0
}, ti.loadData = function() {
    //ti.fDownloadUrl("get", cfg.city.datadir + "/routes.txt", ti.loadRoutes), ti.fDownloadUrl("get", cfg.city.datadir + "/stops.txt", ti.loadStops)

fs = require('fs')
fs.readFile('../data/routes.txt', 'utf8', function (err,data) {
  if (err) {console.log(err);}
  ti.loadRoutes(data);
});

fs.readFile('../data/stops.txt', 'utf8', function (err,data) {
  if (err) {console.log(err);}
  ti.loadStops(data);
});

}, ti.loadStops = function(a) {

    a = a.split("\n");
    var b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = {}, j = {}, k = [], l = a.length, m = a[0].toUpperCase().split(";"), n = {};
    for (var o = m.length; --o >= 0; )
        n[m[o]] = o;
    n.ID = 0;
    for (var o = 1; o < l; o++)
        if (a[o].length > 1) {
            var p = a[o].split(";"), q = p[n.CITY];
            q && (c = q === "0" ? "" : q.trim());
            var r = b + ti.toAscii(p[n.ID], !0);
            if (q = p[n.AREA])
                d = q === "0" ? "" : q.trim();
            if (q = p[n.STREET])
                e = q === "0" ? "" : q.trim();
            if (q = p[n.NAME]) {
                f = q === "0" ? "" : q, g = ti.toAscii(q);
                var s = j[g];
                j[g] = s ? s + "," + r : r
            } else
                j[g] += "," + r;
            if (q = p[n.INFO])
                h = q === "0" ? "" : q;
            b && (p[n.STOPS] = b + (p[n.STOPS] || "").replace(/,/g, "," + b));
            var t = {id: r,lat: +p[n.LAT] / 1e5,lng: +p[n.LNG] / 1e5,name: f,city: c,raw_data: [r, c, d, e, f, h, p[n.LNG], p[n.LAT], p[n.STOPS]].join(";")};
            ti.SERVER && (t.routes = [], t.neighbours = p[n.STOPS] ? p[n.STOPS].split(",") : []), i[r] = t, k.push(t)
        }
console.log();
fs = require('fs')
fs.writeFile("../json/stops.json", JSON.stringify(i), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
        
    ti.stops = i, ti.asciiStops = j, k.sort(function(a, b) {
        return a.lat < b.lat ? -1 : a.lat > b.lat ? 1 : 0
    });
    for (o = k.length; --o > 0; )
        if (k[o].city === "intercity") {
            var u = k[o].lat;
            for (var v = o - 1; --v >= 0; ) {
                var w = u - k[v].lat;
                if (w > .015)
                    break;
                var x = k[o].lng - k[v].lng;
                x > -.015 && x < .015 && (k[o].neighbours.push(k[v].id), k[v].neighbours.push(k[o].id))
            }
        }
    ti.routes && (ti.SERVER === !0 ? ti.loadRoutes(ti.routes) : setTimeout(function() {
        ti.loadRoutes(ti.routes)
    }, 10))
}, ti.loadRoutes = function(a) {
    if (typeof ti.stops !== "object")
        ti.routes = a;
    else {
        a = a.split("\n");
        var b = [], c = ti.stops, d = {}, e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = 0, r = a[0].toUpperCase().split(";"), s = {};
        for (var t = r.length; --t >= 0; )
            s[r[t]] = t;
        s.ROUTENUM = 0;
        var u = -1, v = a.length;
        for (var t = 1; t < v; t++)
            if (a[t].charAt(0) === "#") {
                var w = a[t].split("#"), x = null, y = null, z = new Date;
                w[1] !== "" && (x = new Date(w[1])), w[2] !== "" && (y = new Date(w[2]));
                if ((!x || x <= z) && (!y || y >= z)) {
                    var A = {comment: w[3]};
                    w[4] && (A.departures = w[4]), w[5] && (A.weekdays = w[5]), w[6] && (A.directions = w[6]);
                    var B = b[u];
                    B.comments ? B.comments.push(A) : B.comments = [A]
                }
            } else if (a[t].length > 1) {
                var w = a[t].split(";"), C;
                if (C = w[s.AUTHORITY])
                    g = C === "0" ? "" : C;
                if (g === "SpecialDates") {
                    var D = {}, E = w[s.VALIDITYPERIODS].split(","), F = 0, G = 0;
                    for (var H = -1, I = E.length; ++H < I; )
                        E[H] && (F = +E[H]), G += F, D[G] = !0;
                    ti.specialDates[w[s.ROUTENUM]] = D;
                    continue
                }
                ++q, ++u;
                if (C = w[s.ROUTENUM])
                    e = C === "0" ? "" : C, q = 1;
                if (C = w[s.ROUTENAME])
                    f = C;
                if (C = w[s.CITY])
                    h = C === "0" ? "" : C, k = h + "_" + j, q = 1;
                if (C = w[s.TRANSPORT])
                    j = C === "0" ? "" : C, k = h + "_" + j, q = 1;
                k && ( k = "");
                if (C = w[s.OPERATOR])
                    l = C === "0" ? "" : C;
                if (C = w[s.VALIDITYPERIODS])
                    m = C === "0" ? "" : C;
                if (C = w[s.SPECIALDATES])
                    n = C === "0" ? "" : C;
                if (C = w[s.WEEKDAYS])
                    o = C === "0" ? "" : C;
                p = s.STREETS ? w[s.STREETS] : "";
                var J = ti.toAscii(w[s.ROUTESTOPS], !0).split(","), K = !1;
                for (var L = 0, M = J.length; L < M; ++L) {
                    var N = J[L];
                    N.charAt(0) === "e" ? (K || (K = []), K[L] = "1", N = N.substring(1), J[L] = N) : N.charAt(0) === "x" ? (K || (K = []), K[L] = "2", N = N.substring(1), J[L] = N) : K && (K[L] = "0"), i && (N = J[L] = i + N);
                    var O = c[N];
                    ti.SERVER = true;
                    O ? (d[N] = !0, O.raw_data += ";" + u + ";" + L, (!0 || ti.SERVER) && O.routes.push(u, L)) : (/*J.splice(L, 1),*/ --M, --L)
                }
                var P = [u, q, e, g, h, j, l, m, n, w[s.ROUTETAG], ti.toAscii(w[s.ROUTETYPE]), w[s.COMMERCIAL], f, o, K && K.join("") || "", p, J.join(";")].join(";");
                ++t, ti.SERVER === !0 ? b[u] = {id: u,authority: g,city: h,transport: j,num: e,name: f,stops: J,entry: K && K.join("") || "",specialDates: n.split(","),times: a[t], times2: ti.explodeTimes(a[t]), raw_data: P} : b[u] = {id: u,times: a[t], times2: ti.explodeTimes(a[t]),raw_data: P}
            }
        ti.routes = b;

function replaceall(str,replace,with_this)
{
    var str_hasil ="";
    var temp;

    for(var i=0;i<str.length;i++) // not need to be equal. it causes the last change: undefined..
    {
        if (str[i] == replace)
        {
            temp = with_this;
        }
        else
        {
                temp = str[i];
        }

        str_hasil += temp;
    }

    return str_hasil;
}

var routes_arr = {"bus": {}, "trol": {}, "tram": {}, "minibus": {}, "nightbus": {}};
fs = require('fs')
for (var i = 0; i < ti.routes.length; i++) {
    var element = ti.routes[i];
    var raw_data = element.raw_data.split(";")
    //0;1;1;RÄ«ga;riga;bus;7 AP;15492,,,,,1,;;;a-b
    var marsruta_nr = raw_data[2];
    var marsruta_nr_lc = raw_data[2].toLowerCase();
    var transporta_tips = raw_data[5];
    var virziens = replaceall(raw_data[10], "-", "_");
    
    if (virziens === "a_b") {
        routes_arr[transporta_tips][marsruta_nr_lc] =  element.name;
                //transporta_tips.push([marsruta_nr.toLowerCase(), element.name]);
    }

    // Do something with element i
    fs.writeFile("../json/routes/"+transporta_tips+"_"+marsruta_nr.toLowerCase()+"_"+virziens+".json", JSON.stringify(element), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
}

fs.writeFile("../json/route_names.json", JSON.stringify(routes_arr), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});




        
        if (cfg.defaultCity !== "helsinki" && cfg.defaultCity !== "intercity")
            for (var N in c)
                d[N] || (c[N].name = "");
    }
}, ti.fGetStopsByName = function(a) {
    if (typeof ti.stops !== "object")
        return [];
    var b = ti.toAscii(a), c = b.replace(/\W/g, ""), d = a.toLowerCase().replace(/\W/g, ""), e = [], f = ti.wordSeparators, g = ti.asciiStops;
    for (var h in g) {
        var i = h.indexOf(b);
        if (i !== -1 && (i === 0 || f.indexOf(h.charAt(i - 1)) >= 0)) {
            var j = g[h].split(",");
            for (var k = j.length; --k >= 0; ) {
                var l = ti.fGetStopDetails(j[k]);
                l.name && (d === c || -1 !== l.name.toLowerCase().replace(/\W/g, "").indexOf(d)) && (l.indexOf = i, e.push(l))
            }
        }
    }
    var m = {};
    for (var k = 0; k < e.length; k++) {
        var l = e[k], n = parseInt(l.id, 10) || l.id, o = m[n];
        o ? o.id += "," + l.id : (m[n] = o = l, o.streetIsIncluded = {}), l.street && l.street !== "-" && !o.streetIsIncluded[l.street] && (o.streetIsIncluded[l.street] = !0, o.streets = (o.streets ? o.streets + ", " : "") + l.street)
    }
    var p = {}, q = [];
    for (var r in m) {
        var l = m[r], n;
        cfg.defaultCity === "rostov" ? n = l.name + ";" + l.streets : n = l.name.replace(/\W/g, "") + ";" + l.streets;
        var o = p[n];
        o ? o.id += "," + l.id : (p[n] = l, q.push(l))
    }
    q.sort(function(a, b) {
        if (a.id.charAt(0) === "A" && b.id.charAt(0) !== "A")
            return -1;
        if (b.id.charAt(0) === "A" && a.id.charAt(0) !== "A")
            return 1;
        if (a.city === ti.city && b.city !== ti.city)
            return -1;
        if (a.city !== ti.city && b.city === ti.city)
            return 1;
        if (a.indexOf === 0 && b.indexOf !== 0)
            return -1;
        if (b.indexOf === 0 && a.indexOf !== 0)
            return 1;
        if (a.name < b.name)
            return -1;
        if (b.name < a.name)
            return 1;
        if (a.area < b.area)
            return -1;
        if (b.area < a.area)
            return 1;
        if (a.streets < b.streets)
            return -1;
        if (b.streets < a.streets)
            return 1;
        return 0
    });
    return q
}, ti.fGetAnyStopDetails = function(a) {
    if (typeof ti.stops !== "object" || !a)
        return {};
    var b = typeof a == "string" ? a.split(",") : a, c, d, e, f;
    d = e = f = 0;
    for (var g = 0; g < b.length; ++g) {
        var h = ti.fGetStopDetails(b[g]);
        !c && h.id && (c = h), h && h.lat && h.lng && (d += h.lat, e += h.lng, ++f)
    }
    f && (c.latAvg = d / f, c.lngAvg = e / f);
    return c || {}
}, ti.fGetStopDetails = function(a) {
    if (typeof ti.stops !== "object" || !a)
        return {};
    var b = ti.stops[a], c;
    if (!b) {
        var d = a.indexOf(";");
        if (d > 0) {
            c = {id: a,name: i18n.mapPoint,neighbours: "",lat: parseFloat(a.substr(0, d)),lng: parseFloat(a.substr(d + 1)),raw_data: ""};
            return c
        }
        return {}
    }
    var e = b.raw_data.split(";");
    c = {id: e[ti.FLD_ID],city: e[ti.FLD_CITY],area: e[ti.FLD_AREA],street: e[ti.FLD_STREET],name: b.name,info: e[ti.FLD_INFO],neighbours: e[ti.FLD_STOPS],lng: ti.stops[a].lng,lat: ti.stops[a].lat,raw_data: b.raw_data};
    return c
}, ti.fGetTransfersAtStop = function(a, b, c) {
    var d = ti.stops, e = [a], f = parseInt(a, 10);
    if (f && "" + f !== "" + a && cfg.defaultCity !== "druskininkai")
        for (var g in d)
            f == parseInt(g, 10) && e.push(g);
    return ti.fGetRoutesAtStop(e, !1, b, c)
}, ti.fGetRoutesAtStop = function(a, b, c, d) {
    var e = d && d.dirType || "-", f = d && d.id || null, g = [], h = typeof a == "string" ? a.split(",") : a, i = e.split("-"), j = i[0], k = i[i.length - 1], l = j.charAt(0), m = k.charAt(0);
    for (var n = h.length; --n >= 0; ) {
        var o = (ti.stops[h[n]] || {raw_data: ""}).raw_data.split(";"), p = o.length;
        for (var q = ti.FLD_DIRS; q < p; q += 2) {
            var r = ti.fGetRoutes(o[q]), s = +o[q + 1] < r.stops.length - 1;
            (s || c) && (b || !r.routeTag || r.id === f) && (r.stopId = h[n], e && (r.dirType.indexOf(e) < 0 && e.indexOf(r.dirType) < 0 && r.dirType.indexOf("-d") < 0 && j !== k && (r.dirType.indexOf(k) == 0 || r.dirType.indexOf(j) == r.dirType.length - 1 || r.dirType.indexOf("-" + m) < 0 && r.dirType.indexOf(j + "-") < 0 && r.dirType.indexOf(l + "-") < 0 && (r.dirType.indexOf("c") < 0 || r.dirType.indexOf("c") >= r.dirType.length - 2))) ? r.sortKey = "1" : r.sortKey = "0", r.sortKey = [cfg.transportOrder[r.transport] || "Z", ("000000" + parseInt(r.num, 10)).slice(-6), ("000000" + parseInt(r.num.substr(1), 10)).slice(-6), (r.num + "00000000000000000000").substr(0, 20), n === 0 ? "0" : "1", s ? "0" : "1", r.sortKey, ("000000" + r.order).slice(-6)].join(""), g.push(r))
        }
    }
    g.sort(function(a, b) {
        if (a.sortKey < b.sortKey)
            return -1;
        if (a.sortKey > b.sortKey)
            return 1;
        return 0
    });
    return g
}, ti.fGetRoutes = function(a, b, c, d, e, f) {
    var g = [], h = {}, i = -1, j = 0, k, l, m, n, o = ti.wordSeparators;
    f && (f = ti.toAscii("" + f, 2)), isNaN(a) ? a && typeof a == "object" ? l = a : (k = ti.routes, i = 0, j = k.length, m = c && ti.toAscii(c, !0)) : l = ti.routes[+a];
    while (i < j) {
        i >= 0 && (l = k[i]);
        var p = l.raw_data.split(";"), q = p[ti.RT_CITY], r = p[ti.RT_TRANSPORT], s = p[ti.RT_ORDER], t = ti.toAscii(p[ti.RT_ROUTENUM], !0), u = p[ti.RT_ROUTETAG];
        if (i < 0 || a === q && (!b || b === r) && (!m || m === t && (!u || e === !0 || e === "0" && u.indexOf("0") < 0)) && (!d || d === p[ti.RT_ROUTETYPE])) {
            if (f) {
                var v = t.indexOf(f);
                v == 0 && t.length > f.length && "0123456789".indexOf(t.charAt(f.length)) >= 0 && (v = -1);
                if (v !== 0) {
                    var w = ti.toAscii(p[ti.RT_ROUTENAME], 2);
                    v = w.indexOf(f), v > 0 && o.indexOf(w.charAt(v - 1)) < 0 && o.indexOf(f.charAt(0)) < 0 && (v = -1)
                }
                if (v >= 0) {
                    n = ti.toAscii(q + ";" + r + ";" + t + ";" + p[ti.RT_ROUTENAME], !0);
                    var x = h[n];
                    x && (v = -1, x.weekdays += p[ti.RT_WEEKDAYS])
                }
                if (v < 0 || u) {
                    ++i;
                    continue
                }
            } else if (i >= 0 && !m) {
                n = ti.toAscii(q + ";" + r + ";" + t, !0);
                var x = h[n];
                x && (x.weekdays += p[ti.RT_WEEKDAYS]);
                if (s !== "1") {
                    ++i;
                    continue
                }
            }
            var y = (p[ti.RT_VALIDITYPERIODS] || "").split(",");
            for (var z = 0; z < 7; ++z)
                y[z] = parseInt(y[z], 10) || 0, z > 0 && (y[z] += y[z - 1]);
            var A = [cfg.transportOrder[r] || "Z", ("000000" + parseInt(t, 10)).slice(-6), ("000000" + parseInt(t.substr(1), 10)).slice(-6), (t + "00000000000000000000").substr(0, 20), ("000000" + s).slice(-6)].join("");
            g.push({id: p[0],authority: p[ti.RT_AUTHORITY],city: q,transport: r,operator: p[ti.RT_OPERATOR],commercial: p[ti.RT_COMMERCIAL],num: p[ti.RT_ROUTENUM],name: p[ti.RT_ROUTENAME],routeTag: u,dirType: p[ti.RT_ROUTETYPE],weekdays: p[ti.RT_WEEKDAYS],validityPeriods: y,specialDates: p[ti.RT_SPECIALDATES],entry: p[ti.RT_ENTRY],streets: p[ti.RT_STREETS],stops: p.slice(ti.RT_ROUTESTOPS),times: l.times,order: s,sortKey: A}), n && (h[n] = g[g.length - 1])
        }
        ++i
    }
    if (!j)
        return g[0];
    g.sort(function(a, b) {
        if (a.sortKey < b.sortKey)
            return -1;
        if (a.sortKey > b.sortKey)
            return 1;
        return ti.naturalSort(a.num, b.num) || (a.order < b.order ? -1 : a.order > b.order ? 1 : 0)
    });
    return g
}, ti.fOperatorDetails = function(a, b) {
    var c = cfg.operators[a || b];
    if (!c)
        return a;
    c = b && c[b] || c;
    //return c[pg.language] || c.en || c
	return c[pg.language] || c.en || c
}, ti.explodeTimes = function(a) {
    var b = [], c = [], d = [], e = [], f, g, h = a.split(","), i, j, k = h.length, l = [], m = "+", n = "-";
    for (i = -1, f = 0, g = 0, j = 0; ++i < k; ) {
        var o = h[i];
        if (o == "")
            break;
        var p = o.charAt(0);
        p === m ? l[i] = o.charAt(1) === "0" && o !== "+0" ? "2" : "1" : p === n && o.charAt(1) === "0" && (l[i] = o.charAt(2) === "0" ? "2" : "1"), j += +o, b[f++] = j
    }
    for (var q = l.length; --q >= 0; )
        l[q] || (l[q] = "0");
    for (var q = 0; ++i < k; ) {
        var r = +h[i], s = h[++i];
        s === "" ? (s = f - q, k = 0) : s = +s;
        while (s-- > 0)
            d[q++] = r
    }
    --i;
    for (var q = 0, k = h.length; ++i < k; ) {
        var r = +h[i], s = h[++i];
        s === "" ? (s = f - q, k = 0) : s = +s;
        while (s-- > 0)
            e[q++] = r
    }
    --i;
    for (var q = 0, k = h.length; ++i < k; ) {
        var t = h[i], s = h[++i];
        s === "" ? (s = f - q, k = 0) : s = +s;
        while (s-- > 0)
            c[q++] = t
    }
    --i, g = 1;
    for (var q = f, u = f, v = 5, k = h.length; ++i < k; ) {
        v += +h[i] - 5;
        var s = h[++i];
        s !== "" ? (s = +s, u -= s) : (s = u, u = 0);
        while (s-- > 0)
            b[q] = v + b[q - f], ++q;
        u <= 0 && (u = f, v = 5, ++g)
    }
    final_data = {workdays: c,times: b,tag: l.join(""),valid_from: d,valid_to: e};
    return final_data
}, ti.fGetDirTag = function(a) {
    if (a.indexOf("-d") >= 0)
        return "0";
    if (a.indexOf("2") >= 0)
        return "2";
    if (a.indexOf("3") >= 0)
        return "3";
    var b = a.search(/[\dcefghijklmnopqrstuvwyz]/);
    if (b > 0) {
        var c = a.indexOf("_");
        if (c < 0 || c > b)
            return "1"
    }
    return ""
};

ti.findTrips = function(a) {
    a.no_just_walking = !1, a.reverseOriginal = a.reverse;
    if (a.attempt) {
        if (a.attempt == -1) {
            a.attempt = 1;
            if (a.results.length <= 0) {
                a.transport = a.transportOriginal, dijkstra(a, a.start_time, a.reverse);
                return
            }
        }
        if (a.attempt == 1 && a.results.length <= 0) {
            a.attempt = 2, a.reverse = -a.reverse, a.sort = "no sort", dijkstra(a, a.reverse == 1 ? 0 : 4320, a.reverse);
            return
        }
        if (a.attempt == 2 && a.results.length > 0) {
            a.attempt = 999, a.reverse = -a.reverse;
            var b;
            for (var c = 0; c < a.results.length; c++)
                a.reverse == 1 && (c == 0 || b < a.results[c].start_time) && (b = a.results[c].start_time), a.reverse == -1 && (c == 0 || b > a.results[c].finish_time) && (b = a.results[c].finish_time);
            dijkstra(a, b, a.reverse);
            return
        }
        if (a.attempt === 1) {
            var b = null;
            for (var c = 0; c < a.results.length; c++) {
                if (a.results[c].code == "W")
                    continue;
                a.reverse == 1 && (!b || b > a.results[c].finish_time) && (b = a.results[c].finish_time), a.reverse == -1 && (!b || b < a.results[c].start_time) && (b = a.results[c].start_time)
            }
            a.results = ti.filterSearchResults(a.results, a.reverse), a.callback1 && a.callback1(ti.finalizeSearchResults(a.results.slice(0, 1))), a.attempt = 3, a.results0 = a.results, a.no_just_walking = !0;
            if (b) {
                dijkstra(a, b, -a.reverse, a.start_time);
                return
            }
            a.results = []
        }
        if (a.attempt == 3) {
            a.results.push.apply(a.results, a.results0), a.results = ti.filterSearchResults(a.results, a.reverse);
            if (!0 || a.results.length == 1 || a.results0.length >= a.results.length)
                if (a.results[0].legs.length != 1 || a.results[0].legs[0].route) {
                    a.attempt = 4, a.results0 = a.results, a.no_just_walking = !0, dijkstra(a, a.reverse == 1 ? a.results[0].start_time + 1 : a.results[0].finish_time - 1, a.reverse);
                    return
                }
        }
        a.attempt == 4 && a.results.push.apply(a.results, a.results0);
        var d = ti.finalizeSearchResults(ti.filterSearchResults(a.results, a.reverse));

        if (a.callback)
            a.callback(d, !0);
        else
            return d
    } else {
 
        ti.timeStarted = +(new Date), a.attempt = 1;
        var e = a.date;
        e || (e = new Date, e = new Date(e.getFullYear(), e.getMonth(), e.getDate())), +e == +(new Date(2012, 3, 28)) ? a.weekday = 5 : +e == +(new Date(2012, 3, 30)) || +e == +(new Date(2012, 4, 1)) || +e == +(new Date(2012, 4, 4)) || +e == +(new Date(2012, 10, 19)) ? a.weekday = 7 : a.weekday = e.getDay() || 7, a.transportOriginal = ti.cloneObject(a.transport);
        if (a.transport.bus || a.transport.trol || a.transport.tram)
            a.transport.regionalbus && (a.transport.regionalbus = !1, a.attempt = -1), a.transport.commercialbus && (a.transport.commercialbus = !1, a.attempt = -1), a.transport.train && (a.transport.train = !1, a.attempt = -1);
        dijkstra(a, a.start_time, a.reverse)
    }
};
function dijkstra(a, b, c, d) {
    var e = !1, f = a.weekday, g = c == -1 ? a.finish_stops.split(",") : a.start_stops.split(","), h = c == -1 ? a.start_stops.split(",") : a.finish_stops.split(",");
    c || (e = !0, c = 1, f = a.weekdaydirect || "", a.direct_routes = []), a.results = [], b = b ? b * c : 0, d = d ? d * c : 7200;
    var i = b, j = c == 1 ? "1" : "2", k = c == 1 ? "2" : "1", l = a.route_nums ? "," + a.route_nums.toLowerCase().replace(/\s/g, "") + "," : "", m = a.lowFloor;
    l.indexOf(",z,") >= 0 && (m = !0, l = l.replace(/,z,/g, ""));
    var n = ti.dateToDays(a.date || new Date), o = a.max_changes || Infinity, p = a.change_time || 3, q = a.walk_speed_kmh || 4, r = a.walk_max || 2e3;
    r = e ? .05 : r / 1e3, r = r * r;
    var s = ti.stops, t = ti.routes, u = ti.specialDates, v = a.direct_routes || [], w = a.transport, x = a.commercial, y = a.routetypes, z = y != 1, A = a.area, B = 0, C = a.middle_stops;
    if (C) {
        B = 10;
        for (var D in C) {
            var E = s[D].routes;
            for (var F = 0; F < E.length; F += 2)
                t[E[F]].available = 10
        }
    }
    if (!0 || e)
        for (var G = t.length; --G >= 0; ) {
            var H = ti.fGetRoutes(G), I = t[G];
            I.available = w && w[H.transport] === !1 || B && B !== I.available || l && l.indexOf("," + H.num.toLowerCase() + ",") < 0 || x && x != H.commercial || y && z != !_transport_data[H.transport].region || A && A != H.cities[0] ? 0 : 1
        }
    for (var J = v.length; --J >= 0; )
        v[J].available = 0;
    var K, L, M = {}, N = {}, O = {};
    for (var P = 1, Q = g; P <= 2; ++P) {
        for (var F = Q.length; --F >= 0; )
            if (Q[F].charAt(0) == "A") {
                var R = s[Q[F]];
                if (R)
                    for (var J = R.neighbours.length; --J >= 0; )
                        Q.push(R.neighbours[J]);
                Q[F] = "removed stop"
            } else if (Q[F].indexOf(";") > 0) {
                var S = Q[F].split(";");
                P == 1 ? K = {id: Q[F],lat: parseFloat(S[0]),lng: parseFloat(S[1]),neighbours: []} : (L = {id: Q[F],lat: parseFloat(S[0]),lng: parseFloat(S[1])}, N[L.id] = !0, K && (O[K.id] = !0))
            }
        Q = h
    }
    var T = [], U = {};
    U[i] = [];
    for (var D in s) {
        var R = s[D];
        R.time = Number.POSITIVE_INFINITY;
        if (!R.lat || !R.lng)
            continue;
        if (K) {
            var V = (K.lng - R.lng) * 58.1, W = (K.lat - R.lat) * 111.2, X = V * V + W * W;
            X <= r && K.neighbours.push(R.id)
        }
        if (L) {
            var V = (L.lng - R.lng) * 58.1, W = (L.lat - R.lat) * 111.2, X = V * V + W * W;
            X <= r && (O[R.id] = !0)
        }
    }
    for (var J = g.length; --J >= -1; ) {
        var R = J >= 0 ? s[g[J]] : K;
        R && (R.prev_stop = !1, R.route = null, R.changes = 0, M[R.id] = !0, J == -1 && c == -1 && p ? (i -= p, U[i] = [K]) : U[i].push(R), R.time = i)
    }
    for (var J = h.length; --J >= 0; ) {
        var D = h[J], R = s[D];
        R && (N[D] = !0)
    }
    for (var G in t) {
        var I = t[G];
        I.trip_start_time = Number.POSITIVE_INFINITY
    }
    a.finish_stops || (h = !1);
    var Y = +(new Date), Z = function() {
        for (var b = 0; ; ) {
            for (var g; !(g = U[i]) || !g.length; )
                if (++i > d) {
                    if (!T.length) {
                        a.results = [];
                        if (e)
                            return [];
                        typeof window === "object" ? setTimeout(function() {
                            ti.findTrips(a)
                        }, 10) : ti.findTrips(a);
                        return
                    }
                    g = !1;
                    break
                }
            if (!g)
                break;
            g = g.pop();
            if (g.time < i || g.changes < 0)
                continue;
            if (++b == 3e3 && !e && typeof window === "object") {
                +(new Date) - Y > 3e4 ? (a.results = [], setTimeout(function() {
                    ti.findTrips(a)
                }, 10)) : setTimeout(Z, 100);
                return
            }
            if (N[g.id]) {
                d > i + 60 && (d = i + 60);
                continue
            }
            var l = g.routes || [], v = g.changes || 0;
            if (v <= o)
                for (var w = 0, x = l.length; w < x; w += 2) {
                    var y = t[l[w]];
                    if (e) {
                        if (y.available != 2 && h)
                            continue;
                        a.direct_routes.push(y), w + 2 < x && l[w + 2] == l[w] && (w += 2)
                    } else if (!y.available)
                        continue;
                    if (typeof y.times === "string") {
                        var z = ti.fGetRoutes(y.id);
                        y.times = ti.explodeTimes(y.times), y.stops = z.stops, y.entry = z.entry, y.specialDates = z.specialDates
                    }
                    var A = y.times, B = l[w + 1], D = y.stops || y.raw_data.split(";").slice(ti.RT_ROUTESTOPS);
                    if (c == 1 && B >= D.length - 1 || c == -1 && B == 0)
                        continue;
                    var E;
                    if ((E = y.entry).charAt(B) == k)
                        continue;
                    D[B] == D[B + c] && (B += c);
                    if (!A)
                        continue;
                    var F = A.workdays, G = A.valid_from, H = A.valid_to, I = A.tag, J = A.times;
                    A = null;
                    var K = F.length, P = K, Q = f;
                    u = y.specialDates;
                    for (var R = 0, S = u.length; R < u.length; ++R) {
                        if (!u[R])
                            continue;
                        if (u[R++][n]) {
                            (Q = u[R]) === "*" && (Q = f);
                            break
                        }
                        u[R] === "*" && (Q = "0")
                    }
                    do {
                        var V = -1, W = c == 1 ? Number.POSITIVE_INFINITY : 1, X, $ = !e || !C;
                        for (var _ = P + B * K; P--; )
                            if ((X = c * J[--_]) >= i && (X < W || e) && (!f || F[P].indexOf(Q) >= 0) && (!m || I.charAt(P) == "1") && (!H[P] || H[P] >= n) && G[P] <= n) {
                                V = _, W = X;
                                if (e) {
                                    if (!h) {
                                        var ba = {route: ti.fGetRoutes(y.id),start_time: W,trip_num: V % K};
                                        ba.route.stopId = g.id, T.push(ba), V = -2;
                                        continue
                                    }
                                    break
                                }
                            }
                        if (V < 0) {
                            if (V != -2 && !h) {
                                var ba = {route: ti.fGetRoutes(y.id),start_time: -1,trip_num: -1};
                                ba.route.stopId = g.id, T.push(ba)
                            }
                            break
                        }
                        var bb, bc = c * J[V % K];
                        e ? bb = D.length : bc < y.trip_start_time ? (bb = c == 1 ? D.length : 1, y.trip_start_time = bc, y.pos_max = c * B) : (bb = y.pos_max, bb > c * B && bc == y.trip_start_time && (y.pos_max = c * B)), K = c * K;
                        for (var bd = B; c * (bd += c) < bb; ) {
                            V += K;
                            if (E.charAt(bd) == j)
                                continue;
                            var be;
                            if ((be = J[V]) >= 0) {
                                be = c * be + p;
                                if (be > d)
                                    break;
                                if (be < i)
                                    continue;
                                var bf;
                                if (!(bf = s[D[bd]]))
                                    continue;
                                var bg;
                                e && !$ && ($ = bf.id in C);
                                if (N[bf.id] && $) {
                                    if (e) {
                                        y.available = 0;
                                        if (g.id.indexOf(";") < 0)
                                            for (var bh = 0; bh < bd; ++bh) {
                                                if (E.charAt(bh) == j || D[bh] == D[bh + 1])
                                                    continue;
                                                if (M[D[bh]] && J[V + K * (bh - bd)] >= 0) {
                                                    g = s[D[bh]], W = J[V + K * (bh - bd)];
                                                    break
                                                }
                                            }
                                        for (var bh = bb; --bh > bd; ) {
                                            if (E.charAt(bh) == j || D[bh] == D[bh - 1])
                                                continue;
                                            if (N[D[bh]] && J[V + K * (bh - bd)] >= 0) {
                                                bf = s[D[bh]], be = J[V + K * (bh - bd)];
                                                break
                                            }
                                        }
                                    }
                                    var ba = {legs: [{start_stop: g,start_time: c * W,finish_stop: bf,finish_time: c * (be - p),route: y,trip_num: V % K,start_pos: c >= 0 ? B : bd,finish_pos: c >= 0 ? bd : B}]};
                                    T.push(ba), bd = bb
                                } else {
                                    if (e)
                                        continue;
                                    if (be >= (bg = bf.time)) {
                                        if (bg < i)
                                            break;
                                        continue
                                    }
                                    if (y.available === 2) {
                                        bf.time = be, bf.changes = -1;
                                        continue
                                    }
                                    if (v < o)
                                        bf.route = y, bf.prev_stop = g, bf.prev_stop_start_time = W, bf.trip_num = V % K, bf.start_pos = c >= 0 ? B : bd, bf.finish_pos = c >= 0 ? bd : B;
                                    else
                                        continue
                                }
                                bf.time = be, bf.changes = v + 1;
                                var bi = U[be];
                                bi ? bi[bi.length] = bf : U[be] = [bf]
                            }
                        }
                    } while (e);
                    J = null
                }
            if (e)
                continue;
            var bj = g.route || !g.prev_stop ? g : g.prev_stop, bk = bj.lat, bl = bj.lng, bm = g.neighbours;
            for (var w = bm.length; --w >= -1; ) {
                var bf;
                if (w < 0)
                    if (O[bj.id])
                        bf = L;
                    else
                        break;
                else
                    bf = s[bm[w]] || {lat: 999,lng: 999};
                var bn = (bl - bf.lng) * 58.1, bo = (bk - bf.lat) * 111.2, bp = bn * bn + bo * bo;
                if (bp > r && (!g.name || bf.name !== g.name))
                    continue;
                bp = Math.sqrt(bp);
                var be = Math.round(bp / q * 60);
                be += bj.time, bj.route || !bj.prev_stop && c < 0 || (be += p), be < i && (be = i);
                if (be > d)
                    continue;
                if (N[bf.id]) {
                    var ba = {legs: [{start_stop: bj,start_time: c * (bj.time - (bj.route ? p : 0)),finish_stop: bf,finish_time: c * (be - p),route: null}]};
                    T.push(ba)
                } else if (be < bf.time)
                    bf.route = !1, bf.prev_stop = bj, bf.prev_stop_start_time = bj.time - (bj.route ? p : 0);
                else
                    continue;
                bf.time = be, bf.changes = v;
                var bi = U[be];
                bi ? bi[bi.length] = bf : U[be] = [bf]
            }
        }
        if (!h) {
            T.sort(function(a, b) {
                if (a.route.sortKey < b.route.sortKey)
                    return -1;
                if (a.route.sortKey > b.route.sortKey)
                    return 1;
                if (a.start_time < b.start_time)
                    return -1;
                if (a.start_time > b.start_time)
                    return 1;
                return 0
            });
            return T
        }
        var bq = {}, br = Number.POSITIVE_INFINITY;
        for (var w = T.length; --w >= 0; ) {
            var ba = T[w], bs = ba.legs[0].route ? ";" + ba.legs[0].route.id : "", bt = ba.legs[ba.legs.length - 1];
            ba.finish_time = bt.finish_time, ba.walk_time = bt.route ? 0 : Math.abs(bt.finish_time - bt.start_time), be = ba.departure_time;
            for (var bu = ba.legs[0].start_stop; bu; bu = bu.prev_stop) {
                if (!bu.prev_stop)
                    break;
                bt = {start_stop: bu.prev_stop,start_time: c * bu.prev_stop_start_time,finish_stop: bu,finish_time: c * (bu.time - p),route: bu.route,trip_num: bu.trip_num,start_pos: bu.start_pos,finish_pos: bu.finish_pos}, bu.route ? bs = c == 1 ? ";" + bu.route.id + bs : bs + ";" + bu.route.id : (c < 0 && (!bu.prev_stop || !bu.prev_stop.prev_stop) && (bt.finish_time -= p), ba.walk_time += Math.abs(bt.finish_time - bt.start_time)), ba.legs.splice(0, 0, bt)
            }
            if (c == -1) {
                var bv = ba.legs[0];
                if (!bv.route) {
                    var bw = ba.legs[1];
                    bw && bw.route ? (bv.start_time += bw.start_time - bv.finish_time, bv.finish_time = bw.start_time) : (bv.start_time -= p, bv.finish_time -= p)
                }
                ba.finish_time = ba.legs[0].start_time, ba.legs = ba.legs.reverse();
                for (var bx = -1, by = ba.legs.length; ++bx < by; ) {
                    bt = ba.legs[bx];
                    var be = bt.start_time - bt.finish_time;
                    !bt.route && bx > 0 ? (bt.start_time = ba.legs[bx - 1].finish_time, bt.finish_time = bt.start_time + be) : (bt.finish_time = bt.start_time, bt.start_time -= be);
                    var g = bt.finish_stop;
                    bt.finish_stop = bt.start_stop, bt.start_stop = g
                }
            }
            var bv = ba.legs[0], bw = ba.legs[1];
            if (!bv.route)
                if (bw && bw.route)
                    bv.start_time += bw.start_time - p - bv.finish_time, bv.finish_time = bw.start_time - p;
                else if (a.no_just_walking)
                    continue;
            ba.start_time = ba.legs[0].start_time, ba.travel_time = ba.finish_time - ba.start_time, e && (bs = ba.legs[0].start_time + "T" + bs, ba.code = bs), bs == "" && (bs = "W", br = ba.walk_time, ba.code = bs);
            var bz = bq[bs];
            if (!bz || c == 1 && ba.finish_time < bz.finish_time || c != 1 && ba.start_time > bz.start_time)
                bq[bs] = ba
        }
        if (e)
            a.results = T;
        else {
            var bA = [];
            for (var bs in bq) {
                var ba = bq[bs], bB = ba.code = bs + ";";
                if (ba.walk_time >= br && bs != "W")
                    continue;
                for (var w = bA.length; --w >= 0; )
                    if (bA[w].code.indexOf(bB) >= 0 || bB.indexOf(bA[w].code) >= 0)
                        if (c == 1 && bA[w].finish_time <= ba.finish_time || c != 1 && bA[w].start_time >= ba.start_time) {
                            if (bA[w].walk_time + bA[w].travel_time <= ba.walk_time + ba.travel_time && bB.length >= bA[w].code.length)
                                break
                        } else
                            bA[w].walk_time + bA[w].travel_time >= ba.walk_time + ba.travel_time && bA.splice(w, 1);
                w < 0 && bA.push(ba)
            }
            for (var w = bA.length; --w >= 0; ) {
                var ba = bA[w];
                a.reverseOriginal == -1 ? ba.code = ba.code + "T" + ba.legs[ba.legs.length - 1].finish_time : ba.code = ba.legs[0].start_time + "T" + ba.code
            }
            a.results = bA, typeof window === "object" ? setTimeout(function() {
                ti.findTrips(a)
            }, 10) : ti.findTrips(a)
        }
    };
    return Z()
}
ti.filterSearchResults = function(a, b) {
    for (var c = a.length; --c >= 0; ) {
        if (a[c].remove)
            continue;
        for (j = a.length; --j >= 0; ) {
            if (c === j)
                continue;
            a[j].code.indexOf(a[c].code) >= 0 && (a[j].remove = !0)
        }
    }
    var d = {};
    for (var c = a.length; --c >= 0; ) {
        if (a[c].remove)
            continue;
        a[c].penalty_time = a[c].travel_time + 5 * a[c].legs.length;
        var e = d[a[c].code];
        if (!e || e.penalty_time > a[c].penalty_time)
            d[a[c].code] = a[c]
    }
    a = [];
    for (var f in d)
        a.push(d[f]);
    a.sort(function(a, b) {
        return a.penalty_time - b.penalty_time
    });
    var g = Number.POSITIVE_INFINITY;
    for (var c = a.length; --c >= 0; )
        a[c].ok = c < 3 ? 1 : 0, g > a[c].travel_time && (g = a[c].travel_time);
    a.sort(function(a, b) {
        return a.finish_time - b.finish_time
    }), b == -1 && a.sort(function(a, b) {
        return -(a.start_time - b.start_time)
    });
    for (var c = a.length; --c >= 0; ) {
        var h = b == 1 ? a[c].finish_time - a[0].finish_time : a[0].start_time - a[c].start_time;
        h > a[0].travel_time / 2 + 60 ? a[c].ok = 0 : a[c].penalty_time > 2 * g && h > g && c >= 2 ? a[c].ok = 0 : a[c].walk_time > g ? a[c].ok = 0 : c < 3 && (a[c].ok = 1)
    }
    a.sort(function(a, b) {
        return b.ok - a.ok
    });
    for (var c = a.length; --c > 0; ) {
        if (a[c].ok == 1)
            break;
        a.pop()
    }
    a.sort(function(a, b) {
        return a.finish_time - b.finish_time
    }), b == -1 && a.sort(function(a, b) {
        return -(a.start_time - b.start_time)
    });
    return a
}, ti.finalizeSearchResults = function(a) {
    var b = Array(a.length);
    for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.legs;
        b[c] = {start_time: d.start_time,finish_time: d.finish_time,travel_time: d.travel_time,walk_time: d.walk_time,legs: [],code: d.code};
        for (var f = 0; f < e.length; f++) {
            var g = e[f], h = g.route ? g.route.times.workdays[g.trip_num] : "", i = g.start_stop && ti.fGetStopDetails(g.start_stop.id), j = g.finish_stop && ti.fGetStopDetails(g.finish_stop.id), k = {trip_num: g.trip_num,start_pos: g.start_pos,finish_pos: g.finish_pos,start_time: g.start_time,finish_time: g.finish_time,weekdays: h,start_stop: i && {id: i.id,name: i.name,street: i.street,lat: i.lat,lng: i.lng},finish_stop: j && {id: j.id,name: j.name,street: j.street,lat: j.lat,lng: j.lng}};
            g.route && (k.route = ti.fGetRoutes(g.route)), b[c].legs.push(k)
        }
    }
    return b
};

ti.loadData();

/*fs = require('fs')
fs.writeFile("/home/wap4/domains/satiksme.wap4.org/public_html/json/routes.json", ti.routes, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
fs.writeFile("/home/wap4/domains/satiksme.wap4.org/public_html/json/stops.json", ti.stops, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
*/
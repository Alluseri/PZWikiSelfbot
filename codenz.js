// imagine cleantalk
// made while listening to this playlist https://www.youtube.com/playlist?list=PLuPCd5VIscosG72QWT03BBZriNDEbryea

// thanks https://stackoverflow.com/a/33486055 for this func
var MD5=function(d){return M(V(Y(X(d),8*d.length))).toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,g=f,t=r,a=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,g),r=safe_add(r,t),i=safe_add(i,a)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

function convertDate(d) {
    function pad(s,l){while(s.length<l)s="0"+s;return s;}
    return d.getUTCFullYear().toString() + pad((d.getUTCMonth()+1).toString(),2) + pad(d.getUTCDate().toString(),2) + pad(d.getUTCHours().toString(),2) + pad(d.getUTCMinutes().toString(),2) + pad(d.getUTCSeconds().toString(),2);
}

function buildHeaders(myHeaders, doc) {
	myHeaders["cookie"] = PZWIKI_COOKIE;
	myHeaders["user-agent"] = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 OPR/82.0.4227.50";
	if (doc) {
		myHeaders["accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9";
	} else {
		myHeaders["accept"] = "application/json, text/javascript, */*; q=0.01";
	}
	myHeaders["accept-encoding"] = "gzip, deflate, br";
	myHeaders["accept-language"] = "en-US,en;q=0.9";
	myHeaders["dnt"] = "1";
	myHeaders["sec-ch-ua"] = '"Chromium";v="96", "Opera GX";v="82", ";Not A Brand";v="99"';
	myHeaders["sec-ch-ua-mobile"] = "?0"
	myHeaders["sec-ch-ua-platform"] = "Windows";
	if (doc) {
		myHeaders["sec-fetch-dest"] = "document";
		myHeaders["sec-fetch-mode"] = "navigate";
	} else {
		myHeaders["sec-fetch-dest"] = "empty";
		myHeaders["sec-fetch-mode"] = "cors";
	}
	myHeaders["sec-fetch-site"] = "same-origin";
	myHeaders["sec-fetch-user"] = "?1";
	myHeaders["upgrade-insecure-requests"] = "1";
	return myHeaders;
}

async function pushEditState(article) {
	var text = await (await fetch("https://pzwiki.net/wiki/"+article, {
		method: "GET",
		credentials: "same-origin",
		headers: buildHeaders({},true)
	})).text();
	console.log("[STEP/SUCCESS] Naturally opened wiki article, data will be parsed.");
	var editx = await (await fetch("https://pzwiki.net/w/index.php?title="+article+"&action=edit", {
		method: "GET",
		credentials: "same-origin",
		headers: buildHeaders({
			"referer": "https://pzwiki.net/wiki/"+article
		},true)
	})).text();
	console.log("[STEP/SUCCESS] Opened the edit page, data will be parsed.");
	return [convertDate(new Date()),text.match('"wgRevisionId":(.+?),')[1],editx.match('id="editingStatsId" value="(.+?)"')[1]];
}

async function stashEdit(article, body, summary, csr) {
	var resp = await (await fetch("https://pzwiki.net/w/api.php", {
		method: "POST",
		credentials: "same-origin",
		body: Object.entries({
			action: "stashedit",
			format: "json",
			formatversion: "2",
			title: article,
			section: "",
			sectiontitle: "",
			summary: summary,
			contentmodel: "wikitext",
			contentformat: "text/x-wiki",
			baserevid: csr[1],
			text: body,
			token: PZWIKI_TOKEN
		}).map((r)=>{return encodeURIComponent(r[0])+"="+encodeURIComponent(r[1]);}).join("&"),
		headers: buildHeaders({
			"referer": "https://pzwiki.net/w/index.php?title="+article+"&action=submit",
			"x-requested-with": "XMLHttpRequest",
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		}, false)
	})).json();
	if (!resp || !resp["stashedit"] || !resp["stashedit"]["texthash"]) {
		console.log("[STASH/FAILURE] Failed to generate a stash hash.");
		return -1;
	}
	console.log("[STASH/SUCCESS] Successfully generated a stash hash!");
	return resp["stashedit"]["texthash"];
}

async function publish(article, body, summary, csr) {
	var num = Number.parseInt(csr[1]);
	
	var formData = new FormData();
	formData.append("wpUnicodeCheck", "\u2133\ud835\udcb2\u2665\ud835\udcca\ud835\udcc3\ud835\udcbe\ud835\udcb8\u2134\ud835\udcb9\u212f");
	formData.append("wpAntispam", "");
	formData.append("editingStatsId", csr[2]);
	formData.append("wpSection", "");
	formData.append("wpStarttime", csr[0]);
	formData.append("wpEdittime", convertDate(new Date()));
	formData.append("editRevId", num + 2);
	formData.append("wpScrolltop", "0");
	formData.append("wpAutoSummary", MD5(summary));
	formData.append("oldid", 0);
	formData.append("parentRevId", num + 2);
	formData.append("format", "text/x-wiki");
	formData.append("model", "wikitext");
	formData.append("wpTextbox1", body);
	formData.append("wpSummary", summary);
	formData.append("wpWatchthis", "");
	formData.append("wpSave", "Save changes");
	formData.append("wpEditToken", PZWIKI_TOKEN);
	formData.append("mode", "text");
	formData.append("wpUltimateParam", "1");
	
	await fetch("https://pzwiki.net/w/index.php?title="+article+"&action=submit", {
		method: "POST",
		credentials: "same-origin",
		body: formData,
		headers: buildHeaders({
			"referer": "https://pzwiki.net/w/index.php?title="+article+"&action=edit",
			"cache-control": "max-age=0"
		}, true)
	});
}

async function fullEditCycle(article, body, summary, timeTaken) {
	try {
		console.log("0/3 Pushing edit state");
		var csr = await pushEditState(article);
		console.log("1/3 Taking time");
		setTimeout(async()=>{
			console.log("2/3 Dropping stash edit");
			await stashEdit(article, body, summary, csr);
			console.log("3/3 Publishing");
			await publish(article, body, summary, csr);
			console.log("фрешхак забустил");
		},timeTaken);
	} catch (ex) {
		console.log("фрешхак не забустил");
		console.log(ex);
	}
}

var PZWIKI_TOKEN = mw.user.tokens.values["editToken"];
var PZWIKI_COOKIE = document.cookie;

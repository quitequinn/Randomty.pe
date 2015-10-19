/* =============================================================
    Add your scripts here.
 * ============================================================= */

$( document ).ready(function() {

////////////////////////////////////////////////
	//WRAPPER SIZE
	var displayHeight;

	function wrap(){
		displayHeight = $(window).height() - $('footer').height() ;
		$(".yourtextwrap").css('min-height', displayHeight);
		$(".textwrap").css('width', $(".info").width());
	}
	wrap();

////////////////////////////////////////////////
	//COLOR
	var len = 377;
	var lenCur = 0;

	function byte2Hex(n){
	    var nybHexString = "0123456789ABCDEF";
	    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
	}
	function RGB2Color(r,g,b){
		return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
	}
	function makeColorGradient(lenCur){
    	center = 128;
    	width = 127;
  		frequency = 0.1;

       	red = Math.sin(frequency*lenCur + 0) * width + center;
       	green = Math.sin(frequency*lenCur + 2) * width + center;
       	blue = Math.sin(frequency*lenCur + 4) * width + center;

       	return RGB2Color(red,green,blue);
	}

	function changecolor(){
		printstyle = setTimeout(function(){
			lenCur = lenCur + 1;
			value = makeColorGradient(lenCur)

			if (lenCur == len){
				lenCur = 0;
			};
			color = makeColorGradient(lenCur);
			opcolor = tinycolor.complement(makeColorGradient(lenCur));
			$('.newcss').html("<style> a, .linkstyle, .text:hover, .info, a:hover, .linkstyle:hover, a:hover svg#cloud, .social a:hover{ color: " + color + "; border-color: " + color + "} a, .linkstyle, .text, .info, a:hover, .linkstyle:hover, a:hover svg#cloud, .social a:hover{ color: " + color + "; border-color: " + color + "} .animwrap a svg{ fill: " + color + "; } .color { border-bottom: 40px solid" + color + " ;}html, body, footer{background:" + opcolor + " ;}</style>");
			changecolor();

		}, 50);
	}

	$(".color")
		.mouseover(function(){
			changecolor();
		})
		.mouseout(function(){
			clearTimeout(printstyle);
	  	}
	);

	function wrap(){
		displayHeight = $(window).height() - $('footer').height() ;
		$(".yourtextwrap").css('min-height', displayHeight);
		$(".textwrap").css('width', $(".info").width());
	}
	wrap();


////////////////////////////////////////////////
	//PHP urlencode() FOR JAVASCRIPT
function urlencode(str) {
	str = (str + '')
	.toString();

	return encodeURIComponent(str)
	.replace(/!/g, '%21')
	.replace(/'/g, '%27')
	.replace(/\(/g, '%28')
	.replace(/\)/g, '%29')
	.replace(/\*/g, '%2A')
	.replace(/%20/g, '+');
}

////////////////////////////////////////////////
	//GET SHORTEN URL
	var currentpage,
		urllocation,
		signature,
		shortenurl,
		shorturl;

	function getshorturl(){
		currentpage = urlencode(document.URL);
		urllocation = 'http://quinnkeaveney.com/recondite/url';
		signature = 'c4b2387526';
		shortenurl = urllocation + '/yourls-api.php?signature=' + signature + '&action=shorturl&url=' + currentpage + '&format=simple';

		$.ajax({ url: shortenurl, success: function(data) { window.shorturl = data; }});
	};
	getshorturl();


////////////////////////////////////////////////
	//HASH CHANGE
  	var hash = window.location.hash;
  	var hin;
  	var hout;

	/*
	function escapeRegExp(string) {
	    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
	function replaceAll(find, replace, str) {
	  	return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	}
	*/
  	function out(){
  		hout = encodeURIComponent($('.text').html());
  		/*
  		hout = replaceAll('<div class="', "☁︎", $('.text').html());
	  	hout = replaceAll('</div>', "☼", hout);
	  	hout = replaceAll('"><br>', "☽", hout);
	  	hout = replaceAll('<br>', "☆", hout);
	  	hout = replaceAll('bl0 bl1 bl2 bl3">', "✧", hout);
	  	hout = replaceAll('bl0 bl1 bl2">', "☀︎", hout);
	  	hout = replaceAll('bl0 bl1">', "★", hout);
	  	hout = replaceAll('bl0">', "⦿", hout);
		*/
	}
  	function tin(){
  		hin = decodeURIComponent(hash.substr(1));

	  	/*
	  	hin = replaceAll("☁︎", '<div class="', hash.substr(1));
	  	hin = replaceAll("☼", '</div>', hin);
	  	hin = replaceAll("☽", '"><br>', hin);
	  	hin = replaceAll("☆", '<br>', hin);
	  	hin = replaceAll("✧", 'bl0 bl1 bl2 bl3">', hin);
	  	hin = replaceAll("☀︎", 'bl0 bl1 bl2">', hin);
	  	hin = replaceAll("★", 'bl0 bl1">', hin);
	  	hin = replaceAll("⦿", 'bl0">', hin);
		*/
	}
  	function changeLinks(){
  		getshorturl();
  		$("a.tshare").attr('href', "https://twitter.com/home?status=" + window.shorturl );
  		$("a.fshare").attr('href', "https://www.facebook.com/sharer/sharer.php?u=" + window.shorturl );
  		$("a.gshare").attr('href', "https://plus.google.com/share?url=" + window.shorturl );
  		$("a.lishare").attr('href', "https://www.linkedin.com/shareArticle?mini=true&url=" + window.shorturl );
  	}

  	out();
	tin();

  	$('.text').html(hin);

  	if (hash === ''){
      	$('.text').html('<div class="bl0">RAnDom</div>');
 	}
  	$( ".text" ).keyup(function() {
  		out();
    	window.location.hash = hout;
  	});



////////////////////////////////////////////////
	//BIG TEXT
	var subj = ".textsize";
  	function textSize(){
    	$(subj).bigtext();
  	}
  	$(subj).mousedown(function(){textSize();});
  	$(subj).keyup(function(){
  		textSize();
  	});

	setTimeout(function(){
  		textSize();
	},1000);
	textSize();

////////////////////////////////////////////////
	//Randomize
	var randize;
	var firstext = [];

	function setCharAt(str,index,chr) {
	    if(index > str.length-1) return str;
	    return str.substr(0,index) + chr + str.substr(index+1);
	}
	function getRandomInt(min, max) {
	  	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function randomize(){
		randize = setTimeout(function(){
			randChar = Math.random().toString(36).slice(2,3);
			str = $this.text();
			randLength = $this.text().length;
			randSpot = getRandomInt(0, randLength);
			$this.text(setCharAt(str, randSpot, randChar));

			randomize();
		}, 100);
	}
	

	$('a')
		.mouseover(function(){
			$this = $(this);
			firstext[$this] = $this.text();

			if ($this.hasClass('dc')){}else{ 
				randomize();
			};

		})
		.mouseout(function(){
			if ($this.hasClass('dc')){}else{ 
				clearTimeout(randize);
	    		$this.text(firstext[$this]);
	    	};

	  	}
	);

	$('.linkstyle')
		.mouseover(function(){
			$this = $(this);
			firstext[$this] = $this.text();

			if ($this.hasClass('dc')){}else{ 
				randomize();
			};

		})
		.mouseout(function(){
			if ($this.hasClass('dc')){}else{ 
				clearTimeout(randize);
	    		$this.text(firstext[$this]);
	    	};

	  	}
	);


////////////////////////////////////////////////
	//Share
	$('.linkstyle').mousedown(function(){
		$('.share').addClass('visible');
		changeLinks();
	});
	$('.sharebackground').mousedown(function(){
		$('.share').removeClass('visible');
	});

////////////////////////////////////////////////
	//Resize
	$('html').resize(function(){
		$.debounce( 250, wrap(), textSize());
	});
});

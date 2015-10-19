/* =============================================================
    Add your scripts here.
 * ============================================================= */

$( document ).ready(function() {

////////////////////////////////////////////////
	//WRAPPER SIZE
	var displayHeight;

	function wrap(){
		displayHeight = $(window).height() - $('footer').height();
		$(".yourtextwrap").css('min-height', displayHeight);
		$(".textwrap").css('width', $(".info").width());
	}
	wrap();

////////////////////////////////////////////////
	//COLOR
	var len = 377;
	var lenCur = -1;
	var color, 
		opcolor,
		center,
		width,
		frequency,
		red,
		green,
		blue,
		printstyle,
		value,
		amount;

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

	function setcolor(color){
		opcolor = tinycolor.complement(color);
		$('.newcss').html("<style> a, .linkstyle, .text:hover, .info, a:hover, .linkstyle:hover, a:hover svg, .social a:hover, .intro{ color: " + color + "; border-color: " + color + "} .shareblock, .intro { background: " + tinycolor.lighten(opcolor, amount = 10) + "; }a, .linkstyle, .text, .info, a:hover, .linkstyle:hover, a:hover svg#cloud, .social a:hover{ color: " + color + "; border-color: " + color + "} .animwrap a svg, a:hover svg#cloud{ fill: " + color + "; } .color{ color:" + color + "; } html, body, footer{background:" + opcolor + " ;}</style>");
	}
	function changecolor(){
		printstyle = setTimeout(function(){
			lenCur = lenCur + 1;
			value = makeColorGradient(lenCur);

			if (lenCur === len){
				lenCur = 0;
			}

			color = makeColorGradient(lenCur);

			setcolor(color);
			hashchange();

			changecolor();
		}, 50);
	}

	function resetColor(){
		var black = '#272727';
		var white = '#f4f4f4';
		$('.newcss').html("<style> a, .linkstyle, .text:hover, .info, a:hover, .linkstyle:hover, a:hover svg, .social a:hover, .intro{ color: " + black + "; border-color: " + black + "} .shareblock, .intro { background: " + tinycolor.lighten(black, amount = 10) + "; }a, .linkstyle, .text, .info, a:hover, .linkstyle:hover, a:hover svg#cloud, .social a:hover{ color: " + black + "; border-color: " + black + "} .animwrap a svg, a:hover svg#cloud{ fill: " + black + "; } .color{ color:" + black + "; } html, body, footer{background:" + white + " ;}</style>");
	}

	$(".color")
		.mouseover(function(){
			changecolor();
		})
		.mouseout(function(){
			clearTimeout(printstyle);
			hashchange();
	  	})
	  	.mousedown(function(){
			clearTimeout(printstyle);
			window.location.hash = decodeURIComponent(window.location.hash.substr(1).substr(17));
			
			resetColor();

			lenCur = -1;
			hashchange();

		}
	);



////////////////////////////////////////////////
	//PHP urlencode() FOR JAVASCRIPT
function urlencode(str) {
	str = (str + '')
	.toString();
	
	str = encodeURIComponent(str);


	return str;
}

function urldecode(str) {

	str = str.replace(/%21/g, '!')
	.replace(/%27/g, "'")
	.replace(/%28/g, '\(')
	.replace(/%29/g, '\)')
	.replace(/%2A/g, '\*')
	.replace(/'+'/g, '%20');

	str = decodeURIComponent(str);

	return str;
}

////////////////////////////////////////////////
	//GET SHORTEN URL
	var urllocation,
		signature;
	window.ajaxsuccess = false;

	function getshorturl(){
		urllocation = 'http://randomty.pe';
		signature = 'c4b2387526';
		shortenurl = urllocation + '/yourls-api.php?signature=' + signature + '&action=shorturl&url=' + urlencode(document.URL) + '&format=simple';

		$.ajax({ url: shortenurl, success: function(data) { window.shorturl = data; window.ajaxsuccess = true;}});

	}


////////////////////////////////////////////////
	//HASH CHANGE
  	var hash = window.location.hash;
  	var hin,
  		hout;

  	function out(){
  		hout = $('.text').html();
  		
  		if (lenCur !== -1) {
  			hout = encodeURIComponent('wowza' + makeColorGradient(lenCur) + "+" + $('.text').html());

  		} else {
  			hout = encodeURIComponent($('.text').html());
		}
	}
  	function tin(){
  		hin = decodeURIComponent(hash.substr(1));
  		if ( hin.substr(0, 6) === 'wowza#'){
  			color = hin.substr(5, 7);
  			hin = decodeURIComponent(hash.substr(18));
  			setcolor(color);
  		}
	}
  	function changeLinks(){
  		getshorturl();
  		$("a.tshare").attr('href', "https://twitter.com/home?status=" + window.shorturl );
  		$("a.fshare").attr('href', "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + window.shorturl );
  		$("a.gshare").attr('href', "https://plus.google.com/share?url=" + window.shorturl );
  		$("a.lishare").attr('href', "https://www.linkedin.com/shareArticle?mini=true&url=" + window.shorturl );
  	}

  	out();
	tin();

  	$('.text').html(hin);

  	if (hash === ''){
      	$('.text').html('<div class="bl0">RAnDom</div>');
      	$('.introblock').addClass('visible');
 	}
 	function hashchange(){
  		out();
    	window.location.hash = hout;
 	}
  	$( ".text" ).keyup(function(){ hashchange(); });



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
	var randize, $this, randChar, randLength, randSpot, str;
	var firstext = [];

	function setCharAt(str,index,chr) {
	    if(index > str.length-1){
	    	return str;
	    }
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
			}

		})
		.mouseout(function(){
			if ($this.hasClass('dc')){}else{ 
				clearTimeout(randize);
	    		$this.text(firstext[$this]);
	    	}

	  	}
	);

	$('.linkstyle')
		.mouseover(function(){
			$this = $(this);
			firstext[$this] = $this.text();

			if ($this.hasClass('dc')){}else{ 
				randomize();
			}

		})
		.mouseout(function(){
			if ($this.hasClass('dc')){} else { 
				clearTimeout(randize);
	    		$this.text(firstext[$this]);
	    	}

	  	}
	);


////////////////////////////////////////////////
	//SHARE
		function changecolor(){
		printstyle = setTimeout(function(){
			lenCur = lenCur + 1;
			value = makeColorGradient(lenCur);

			if (lenCur === len){
				lenCur = 0;
			}

			color = makeColorGradient(lenCur);

			setcolor(color);

			changecolor();
		}, 50);
	}



	$('.info .linkstyle').mousedown(function(){
		changeLinks();

		function checkajax(){
			checkaj = setTimeout(function(){
				if (window.ajaxsuccess == true) {
					$('.share').addClass('visible');
					return;
				}
				checkajax();

		    }, 100); 
		}
		checkajax();
	});
	$('.sharebackground').mousedown(function(){
		$('.share').removeClass('visible');
	});


////////////////////////////////////////////////
	//INTRO
	$('.introbackground').mousedown(function(){
		$('.introblock').removeClass('visible');
	});

	$('.social .linkstyle').mousedown(function(){
		$('.introblock').addClass('visible');
	});

	$('.intro .close').mousedown(function(){
		$('.introblock').removeClass('visible');
	});
 
	$('.seemore').mousedown(function(){
		$('.seemore').parent().addClass('show');
	});

////////////////////////////////////////////////
	//RESIZE
	$(window).resize(
		$.debounce( 250, function(){ wrap(); textSize();})
	);
});

/* =============================================================
    Add your scripts here.
 * ============================================================= */

$( document ).ready(function() {

////////////////////////////////////////////////
	//Doc Title
	
		function rDoc(){
			setTimeout(function(){
				randsect = Math.random().toString(36).slice(2,3);
				str = document.title;
				randL = str.length;
				randS = getRandomInt(0, randL);
				document.title = (setCharAt(str, randS, randsect));
				rDoc()
			}, 1000);
		}
		rDoc();
		

////////////////////////////////////////////////
	//IF MOBILE	
    if(isMobile()){
		$('.color').on( "vmousedown", function() { changecolor(); });		
		$('.color').on( "vmouseout", function() { clearTimeout(printstyle); });
	}
	function isMobile() {
	    if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/IEMobile/i)){
	    	return true; } else { return false; }
	}

	function iphone() {
	    if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
	    	return true; } else { return false; }
	}


////////////////////////////////////////////////
	//WRAPPER SIZE
	var displayHeight;

	function wrap(){
		displayHeight = $(window).height() - $('footer').height() - $('.credit h6').height() - 5;
		$(".yourtextwrap").css('min-height', displayHeight);
		$(".textwrap").css('width', $("body .container").width());
	}
	wrap();


////////////////////////////////////////////////
	//COLOR
	var len = 377;
	var lenCur = -1;
	var svgnum = 0;
	var svg = ['no','svg1','svg2','no','svg3', 'svg4'];
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
		opcolor = tinycolor.triad(color)[2];
		opcolor2 = tinycolor.triad(color)[1];
		$('.newcss').html("<style> ."+svg[svgnum]+"{display:block;}.backgroundsvg{ fill:"+opcolor2+"; stroke:"+opcolor2+"} a, .linkstyle, .info, a:hover, .linkstyle:hover, a:hover svg, .social a:hover, .intro, .optionmobile .copyios .shareiconwrap{ color: " + color + "; border-color: " + color + "} .shareblock, .intro { background: " + opcolor + "; }a, .linkstyle, .text, .info, a:hover, .linkstyle:hover, a:hover svg#cloud, .social a:hover{ color: " + color + "; border-color: " + color + "} .animwrap a svg, .tdf, #cloud, #cloud2, .tdflogo{ fill: " + color + "; } .color{ color:" + color + "; } html, body, footer{background:" + opcolor + " ;}</style>");
		svgnum = svgnum + 1;
		if (svgnum >= 6){
			svgnum = 0;
		}
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
		}, 100);
	}

	function resetColor(){
		svgnum = 0;
		var black = '#ED922F';
		var white = '#231F20';
		$('.newcss').html("<style> a, .linkstyle, .info, a:hover, .linkstyle:hover, a:hover svg, .social a:hover, .optionmobile .copyios .shareiconwrap{ color: " + white + "; border-color: " + white + "} a, .linkstyle, .text, .info, a:hover, .linkstyle:hover, a:hover svg#cloud, .social a:hover, .intro{ color: " + black + "; border-color: " + black + "} .animwrap a svg, .tdf, #cloud, #cloud2, .tdflogo{ fill: " + black + "; } .color{ color:" + black + "; } html, body, footer, .intro, .shareblock {background:" + white + " ;}</style>");
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
	var _flash_installed = ((typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") || (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false));

  	function out(){
  		hout = $('.text').html();
  		
  		if (lenCur !== -1) {
  			hout = encodeURIComponent('clr00' + makeColorGradient(lenCur) + (lenCur % 6) + "+" + $('.text').html());
  		} else {
  			hout = encodeURIComponent($('.text').html());
		}
	}
  	function tin(){
  		hin = decodeURIComponent(hash.substr(1));
 		if ( hin.substr(0, 6) === 'clr00#'){
  			color = hin.substr(5, 7);
 			svgnum = hin.substr(12, 1);
  			hin = decodeURIComponent(hash.substr(19));
  			setcolor(color);
  		}
  		if (navigator.userAgent.search("Firefox") > -1) {
  			if ( hin.slice(0,11) == ' class="bl0'){
		   		hin = '<div' + hin;
  			}
		}
		if ( hin.slice(0,13) == 'iv class="bl0'){
		   	hin = '<d' + hin;
		}
	}

	
  	function changeLinks(){
  		if (iphone()) {
  			$(".optionmobile a.tshare").attr('href', "twitter://post?message=" + encodeURIComponent(document.URL));
	  		$('.share').addClass('mobile');
			$('.copyios .shareiconwrap p').text(encodeURIComponent(document.URL));

		}else{
	  		$("a.tshare").attr('href', "https://twitter.com/home?status=" + encodeURIComponent(document.URL));
	  		$("a.fshare").attr('href', "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + encodeURIComponent(document.URL));
	  		$("a.gshare").attr('href', "https://plus.google.com/share?url=" + encodeURIComponent(document.URL));
		};

		//Adds flash copy clipboard functionality
		if ( _flash_installed) {
			setTimeout(function(){
				$('.zclip').remove();
			    $('#clipshare').zclip({
			        path:'js/ZeroClipboard.swf',
			        copy: document.URL,
					beforeCopy:function(){ },
					afterCopy:function(){ }
				});
			},1000);
		}else{ 
			$('#clipshare').css('display', 'none'); 
			$('.gshare .shareblock').css('width', '100%'); 
			$('.gshare .shareblock').css('width', '-webkit-calc(100% - 8px)'); 
			$('.gshare .shareblock').css('width', '-o-calc(100% - 8px)'); 
			$('.gshare .shareblock').css('width', '-moz-calc(100% - 8px)'); 
			$('.gshare .shareblock').css('width', 'calc(100% - 8px)'); 
		}
	}
  	out();
	tin();

	$('.zclip').mouseover(function(){
		$('#clipshare').addClass('hover');					
	}).mouseout(function(){
		$('#clipshare').removeClass('hover');
  	});

  	$('.text').html(hin);

  	if (hash === ''){
      	$('.text').html('<div class="bl0">RAnDom</div>');
      	$('.introblock').addClass('visible');
      	$('.bl0').addClass('hover');    
      	$('.bl0').mousedown(function(){$('.bl0').removeClass('hover');});
 	}
 	function hashchange(){
  		out();
    	window.location.hash = hout;
 	}
  	$( ".text" ).keyup(function(){ hashchange();});
  	$( ".text" ).keydown(function(){myAudio2.play();});


////////////////////////////////////////////////
	//BIG TEXT
	var subj = ".textsize";
  	function textSize(){
    	$(subj).bigtext({maxfontsize: 400, minfontsize: 16});
  	}
  	$(subj).mousedown(function(){textSize();});
  	$(subj).keyup(function(){
  		textSize();
  	});

	setTimeout(function(){
  		textSize();
	},1000);
	setTimeout(function(){
  		textSize();
	},2000);
	setTimeout(function(){
  		textSize();
	},4000);
	setTimeout(function(){
  		textSize();
	},8000);
	textSize();


////////////////////////////////////////////////
	//IF SAFARI
	var safari = false;
	var ua = navigator.userAgent.toLowerCase(); 
	if (ua.indexOf('safari') != -1) { 
	    if (ua.indexOf('chrome') > -1) {
	    } else {
	      	safari = true;
	    }
	}

////////////////////////////////////////////////
	//Randomize
	var randize, $this, randChar, randLength, randSpot, str;
	var firstext = [];
	var myAudio = new Audio('click.mp3'); 
	var myAudio2 = new Audio('type.mp3'); 

	function stopaudio(){
		myAudio.pause();
		myAudio.currentTime = 0;
	}

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
			if (safari == true) {
				return;
			}
			randChar = Math.random().toString(36).slice(2,3);
			str = $this.text();
			randLength = $this.text().length;
			randSpot = getRandomInt(0, randLength);
			$this.text(setCharAt(str, randSpot, randChar));

			randomize();
		}, 50);
	}

	$('a')
		.mouseover(function(){
			$this = $(this);
			firstext[$this] = $this.text();

			if ($this.hasClass('dc')){}else{ 
				myAudio.play();
				randomize();
			}
		})
		.mouseout(function(){
			if ($this.hasClass('dc')){}else{ 
				clearTimeout(randize);
	    		$this.text(firstext[$this]);
	    	}
	    	stopaudio();
	  	}
	);

	$('.social a')
		.mouseover(function(){		
			myAudio.play();
		})
		.mouseout(function(){
	    	stopaudio();
	  	}
	);


	$('.linkstyle')
		.mouseover(function(){
			$this = $(this);
			firstext[$this] = $this.text();

			if ($this.hasClass('dc')){}else{ 
				myAudio.play();
				randomize();
			}

		})
		.mouseout(function(){
			if ($this.hasClass('dc')){} else { 
				clearTimeout(randize);
	    		$this.text(firstext[$this]);
	    	}
	    	stopaudio();
	  	}
	);

	$('.color')
		.mouseover(function(){
			$this = $(this);
			firstext[$this] = $this.text();

			if ($this.hasClass('dc')){}else{ 
				myAudio.play();
				randomize();
			}

		})
		.mouseout(function(){
			if ($this.hasClass('dc')){} else { 
				clearTimeout(randize);
	    		$this.text(firstext[$this]);
	    	}
	    	stopaudio();
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
		}, 100);
	}

	$('.info .linkstyle').mousedown(function(){
		changeLinks();
		getshorturl();
		$('.share').addClass('visible');

		function checkajax(){
			checkaj = setTimeout(function(){
				if (window.ajaxsuccess == true) {
					if (iphone()){
			  			$(".optionmobile a.tshare").attr('href', "twitter://post?message=" + window.shorturl );
				  		$('.share').addClass('mobile');
				  		$('.copyios .shareiconwrap p').text(window.shorturl);
				  	
					}else{
				  		$("a.tshare").attr('href', "https://twitter.com/home?status=" + window.shorturl );
				  		$("a.fshare").attr('href', "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + window.shorturl );
				  		$("a.gshare").attr('href', "https://plus.google.com/share?url=" + window.shorturl );
					};

					//Adds flash copy clipboard functionality for small link
					if ( _flash_installed) {
						setTimeout(function(){
							$('.zclip').remove();
						    $('#clipshare').zclip({
						        path:'js/ZeroClipboard.swf',
						        copy: window.shorturl,
								beforeCopy:function(){ },
								afterCopy:function(){ }
							});
						},1000);
					}
					window.ajaxsuccess = false;
					return;
				}
				checkajax();

		    }, 500); 
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
		textSize();
	});

	$('.infoclick').mousedown(function(){
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

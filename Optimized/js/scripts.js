$(document).ready(function(){function B(){setTimeout(function(){C=Math.random().toString(36).slice(2,3);k=document.title;D=k.length;E=F(0,D);document.title=G(k,E,C);B()},1E3)}function H(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)?!0:!1}function I(){J=$(window).height()-$("footer").height()-$(".credit h6").height()-5;$(".yourtextwrap").css("min-height",J);$(".textwrap").css("width",$("body .container").width())}function t(a){return String("0123456789ABCDEF".substr(a>>4&15,1))+"0123456789ABCDEF".substr(a&
15,1)}function u(a){l=128;m=127;n=.1;K=Math.sin(n*a+0)*m+l;L=Math.sin(n*a+2)*m+l;M=Math.sin(n*a+4)*m+l;a=L;var b=M;return"#"+t(K)+t(a)+t(b)}function N(a){v=tinycolor.triad(a)[2];w=tinycolor.triad(a)[1];$(".newcss").html("<style>."+X[g]+"{display:block;}.backgroundsvg{fill:"+w+";stroke:"+w+";}.shareblock,.intro,html,body,footer{background:"+v+";}.animwrap a svg,.tdf,#cloud,#cloud2,.tdflogo{fill:"+a+";}.color{color:"+a+";}a,.linkstyle,.info,a:hover,.linkstyle:hover,a:hover svg,.sociala:hover,.intro,.optionmobile.copyios.shareiconwrap,.text,a:hover svg#cloud,.shareiconwrap{color:"+
a+"!important;border-color:"+a+";}::selection{background:"+a+";color:"+v+"!important;border-color:"+a+";}</style>");g+=1;6<=g&&(g=0)}function x(){p=setTimeout(function(){d+=1;u(d);d===Y&&(d=0);q=u(d);N(q);x()},100)}function Z(a){a=(a+"").toString();return a=encodeURIComponent(a)}function aa(){O="http://randomty.pe";P="c4b2387526";Q=O+"/yourls-api.php?signature="+P+"&action=shorturl&url="+Z(document.URL)+"&format=simple";$.ajax({url:Q,success:function(a){window.shorturl=a;window.ajaxsuccess=!0}})}
function R(){y=$(".text").html();y=-1!==d?encodeURIComponent("clr00"+u(d)+d%6+"+"+$(".text").html()):encodeURIComponent($(".text").html())}function ba(){H()?($(".optionmobile a.tshare").attr("href","twitter://post?message="+encodeURIComponent(document.URL)),$(".share").addClass("mobile"),$(".copyios .shareiconwrap p").text(document.URL)):($("a.tshare").attr("href","https://twitter.com/home?status="+encodeURIComponent(document.URL)),$("a.fshare").attr("href","https://www.facebook.com/sharer/sharer.php?s=100&p[url]="+
encodeURIComponent(document.URL)),$("a.gshare").attr("href","https://plus.google.com/share?url="+encodeURIComponent(document.URL)));S?setTimeout(function(){$(".zclip").remove();$("#clipshare").zclip({path:"js/ZeroClipboard.swf",copy:document.URL,beforeCopy:function(){},afterCopy:function(){}})},1E3):($("#clipshare").css("display","none"),$(".gshare .shareblock").css("width","100%"),$(".gshare .shareblock").css("width","-webkit-calc(100% - 8px)"),$(".gshare .shareblock").css("width","-o-calc(100% - 8px)"),
$(".gshare .shareblock").css("width","-moz-calc(100% - 8px)"),$(".gshare .shareblock").css("width","calc(100% - 8px)"))}function z(){R();window.location.hash=y}function e(){$(A).bigtext({maxfontsize:400,minfontsize:16})}function G(a,b,c){return b>a.length-1?a:a.substr(0,b)+c+a.substr(b+1)}function F(a,b){return Math.floor(Math.random()*(b-a+1))+a}function r(){s=setTimeout(function(){!0!=T&&(U=Math.random().toString(36).slice(2,3),k=b.text(),V=b.text().length,W=F(0,V),b.text(G(k,W,U)),r())},50)}var C,
E,D;B();var f;f=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/iPhone|iPad|iPod/i)||navigator.userAgent.match(/IEMobile/i)?!0:!1;f&&($(".color").on("vmousedown",function(){x()}),$(".color").on("vmouseout",function(){clearTimeout(p)}));var J;I();var Y=377,d=-1,g=0,X="no svg1 svg2 no svg3 svg4".split(" "),q,v,l,m,n,K,L,M,p,w;$(".color").mouseover(function(){x()}).mouseout(function(){clearTimeout(p);z()}).mousedown(function(){clearTimeout(p);
window.location.hash=decodeURIComponent(window.location.hash.substr(1).substr(17));g=0;$(".newcss").html("<style>a,.linkstyle,.info,a:hover,.linkstyle:hover,a:hover svg,.social a:hover,.optionmobile .copyios .shareiconwrap,::selection{color:#231F20;border-color:#231F20}a,.linkstyle,.text,.info,a:hover,.linkstyle:hover,a:hover svg#cloud,.social a:hover,.intro{color:#ED922F;border-color:#ED922F}.animwrap a svg,.tdf,#cloud,#cloud2,.tdflogo{fill:#ED922F;}.color{color:#ED922F;}html,body,footer,.intro,.shareblock{background:#231F20;}::selection{background:#ED922F;}</style>");
d=-1;z()});var O,P,Q;window.ajaxsuccess=!1;f=window.location.hash;var c,y,S="undefined"!=typeof navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"]||window.ActiveXObject&&!1!=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");R();c=decodeURIComponent(f.substr(1));"clr00#"===c.substr(0,6)&&(q=c.substr(5,7),g=c.substr(12,1),c=decodeURIComponent(f.substr(19)),N(q));-1<navigator.userAgent.search("Firefox")&&' class="bl0'==c.slice(0,11)&&(c="<div"+c);'iv class="bl0'==c.slice(0,13)&&
(c="<d"+c);$(".zclip").mouseover(function(){$("#clipshare").addClass("hover")}).mouseout(function(){$("#clipshare").removeClass("hover")});$(".text").html(c);""===f&&($(".text").html('<div class="bl0">RAnDom</div>'),$(".introblock").addClass("visible"),$(".bl0").addClass("hover"),$(".bl0").mousedown(function(){$(".bl0").removeClass("hover")}));$(".text").keyup(function(){z()});var A=".textsize";$(A).mousedown(function(){e()});$(A).keyup(function(){e()});setTimeout(function(){e()},1E3);setTimeout(function(){e()},
2E3);setTimeout(function(){e()},4E3);setTimeout(function(){e()},8E3);e();var T=!1;f=navigator.userAgent.toLowerCase();-1==f.indexOf("safari")||-1<f.indexOf("chrome")||(T=!0);var s,b,U,V,W,k,h=[];$("a").mouseover(function(){b=$(this);h[b]=b.text();b.hasClass("dc")||r()}).mouseout(function(){b.hasClass("dc")||(clearTimeout(s),b.text(h[b]))});$(".linkstyle").mouseover(function(){b=$(this);h[b]=b.text();b.hasClass("dc")||r()}).mouseout(function(){b.hasClass("dc")||(clearTimeout(s),b.text(h[b]))});$(".color").mouseover(function(){b=
$(this);h[b]=b.text();b.hasClass("dc")||r()}).mouseout(function(){b.hasClass("dc")||(clearTimeout(s),b.text(h[b]))});$(".info .linkstyle").mousedown(function(){function a(){setTimeout(function(){!0==window.ajaxsuccess?(H()?($(".optionmobile a.tshare").attr("href","twitter://post?message="+window.shorturl),$(".share").addClass("mobile"),$(".copyios .shareiconwrap p").text(window.shorturl)):($("a.tshare").attr("href","https://twitter.com/home?status="+window.shorturl),$("a.fshare").attr("href","https://www.facebook.com/sharer/sharer.php?s=100&p[url]="+
window.shorturl),$("a.gshare").attr("href","https://plus.google.com/share?url="+window.shorturl)),S&&setTimeout(function(){$(".zclip").remove();$("#clipshare").zclip({path:"js/ZeroClipboard.swf",copy:window.shorturl,beforeCopy:function(){},afterCopy:function(){}})},1E3),window.ajaxsuccess=!1):a()},500)}ba();aa();$(".share").addClass("visible");a()});$(".sharebackground").mousedown(function(){$(".share").removeClass("visible")});$(".introbackground").mousedown(function(){$(".introblock").removeClass("visible");
e()});$(".infoclick").mousedown(function(){$(".introblock").addClass("visible")});$(".intro .close").mousedown(function(){$(".introblock").removeClass("visible")});$(".seemore").mousedown(function(){$(".seemore").parent().addClass("show")});$(window).resize($.debounce(250,function(){I();e()}))});
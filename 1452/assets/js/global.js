var ctl_data=new Object();
var access_code="";
var moneyDecimal = 2;
function urldecode(str) {
	return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}
function ipt_bindle(str){
	$("."+str).keyup(function(event) {
		var map="0123456789.-"
		var val=this.value
		var chkv=val.toLowerCase()
		for(var i=0;i< chkv.length;i++){
			var chr=chkv.charAt(i)
			if(map.indexOf(chr)==-1){
				val=val.replace(chr,"")
			}
		}
		if(chkv.charAt(0)=="0"){
			if(chkv.charAt(1)!="."){
				val=val.replace(chkv.charAt(0),"")
			}
		}
		if(val==""){val=0}
		this.value=val
	})
}
function ipt_int(str){
	$("."+str).keyup(function(event) {
		var map="0123456789"
		var val=this.value
		var chkv=val.toLowerCase()
		for(var i=0;i< chkv.length;i++){
			var chr=chkv.charAt(i)
			if(map.indexOf(chr)==-1){
				val=val.replace(chr,"")
			}
		}
		if(chkv.charAt(0)=="0"){
			if(chkv.charAt(1)!="."){
				val=val.replace(chkv.charAt(0),"")
			}
		}
		if(val==""){val=0}
		this.value=val
	})
}
function ipt_acc(str,lng){
	$("."+str).keyup(function(event) {
		var map="abcdefghijklmnopqrstuvwxyz0123456789"
		var val=this.value
		var chkv=val.toLowerCase()
		for(var i=0;i< chkv.length;i++){
			var chr=chkv.charAt(i)
			if(map.indexOf(chr)==-1){
				val=val.replace(chr,"")
			}
		}
		if(val.length > lng){
			val=val.slice(0,lng)
		}
		this.value=val
	})
}
function json_encode(obj){
	return $.stringify(obj)
}
function json_decode(str){
	return $.parseJSON(str)
}
function parse_to(ohtml,obj){
	var html=ohtml
	for(var i in obj){
		while(html.indexOf("["+i+"]")!=-1){
			html=html.replace("["+i+"]",obj[i])
		}
	}
	return html
}
function lvl_set(lvl){
	$(".lvl").hide()
	var str=".lvl_"+lvl
	$(str).show()
}
jQuery.extend({
	stringify  : function stringify(obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
		if (t == "string") obj = '"' + obj + '"';
		  return String(obj);
		}else{
		  var n,v,json = [], arr = (obj && obj.constructor == Array);
		  for (n in obj) {
		  	v = obj[n];
		    t = typeof(v);
		    if (obj.hasOwnProperty(n)) {
		    	if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
		      	json.push((arr ? "" : '"' + n + '":') + String(v));
		      }
		  }
		  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	}
});
function getSize() {
	var rt=Array()
	var myWidth = 0, myHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	rt[0]=myWidth
	rt[1]=myHeight
	return rt
}
function open_win(url,title,scale,ratio,onopen,t_type){
	if(ratio==null){
		ratio=[1024,768]
	}
	if(scale==null){
		scale=0.9
	}
	open_win_wh(url,title,$(window).innerWidth()*scale,$(window).innerHeight()*scale,onopen,null,true)
}
function open_win_wh(url,title,w,h,onopen,modalx,closebtn){
	if(modalx==null){
		modalx=false
	}
	if(closebtn==null){
		closebtn=false
	}else{
		closebtn=true
	}
	$.fancybox({
		href: url,
		type: "iframe",
		maxWidth: w,
		maxHeight: h,
		fitToView: false,
		modal:modalx,
		width: w,
		height:h,
		closeBtn:closebtn,
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none',
		//padding : 6,
		padding : 0,
		helpers: {
			title: {type: 'top'},
			overlay : {locked : true}
		},
		beforeLoad: function() {
			this.title = title
		},
		afterLoad: function(current, previous) {
			if(onopen!=null){
				onopen(current,previous)
			}
		}
	});
}
function chk_emp_bycls(cls){
	var err=false
	$("."+cls).each(function(){
		$(this).tooltip("destroy");
	})
	$("."+cls).each(function(){
		if($.trim(this.value)==""){
			err=true
			$(this).attr("data-original-title",$($(this).parent().parent().find("td")[0]).html()+"未填")
			$(this).tooltip({"placement":"right","trigger":"manual"}).tooltip("show");
			$(this).focus()
		}else{

		}
	})
	return err
}
function get_data_bycls(cls){
	var obj={}
	$("."+cls).each(function(){
		obj[this.id]=this.value
	})
	return obj
}
function my_decode(raw,funs){
	try{
		var obj=json_decode(raw)
	}catch(err){
		//alert("parsing error!")
		console.log("parsing error!")
		//top.location.reload(true)
	}

	if(!obj){
		return false
	}
	if(funs[obj.code]){
		funs[obj.code](obj)
		if(top["ctl_fun"]){
			top["ctl_fun"]()
		}
		return
	}
	if(obj.code=="403"){
		alert(my_decode.err403)
		top.location.reload(true)
	}
	return obj
}
my_decode.err403="time out!"
function popup(url, title, w, h){
	if(!w){w=800;}
	if(!h){h=600;}
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'resizable=yes,scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

function fbykv(ary,ikey,val){
	for(var i=0;i< ary.length;i++){
		if(ary[i][ikey]==val){
			return ary[i]
		}
	}
	return false
}
function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // other browser
    return false;
}

var iwin=function(){}
		iwin.pool={}
		iwin.open=function(url,title,scale){
			iwin.open_wh(url,title,$(window).innerWidth()*scale,$(window).innerHeight()*scale)
		}
		iwin.open_wh=function(url,title,w,h){
			if(iwin.pool[url]){
				iwin.pool[url].restore()
				iwin.pool[url].show()
				//iwin.pool[url].select()
			}else{
				iwin.pool[url]=inwin_wh(url,title,w,h)
			}
			//console.log(iwin.pool)
		}
function inwin(url,title,scale){
	inwin_wh(url,title,$(window).innerWidth()*scale,$(window).innerHeight()*scale)
}
function inwin_wh(url,title,w,h){
	if(w > $(window).innerWidth()){w=$(window).innerWidth();}
	if(h > $(window).innerHeight()){h=$(window).innerHeight();}
	$.window.prepare({dock: 'bottom',animationSpeed: 200,minWinLong: 180});
	return $.window({
		checkBoundary: true,
   	title: title,
   	url: url,
   	maxWidth:-1,
   	maxHeight:-1,
   	width: w,
   	height: h,
   	bookmarkable:false,
   	showFooter:false,
   	afterResize:function(){refun_all()},
   	afterMaximize:function(){refun_all()},
   	afterCascade:function(){refun_all()},
   	onClose:function(){
   		refun_all()
   		delete iwin.pool[url]
   	}
	});
}
function refun_all(){
	try{
		if(parent){
			for(var a in parent.refun){
				parent.refun[a]()
			}
		}else{
			for(var a in refun){
				refun[a]()
			}
		}
	}catch(e){

	}
}
var grid_obj=function(){
	var ref=this
	this.xid=new Date().getTime();
	this.gid="jg_evt_"+this.xid
	this.parms={datatype: 'local',rowNum: 10000,cmTemplate:{},width:$("#div_grid_"+this.xid).width(),height:$("#div_grid_"+this.xid).height(),hoverrows:true,autoencode: true,ignoreCase: true,viewrecords: true,footerrow: true}
	this.parms.colNames=[]
	this.parms.colModel=[]
  this.init=function(){}
  this.push_col=function(cname,cmodel){
  	this.parms.colNames.push(cname)
  	this.parms.colModel.push(cmodel)
  }
  this.get_grid=function(){return $("#"+this.gid);}
  this.set_data=function(gdata){
  	if(gdata){this.pdata=gdata;}
  	this.rem_data()
  	this.get_grid().jqGrid('setGridParam',{ datatype: 'local',data:this.pdata}).trigger("reloadGrid");
  }
  this.rem_data=function(){
  	this.get_grid().jqGrid('clearGridData')
  }
  this.get_data=function(){
  	return this.get_grid().jqGrid('getGridParam','data')
  }
  this.init()
  return this
}
function number_format(num,cent,isThousand){
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	 num = "0";
	if(isNaN(cent))
	cent = 0;
	cent = parseInt(cent);
	cent = Math.abs(cent);
	if(isNaN(isThousand))
	isThousand = 0;
	isThousand = parseInt(isThousand);
	if(isThousand == 0)
	isThousand = 0;
	if(isThousand >=1)
	isThousand = 1;
	sign = (num == (num = Math.abs(num)));

	num = Math.floor(num*Math.pow(10,cent)+0.50000000001);
	cents = num%Math.pow(10,cent);
	num = Math.floor(num/Math.pow(10,cent)).toString();
	cents = cents.toString();
	while(cents.length<cent){
	cents = "0" + cents;
	}
	if(isThousand == 0)
	return (((sign)?'':'-') + num + '.' + cents);

	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));
	if(cent==0){
		return (((sign)?'':'-') + num );
	}
	return (((sign)?'':'-') + num + '.' + cents);
}
function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}
function nwc(x, decimal){
    if (isNaN(parseInt(decimal)) ||decimal === undefined) {
        decimal = moneyDecimal;
    }
    var oval=x
    x=Number(x).toFixed(decimal)
    var str=x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (oval > 0) {
        return '<font style="color:#0000ff;">' + str + '</font>';
    } else if (oval != 0) {
        return '<font style="color:#ff0000;">' + str + '</font>';
    }
    return str
}

function setSelOption(id, obj, nkey, nval) {
    for (var i in obj) {
        $('#' + id).append($('<option/>').attr('value', obj[i][nkey]).text(obj[i][nval]));
    }
}
function decode(str, type) {
    switch (type) {
        case 'ju':
        default:
            return json_decode(urldecode(str));
        break;
    }
}
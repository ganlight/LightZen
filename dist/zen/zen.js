var CGI={ENV:"DEV",SET:{PUBLIC:{COACH_TYPE:"public/coach/types",COACH_LIST:"public/coach/list",COACH_DETAIL:"public/coach/detail",JOB_LIST:"public/job/list",JOB_DETAIL:"public/job/detail"},TYPE:{DEV:"get",TEST:"post",PUB:"post"},ROOT:{DEV:"/assets/json/",TEST:"http://localhost/",PUB:"/server/api/"}},TYPE:function(){var t=CGI.SET.TYPE[CGI.ENV]||"post";return t},URL:function(t,a){var e="?t="+(new Date).getTime();return"PUB"==CGI.ENV&&(e=".php?t="+(new Date).getTime()),CGI.SET.ROOT[CGI.ENV]+CGI.SET[t][a]+e},ajax:function(t,a,e){var n=CGI.TYPE();$.ajax({url:t,type:n,dataType:"json",data:a,success:function(t){e(t)}})},ajaxModule:function(t,a,e){var n=CGI.TYPE();$.ajax({url:t,type:n,async:!1,dataType:"json",data:a,success:function(t){e(t)}})},getView:function(t){var a="views/"+t+".html";$.ajax({url:a,type:"get",async:!1,dataType:"html",success:function(t){$("#app").html(t),Zen.init()},error:function(t){window.location.hash="index"}})}};
var Check={name:function(e){var n=/^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/;return!!n.exec(e)},idCard:function(e){return IDCard.check(e)},number:function(e){if(0==e.length)return!1;if(6!=e.length)return!1;var n=/^\s*\d+\s*$/;return!!n.exec(e)},phone:function(e){return 0!=e.length&&(11==e.length&&!!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(e))},password:function(e){return 0!=e.length&&!(e.length<6||e.length>16)},code:function(e){return 0!=e.length&&6==e.length},bankcard:function(e){if(e.length<8||e.length>19)return!1;var n=/^\d*$/;return!!n.exec(e)},agreement:function(){if($(".agreement").length)return!!$(".agreement").hasClass("selected")||(Message.toast("您需要阅读并同意《用户协议》"),!1)}};
var Message={};Message.close=function(){$(".c-confirm").hide(300),$(".c-alert").hide(300),$(".c-select").hide(300),$(".c-dropdown").hide(300),$(".custom-confirm").hide(300)};
var PageService={isLogin:!1,key:null,init:function(){Util._date(),this.ready()},ready:function(){$(document).ready(function(){PageService.bind(),PageService.loadView()})},loadView:function(){Util.getHash()||"index";Zen.init(),Zen.load(),$(window).on("hashchange",function(){Util.getHash()||"index";Zen.load()})},bind:function(){$("*[v-insert]").each(function(){var t=$(this),n=$(this).attr("v-insert");if(n){var e=n+".html";$.ajax({url:e,type:"get",async:!1,dataType:"html",success:function(n){t.html(n)}})}}),$("*[v-slot]").each(function(){var t=$(this),n=$(this).attr("v-slot");n&&t.html($("#"+n))}),$("*[v-send]").click(function(){var t=$(this).attr("v-send");if(t){var n=t.split(",");Message.send(n[0],n[1],n[2])}}),$("*[v-select]").click(function(){var t=$(this).attr("v-select");t&&Message.select("",t)}),$("*[v-toggle]").click(function(){var t=$(this).attr("v-toggle");t&&($("#"+t).toggle(),$(this).toggleClass("selected"))}),$("*[v-link]").click(function(){var t=$(this).attr("v-link");t&&(window.location.href=t)})},hideNavMenu:function(){$("#nav-menu").hide()},setTitle:function(t){$(".c-navmenu-banner .title").text(t)},status:function(){var t=CGI.URL("USER","STATUS");CGI.ajaxModule(t,"",function(t){t&&"00000"==t.code?PageService.isLogin=!0:PageService.isLogin=!1,PageService.key=t})},mustLogin:function(t){var n=CGI.URL("USER","STATUS");CGI.ajaxModule(n,"",function(n){if(n&&"50000"==n.code)return t?Store.sLocal("VIA",t):Store.sLocal("VIA",window.location.href),window.location.href="/user/login.html",!1})},token:function(){var t=CGI.URL("FRONT","TOKEN_GET");CGI.ajaxModule(t,"",function(t){t&&"00000"!=t.code&&Message.toast(t.message)})},loginAction:function(t,n){var e=CGI.URL("USER","STATUS");CGI.ajax(e,"",function(e){e&&"00000"==e.code?t&&t():n&&n()})},logout:function(){var t=CGI.URL("USER","LOGOUT");CGI.ajax(t,"",function(t){t&&"00000"==t.code&&(window.location.href="/index.html")})}};
var PageTips={tips:null,page:null,init:function(t){this.tips=$(".c-page-tips"),this.tips.show(),this.page=t,PageTips.rend(),setInterval(function(){PageTips.rend()},1e3)},list:function(){var t=this.tips,i=this.page,n="当前加载"+i.current_page+"/"+i.page_count+"页，共"+i.item_count+"条数据";t.find(".text").text(n),t.attr("data-status","enable")},loading:function(){var t=this.tips;t.find(".text").text("数据加载中……"),t.attr("data-status","disable")},none:function(){var t=this.tips;t.find(".text").text("当前暂无记录"),t.attr("data-status","disable")},end:function(){var t=this.tips;t.find(".text").text("当前数据已经加载完成"),t.attr("data-status","disable")},rend:function(t){var t=this.page;return this.loading(),t?t&&0==t.item_count?void this.none():t&&t.current_page==t.page_count?void this.end():t&&t.current_page<t.page_count?void this.list():void this.loading():void this.none()}};
var Store={data:function(t,e){if(!e){var o=t.data("data");return o}"string"==typeof e?t.data("data",e):t.data("data",JSON.stringify(e))},gData:function(t){var e=window.sessionStorage.getItem(t);return null==e||""==e?null:e=JSON.parse(window.sessionStorage.getItem(t))},sData:function(t,e){window.sessionStorage.setItem(t,JSON.stringify(e))},sValue:function(t,e){window.sessionStorage.setItem(t,e)},gValue:function(t){var e=window.sessionStorage.getItem(t);return e},sLocal:function(t,e){localStorage.setItem(t,e)},gLocal:function(t){var e=localStorage.getItem(t);return e},setLocal:function(t,e){localStorage.setItem(t,JSON.stringify(e))},getLocal:function(t){var e=localStorage.getItem(t);if(null==e||""==e)return null;try{return e=JSON.parse(localStorage.getItem(t))}catch(t){console.log(t)}return null},dLocal:function(t){localStorage.removeItem(t)},sHref:function(t){t?window.sessionStorage.setItem("redirect_url",t):window.sessionStorage.setItem("redirect_url",window.location.href)},goHref:function(){var t=window.sessionStorage.getItem("redirect_url");null!=t&&""!=t||(t="/"),window.location.href=t},gHref:function(){var t=window.sessionStorage.getItem("redirect_url");return null!=t&&""!=t||(t="/"),t}};
var User={key:null,isLogin:!1,need_verify_code:!1,baseinfo:null,spread_code:null,init:function(){return User.getKey(),User.isLogin=PageService.isLogin,this},getKey:function(){var e=PageService.key.modulus,i=PageService.key.public_exponent;if(void 0!=i){var n=RSAUtils.getKeyPair(i,"",e);console.log(n),User.key=n,User.need_verify_code=PageService.key.need_verify_code}},getBaseInfo:function(){if(PageService.isLogin){var e=CGI.URL("USER","BASE_INFO");CGI.ajaxModule(e,"",function(e){e&&"00000"==e.code&&(User.baseinfo=e.result)})}},getSpreadCode:function(){if(PageService.isLogin){var e=CGI.URL("USER","SPREAD_CODE");CGI.ajaxModule(e,"",function(e){e&&"00000"==e.code&&(User.spread_code=e.result.spread_code)})}},checkIdentity:function(){return User.getBaseInfo(),Identity.init(),"BTG"==Identity.status?void(window.location.href="/bid/identity.html?return_url="+window.location.href):void(User.baseinfo&&$(".user-account").text(User.baseinfo.balance))},checkBankcard:function(){BankCard.getBind(),BankCard.card?($(".methods-field").show(),$(".identity-field").hide()):($(".methods-field").hide(),$(".identity-field").show(),BankCard.init())},isIdentity:function(e){if(User.isLogin){var i=CGI.URL("PAY","GET_ID_CARD");CGI.ajaxModule(i,"",function(i){"00000"==i.code&&("TG"==i.result.status?e&&e():Message.alert("为了您的资金安全，您需要实名认证。",function(){window.location.href="/pay/wxidentity.html"}))})}},initPicCode:function(){if(User.need_verify_code){$(".pic-code").show();var e=$(".pic-code .code-img");e.attr("src","/userx/get_verify_code?"+Math.random()+"&verify_type=login")}else $(".pic-code").hide()},loginData:function(){var e={};if(User.key){var i=User.key;return e="none"==$(".pic-code").css("display")?{username:RSAUtils.encryptedString(i,$(".username").val()),password:RSAUtils.encryptedString(i,$(".password").val())}:{username:RSAUtils.encryptedString(i,$(".username").val()),password:RSAUtils.encryptedString(i,$(".password").val()),verify_code:$("input[name='piccode']").val()}}Message.alert("您的信息有误，请重新登录！")},login:function(e){var i=CGI.URL("USER","LOGIN");CGI.ajax(i,e,function(e){if("00000"==e.code){var i=Util.getPar("return_url")||Store.gLocal("VIA");i?window.location.href=i:window.location.href="/index.html"}else!e||"50008"!=e.code&&"50002"!=e.code&&"50012"!=e.code?(User.initPicCode(),Message.toast(e.message)):(User.need_verify_code=!0,User.initPicCode(),Message.toast(e.message))})},registData:function(){var e={};if(User.key){var i=User.key;return e={username:RSAUtils.encryptedString(i,$(".username").val()),password:RSAUtils.encryptedString(i,$(".password").val()),verify_code:$("input[name='verify_code']").val(),invitation_code:$("input[name='invitation_code']").val()}}Message.alert("您的信息有误，请重新注册！")},regist:function(e){var i=CGI.URL("USER","REGIST");CGI.ajax(i,e,function(e){if("00000"==e.code)window.location.href="/index.html?type=newuser";else if(e&&"50000"==e.code){var i=window.location.pathname+window.location.search;window.location.href="/user/login.html?return_url="+i}else Message.alert(e.message)})},changeData:function(){var e={};if(User.key){var i=User.key;return e={old_password:RSAUtils.encryptedString(i,$("input[name='password']").val()),new_password:RSAUtils.encryptedString(i,$("input[name='new_password']").val())}}Message.alert("您的信息有误，请重新输入！")},resetData:function(){var e={};if(User.key){var i=User.key;return e={verify_code:$("input[name='verify_code']").val(),password:RSAUtils.encryptedString(i,$("input[name='new_password']").val())}}Message.alert("您的信息有误，请重新输入！")},resetPassword:function(e){var i=CGI.URL("USER","RESET_PASSWORD");CGI.ajax(i,e,function(e){"00000"==e.code?Message.alert("密码找回成功,请用新密码登录",function(){window.location.href="/user/login.html"}):Message.alert(e.message)})},changePassword:function(e){var i=CGI.URL("USER","CHANGE_PASSWORD");CGI.ajax(i,e,function(e){"00000"==e.code?Message.alert("密码修改成功,请用新密码登录",function(){window.location.href="/user/login.html"}):Message.alert(e.message)})}};
var Util={lastClick:null,once:function(e){var t=(new Date).getTime();return t-Util.lastClick<2e3?void Message.toast("您的操作过快，请稍后尝试"):(Util.lastClick=t,void(e&&e()))},join:function(e,t,n){if(t instanceof Array)for(var i=0,r=t.length;i<r;i++)Util.join(e,t[i],n);for(var i in t)!n&&i in e||(e[i]=t[i]);return e},_date:function(){Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},Date.parseJsonDate=function(e){if("[object Date]"==Object.prototype.toString.call(e))return e;var t=/\((\d+)\)/;return t.test(e)?new Date(t.exec(e)[1]-0):utlis.servertime()}},dateFull:function(e){return new Date(e).format("yyyy年MM月dd日 hh:mm")},dateStr:function(e){return new Date(e).format("yyyy-MM-dd hh:mm")},dateShort:function(e){return new Date(e).format("hh:mm:ss")},dateDot:function(e){return new Date(e).format("yyyy.MM.dd")},date:function(e){return new Date(e).format("yyyy-MM-dd")},_resize:function(){(window.innerWidth||document.body&&document.body.clientWidth)/320;$("html").css("font-size","62.5%")},resize:function(){Util._resize(),$(window).resize(function(){Util._resize()})},min:function(e,t){return e<t?e:t},check:function(e){return"undefined"==typeof e||null==e||""==e},getPar:function(e){var t=document.location.href,n=t.indexOf(e+"=");if(n==-1)return!1;var i=t.slice(e.length+n+1),r=i.indexOf("&");return r!=-1&&(i=i.slice(0,r)),i},getHash:function(){var e=window.location.hash.replace("#","");return e},isMobile:function(){var e={win:!1,mac:!1,xll:!1},t=navigator.platform;return e.win=0==t.indexOf("Win"),e.mac=0==t.indexOf("Mac"),e.x11="X11"==t||0==t.indexOf("Linux"),!(e.win||e.mac||e.xll)},trim:function(e,t){var n;return n=e.replace(/(^\s+)|(\s+$)/g,""),"g"==t.toLowerCase()&&(n=n.replace(/\s/g,"")),n},fmoney:function(e,n){(n<0||n>20)&&(n=2),e=parseFloat((e+"").replace(/[^\d\.-]/g,"")).toFixed(n)+"";var r=e.split(".")[0].split("").reverse(),o=e.split(".")[1];for(t="",len=r.length,"-"==r[len-1]&&(len-=1),i=0;i<len;i++)t+=r[i]+((i+1)%3==0&&i+1!=len?",":"");return"-"==r[len]&&(t+="-"),0==n?t.split("").reverse().join(""):t.split("").reverse().join("")+"."+o},fixMoney:function(e){return e=""==e||isNaN(e)||e==1/0?parseFloat("0").toFixed(2):parseFloat(e).toFixed(2)},getTimes:function(e,t){var n="";if($("#"+e).length&&$("#"+t).length){var i=$("#"+e).val().replace(/\//g,""),r=$("#"+t).val().replace(/\//g,"");n=i?i+"-":"-",r?n+=r:r=""}return n},rendSelect:function(e,t){var n=e[t];if($("select[name="+t+"]").length)for(var i in n)$("select[name="+t+"]").append('<option value="'+i+'">'+n[i]+"</option>")},rendValue:function(e,t){for(var n in t)n.indexOf("times")==-1&&n.indexOf("time")>-1?e.find("."+n).text(Util.dateStr(t[n])):n.indexOf("date")>-1?e.find("."+n).text(Util.date(t[n])):e.find("."+n).text(t[n])},getCommonPart:function(e,t){$.ajax({url:e,type:"get",async:!1,dataType:"html",success:function(e){$(t).html(e)}})},fmoney:function(e,n){(n<0||n>20)&&(n=2),e=parseFloat((e+"").replace(/[^\d\.-]/g,"")).toFixed(n)+"";var r=e.split(".")[0].split("").reverse(),o=e.split(".")[1];for(t="",i=0;i<r.length;i++)t+=r[i]+((i+1)%3==0&&i+1!=r.length?",":"");return 0==n?t.split("").reverse().join(""):t.split("").reverse().join("")+"."+o},scrollShow:function(e){$(window).scroll(function(){window.scrollY>200?$(e).show(300):$(e).hide()})},alertOver:function(){Message.alert("当前活动已经结束，请关注盈火虫公众号参与更多活动！",function(){window.location.href="/"})}};
var views={front:{js:{}},example:{js:{}}};
var Zen={list:[],init:function(){if(Zen.modules){var e=Zen.parse(Zen.modules),t=$("<div>").addClass("zen-modules");t.append(e),$("body").prepend(t)}if(Zen.css){var a=Zen.parse(Zen.css);$("title").after(a)}},load:function(){var e=$("#app");this.load_view(),this.load_module(e),this.load_script()},_init:function(){var e=$("head");e.find("*[data-type='page-script']").remove();var t=$("<script>").attr("type","text/javascript"),a=$("#app");this.load(a);var i=$("*[v-script]").eq(0),r=i.attr("v-script");i.length>0&&r&&(t.attr("src",r),t.attr("data-type","page-script"),e.append(t))},load_view:function(){var e=$("#app"),t=Zen.getView();e.html(t)},load_module:function(e){e.find("*[v-zen]").each(function(){var e=$(this),t=$(this).attr("v-zen");if(t){var a=$(".zen-modules .c-"+t).clone();e.html(a)}})},load_script:function(href){var head=$("head");head.find("*[data-type='page-script']").remove();for(var items=$("*[v-script]"),i=0;i<items.length;i++){var item=items.eq(i),clone=$("<script>").attr("type","text/javascript");if(item&&item.attr("v-script")){var script_src=item.attr("v-script");if(script_src.indexOf("views")==-1){clone.attr("src",script_src),clone.attr("data-type","page-script"),head.append(clone);continue}var script_name=this.pathname(script_src.replace(".js",""));script=this.parse(eval(script_name));var app=$("#app");app.append(script)}}},getView:function(){var view="",hash=Util.getHash()||"index",viewname=this.pathname("views/"+hash);return view=this.parse(eval(viewname))},parse:function(e){if("function"==typeof e){var t=e.toString();if(t.length>20)return t.slice(15,-3)}},toCamel:function(e){var e=e.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()});return e},toName:function(e){var e=e.replace(/([A-Z])/g,"-$1").toLowerCase();return e},pathname:function(e){var t=e.replace(".html","").replace(/-/g,"_").replace(/\//g,".");return t},ready:function(e){e&&e.init&&e.init(),delete Zen.current,Zen.current=e;var t=Util.getHash()||"index";console.log("Zen page : "+t)}};
PageService.init();
Message.alert=function(e,c){var t=$(".c-alert");$(".c-alert .message-text").html(e),t.show(300),$(".c-alert .alert-ok").unbind("click").click(function(){c&&c(),Message.close()})};
Message.confirm=function(c,n){var i=$(".c-confirm");$(".c-confirm .message-text").html(c),i.show(300),$(".c-confirm .confirm-ok").unbind("click").click(function(){n&&n(),Message.close()}),$(".c-confirm .confirm-cancel").unbind("click").click(function(){Message.close()}),$(".c-confirm .mask").unbind("click").click(function(){Message.close()})};
var Message1={toast:function(e){var c=$(".c-toast");$(".c-toast .message-text").text(e),c.show(300),setTimeout(function(){$(".c-toast").hide(500)},2e3)},alert:function(e,c){var s=$(".c-alert");$(".c-alert .message-text").html(e),s.show(300),$(".c-alert .alert-ok").unbind("click").click(function(){c&&c(),Message.close()})},confirm:function(e,c){var s=$(".c-confirm");$(".c-confirm .message-text").html(e),s.show(300),$(".c-confirm .confirm-ok").unbind("click").click(function(){c&&c(),Message.close()}),$(".c-confirm .confirm-cancel").unbind("click").click(function(){Message.close()}),$(".c-confirm .mask").unbind("click").click(function(){Message.close()})},custom:function(e){var c=$("#"+e);c.show(300),$(".custom-confirm .confirm-cancel").unbind("click").click(function(){Message.close()}),$(".custom-confirm .mask").unbind("click").click(function(){Message.close()})},select:function(e,c,s){var n=$("#"+c);n.find(".header-div .title").text(e),n.show(300),$(".c-select .select-ok").unbind("click").click(function(){s&&s(),Message.close()}),$(".c-select .mask").unbind("click").click(function(){Message.close()})},dropdown:function(e){var c=$("#"+e);c.show(300),$(".c-dropdown .dropdown-btn").unbind("click").click(function(){Message.close()}),$(".c-dropdown .mask").unbind("click").click(function(){Message.close()})},close:function(){$(".c-confirm").hide(300),$(".c-alert").hide(300),$(".c-select").hide(300),$(".c-dropdown").hide(300),$(".custom-confirm").hide(300)},send:function(verify_type,send_type,fn){if(fn){var fun=eval(fn);if(!fun())return}var sms=$(".sms-btn"),voice=$(".voice-btn");if(!sms.hasClass("gray")&&!voice.hasClass("gray")){var url=CGI.URL("USER","R_VERIFY_CODE");$.ajax({url:url,dataType:"json",beforeSend:function(){sms.addClass("gray"),voice.addClass("gray")},data:{phone:$("input[name='phone']").val(),verify_type:verify_type,send_type:send_type},success:function(e){"00000"==e.code?Message.nextClick(60,send_type):"50025"==e.code||"50027"==e.code?Message.nextClick(e.result.time_left,send_type):(Message.alert(e.message),$(".custom-confirm .error-message").text(e.message).removeClass("hide"),voice.removeClass("gray"),sms.removeClass("gray").text("获取验证码"),voice.text("收不到短信?试试语音验证"),wait=60)}})}},nextClick:function(e,c){var s=$(".sms-btn"),n=$(".voice-btn");0==e?(n.removeClass("gray"),s.removeClass("gray").text("获取验证码"),n.text("收不到短信?试试语音验证"),e=60):(s.hasClass("gray")||s.addClass("gray"),n.hasClass("gray")||n.addClass("gray"),s.text(e+"秒重获"),"voice"==c?n.text("请注意接听随机电话号码的语音验证码"):n.text("请等候"+e+"秒后再试试语音验证"),e--,setTimeout(function(){Message.nextClick(e,c)},1e3))}};
var MultiSelect=function(e){return e&&e.ele&&e.data&&(this.ele=$("#"+e.ele),this.data=e.data,this.para="",this.rend(e.data),this.bind()),this};MultiSelect.prototype={rend:function(e){for(var t=this,a=t.ele.find(".select-list"),l=0;l<e.length;l++){var i=e[l],s=$("<div>").addClass("select-item");Store.data(s,i),s.attr("data-value",i.value).text(i.name),a.append(s)}},bind:function(){var e=this;this.ele.find(".select-item").click(function(){var t=$(this);t.attr("data-value")?e.ele.find(".select-item").eq(0).removeClass("selected"):e.ele.find(".select-item").removeClass("selected"),t.toggleClass("selected"),e.rendValue()})},rendValue:function(){var e=this,t=e.ele.find(".select-list"),a="",l="";t.find(".selected").each(function(){var e=$(this);e.attr("data-value")&&(""==a?(a+=e.attr("data-value"),l+=e.text()):(a+=","+e.attr("data-value"),l+=","+e.text()))}),""==a&&(l="请选择"),e.ele.find(".select-area").text(l),e.ele.attr("data-value",a),e.para=a}};
Message.toast=function(t){var e=$(".c-toast");$(".c-toast .message-text").text(t),e.show(300),setTimeout(function(){$(".c-toast").hide(500)},2e3)};
var ToggleGroup=function(t){this.ele=$("#"+t.ele),this.data=t.data,this.para="",this.addAction=t.addAction,this.delAction=t.delAction,this.rend(t.data),this.bind()};ToggleGroup.prototype={rend:function(t){for(var e=this,d=e.ele,a=0;a<t.length;a++){var i=t[a],n=d.find(".template-area .toggle-item").clone();Store.data(n,i),n.text(i.name),i.selected?d.find("*[data-type='selected'] .toggle-list").append(n):d.find("*[data-type='none'] .toggle-list").append(n),e.bind(n)}},add:function(t){var e=this.ele,d=Store.data(t);e.find("*[data-type='selected'] .toggle-list").append(t),d.selected=!0,Store.data(t,d),this.addAction&&this.addAction(d)},del:function(t){var e=this.ele,d=Store.data(t);e.find("*[data-type='none'] .toggle-list").append(t),d.selected=!1,Store.data(t,d),this.addAction&&this.delAction(d)},bind:function(t){var e=this;t&&t.click(function(){var d=Store.data(t);d.selected?e.del(t):e.add(t)})}};
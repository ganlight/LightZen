Zen.views["blog/config.js"] = function() {/*<script>var ZEN_ARTICLES=[{title:"Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"}],CATALOG_TMP={type:"catalog",name:"zenjs 框架",data:[{}]},ARTICLE_TMP={type:"article",name:"zenjs 框架",path:"zen/zenjs 框架.md",public:"2016-11-25 14:00",auther:"ganlight",tag:"zenjs javascript"},ZENJS_BLOG={zenjs:{type:"catalog",name:"zenjs 框架",data:[{type:"article",title:"Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",file:"install"}]}};</script>*/}
Zen.views["focus-time/index.js"] = function() {/*<script>$(function(){var t={work:25,rest:5,times:4,message:{init:"开始一个番茄钟",success:"哇，你很棒哦，又完成了一项工作！",stop:"要不再坚持一会?"}},s={loop:null,tick:function(t,s){var e=this;s&&!this.loop?this.loop=setInterval(function(){e.refresh(t)},100):(clearInterval(this.loop),this.loop=null,zen.store.setLocal("FOCUS_TIME_CURRENT",t))},format:function(t){var s={min:"00",sec:"00",str:"00:00"};if(t>=0){var e=t/1e3;s.min=parseInt(e/60)>9?parseInt(e/60):"0"+parseInt(e/60),s.sec=parseInt(e%60)>9?parseInt(e%60):"0"+parseInt(e%60),s.str=s.min+":"+s.sec}return s},refresh:function(e){var a=0,r=6e4*t.work,n=6e4*t.rest;if("WORK_INIT"==e.status&&(a=r,$(".start-btn").removeClass("hide")),"WORK_START"==e.status){var i=(new Date).getTime();a=r-(i-e.work_start),$(".stop-btn").removeClass("hide"),a<0&&(e.status="WORK_DONE",s.tick(e,!1),$(".rest-btn").removeClass("hide"))}if("WORK_DONE"==e.status&&(zen.message.alert(t.message.success),e.status="REST_INIT",a=n),"WORK_STOP"==e.status&&(a=r-(e.work_stop-e.work_start),s.tick(e,!1)),"REST_INIT"==e.status&&(a=n),"REST_START"==e.status){var i=(new Date).getTime();a=n-(i-e.rest_start),a<0&&(e.status="REST_DONE",s.tick(e,!1))}"REST_DONE"==e.status&&(e.status="WORK_INIT",a=r),zen.store.setLocal("FOCUS_TIME_CURRENT",e);var o=this.format(a).str;$(".remain-time").text(o)}},e=function(t){return this.data={},this.interval=null,t?(this.data=t,"WORK_START"!=t.status&&"REST_START"!=t.status||s.tick(t,!0)):(t=this.data,t.name="",t.work_init=(new Date).getTime(),t.work_start="",t.work_done="",t.work_stop="",t.rest_init="",t.rest_start="",t.rest_done="",t.rest_stop="",t.status="WORK_INIT"),s.refresh(t),this};e.prototype={start:function(){var t=this,e=t.data;e.work_start=(new Date).getTime(),e.status="WORK_START",s.tick(e,!0)},rest:function(){var t=this,e=t.data;e.rest_start=(new Date).getTime(),e.status="REST_START",s.tick(e,!0)},stop:function(){var t=this,e=t.data;e.work_stop=(new Date).getTime(),e.status="WORK_STOP",s.tick(e,!1)}};var a={current:null,init:function(){var t=zen.store.getLocal("FOCUS_TIME_CURRENT");t?this.current=new e(t):this.current=new e}},r={task:null,init:function(){a.init(),this.task=a.current,this.bind()},bind:function(){var t=this;$(".start-btn").click(function(){t.task.start()}),$(".stop-btn").click(function(){t.task.stop()}),$(".rest-btn").click(function(){t.task.rest()})}};zen.page.ready(r)});</script>*/}
Zen.views["markdown/config.js"] = function() {/*<script>var ZEN_ARTICLES=[{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用nodejs爬取一个网站的内容",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用nodejs爬取一个网站的内容"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"}],CATALOG_TMP={type:"catalog",name:"zenjs 框架",data:[{}]},ARTICLE_TMP={type:"article",name:"zenjs 框架",path:"zen/zenjs 框架.md",public:"2016-11-25 14:00",auther:"ganlight",tag:"zenjs javascript"},ZENJS_BLOG={zenjs:{type:"catalog",name:"zenjs 框架",data:[{type:"article",title:"Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",file:"install"}]}};</script>*/}
Zen.views["todo/index.js"] = function() {/*<script>$(function(){var t={key:"ZENJS_TODO",get:function(){var t=zen.store.getLocal(this.key)||[];return $.each(t,function(t,e){t.id=e}),this.uid=t.length,t},save:function(t){zen.store.setLocal(this.key,t)}},e={todos:[],init:function(){this.todos=t.get();for(i in this.todos)this.rend(this.todos[i]);this.watch()},rend:function(t){var e=$(".todo-list"),i=$(".page-template .todo-item").clone();zen.store.data(i,t),zen.template.values(i,t),t.completed?(i.addClass("completed"),i.find(".toggle").prop("checked",!0)):(i.addClass("active"),i.find(".toggle").prop("checked",!1)),o(i),e.append(i)},save:function(){var e=this.todos=[];$(".todo-list .todo-item").each(function(){var t=zen.store.data($(this));t&&e.push(t)}),t.save(this.todos),this.watch()},add:function(){var e=$(".new-todo").val(),o=e&&e.trim();if(o){var i={id:t.uid++,title:o,completed:!1};this.rend(i),$(".new-todo").val(""),this.save()}},watch:function(){var t=$(".todo-list .todo-item.active").length,e=$(".todo-list .todo-item.completed").length;$(".remaining").text(t),e>0?$(".clear-completed").show():$(".clear-completed").hide();var o=$(".filters a.selected"),i=o.attr("filter");i?($(".todo-list .todo-item").hide(),$(".todo-list .todo-item."+i).show()):$(".todo-list .todo-item").show()}},o=function(t){t.find(".destroy").click(function(){var o=zen.store.data(t);o&&(t.remove(),e.save())}),t.find(".toggle").click(function(){var o=zen.store.data(t);o&&(o.completed?o.completed=!1:o.completed=!0,t.toggleClass("completed"),t.toggleClass("active"),zen.store.data(t,o),e.save())}),t.find(".title").dblclick(function(){var e=zen.store.data(t);e&&(t.addClass("editing"),t.find(".edit").val(e.title),t.find(".edit").focus())}),t.find(".edit").blur(function(){var o=zen.store.data(t);o&&(o.title=t.find(".edit").val(),o.title&&o.title.trim()?(t.find(".title").text(o.title),t.removeClass("editing"),zen.store.data(t,o)):t.remove(),e.save())})},d={init:function(){e.init(),this.bind()},bind:function(){$(".new-todo").keyup(function(t){13==t.keyCode&&e.add()}),$(".filters a").click(function(){var t=$(this);$(".filters a").removeClass("selected"),t.addClass("selected"),e.watch()}),$(".clear-completed").click(function(){$(".todo-list .todo-item.completed").remove(),e.save()}),$(".toggle-all").click(function(){var t=$(".toggle-all").attr("checked");$(".todo-list .todo-item").each(function(){var e=$(this),o=zen.store.data(e);o&&(t?(o.completed=!0,e.addClass("completed"),e.removeClass("active")):(o.completed=!1,e.removeClass("completed"),e.addClass("active")),e.find(".toggle").prop("checked",o.completed),zen.store.data(e,o))}),e.save()})}};zen.page.ready(d)});</script>*/}
Zen.views["blog/article/index.js"] = function() {/*<script>$(function(){var MarkDown={converter:null,init:function(){showdown&&showdown.Converter?this.converter=new showdown.Converter:$(".title").html("暂不支持markdown")},rend:function(e,a){if(this.converter&&a){var t=this.converter.makeHtml(a);$(".title").html(e.title),$(".markdown-area").html(t).show()}},load:function(article){var self=this,url='Zen.views["blog/markdown/'+article.file+'.md"]',data=zen.parse(eval(url));data&&(data=data.replace(/__block_head__/g,"__block_head__").replace(/__block_foot__/g,"__block_foot__"),self.rend(article,data))},load_file:function(e){var a=this,t="blog/"+e.type+"/"+e.file+".md";$.ajax({url:t,type:"get",async:!1,dataType:"html",success:function(t){$(".catalog-area").hide(),$(".markdown-area").show(),a.rend(e,t)},error:function(a){$(".markdown-area").hide(),$(".catalog-area").show(),zen.message.toast("当前文章"+e.file+"不存在，请返回其他文章")}})}},Service={id:0,init:function(){MarkDown.init();var e=this.id=parseInt(zen.url.getPar("id"))||0;ZEN_ARTICLES&&ZEN_ARTICLES[e]?MarkDown.load(ZEN_ARTICLES[e]):window.location.href="#blog/article?id=0",this.bind()},bind:function(){$(".zen-page .pre-btn").click(function(){if(Service.id>0){var e=Service.id-1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有上一篇了.")}),$(".zen-page .next-btn").click(function(){if(Service.id<ZEN_ARTICLES.length-1){var e=Service.id+1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有下一篇了.")})}};zen.page.ready(Service)});</script>*/}
Zen.views["example/single-page/toggle.js"] = function() {/*<script>$(function(){var e={ele:"m-type",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},a={ele:"m-status",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},t={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(a)}};zen.page.ready(t)});</script>*/}
Zen.views["example/multi-select/index.js"] = function() {/*<script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};zen.page.ready(l)});</script>*/}
Zen.views["ganlight/blog/article/index.js"] = function() {/*<script>$(function(){var MarkDown={converter:null,init:function(){showdown&&showdown.Converter?this.converter=new showdown.Converter:$(".article-title").html("暂不支持markdown")},rend:function(e,a){if(this.converter&&a){var t=this.converter.makeHtml(a);$(".article-title").html(e.title),$(".markdown-area").html(t).show()}},load:function(article){var self=this,url='Zen.views["markdown/'+article.file+'.md"]',data=zen.parse(eval(url));data&&(data=data.replace(/__block_head__/g,"__block_head__").replace(/__block_foot__/g,"__block_foot__"),self.rend(article,data))},load_file:function(e){var a=this,t="ganlight/blog/"+e.type+"/"+e.file+".md";$.ajax({url:t,type:"get",async:!1,dataType:"html",success:function(t){$(".catalog-area").hide(),$(".markdown-area").show(),a.rend(e,t)},error:function(a){$(".markdown-area").hide(),$(".catalog-area").show(),zen.message.toast("当前文章"+e.file+"不存在，请返回其他文章")}})}},Service={id:0,init:function(){MarkDown.init();var e=this.id=parseInt(zen.url.getPar("id"))||0;ZEN_ARTICLES&&ZEN_ARTICLES[e]?MarkDown.load(ZEN_ARTICLES[e]):window.location.href="#blog/article?id=0",this.bind()},bind:function(){$(".zen-page .pre-btn").click(function(){if(Service.id>0){var e=Service.id-1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有上一篇了.")}),$(".zen-page .next-btn").click(function(){if(Service.id<ZEN_ARTICLES.length-1){var e=Service.id+1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有下一篇了.")})}};zen.page.ready(Service)});</script>*/}
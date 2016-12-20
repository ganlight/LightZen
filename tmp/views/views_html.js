Zen.views.index_html = function() {/*<style>.zen-stack{background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.c-navmenu-banner .title{font-size:1.6rem;color:#FFF}.c-navmenu-banner .menu{cursor:pointer}.c-navmenu-banner>div{position:relative;padding:1.1rem 1.5rem;font-size:2rem}.link-item{height:100px;width:64px;color:#FFF}.link-item i{font-size:2.4rem}.link-item .name{line-height:3rem;font-size:1.4rem}.link-item .white-line{height:.1rem;background:#FFF}.info{margin:65px auto 0;color:#bfbfbf;font-size:1.2rem;text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none}.info a:hover{text-decoration:underline}</style><div class="zen-page v-center"><div class="c-navmenu-banner fix-top"><div class="text-center clearfix"><span class="logo fl"><i class="fa fa-paper-plane fa-fw white"></i><span class="white ml10 font16">ZENJS</span></span> <span class="title white"></span> <span class="fr menu"><i class="fa fa-bars fa-fw white"></i></span></div></div><ul class="link-list"><li class="link-item text-center" v-link="#example/index"><div><i class="fa fa-tree fa-fw white font32"></i></div><div class="name">MODULES</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#blog/catalog"><div><i class="fa fa-bookmark fa-fw white font32"></i></div><div class="name">BLOG</div><div class="white-line"></div></li><li class="link-item text-center" v-link="https://github.com/ganlight/zenjs"><div><i class="fa fa-code fa-fw white"></i></div><div class="name">GITHUB</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#about"><div><i class="fa fa-inbox fa-fw white font32"></i></div><div class="name">ABOUT</div><div class="white-line"></div></li></ul><footer class="info fix-bottom"><p>Zenjs Written by <a href="http://zenjs.cn">ganlight</a></p><p>© 2009-2016 zenjs.cn 版权所有 <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action">粤ICP备16113949号</a></p></footer></div><script>$(function(){var n={init:function(){this.init_sidenav()},init_sidenav:function(){$(".c-navmenu-banner .menu").click(function(){SideNav.toggle("right")}),$(".c-navmenu-banner .logo").click(function(){SideNav.toggle("top")}),$(".c-side-nav .c-ul li").click(function(n){n.preventDefault(),SideNav.close(),zen.url.go($(this).attr("v-link"))})}};zen.page.ready(n)})</script>*/}
Zen.views.example__index_html = function() {/*<style>.index-page .list-item .name{padding-bottom:5px}</style><div class="zen-page index-page"><h2 class="font24 white text-center normal">Zenjs Modules</h2><ul class="page-list" id="page-list"></ul><div class="lh15">&nbsp;</div><div class="page-template hide"><li class="list-item inline c-card clearfix"><div class="font20 name"></div><div class="font16 gray href action"></div></li></div></div><script>$(function(){var pages=[{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"zen.message.alert('Zenjs')"},{name:"toast",action:"zen.message.toast(' A light framwork')"},{name:"confirm",action:"zen.message.confirm('Coding Zen!')"}],Service={init:function(){this.data=pages,this.rend()},rend:function(){for(var e=this,a=pages,t=$(".page-list"),n=0;n<a.length;n++){var i=a[n],l=$(".page-template .list-item").clone();zen.store.data(l,i),zen.template.values(l,i),e.bind(l),t.append(l)}},bind:function(clone){clone.click(function(){var data=zen.store.data(clone);data.href&&(window.location.href=data.href),data.action&&eval(data.action)})}};zen.page.ready(Service)})</script>*/}
Zen.views.about__index_html = function() {/*<style>.zen-page p{margin:1.5rem;font-size:1.6rem;line-height:3rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">ABOUT ZENJS</h2><div class="c-card"><h3>zenjs信息</h3><p>- github地址：https://github.com/ganlight/zenjs.git<br>- 演示地址：https://ganlight.github.io/zenjs<br>- 作者邮箱：ganlight@foxmail.com</p></div><div class="c-card"><h3>特点</h3><p>- 使用简单，只需引入一个js文件，就可以实现页面的模块化，方便便捷<br>- 本框架采用接近与js的方式去些，尽量去除其他的框架所带来的负担，为的的是能让这个工具小巧而灵活。<br>- 大道若简，coding就是这么纯粹就好，像禅Zen一样，无为而有为。<br></p></div><div class="c-card"><h3>库说明</h3><p>- zenjs.min.js 核心代码 (需与zepto或jQuery一起使用)<br>- zenjs-zepto.min.js 是将zepto的包与zenjs核心库打包在一起，页面只需引入这个即可<br>- zenjs-jquery.min.js 是将jquery的包与zenjs核心库打包在一起，页面只需引入这个即可</p></div><div class="c-card"><h3>开发说明</h3><p>###zen目录<br>- zen目录下所有定义模块的目录，每个目录下的模块名为文件夹<br>里面统一为index.css,index.html,index.js<br>###views目录<br>- modules文件夹这里面的每一个控件可以单独打开，可以使用。<br>- 模块划定，module的template部分，css部分，js部分和页面的html，css，js相分离，更加方便构建大型应用<br>###js目录<br>###css目录<br></p></div><div class="c-card"><h3>如何去构建</h3><p>- 通过运行 gulp -sw 就可以生成dist目录，会自动启动一个web服务器</p></div><div class="c-card"><h3>如何排除bug</h3><p>- 在console中输入Zen.current就能看到该页面相关的对象信息了</p></div><div class="c-card"><h3>其他</h3><p>- 虽然js的框架写法有很多做，但个人建议你按照当前简单的方式来，大道若简是我所崇尚的。<br>- 感谢vuejs，weui，zepto，gulp这些优秀的库。</p></div><div class="lh15">&nbsp;</div></div>*/}
Zen.views.focus_time__index_html = function() {/*<style>.zen-page{position:relative;max-width:none;margin:0 auto}.work-area{height:83.33%;position:absolute;width:100%;text-align:center;background:#0ff}.rest-area{height:16.67%;position:absolute;top:83.33%;background:#008b8b;width:100%}.remain-time{font-size:8rem;color:#FFF}</style><div class="zen-page"><div class="work-area v-center"><div class="remain-time"></div></div><div class="rest-area v-center"><div class="task-opt text-center"><span class="start-btn c-btn">开始</span> <span class="stop-btn c-btn">停止</span> <span class="rest-btn c-btn">休息</span></div></div></div><script>console.log("focus time")</script>*/}
Zen.views.front__green_html = function() {/*<style>.bg-green{color:green;font-size:20px;width:80%;height:100px}</style><div class="zen-page"><h2 class="font24 white text-center normal">ZEN PAGE</h2><div class="c-card bg-green v-center">green</div></div><script>console.log("green page")</script>*/}
Zen.views.front__page_html = function() {/*<style>.example-field{font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page example-field" v-script="views/example/js/toggle-group.js"><ul><li><div id="m-type" v-zen="toggle-group"></div></li><br><li><div id="m-status" v-zen="toggle-group"></div></li></ul></div>*/}
Zen.views.front__red_html = function() {/*<style>.bg-red{background:red;font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page bg-red v-center">red</div>*/}
Zen.views.gradients__index_html = function() {/*<style>.zen-page{max-width:none}.card{position:absolute;width:90%;height:90%;background:#FFF;top:5%;left:5%;border-radius:.5rem;transition:all .2s}.bg-info{color:#FFF;margin:1.5rem}.intro-field{position:absolute;width:100%;bottom:30px;text-align:center;margin:0 auto;background:#FFF;padding:15px 0}.intro-logo{width:110px}.intro-text{margin:0;padding:0;font-size:12px;color:#979292;letter-spacing:.03rem}.about-field{position:absolute;background:#FFF;right:0;bottom:50%;color:#564141;height:50px;font-size:1.2rem}.about-field .about-toggle{display:inline-block;width:50px;text-align:center;border-right:1px solid #eee;vertical-align:bottom}.about-field .about-toggle i{display:inline-block;height:16px;width:20px;font-size:16px;padding:17px}.about-field .about-detail{display:inline-block;padding:9px;display:none;transition:all .2s}.on .about-detail{display:inline-block}.info-field{position:absolute;color:#FFF;padding:15px;right:0;top:0;font-size:1.6rem}</style><div class="zen-page"><div class="card"><div class="font24 bg-info lh20"><div class="font16 bold name lh30"></div><div class="font14">color 1 : <span class="color1"></span></div><div class="font14">color 2 : <span class="color2"></span></div></div><div class="intro-field" v-link="http://uigradients.com/"><img class="intro-logo" src="http://uigradients.com/assets/images/logo.png" alt="Ui Gradients"><div class="intro-text">Beautiful color gradients</div></div><div class="about-field"><span class="about-toggle"><i class="fa fa-info fa-fw green"></i> </span><span class="about-detail"><span>A little thing by <a href="http://twitter.com/_ighosh" id="twitter-link" target="_blank">@_ighosh</a></span><br><span>rewrite with zenjs by ganlight</span></span></div></div></div><script>$(function(){var t={ele:null,init:function(){var n=this.ele=$(".card");this.change(),t.reset(n),$(window).resize(function(){t.reset(n)}),this.bind()},reset:function(t,n){if(!n)var n=15;var e=window.innerWidth||document.body&&document.body.clientWidth,i=window.innerHeight||document.body&&document.body.clientHeight;this.width=e-2*n,this.height=i-2*n;var o={width:e-2*n,height:i-2*n,left:n,top:n};t.css(o)},change:function(){var t=zen.gradients,n=parseInt(Math.random()*t.length),e=t[n],i={backgroundColor:e.colors[1],backgroundImage:"linear-gradient(to left, "+e.colors[0]+", "+e.colors[1]+")"};this.ele.find(".name").text(e.name),this.ele.find(".color1").text(e.colors[0]),this.ele.find(".color2").text(e.colors[1]),this.ele.css(i)},bind:function(){this.ele.click(function(){t.change()})}},n={init:function(){t.init(),this.bind()},bind:function(){$(".about-toggle").click(function(t){t.preventDefault(),t.stopPropagation(),$(".about-field").toggleClass("on")})}};zen.page.ready(n)})</script>*/}
Zen.views.todo__index_html = function() {/*<style>.zen-cur{background:#f5f5f5;color:#4d4d4d;max-width:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{outline:medium}.filters a{outline:0;blr:expression(this.onFocus=this.blur())}</style><div class="zen-page"><div class="todoapp"><div class="header"><h1>todos</h1><input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"></div><section class="main"><input class="toggle-all" type="checkbox" v-model="allDone"><ul class="todo-list"></ul></section><footer class="footer" v-show="todos.length" v-cloak><span class="todo-count"><strong class="remaining"></strong> items left</span><ul class="filters"><li><a href="javascript:void(0);" class="selected" filter="">All</a></li><li><a href="javascript:void(0);" filter="active">Active</a></li><li><a href="javascript:void(0);" filter="completed">Completed</a></li></ul><button class="clear-completed">Clear completed</button></footer></div><footer class="info"><p>Double-click to edit a todo</p><p>Zenjs-Todo Written by <a href="http://zenjs.cn">ganlight</a></p><p>Part of <a href="http://evanyou.me">Evan You</a> and <a href="http://todomvc.com">TodoMVC</a></p></footer><div class="page-template hide"><li class="todo-item"><div class="view"><input class="toggle" type="checkbox"><label class="todo-name title"></label><button class="destroy"></button></div><input class="edit" type="text"></li></div></div>*/}
Zen.views.blog__article__index_html = function() {/*<div class="zen-page"><div class="banner-area inline clearfix fix-bottom"><div class="pre-btn span3"><i class="fa fa-arrow-left fa-fw white"></i><span class="white ml5">上一篇</span></div><div class="catalog-type span6 white font16" v-link="#blog/catalog">目录</div><div class="next-btn span3"><span class="white mr5">下一篇</span><i class="fa fa-arrow-right fa-fw white"></i></div></div><h2 class="font24 white text-center normal title"></h2><div class="markdown-area content"></div><div class="catalog-area"></div><div class="page-template hide"><div class="list-item inline c-card clearfix"><div class="font20 title"></div><div class="font16 gray"><span class="type"></span>/<span class="file"></span></div></div></div></div><script v-script="views/blog/config.js"></script>*/}
Zen.views.blog__catalog__index_html = function() {/*<style>.banner-area{line-height:5rem;z-index:101}.banner-area .back-btn{background:currentColor}.banner-area .catalog-area{background:#5f9ea0}.articles-area{padding-top:5rem}.articles-area .article-item{display:block;margin:1rem;background:#f8f8ff;padding:1rem}.articles-area .article-item .title{padding-bottom:5px}.catalog-area .catalog-list{display:none}.mask-on .catalog-list{display:block}</style><div class="zen-page"><div class="banner-area inline clearfix fix-top"><div class="back-btn span4" v-link="#index"><i class="fa fa-paper-plane fa-fw white"></i> <span class="white ml10 font16">ZENJS</span></div><div class="catalog-area span8 white font16"><div class="catalog-title">目录</div><ul class="catalog-list"></ul></div></div><ul class="articles-area"></ul><div class="page-template hide"><div class="article-item"><div class="font20 title"></div><div class="font16 gray"><span class="type"></span>/<span class="file"></span></div></div><div class="catalog-item"><span class="type_name"></span> <span class="type_num"></span></div></div></div><script v-script="views/blog/config.js"></script><script>$(function(){var t={articles:[],types:{},sections:null,map:{},init:function(){ZEN_ARTICLES&&(this.articles=ZEN_ARTICLES,this.pre(),this.rendType(this.types),this.rendArticles(this.articles))},pre:function(){var t=this;if(this.articles&&this.articles.length>0)for(var e=(this.articles.length,this.articles),i=0;i<e.length;i++){var n=e[i];n.id=i,t.types[n.type]||(t.types[n.type]=[]),t.types[n.type].push(n)}},rendType:function(t){var e=this;if(t){var i=$(".catalog-list");for(var n in t){var a=$(".page-template .catalog-item").clone();zen.store.data(a,t[n]),a.find(".type_name").text(n),a.attr("data-type",n),a.find(".type_num").text(t[n].length),e.bindType(a),i.append(a)}}},rendArticles:function(t){var e=this;if(t&&t.length>0){var i=(t.length,t),n=$(".articles-area");n.empty();for(var a=0;a<i.length;a++){var r=i[a],s=$(".page-template .article-item").clone();zen.store.data(s,r),zen.template.values(s,r),e.bindArticle(s),n.append(s)}}},get:function(t,e){var i=this.map[t+"/"+e]||"";return i},bindType:function(t){var e=this;t.click(function(){var t=$(this).attr("data-type");if(t){var i=e.types[t];e.rendArticles(i)}})},bindArticle:function(t){t.click(function(){var e=zen.store.data(t);e&&e.id>-1&&(window.location.href="#blog/article?id="+e.id)})}},e={init:function(){this.data=t,t.init(),this.bind()},bind:function(){$(".catalog-area").click(function(){$(".zen-container").toggleClass("mask-on")})}};zen.page.ready(e)})</script>*/}
Zen.views.example__multi_select__index_html = function() {/*<div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div>*/}
Zen.views.example__toggle_group__index_html = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul><div class="lh30">&nbsp;</div></div><script>$(function(){var e={ele:"m-type",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},a={ele:"m-status",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},t={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(a)}};zen.page.ready(t)})</script>*/}
Zen.views.example__single_page__multi_select_html = function() {/*<style>.zen-page{font-size:1.6rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div><script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};zen.page.ready(l)})</script>*/}
Zen.views.example__single_page__toggle_group_html = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script v-script="views/example/single-page/toggle.js"></script>*/}
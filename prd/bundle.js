/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	var common = __webpack_require__(5);
	
	var html = __webpack_require__(6);
	
	common.render(html);
	
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var common = {
		render: function render(str) {
			var body = document.body;
			body.innerHTML = str + body.innerHTML;
		}
	};
	module.exports = common;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\" id = \"m-index\">	<header>		<ul>			<li class=\"yo-ico\">&#xe611;</li>			<li>				<span class=\"active\">热点</span>				<span>关注</span>			</li>			<li class=\"yo-ico\">&#xe631;</li>		</ul>	</header>	<nav>		<ul>			<li v-on:click=\"changeTab(index)\" :class=\"{active:index==navIndex}\" v-for=\"(item,index) in nav\">{{item}}</li>		</ul>	</nav>	<section>		<div class=\"swiper-container\" id=\"index-swiper\">		  <div class=\"swiper-wrapper\">		    <div class=\"swiper-slide\">				<ul>					<li v-for = \"item in list\">						<i><img v-bind:src=\"item.imgSrc\" alt=\"\"></i>						<b>{{item.title}}</b>					</li>				</ul>		    </div>		    <div class=\"swiper-slide\">slider2</div>		    <div class=\"swiper-slide\">slider3</div>		  </div>		</div>			</section>	<footer>		<ul>			<li class=\"active\">				<i class=\"yo-ico\">&#xe604;</i>				<b>首页</b>			</li>			<li>				<i class=\"yo-ico\">&#x348d;</i>				<b>发现</b>			</li>			<li>				<i class=\"yo-ico\">&#xe713;</i>			</li>			<li>				<i class=\"yo-ico\">&#xe604;</i>				<b>首页</b>			</li>			<li>				<i class=\"yo-ico\">&#xe604;</i>				<b>我的</b>			</li>		</ul>	</footer></div>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	//var Vue = require('../lib/vue.js');
	//var $ = require('../lib/zepto.js');
	//var IScroll = require('../lib/iscroll-probe.js');
	//var Swiper = require('../lib/swiper.js');
	new Vue({
		el: '#m-index',
		data: {
			swiper: null,
	
			navIndex: 0,
	
			nav: ['足球现场', '足球现场', '足球现场'],
			list: []
		},
		methods: {
			changeTab: function changeTab(index) {
				//console.log(0);
				//console.log(this.swiper);
				this.swiper.slideTo(index);
				this.navIndex = index;
			}
		},
		mounted: function mounted() {
			var _this = this;
	
			/*setTimeout(function(){
	  	this.nav[0].title="abc"
	  }.bind(this),3000)*/
	
			fetch('/api/list').then(function (response) {
				return response.json();
			}).then(function (res) {
				//console.log(res)
				var that = _this;
				that.list = res;
				that.swiper = new Swiper('#index-swiper', {
					loop: false,
					onSlideChangeStart: function onSlideChangeStart(swiper) {
						//alert(swiper.activeIndex);
						that.navIndex = swiper.activeIndex;
					}
				});
			}).catch(function (e) {
				return console.log("Oops, error", e);
			});
			//console.log(IScroll)
		}
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
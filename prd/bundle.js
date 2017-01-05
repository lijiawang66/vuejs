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
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _home = __webpack_require__(3);
	
	var _home2 = _interopRequireDefault(_home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(7);
	// var common = require('./scripts/utils/util.common.js');
	//
	// var html = require('./scripts/tpls/index.html')
	//
	// common.render(html);
	//
	// require('./scripts/views/index.js');
	var layout = __webpack_require__(11);
	var common = __webpack_require__(5);
	
	common.render(layout);
	//conponents
	
	//router
	
	var routes = [{
	  path: '/',
	  component: _index2.default,
	  children: [{
	    path: '/',
	    component: _home2.default
	  }]
	}];
	var router = new VueRouter({
	  routes: routes // （缩写）相当于 routes: routes
	});
	var app = new Vue({
	  router: router
	}).$mount('#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(2)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-index",
	    attrs: {
	      "id": "m-index"
	    }
	  }, [_c('router-view'), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', [_c('ul', [_c('li', {
	    staticClass: "active"
	  }, [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("首页")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("㒍")]), _vm._v(" "), _c('b', [_vm._v("发现")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("首页")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("我的")])])])])
	}]}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(4)
	
	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var common = __webpack_require__(5);
	
	module.exports = {
	  data: function () {
	    return {
	      swiper: null,
	
	      navIndex: 0,
	
	      nav: ['足球现场', '足球生活', '足球美女'],
	
	      list: []
	    };
	  },
	
	  methods: {
	    changeTab: function (index) {
	      this.swiper.slideTo(index);
	      //this.navIndex = index;
	    }
	  },
	
	  mounted: function () {
	    fetch('/api/list').then(response => response.json()).then(res => {
	
	      var that = this;
	      that.list = res;
	      that.swiper = new Swiper('#index-swiper', {
	        loop: false,
	        onSlideChangeStart: function (swiper) {
	          that.navIndex = swiper.activeIndex;
	        }
	      });
	
	      common.isAllLoaded('#index-scroll ul', function () {
	        common.scroll(that);
	      });
	    }).catch(e => console.log("Oops, error", e));
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var common = {
			render: function render(str) {
					var body = document.body;
					body.innerHTML = str + body.innerHTML;
			},
			isAllLoaded: function isAllLoaded(scope, cb) {
					var t_img; // 定时器
					var isLoad = true; // 控制变量
	
					// 判断图片加载状况，加载完成后回调
					return isImgLoad(cb);
	
					// 判断图片加载的函数
					function isImgLoad(callback) {
							// 查找所有图片，迭代处理
							$(scope).find('img').each(function () {
									// 找到为0就将isLoad设为false，并退出each
									if (this.height === 0) {
											isLoad = false;
											return false;
									}
							});
							// 为true，没有发现为0的。加载完毕
							if (isLoad) {
									clearTimeout(t_img); // 清除定时器
									// 回调函数
									callback();
									// 为false，因为找到了没有加载完成的图，将调用定时器递归
							} else {
									isLoad = true;
									t_img = setTimeout(function () {
											isImgLoad(callback); // 递归扫描
									}, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
							}
					}
			},
	
			scroll: function scroll(that) {
					var myScroll = new IScroll('#index-scroll', {
							probeType: 3, //每滑动一次侦测位置
							mouseWheel: true
					});
	
					var scrollHeight = 35;
	
					$('.head.hide').removeClass('hide');
					$('.foot.hide').removeClass('hide');
					myScroll.scrollBy(0, -scrollHeight);
	
					var head = $('.head img'),
					    topImgHasClass = head.hasClass('up');
					var foot = $('.foot img'),
					    bottomImgHasClass = head.hasClass('down');
					myScroll.on('scroll', function () {
							var y = this.y,
							    maxY = this.maxScrollY - y;
							if (y >= 0) {
									!topImgHasClass && head.addClass('up');
									return '';
							}
							if (maxY >= 0) {
									!bottomImgHasClass && foot.addClass('down');
									return '';
							}
					});
	
					myScroll.on('scrollEnd', function () {
							if (this.y >= -scrollHeight && this.y < 0) {
									myScroll.scrollTo(0, -scrollHeight);
									head.removeClass('up');
							} else if (this.y >= 0) {
									head.attr('src', '/images/ajax-loader.gif');
									//TODO ajax下拉刷新数据
	
									setTimeout(function () {
											myScroll.scrollTo(0, -scrollHeight);
											head.removeClass('up');
											head.attr('src', '/images/arrow.png');
									}, 100);
							}
	
							var maxY = this.maxScrollY - this.y;
							if (maxY > -scrollHeight && maxY < 0) {
									var self = this;
									myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
									foot.removeClass('down');
							} else if (maxY >= 0) {
									foot.attr('src', '/images/ajax-loader.gif');
									//TODO ajax上拉加载数据
									var self = this;
	
									fetch('/api/more').then(function (response) {
											return response.json();
									}).then(function (res) {
											that.list = that.list.concat(res);
	
											myScroll.refresh();
	
											//myScroll.scrollTo(0, self.y + scrollHeight);
											myScroll.scrollTo(0, self.maxScrollY - 60);
											foot.removeClass('down');
											foot.attr('src', '/images/arrow.png');
									});
							}
					});
			}
	};
	module.exports = common;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_vm._m(0), _vm._v(" "), _c('nav', [_c('ul', _vm._l((_vm.nav), function(item, index) {
	    return _c('li', {
	      class: {
	        active: index == _vm.navIndex
	      },
	      on: {
	        ":click": function($event) {
	          _vm.changeTab(index)
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('section', [_c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "index-swiper"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide",
	    attrs: {
	      "id": "index-scroll"
	    }
	  }, [_c('div', [_vm._m(1), _vm._v(" "), _c('ul', _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('i', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    })]), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.title))])])
	  })), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_vm._v("slider2")]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_vm._v("slider3")])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('ul', [_c('li', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('li', [_c('span', {
	    staticClass: "active"
	  }, [_vm._v("热点")]), _vm._v(" "), _c('span', [_vm._v("关注")])]), _vm._v(" "), _c('li', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载更多...")])])
	}]}

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">  <router-view></router-view></div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
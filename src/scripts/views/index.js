//var Vue = require('../lib/vue.js');
//var $ = require('../lib/zepto.js');
//var IScroll = require('../lib/iscroll-probe.js');
//var Swiper = require('../lib/swiper.js');
var common = require('../utils/util.common.js');
new Vue({
	el:'#m-index',
	data:{
		swiper:null,

		navIndex:0,

		nav:['足球现场','足球现场','足球现场'],
		list:[]
	},
	methods:{
		changeTab:function(index){
			//console.log(0);
			//console.log(this.swiper);
			this.swiper.slideTo(index);
			this.navIndex = index;
		}
	},
	mounted:function(){
		/*setTimeout(function(){
			this.nav[0].title="abc"
		}.bind(this),3000)*/

		fetch('/api/list').then(response => response.json())
		  .then(res =>{
		  	//console.log(res)
		  	var that = this;
		  	that.list = res;
		  	that.swiper = new Swiper('#index-swiper',{
		  		loop:false,
		  		onSlideChangeStart: function(swiper){
			      //alert(swiper.activeIndex);
			      that.navIndex = swiper.activeIndex;
			    }
		  	});

					common.isAllLoaded('#index-scroll ul',function(){
						console.log('all loaded')
					})
					common.scroll(that);

		  })
		  .catch(e => console.log("Oops, error", e));
				//console.log(IScroll)
			}
});

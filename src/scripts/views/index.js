//var Vue = require('../lib/vue.js');
//var $ = require('../lib/zepto.js');
//var IScroll = require('../lib/iscroll-probe.js');
//var Swiper = require('../lib/swiper.js');
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

				setTimeout(function(){
					var myScroll = new IScroll('#index-scroll',{
						probeType:3,//每滑动一次侦测位置
						mouseWheel:true
					});

					var scrollHeight = 35;

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
	                foot.removeClass('down')
	            } else if (maxY >= 0) {
	                foot.attr('src', '/images/ajax-loader.gif');
	                //TODO ajax上拉加载数据
	                var self = this;

	                fetch('/api/more')
	                .then(response => response.json())
	                .then(res => {
	                  that.list = that.list.concat(res);

	                  myScroll.refresh();

	                  myScroll.scrollTo(0, self.y + scrollHeight);
	                  foot.removeClass('down');
	                  foot.attr('src', '/images/arrow.png');
	                })
							}
				  })
				}, 1000);

		  })
		  .catch(e => console.log("Oops, error", e));
				//console.log(IScroll)
			}
});

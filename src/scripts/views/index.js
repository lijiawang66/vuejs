var Vue = require('../lib/vue.js');
var Swiper = require('../lib/swiper.js')
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
		  	})
		  })
		  .catch(e => console.log("Oops, error", e))	
			}
});
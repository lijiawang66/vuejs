<template id="">
  <div class="container">
    <header>
      <ul>
        <li class="yo-ico">&#xe611;</li>
        <li>
          <span class="active">热点</span>
          <span>关注</span>
        </li>
        <li class="yo-ico">&#xe631;</li>
      </ul>
    </header>
    <nav>
      <ul>
        <li @:click="changeTab(index)" :class="{active:index==navIndex}" v-for="(item,index) in nav">{{item}}</li>
      </ul>
    </nav>
    <section>
      <div class="swiper-container" id="index-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" id="index-scroll">
            <div>
              <div class="head hide">
                <img src="/images/arrow.png" width="40" height="40"/>
                <span>下拉刷新...</span>
              </div>
              <ul>
                <li v-for="item in list">
                  <i><img :src="item.imgSrc" /></i>
                  <b>{{item.title}}</b>
                </li>
              </ul>
              <div class="foot hide">
                <img src="/images/arrow.png" width="40" height="40"/>
                <span>上拉加载更多...</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
var common = require('../utils/util.common.js');

 module.exports = {
   data: function () {
     return {
       swiper: null,

       navIndex: 0,

       nav: ['足球现场', '足球生活', '足球美女'],

       list: []
     }
   },

   methods: {
     changeTab: function (index) {
       this.swiper.slideTo(index);
       //this.navIndex = index;
     }
   },

   mounted: function () {
     fetch('/api/list').then(response => response.json())
     .then(res => {

       var that = this;
       that.list = res;
       that.swiper = new Swiper('#index-swiper', {
         loop: false,
         onSlideChangeStart: function(swiper){
           that.navIndex = swiper.activeIndex;
         }
       });

       common.isAllLoaded('#index-scroll ul', function () {
         common.scroll(that);
       })
     })
     .catch(e => console.log("Oops, error", e));
   }
 }
</script>

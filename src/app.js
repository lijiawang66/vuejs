require('./styles/usage/app.scss');
// var common = require('./scripts/utils/util.common.js');
//
// var html = require('./scripts/tpls/index.html')
//
// common.render(html);
//
// require('./scripts/views/index.js');
var layout = require('./scripts/tpls/layout.html');
var common = require('./scripts/utils/util.common.js');

common.render(layout);
//conponents
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";
//router

const routes = [
  {
    path:'/',
    component: index,
    children: [{
        path: '/',
        component:home
    }]
   }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
const app = new Vue({
  router
}).$mount('#app');

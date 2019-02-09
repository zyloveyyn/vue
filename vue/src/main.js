// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MyBread from '@/layout/bread.vue'
import VueQuillEditor from 'vue-quill-editor'
import myaxios from '@/assets/js/myaxios.js'
import moment from 'moment'
import ElTreeGrid from 'element-tree-grid'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.use(myaxios)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
Vue.component(MyBread.name, MyBread)
Vue.component(ElTreeGrid.name,ElTreeGrid)
Vue.filter('dateformat', function(value) {
  return moment(value).format('YYYY-MM-DD hh:mm:ss')
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 
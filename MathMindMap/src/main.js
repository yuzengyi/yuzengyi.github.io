import { createApp, VueElement } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from'./router'
// 引入swiper插件
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
import * as echarts from 'echarts'
const app = createApp(App);
app.config.globalProperties.$echarts = echarts
import './assets/main.css'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
 
import locale from 'element-plus/lib/locale/lang/zh-cn'
createApp(App).use(router).use(ElementPlus, { locale }).mount('#app')

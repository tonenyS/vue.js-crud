import Vue from 'vue';
import VueRouter from 'vue-router';

// ประกาศ Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import FoodList from './components/FoodList.vue';
import CreateFood from './components/CreateFood.vue';
import HomeMain from './components/HomeMain.vue';
import vuetify from './plugins/vuetify';
Vue.use(VueRouter);

// เรียกใช้
Vue.use(VueAxios, axios);

const routes = [
	{
		name: 'FoodList',
		path: '/FM_list',
		component: FoodList,
	},
	{
		name: 'CreateFood',
		path: '/create_FM',
		component: CreateFood,
	},
	{
		name: 'CreateFood',
		path: '/create_FM/:id',
		component: CreateFood,
	},
	{
		name: 'HomeMain',
		path: '/Home_main',
		component: HomeMain,
	},
];

const router = new VueRouter({ mode: 'history', routes: routes });

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	vuetify,
	router,
}).$mount('#app');

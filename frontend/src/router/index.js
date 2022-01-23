import Home from '@/views/Home.vue'

export default [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/Login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/Register',
		name: 'Register',
		component: () => import('../views/Register.vue'),		
	},
	{
		path: '/KatalogTovarov',
		name: 'KatalogTovarov',
		component: () => import('../views/KatalogTovarov.vue'),		
		
	},
	{
		path: '/MoreInfo',
		name: 'MoreInfo',
		component: () => import('../views/MoreInfo.vue'),			
	},
	{
		path: '/OformlenieZakaza',
		name: 'OformlenieZakaza',
		component: () => import('../views/OformlenieZakaza.vue'),			
	},
	{
		path: '/TypPay',
		name: 'TypPay',
		component: () => import('../views/TypPay.vue'),		
	},
	{
		path: '/TypTransportiration',
		name: 'TypTransportiration',
		component: () => import('../views/TypTransportiration.vue'),		
	},
	{
		path: '/Buscket',
		name: 'Buscket',
		component: () => import('../views/Buscket.vue'),		
	},
]





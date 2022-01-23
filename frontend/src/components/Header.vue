<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#">Navbar</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
		<li class="nav-item active">
			<a class="nav-link" href="/">Home <span class="sr-only"></span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/Autorize">Авторизация</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/Register">Регистрация</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/KatalogTovarov">Каталог Товаров</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/Buscket">Корзина</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/OformlenieZakaza">Оформление Заказа</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/TypTransportiration">Тип Доставки</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/TypPay">Тип Оплаты</a>
		</li>
		</ul>
	</div>
	</nav>
</template>


<script>
	import { menuList } from '../constants/menuLinks'
	export default {
		name: 'Header',
		data() {
			return {
				headerMenuList: menuList,
			}
		},
		methods: {
			isActiveClassHadnler(link) {
				return link === this.$route.path ? 'header__isActive' : ''
			},
		},
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
	
</style>

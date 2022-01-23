<template>
	<div>
		<div class="home">
			<Header />
		</div>	
		<div class="home">
			<MainContainer />
		</div>	
	</div>		
</template>

<script>
	// @ is an alias to /src
	
	import MainContainer from '@/components/MainContainer.vue'
	export default {
		name: 'Home',
		components: {
			MainContainer,
		},
	}
</script>

<style lan=scss>


</style>
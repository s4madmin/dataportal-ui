<template>
	<div id="app">
		
		<AppBar/>	
	
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>

		<router-view></router-view>

		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>

		<!-- <Footer/> -->
		
	</div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
// import Footer from './components/Footer.vue'

export default {
	name: 'app',
	components: {
		AppBar,
		// Footer,
	}
}
</script>

<style scoped>

</style>
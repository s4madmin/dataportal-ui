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
		
	</div>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
	name: 'app',
	components: {
		AppBar,
	}
}
</script>

<style scoped>

</style>
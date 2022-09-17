<template>
	<h3>Hey</h3>
<!--	<button type="button" @click="age++">Update Age</button>-->
	<greeting :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB" />
	<user :age="age" />
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
	name: 'App',
	components: {
		User,
		Greeting
	},
	data() {
		return {
			age: 20
		}
	},
	methods: {
		updateAge(num) {
			this.age += num;
		},
		updateAgeCB(num) {
			this.age += num;
		}
	}
}
</script>

<style scoped>
</style>

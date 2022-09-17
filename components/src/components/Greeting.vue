<template>
	<button type="button" @click="onClickAge">Update Age Event</button>
	<button type="button" @click="ageChangeFn(3)">Update Age CB</button>
	<p v-if="age > 25">{{ message }}</p>
	<p v-else>You must be 25 year or older to view this message</p>
	<p>{{ ageDoubled }}</p>
</template>

<script>
export default {
	name: "Greeting",
	emits: ['age-change'],
	props: {
		age: {
			type: Number,
			required: true
		},
		ageChangeFn: Function
	},
	data() {
		return {
			message: 'Hello World!'
		}
	},
	computed: {
		ageDoubled() {
			return this.age * 2;
		}
	},
	methods: {
		onClickAge() {
			this.$emit('age-change', 3);
		}
	}
}
</script>

<style lang="scss" scoped>
p {
	color: darken(pink, 15%);
}
</style>
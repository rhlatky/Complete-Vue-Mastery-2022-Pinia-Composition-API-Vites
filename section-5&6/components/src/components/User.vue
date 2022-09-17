<template>
	<p> The user is {{ age }} years old.</p>
</template>

<script>
export default {
	name: "User",
	props: {
		age: {
			type: Number,
			required: true
		}
	}
}
</script>

<style scoped>

</style>
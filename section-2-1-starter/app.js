const vm = Vue.createApp({
	data() {
		return {
			firstName: 'John',
			middleName: '',
			lastName: 'Sturgis',
			url: 'https://google.com',
			raw_url: '<a :href="https://google.com" target="_blank">Google</a>',
			age: 20
		}
	},
	methods: {
		increment() {
			this.age++
		},
		updateLastName(message, event) {
			console.log(message)
			this.lastName = event.target.value
		},
		updateMiddleName(event) {
			this.middleName = event.target.value
		}
	},
	computed: {
		fullName() {
			return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
		}
	},
	watch: {
		age(newVal, oldVal) {
			setTimeout(() => {
				this.age = 20
			}, 3000)
		}
	}
}).mount('#app');

// setTimeout(() => {
// 	vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
// 	data() {
// 		return {
// 			firstName: 'Sheldon',
// 			lastName: 'Cooper',
// 		}
// 	}
// }).mount('#app1');
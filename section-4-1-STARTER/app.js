let vm = Vue.createApp({
  beforeCreate() {
    console.log('before create ', this.message)
  },
  created() {
    console.log('created ', this.message)
  },
  beforeMount() {
    console.log('before mount ', this.$el)
  },
  mounted() {
    console.log('mounted ', this.$el)
  },
  beforeUpdate() {
    console.log('before update ')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('before unmount')
  },
  unmounted() {
    console.log('unmounted')
  }
})

vm.component('hello', {
  template: '<h1>{{ message }}</h1>',
  data() {
    return {
      message: 'hello-world'
    }
  }
})

vm.mount('#app')
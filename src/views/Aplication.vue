<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Application   />
  
  </div>
 
</template>

<script>
// @ is an alias to /src
import Application from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    Application
  },
  data() {
    return {
      likes: 10
    }
  },
  methods: {

  },
}
</script>

<style >
 

</style>

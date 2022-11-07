<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <MyInput   v-model="post.title" placeholder="название" v-focus/>
    <MyInput   v-model="post.body" type="text" placeholder="описание"/>
    <MyButton @click="createPost">Создать</MyButton>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}

</script>


<style scoped>


.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>
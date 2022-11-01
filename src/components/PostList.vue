<template>
     <div class="post" v-for="post in posts">
      <div class="post_head"><strong>Название:</strong> {{ post.title }}</div>
      <div class="post_body"><strong>Описание:</strong>{{ post.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }

}

</script>


<style scoped>

.post {

border: solid 1px #42b983;
max-width: 70%;
margin: 10px auto;
padding: 10px 0;
}

</style>
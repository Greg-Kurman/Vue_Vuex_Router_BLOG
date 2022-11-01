<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
     <PostForm/>
     <PostList  :posts="posts"/>
    </div>
   
 

  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: 'описание поста' },
        { id: 2, title: "JavaScript 2 ", body: 'описание поста 2 ' },
        { id: 3, title: "JavaScript 3 ", body: 'описание поста 3 ' },
      ],
      title: '',
      body: ''
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    CreatePost(){
        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }
        this.posts.push(newPost)
        this.title = ''
        this.body = ''
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}




</style>

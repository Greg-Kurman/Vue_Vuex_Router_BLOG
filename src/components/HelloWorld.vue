<template>
  <div class="hello">
      <h1>Страница с постами</h1>

      <div >
        <MyButton @click="fetchPosts">Получить посты с сервера</MyButton>
      <MyButton @click="showDialog"  >Создать пост</MyButton>
        <MySelect class="app_select"  v-model="selectedSort" :options="sortOptions"></MySelect>

      </div>

     
    <MyDialog v-model:show="dialogVisible">
     <PostForm  @create="createPost" />
       
    </MyDialog>
    <div >
     <PostList  :posts="posts"  @remove="removePost"  v-if="!isPostsLoading"/>
     <h3 v-else>Идет загрузка ...</h3>
    </div>
   
 

  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios'

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
      {value: 'title' , name : 'По названию'},
      {value: 'body' , name : 'По содержанию'},
      ]
    }
  },
  name: 'HelloWorld',
  methods: {
    createPost(post){
        this.posts.push(post)
        this.dialogVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        setTimeout( async ()=>{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
        this.isPostsLoading = false
        }, 1000)
        
      } catch (e) {
        alert('Error', e)
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
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


.app_select {
  
  padding: 10px 20px;
  
}

</style>

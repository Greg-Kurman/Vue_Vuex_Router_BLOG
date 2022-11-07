<template>
  <div class="hello">
    <h1>Страница с постами</h1>
    <MyInput v-model="searchQuery" v-focus placeholder="Поиск..."></MyInput>
    <div>
      <MyButton @click="fetchPosts" >Получить посты с сервера</MyButton>
      <MyButton @click="showDialog" >Создать пост</MyButton>
      <MySelect class="app_select" v-model="selectedSort" :options="sortOptions"></MySelect>

    </div>


    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />

    </MyDialog>
    <div>
      <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
      <h3 v-else>Идет загрузка ...</h3>
      <div class="page__wrapper">
        <div v-for="pageNum in totalPage" :key="pageNum" class="page" :class="{ 'current_page': page === pageNum }" @click="changePage(pageNum)">{{ pageNum
        }}
        </div>
      </div>

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
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' },
      ]
    }
  },
  name: 'HelloWorld',
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    changePage(pageNum){
        this.page = pageNum
        this.fetchPosts()
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data
          this.isPostsLoading = false
        }, 100)

      } catch (e) {
        alert('Error', e)
      }
    }

  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(this.selectedSort)
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    page(){
      this.fetchPosts()
    }
  },


}
</script>

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

.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;

}

.page {
  border: 1px solid black;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 0 2px;
}

.current_page {
  border: 1px solid  #42b983;
  padding: 15px 10px;
  border-radius: 5px;
}
</style>

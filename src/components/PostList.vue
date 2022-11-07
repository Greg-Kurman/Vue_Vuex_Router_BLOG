<template>
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="user-list">
            <postItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
        </transition-group>
    </div>
    <h2 v-else >
        Список постов пуст
    </h2>
</template>

<script>
import postItem from '@/components/PostItem.vue'

export default {
    components: { postItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }

}

</script>


<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.5s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
    transition: transform 0.5s ease;
}
</style>
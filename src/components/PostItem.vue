<template>
    <div class="post" >
        <div>
            <div class="post_num"> ID:{{post.id}}</div>
            <div class="post_head"><strong>Название:</strong> {{ post.title }}</div>
            <div class="post_body"><strong>Описание:</strong>{{ post.body }}</div>
        </div>
        <div class="post_btns">
            <MyButton @click="$emit('remove', post)" >Удалить</MyButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>


<style>
.post {

border: solid 1px #42b983;
max-width: 70%;
margin: 10px auto;
padding: 20px 10px;
display: flex;
align-items: center;
justify-content: space-between;
}

.post_num {
    margin: -5px 0 0 0 ;
    padding: 0 0 5px 0;
}


</style>
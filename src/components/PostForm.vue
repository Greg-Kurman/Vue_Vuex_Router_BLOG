<template>
     <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <input class="input" :value="title"  @input="title = $event.target.value" placeholder="название">
        <input class="input" :value="body" @input="body = $event.target.value" type="text" placeholder="описание">
        <button class="btn"  >Создать</button>
      </form>
</template>

<script>
export default {
    
}

</script>


<style scoped>

 

.input {
  width: 80%;
  border: 1px solid #42b983;
  padding: 10px 15px;
  margin-top: 5px
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  align-self: flex-end;
  margin: 20px 100px;
  border: 1px solid #42b983;
  background-color: #42b983;
  border-radius: 5px;
  padding: 10px 15px;
}
</style>
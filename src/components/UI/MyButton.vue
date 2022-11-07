<template>
<button class="btn" style="margin: 10px">
        <slot></slot>
</button>

</template>

<script>
export default {
    name: 'MyButton'
}

</script>


<style  >
.btn {
  align-self: flex-end;
  border: 1px solid #42b983;
  background-color: #42b983;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
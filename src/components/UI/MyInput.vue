<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        modelValue: [Number, String]
    },
    methods: {
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}

</script>

<style>
.input {
    width: 80%;
    border: 1px solid #42b983;
    padding: 10px 15px;
    margin-top: 5px;
    cursor: pointer;
}
</style>
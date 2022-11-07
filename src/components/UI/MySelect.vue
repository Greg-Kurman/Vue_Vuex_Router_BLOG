<template>
    <select v-model="modelValue" @change="changeOption" class="select">
        <option disabled value="">Сортировка постов по: </option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>

</template>


<script>

export default {
    name: 'MySelect',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }

}

</script>


<style>
.select {
    border: 1px #42b983 solid ;
    cursor: pointer;
}

</style>
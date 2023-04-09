<template>
    <div>
        <input class="lcl-input" type="text" :value="modelValue" :placeholder="placeholder" @input="input">
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'lclInput',
});
</script>
<script setup>
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
    placeholder: {
        type: String,
        default: 'placeholder'
    },
    modelValue: {
        type: String || Number,
        default: 'placeholder'
    }
})

const input = (e) => {
    emit("update:modelValue", e.target.value)
}


</script>

<style lang="scss" scoped>
.lcl-input {
    border: 1px solid black;
}
</style>
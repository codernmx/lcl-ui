<template>
    <div>
        <button class="my-button">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "lButton"
}
</script>
<script setup>

</script>

<style lang="scss" scoped>
.my-button {
    height: 50px;
    border-radius: 10px;
    color: red;
}
</style>
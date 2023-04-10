<script setup>
import Message from '../index'
import { onMounted } from "vue";
const openMessage = (type) => {
    Message({ type, str: `this is a ${type} message !` })
}

</script>

<template>
    <div style="display: flex;justify-content: space-between;">
        <lcl-button type="success" @click="openMessage('success')">success消息</lcl-button>
        <lcl-button type="warning" @click="openMessage('warning')">warning消息</lcl-button>
        <lcl-button type="success" @click="openMessage('error')">error消息</lcl-button>
        <lcl-button type="success" @click="openMessage('info')">info消息</lcl-button>
    </div>
</template>

<style scoped></style>

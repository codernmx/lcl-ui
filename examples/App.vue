<script setup>
import Message from '../packages/message/index'
import {onMounted} from "vue";

onMounted(() => {});

const openMessage = (type) => {
  Message({type, str: "我是提示框"})
}

</script>

<template>
  <div>
    <lcl-divider>我是分割线</lcl-divider>
  </div>
</template>

<style scoped></style>

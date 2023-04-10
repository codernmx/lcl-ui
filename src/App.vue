<script setup>
import Message from '../packages/message/index'
import { onMounted } from "vue";
onMounted(() => {
  // 	直接调用方法名即可
  //	参数type对于组件中设置好的不同状态
  //	参数str对应消息提示文本
  Message({ type: "success", str: "我是提示框" })
});

const openMessage = (type) => {
  Message({ type, str: "我是提示框" })
}

</script>

<template>
  <lcl-button type="success" @click="openMessage('success')">success</lcl-button>
  <lcl-button type="warning" @click="openMessage('warning')">warning</lcl-button>
  <lcl-button type="success" @click="openMessage('error')">error</lcl-button>
  <lcl-button type="success" @click="openMessage('info')">info</lcl-button>
</template>

<style scoped></style>

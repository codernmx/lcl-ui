<script setup>
import Message from '../packages/Message/index'
import { onMounted } from "vue";
onMounted(() => {
  // 	直接调用方法名即可
  //	参数type对于组件中设置好的不同状态
  //	参数str对应消息提示文本
  Message({ type: "success", str: "我是提示框" })
});

const openMessage = () => {
  Message({ type: "success", str: "我是提示框" })
}

</script>

<template>
  <lcl-button />
  <lcl-input></lcl-input>

  <lcl-button type="success" @click="openMessage">打开提示消息</lcl-button>
</template>

<style scoped></style>

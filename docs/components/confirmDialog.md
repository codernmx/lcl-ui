::: demo
```vue
<template>
    <el-button @click="authVisible=true" type="primary">打开弹窗</el-button>
    <lcl-confirm-dialog v-if="authVisible" title="我是标题" @close="authVisible = false" @submit="authVisible = false">
    </lcl-confirm-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'accordion',
  setup() {
    const authVisible = ref(false);
    return {
     authVisible
    };
  },
});
</script>
```
:::